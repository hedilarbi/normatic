// app/api/me/route.js
import { NextResponse } from "next/server";
import { verifySessionCookie } from "@/lib/auth";

export const runtime = "nodejs";

export async function GET() {
  const decoded = await verifySessionCookie();
  if (!decoded) return NextResponse.json({ user: null }, { status: 200 });

  return NextResponse.json({
    user: { uid: decoded.uid, email: decoded.email || null },
  });
}
