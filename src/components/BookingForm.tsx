"use client";

import { useMemo, useState } from "react";

type Status = { type: "idle" } | { type: "ok"; msg: string } | { type: "err"; msg: string };

export default function BookingForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [loading, setLoading] = useState(false);

  const serviceOptions = useMemo(() => ([
    "Repair", "Installation", "Service", "Gas Refill", "Shifting", "Inspection"
  ]), []);
  const acTypeOptions = useMemo(() => (["Inverter", "Non-Inverter", "Not sure"]), []);
  const tonOptions = useMemo(() => (["1 Ton", "1.5 Ton", "2 Ton", "Not sure"]), []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: "idle" });
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus({ type: "err", msg: data?.error || "Something went wrong." });
        return;
      }

      setStatus({ type: "ok", msg: "Booked! We’ll contact you shortly." });
      e.currentTarget.reset();
       } catch (err: any) {
     // If the request was aborted (common during navigation), don't show error
     if (err?.name === "AbortError") return;
     setStatus({ type: "err", msg: "Network error. Please try again." });
       }finally {
             setLoading(false);
           }
         }

  return (
    <div className="card">
      <h3 style={{ margin: 0 }}>Book a Service</h3>
      <p className="p" style={{ marginTop: 8 }}>
        Share details and we’ll call/WhatsApp to confirm time & charges.
      </p>

      <form onSubmit={onSubmit}>
        <div className="formRow">
          <div>
            <label className="label">Name</label>
            <input className="input" name="name" placeholder="Your name" required minLength={2} />
          </div>
          <div>
            <label className="label">Phone</label>
            <input className="input" name="phone" placeholder="03xx-xxxxxxx" required />
          </div>
        </div>

        <div className="formRow">
          <div>
            <label className="label">Area</label>
            <input className="input" name="area" placeholder="Gulshan, DHA, Johar..." required />
          </div>
          <div>
            <label className="label">Service Type</label>
            <select className="select" name="serviceType" required defaultValue="Repair">
              {serviceOptions.map((x) => <option key={x} value={x}>{x}</option>)}
            </select>
          </div>
        </div>

        <div className="formRow">
          <div>
            <label className="label">AC Type</label>
            <select className="select" name="acType" required defaultValue="Not sure">
              {acTypeOptions.map((x) => <option key={x} value={x}>{x}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Tonnage</label>
            <select className="select" name="tonnage" required defaultValue="Not sure">
              {tonOptions.map((x) => <option key={x} value={x}>{x}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="label">Problem / Notes (optional)</label>
          <textarea className="textarea" name="message" placeholder="Low cooling, leakage, noise, etc." />
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
          <button className="btn btnPrimary" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Booking"}
          </button>
          <button className="btn" type="reset" disabled={loading}>Reset</button>
        </div>

        {status.type === "ok" && <div className="toast">{status.msg}</div>}
        {status.type === "err" && <div className="toast toastErr">{status.msg}</div>}
      </form>
    </div>
  );
}
