const reviews = [
  { name: "Ali (Gulshan)", text: "Quick response and proper cooling after service. Very professional." },
  { name: "Sana (DHA)", text: "Installed inverter AC nicely, neat piping and testing done." },
  { name: "Hassan (Johar)", text: "Identified leakage issue fast and fixed it. Fair charges." },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="sectionTitle">Customer Reviews</h2>
        <div className="grid3">
          {reviews.map((r) => (
            <div className="card" key={r.name}>
              <div style={{ fontWeight: 800 }}>{r.name}</div>
              <p className="p" style={{ marginTop: 8 }}>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
