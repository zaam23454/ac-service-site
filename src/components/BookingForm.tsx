"use client";

import { useMemo, useState } from "react";

type Status = { type: "idle" } | { type: "ok"; msg: string } | { type: "err"; msg: string };

export default function BookingForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [loading, setLoading] = useState(false);

  const serviceOptions = useMemo(
    () => ["Repair", "Installation", "Service", "Gas Refill", "Shifting", "Inspection"],
    []
  );
  const acTypeOptions = useMemo(() => ["Inverter", "Non-Inverter", "Not sure"], []);
  const tonOptions = useMemo(() => ["1 Ton", "1.5 Ton", "2 Ton", "Not sure"], []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: "idle" });
    setLoading(true);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries()) as Record<string, string>;

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data: any = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        data = {};
      }

      if (!res.ok) {
        setStatus({ type: "err", msg: data?.error || `Request failed (${res.status})` });
        return;
      }

      setStatus({ type: "ok", msg: "Booked! We’ll contact you shortly." });
      form.reset();

      // Redirect to WhatsApp after success
      const wa = process.env.NEXT_PUBLIC_WHATSAPP || "923082310366";
      const msg = encodeURIComponent(
        `Hi! I want to book AC service.\n` +
          `Name: ${payload.name}\n` +
          `Phone: ${payload.phone}\n` +
          `Area: ${payload.area}\n` +
          `Service: ${payload.serviceType}\n` +
          `AC Type: ${payload.acType}\n` +
          `Tonnage: ${payload.tonnage}\n` +
          `Issue: ${payload.message || "N/A"}`
      );

      setTimeout(() => {
        window.location.href = `https://wa.me/${wa}?text=${msg}`;
      }, 1200);
    } catch (err: any) {
      if (err?.name === "AbortError") return;
      setStatus({ type: "err", msg: err?.message || "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded p-4 p-lg-5">
      <h4 className="mb-1">Quick Booking</h4>
      <p className="text-muted mb-4">Share details and we’ll confirm time & charges.</p>

      <form onSubmit={onSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input className="form-control" name="name" placeholder="Your name" required minLength={2} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone</label>
          <input className="form-control" name="phone" placeholder="03xx-xxxxxxx" required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Area</label>
          <input className="form-control" name="area" placeholder="Gulshan, DHA, Johar..." required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Service Type</label>
          <select className="form-select" name="serviceType" required defaultValue="Repair">
            {serviceOptions.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">AC Type</label>
          <select className="form-select" name="acType" required defaultValue="Not sure">
            {acTypeOptions.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Tonnage</label>
          <select className="form-select" name="tonnage" required defaultValue="Not sure">
            {tonOptions.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12">
          <label className="form-label">Problem / Notes (optional)</label>
          <textarea
            className="form-control"
            name="message"
            placeholder="Low cooling, leakage, noise, etc."
            rows={3}
          />
        </div>

        <div className="col-12 d-flex gap-2 flex-wrap">
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Booking"}
          </button>
          <button className="btn btn-outline-secondary" type="reset" disabled={loading}>
            Reset
          </button>
        </div>

        {status.type === "ok" && (
          <div className="col-12">
            <div className="alert alert-success mb-0">{status.msg}</div>
          </div>
        )}
        {status.type === "err" && (
          <div className="col-12">
            <div className="alert alert-danger mb-0">{status.msg}</div>
          </div>
        )}
      </form>
    </div>
  );
}
