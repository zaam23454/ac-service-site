import { headers } from "next/headers";

export function requireBasicAuth(): boolean {
  const user = process.env.ADMIN_USER || "";
  const pass = process.env.ADMIN_PASS || "";
  if (!user || !pass) return false;

  const h = headers();
  const auth = h.get("authorization") || "";
  if (!auth.startsWith("Basic ")) return false;

  const b64 = auth.replace("Basic ", "").trim();
  let decoded = "";
  try {
    decoded = Buffer.from(b64, "base64").toString("utf-8");
  } catch {
    return false;
  }
  const [u, p] = decoded.split(":");
  return u === user && p === pass;
}
