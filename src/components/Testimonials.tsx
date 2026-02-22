const reviews = [
  { name: "Ali (Gulshan)", text: "Quick response and proper cooling after service. Very professional." },
  { name: "Sana (DHA)", text: "Installed inverter AC neatly — proper piping and testing done." },
  { name: "Hassan (Johar)", text: "Leakage issue identified fast and fixed. Fair charges." },
];

export default function Testimonials() {
  return (
    <>
      <h2 className="sectionTitle">Customer Reviews</h2>
      <p className="p dim">Real results, clean work, and transparent charges.</p>

      <div className="grid3" style={{ marginTop: 14 }}>
        {reviews.map((r) => (
          <div key={r.name} className="card hoverLift">
            <div className="reviewHead">
              <div className="avatar">★</div>
              <div>
                <div className="reviewName">{r.name}</div>
                <div className="small dim">Karachi</div>
              </div>
            </div>

            <p className="p dim" style={{ marginTop: 10 }}>
              {r.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}