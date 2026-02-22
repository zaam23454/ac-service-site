const plans = [
  {
    name: "Basic Service Package",
    price: "Minimal Charges",
    points: ["Indoor cleaning", "Filter wash", "Performance check", "Basic troubleshooting"],
  },
  {
    name: "Deep Service Package",
    price: "Minimal Charges",
    points: ["Indoor + outdoor wash", "Coil cleaning", "Drain check", "Better cooling results"],
  },
  {
    name: "Installation Package",
    price: "Minimal Charges",
    points: ["Mounting & fitting", "Proper piping", "Vacuum / test", "Leak check"],
  },
];

export default function Pricing() {
  return (
    <>
      <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 560 }}>
        <h1 className="display-6 mb-3">Packages</h1>
        <p className="mb-0">Final charges depend on tonnage, piping length, and the actual issue.</p>
      </div>

      <div className="row g-4 mt-2">
        {plans.map((p, idx) => (
          <div key={p.name} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + idx * 0.2}s`}>
            <div className="bg-light rounded p-4 h-100">
              <div className="d-flex justify-content-between align-items-start gap-3">
                <h5 className="mb-1">{p.name}</h5>
                <span className="badge bg-primary">{p.price}</span>
              </div>
              <small className="text-muted">Call/WhatsApp for exact quote.</small>

              <hr />

              <ul className="mb-0 text-muted">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
