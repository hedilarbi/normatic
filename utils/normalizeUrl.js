export function normalizeUrl(url) {
  try {
    const u = new URL(url);
    u.hash = "";
    return u.toString().replace(/\/+$/, "");
  } catch {
    // si l’utilisateur entre "example.com", tenter d’ajouter https://
    try {
      const u2 = new URL(`https://${url}`);
      u2.hash = "";
      return u2.toString().replace(/\/+$/, "");
    } catch {
      return null;
    }
  }
}
