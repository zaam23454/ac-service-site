const plans = [
  {
    name: "Basic Service",
    price: "PKR 2,000+",
    points: ["Indoor cleaning", "Filter wash", "Performance check", "Basic troubleshooting"],
  },
  {
    name: "Deep Service",
    price: "PKR 3,500+",
    points: ["Indoor + outdoor wash", "Coil cleaning", "Drain check", "Better cooling results"],
  },
  {
    name: "Installation",
    price: "PKR 6,000+",
    points: ["Mounting & fitting", "Proper piping", "Vacuum/test", "Leak check"],
  },
];

export default function Pricing() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="sectionTitle">Pricing (Starting From)</h2>
        <div className="grid3">
          {plans.map((p) => (
            <div className="card" key={p.name}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
                <h3 style={{ margin: 0 }}>{p.name}</h3>
                <div className="price">{p.price}</div>
              </div>
              <div className="sub">Final price depends on tonnage, piping, and issue.</div>
              <hr className="hr" />
              <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
                {p.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
