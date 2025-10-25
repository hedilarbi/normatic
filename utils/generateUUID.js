import { randomUUID } from "crypto";
export function generateUUID() {
  // prefer native crypto.randomUUID when available
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }

  try {
    if (typeof randomUUID === "function") return randomUUID();
  } catch (e) {
    console.error("Failed to generate UUID:", e);
  }

  // RFC4122 v4 fallback
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
