import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebaseAdmin";

export const runtime = "nodejs"; // important for firebase-admin

const COOKIE_NAME = process.env.SESSION_COOKIE_NAME || "__session";
const MAX_AGE = Number(process.env.SESSION_MAX_AGE_MS || 432000000); // 5 days

export async function POST(req) {
  try {
    const { idToken } = await req.json();
    if (!idToken) {
      return NextResponse.json({ error: "Missing idToken" }, { status: 400 });
    }

    const sessionCookie = await adminAuth.createSessionCookie(idToken, {
      expiresIn: MAX_AGE,
    });

    const res = NextResponse.json({ ok: true });
    res.cookies.set(COOKIE_NAME, sessionCookie, {
      httpOnly: true,
      secure: true,
      path: "/",
      sameSite: "lax",
      maxAge: Math.floor(MAX_AGE / 1000),
    });
    return res;
  } catch (e) {
    console.error("Error creating session cookie:", e);
    return NextResponse.json(
      { error: "Failed to create session" },
      { status: 401 }
    );
  }
}
