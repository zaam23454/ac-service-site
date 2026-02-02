import fs from "fs";
import path from "path";
import { Lead } from "./types";

const dataDir = path.join(process.cwd(), "data");
const leadsFile = path.join(dataDir, "leads.json");

function ensureStore() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(leadsFile)) fs.writeFileSync(leadsFile, "[]", "utf-8");
}

export function readLeads(): Lead[] {
  ensureStore();
  const raw = fs.readFileSync(leadsFile, "utf-8");
  try {
    return JSON.parse(raw) as Lead[];
  } catch {
    return [];
  }
}

export function addLead(lead: Lead) {
  ensureStore();
  const current = readLeads();
  current.unshift(lead);
  fs.writeFileSync(leadsFile, JSON.stringify(current, null, 2), "utf-8");
}
