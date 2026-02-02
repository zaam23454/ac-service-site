const faqs = [
  { q: "How fast can you visit?", a: "Same-day visits are possible depending on area and workload." },
  { q: "Do you provide warranty?", a: "Service work typically has a short warranty (e.g., 7 days) depending on the job." },
  { q: "What info should I share?", a: "AC type (inverter/non), tonnage, area, and the issue (low cooling/leak/noise)." },
];

export default function FAQ() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="sectionTitle">FAQ</h2>
        <div className="grid3">
          {faqs.map((f) => (
            <div className="card" key={f.q}>
              <div style={{ fontWeight: 800 }}>{f.q}</div>
              <p className="p" style={{ marginTop: 8 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
