import { NextResponse } from "next/server";

export const runtime = "nodejs";

const COOKIE_NAME = process.env.SESSION_COOKIE_NAME || "__session";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: true,
    path: "/",
    sameSite: "lax",
    maxAge: 0,
  });
  return res;
}
