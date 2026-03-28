import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { pin } = await request.json();
  const correctPin = process.env.PRESENTATION_PIN;

  if (!correctPin || pin === correctPin) {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "Invalid PIN" }, { status: 401 });
}
