import { NextResponse } from "next/server";

function json(data: unknown, status = 200) {
  return NextResponse.json(data, { status });
}

function isValidPhone(phone: string) {
  const cleaned = phone.replace(/[^\d+]/g, "");
  return cleaned.length >= 10 && cleaned.length <= 16;
}

export async function POST(req: Request) {
  try {
    //Robust body parsing (works reliably on Vercel + local)
    const raw = await req.text();
    let body: any = {};
    try {
      body = raw ? JSON.parse(raw) : {};
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

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

    const allowedService = ["Repair", "Installation", "Service", "Gas Refill", "Shifting", "Inspection"];
    const allowedAcType = ["Inverter", "Non-Inverter", "Not sure"];
    const allowedTon = ["1 Ton", "1.5 Ton", "2 Ton", "Not sure"];

    if (!allowedService.includes(serviceType)) return json({ error: "Invalid service type." }, 400);
    if (!allowedAcType.includes(acType)) return json({ error: "Invalid AC type." }, 400);
    if (!allowedTon.includes(tonnage)) return json({ error: "Invalid tonnage." }, 400);

    const WEBAPP_URL = process.env.SHEETS_WEBAPP_URL;
    const TOKEN = process.env.LEADS_TOKEN;

    if (!WEBAPP_URL || !TOKEN) {
      return json({ error: "Server not configured (missing SHEETS_WEBAPP_URL/LEADS_TOKEN)." }, 500);
    }

    // Send lead to Google Apps Script (Google Sheet)
    const res = await fetch(`${WEBAPP_URL}?token=${encodeURIComponent(TOKEN)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        area,
        serviceType,
        acType,
        tonnage,
        message: message ? message.slice(0, 800) : "",
        source: "vercel",
      }),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok || !data?.ok) {
      return json({ error: "Failed to save lead to Google Sheets." }, 500);
    }

    return json({ ok: true }, 201);
  } catch (err: any) {
    // helpful for Vercel logs
    console.error("POST /api/leads error:", err);
    return json({ error: "Invalid request In The End." }, 400);
  }
}