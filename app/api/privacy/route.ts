import { privacyTerms } from "@/legals";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ content: privacyTerms });
}
