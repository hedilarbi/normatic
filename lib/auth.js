// lib/auth.js
import { cookies } from "next/headers";
import { adminAuth } from "./firebaseAdmin";

const COOKIE_NAME = process.env.SESSION_COOKIE_NAME || "__session";

export async function getSessionToken() {
  const store = await cookies();
  return store.get(COOKIE_NAME)?.value || null;
}

export async function verifySessionCookie() {
  const token = await getSessionToken();
  if (!token) return null;
  try {
    // true => also check token revocation
    const decoded = await adminAuth.verifySessionCookie(token, true);
    return decoded;
  } catch {
    return null;
  }
}

export async function getCurrentUser() {
  const decoded = await verifySessionCookie();
  if (!decoded) return null;
  return { uid: decoded.uid, email: decoded.email || null, claims: decoded };
}
