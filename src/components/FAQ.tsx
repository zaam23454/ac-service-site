const faqs = [
  {
    q: "How fast can you visit?",
    a: "Same-day visits are possible depending on your area and current workload.",
  },
  {
    q: "Do you provide warranty?",
    a: "Warranty depends on the job type. We confirm warranty and charges before starting work.",
  },
  {
    q: "What information should I share?",
    a: "AC type (inverter/non-inverter), tonnage, area, and the issue (low cooling, leakage, noise, etc.).",
  },
];

export default function FAQ() {
  return (
    <div className="row g-5 align-items-start">
      <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
        <h1 className="display-6 mb-3">FAQ</h1>
        <p className="mb-0">Quick answers before you book.</p>
      </div>

      <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.3s">
        <div className="accordion" id="faqAccordion">
          {faqs.map((f, idx) => (
            <div key={f.q} className="accordion-item">
              <h2 className="accordion-header" id={`faq-h-${idx}`}>
                <button
                  className={`accordion-button ${idx === 0 ? "" : "collapsed"}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq-c-${idx}`}
                  aria-expanded={idx === 0 ? "true" : "false"}
                  aria-controls={`faq-c-${idx}`}
                >
                  {f.q}
                </button>
              </h2>
              <div
                id={`faq-c-${idx}`}
                className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                aria-labelledby={`faq-h-${idx}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
