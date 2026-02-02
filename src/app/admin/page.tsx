import { readLeads } from "@/lib/fileDb";
import { requireBasicAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default function AdminPage() {
  const ok = requireBasicAuth();
  if (!ok) {
    return (
      <main className="section">
        <div className="container">
          <div className="card">
            <h2 className="sectionTitle">Unauthorized</h2>
            <p className="p">
              This page is protected. Set <b>ADMIN_USER</b> and <b>ADMIN_PASS</b> in <b>.env.local</b>,
              then open this page again and your browser will ask for login.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const leads = readLeads();

  return (
    <main className="section">
      <div className="container">
        <div className="card" style={{ marginBottom: 14 }}>
          <h2 className="sectionTitle">Admin — Leads</h2>
          <p className="p">Total leads: {leads.length}</p>
          <p className="small">Stored locally in <b>data/leads.json</b></p>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Customer</th>
              <th>Phone</th>
              <th>Area</th>
              <th>Service</th>
              <th>AC</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((l) => (
              <tr key={l.id}>
                <td>{new Date(l.createdAt).toLocaleString()}</td>
                <td>{l.name}</td>
                <td>{l.phone}</td>
                <td>{l.area}</td>
                <td>{l.serviceType}</td>
                <td>{l.acType} · {l.tonnage}</td>
                <td style={{ maxWidth: 340, color: "var(--muted)" }}>{l.message || "-"}</td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td colSpan={7} style={{ color: "var(--muted)" }}>No leads yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
