// app/api/deputy/photos/route.ts
import { NextResponse } from "next/server";
import photos from "@/db/deputy-photos.json";

export async function GET() {
  return NextResponse.json(photos);
}
