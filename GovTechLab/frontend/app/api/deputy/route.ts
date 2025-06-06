// app/api/deputy/route.ts

import { NextRequest, NextResponse } from "next/server";
import {
  normalize,
  generateNameVariations,
  isDeputyMatch,
  loadExcel
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
  if (!name) return NextResponse.json({ error: "Name is required" }, { status: 400 });

  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");
  if (!firstName || !lastName) {
    return NextResponse.json({ error: "Full name required" }, { status: 400 });
  }

  const nameVariations = generateNameVariations(lastName, firstName);

  const [
    dataDeputies,
    dataPresence,
    dataVotes,
    dataLaws
  ] = await Promise.all([
    loadExcel<DeputyRow>("105-depute.xlsx"),
    loadExcel<PresenceRow>("107-presence-seance-publique.xlsx"),
    loadExcel<VoteRow>("109-votes.xlsx"),
    loadExcel<LawRow>("112-texte-loi.xlsx"),
  ]);

  // Verifica presença pelo nome completo
  const matchedPresence = dataPresence.filter((row) => isDeputyMatch(row, nameVariations));
  if (matchedPresence.length === 0) {
    return NextResponse.json({ error: "Deputy not found" }, { status: 404 });
  }

  const ref = matchedPresence.find((r) => r.political_party || r.political_group);
  const party = ref?.political_party || "Not informed";
  const group = ref?.political_group || null;

  const presenceStats = { present: 0, excused: 0, foreign_mission: 0, absent: 0 };
  matchedPresence.forEach((r) => {
    const s = normalize(r.meeting_presence);
    if (presenceStats[s as keyof typeof presenceStats] !== undefined) {
      presenceStats[s as keyof typeof presenceStats]++;
    }
  });

  const matchedVotes = dataVotes.filter((row) => isDeputyMatch(row, nameVariations));
  const voteStats = matchedVotes.reduce(
    (acc, v) => {
      const res = normalize(v.vote_result);
      if (res === "oui") acc.oui++;
      else if (res === "non") acc.non++;
      else if (res === "abstention") acc.abstention++;
      return acc;
    },
    { oui: 0, non: 0, abstention: 0 }
  );

  const matchedLaws = dataLaws.filter((row) => {
    const authors = normalize(row.law_authors || "");
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
    start_date: deputyInfo?.start_date || null,
    political_group: group,
    political_party: party,
    presence: {
      total: matchedPresence.length,
      status: presenceStats,
      sessions: matchedPresence.map((p: PresenceRow) => ({
        date: p.meeting_date,
        session: p.meeting_number,
        status: p.meeting_presence,
      })),
    },
    laws: {
      total: matchedLaws.length,
      details: matchedLaws.map((p: LawRow) => ({
        title: p.law_title,
        status: p.law_status,
        authors: p.law_authors,
      })),
    },
    votes: {
      total: matchedVotes.length,
      stats: voteStats,
      details: matchedVotes.map((v: VoteRow) => ({
        date: v.meeting_date,
        vote_name: v.vote_name,
        result: v.vote_result,
      })),
    },
    vi_laws: {
      total: matchedLawsVi.length,
      details: matchedLawsVi.map((p: LawRow) => ({
        number: p.law_number,
        type: p.law_type,
        deposit_date: p.law_deposit_date,
        evacuation_date: p.law_evacuation_date,
        status: p.law_status,
        title: p.vi,
        content: p.law_content,
        authors: p.law_authors,
      })),
    },
  });
}
