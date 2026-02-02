import { NextResponse } from "next/server";
import { addLead, readLeads } from "@/lib/fileDb";
import { Lead } from "@/lib/types";

function json(data: unknown, status = 200) {
  return NextResponse.json(data, { status });
}

function isValidPhone(phone: string) {
  const cleaned = phone.replace(/[^\d+]/g, "");
  return cleaned.length >= 10 && cleaned.length <= 16;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name || "").trim();
    const phone = String(body?.phone || "").trim();
    const area = String(body?.area || "").trim();
    const serviceType = String(body?.serviceType || "").trim();
    const acType = String(body?.acType || "").trim();
    const tonnage = String(body?.tonnage || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || name.length < 2) return json({ error: "Name is required." }, 400);
    if (!phone || !isValidPhone(phone)) return json({ error: "Valid phone is required." }, 400);
    if (!area) return json({ error: "Area is required." }, 400);

    const allowedService = ["Repair","Installation","Service","Gas Refill","Shifting","Inspection"];
    const allowedAcType = ["Inverter","Non-Inverter","Not sure"];
    const allowedTon = ["1 Ton","1.5 Ton","2 Ton","Not sure"];

    if (!allowedService.includes(serviceType)) return json({ error: "Invalid service type." }, 400);
    if (!allowedAcType.includes(acType)) return json({ error: "Invalid AC type." }, 400);
    if (!allowedTon.includes(tonnage)) return json({ error: "Invalid tonnage." }, 400);

    const lead: Lead = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      name,
      phone,
      area,
      serviceType: serviceType as Lead["serviceType"],
      acType: acType as Lead["acType"],
      tonnage: tonnage as Lead["tonnage"],
      message: message ? message.slice(0, 800) : undefined,
    };

    addLead(lead);
    return json({ ok: true, leadId: lead.id }, 201);
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
}

export async function GET() {
  const leads = readLeads();
  return json({ leads });
}
