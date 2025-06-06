import { NextResponse } from "next/server";
import { loadExcel } from "@/lib/data";
import type { DeputyRow } from "@/lib/types";

export async function GET() {
  const data = await loadExcel<DeputyRow>("105-depute.xlsx");

  const formatted = data.map((d) => ({
    title: d.person_title,
    name: d.name,
    firstname: d.firstname,
    birth_date: d.birth_date,
    start_date: d.start_date,
    political_group: d.political_group,
    political_party: d.political_party,
    address: d.adr_formated,
    phone: d.phone_ext,
    mobile: d.mobile,
    email: d.email,
  }));

  return NextResponse.json(formatted);
}
