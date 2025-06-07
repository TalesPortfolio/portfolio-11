import { NextResponse } from "next/server";
import { loadExcel } from "@/lib/data";
import type { DeputyRow } from "@/lib/types";

export async function GET() {
  const data = await loadExcel<DeputyRow>("105-depute.xlsx");

const formatted = data.map((d) => ({
  title: d.personTitle,
  name: d.name,
  firstname: d.firstname,
  birth_date: d.birthDate,
  start_date: d.startDate,
  political_group: d.politicalGroup,
  political_party: d.politicalParty,
  address: d.adrFormated,
  phone: d.phoneExt,
  mobile: d.mobile,
  email: d.email,
}));


  return NextResponse.json(formatted);
}
