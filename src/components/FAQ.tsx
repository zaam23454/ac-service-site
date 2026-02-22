const faqs = [
  { q: "How fast can you visit?", a: "Same-day visits are possible depending on area and workload." },
  { q: "Do you provide warranty?", a: "Warranty depends on job type. We confirm before starting work." },
  { q: "What info should I share?", a: "AC type, tonnage, area, and issue (low cooling/leak/noise)." },
];

export default function FAQ() {
  return (
    <>
      <h2 className="sectionTitle">FAQ</h2>
      <p className="p dim">Quick answers before you book.</p>

      <div className="grid3" style={{ marginTop: 14 }}>
        {faqs.map((f) => (
          <div key={f.q} className="card hoverLift">
            <div className="faqQ">{f.q}</div>
            <p className="p dim" style={{ marginTop: 8 }}>
              {f.a}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}