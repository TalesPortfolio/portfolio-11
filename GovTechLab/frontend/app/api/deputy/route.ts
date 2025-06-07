import { NextRequest, NextResponse } from "next/server";
import { cachedData } from "@/lib/jsonCache";
import {
  normalize,
  generateNameVariations,
  isDeputyMatch
} from "@/lib/data";
import type {
  DeputyRow,
  PresenceRow,
  VoteRow,
  LawRow
} from "@/lib/types";
import photoMap from "@/db/deputy-photos.json";

export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get("name")?.trim();
  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");
  if (!firstName || !lastName) {
    return NextResponse.json({ error: "Full name required" }, { status: 400 });
  }

  const nameVariations = generateNameVariations(lastName, firstName);

  const dataDeputies = cachedData.deputies as DeputyRow[];
  const dataPresence = cachedData.presence as PresenceRow[];
  const dataVotes = cachedData.votes as VoteRow[];
  const dataLaws = cachedData.laws as LawRow[];

  const matchedPresence = dataPresence.filter((row) =>
    isDeputyMatch(row, nameVariations)
  );
  if (matchedPresence.length === 0) {
    return NextResponse.json({ error: "Deputy not found" }, { status: 404 });
  }

  const ref = matchedPresence.find((r) => r.politicalParty || r.politicalGroup);
  const party = ref?.politicalParty || "Not informed";
  const group = ref?.politicalGroup || null;

  const presenceStats = {
    present: 0,
    excused: 0,
    foreign_mission: 0,
    absent: 0,
  };

  matchedPresence.forEach((r) => {
    const s = normalize(r.meetingPresence);
    if (presenceStats[s as keyof typeof presenceStats] !== undefined) {
      presenceStats[s as keyof typeof presenceStats]++;
    }
  });

  const matchedVotes = dataVotes.filter((row) =>
    isDeputyMatch(row, nameVariations)
  );
  const voteStats = matchedVotes.reduce(
    (acc, v) => {
      const res = normalize(v.voteResult);
      if (res === "oui") acc.oui++;
      else if (res === "non") acc.non++;
      else if (res === "abstention") acc.abstention++;
      return acc;
    },
    { oui: 0, non: 0, abstention: 0 }
  );

  const matchedLaws = dataLaws.filter((row) => {
    const authors = normalize(row.lawAuthors || "");
    return nameVariations.some((v) => authors.includes(v));
  });

  const matchedLawsVi = dataLaws.filter((row) => {
    const vi = normalize(row.vi || "");
    return nameVariations.some((v) => vi.includes(v));
  });

  const fullName = normalize(`${firstName} ${lastName}`);
  const photoEntry = photoMap.find((d) => normalize(d.name) === fullName);
  const imageUrl = photoEntry?.img || null;

  const deputyInfo = dataDeputies.find(
    (d: DeputyRow) =>
      normalize(d.name) === normalize(lastName) &&
      normalize(d.firstname) === normalize(firstName)
  );

  return NextResponse.json({
    name: lastName,
    firstname: firstName,
    photo: imageUrl,
    startDate: deputyInfo?.startDate || null,
    politicalGroup: group,
    politicalParty: party,
    presence: {
      total: matchedPresence.length,
      status: presenceStats,
      sessions: matchedPresence.map((p: PresenceRow) => ({
        date: p.meetingDate,
        session: p.meetingNumber,
        status: p.meetingPresence,
      })),
    },
    laws: {
      total: matchedLaws.length,
      details: matchedLaws.map((p: LawRow) => ({
        title: p.lawTitle,
        status: p.lawStatus,
        authors: p.lawAuthors,
      })),
    },
    votes: {
      total: matchedVotes.length,
      stats: voteStats,
      details: matchedVotes.map((v: VoteRow) => ({
        date: v.meetingDate,
        voteName: v.voteName,
        result: v.voteResult,
      })),
    },
    vi_laws: {
      total: matchedLawsVi.length,
      details: matchedLawsVi.map((p: LawRow) => ({
        number: p.lawNumber,
        type: p.lawType,
        depositDate: p.lawDepositDate,
        evacuationDate: p.lawEvacuationDate,
        status: p.lawStatus,
        title: p.vi,
        content: p.lawContent,
        authors: p.lawAuthors,
      })),
    },
  });
}
