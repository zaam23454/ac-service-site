const areas = [
  "Gulshan-e-Iqbal", "Johar", "DHA", "Clifton", "North Nazimabad", "Nazimabad",
  "PECHS", "Shah Faisal", "Malir", "Scheme 33", "Korangi", "Saddar",
];

export default function Areas() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="sectionTitle">Areas We Serve</h2>
        <div className="pillRow">
          {areas.map((a) => <span className="pill" key={a}>{a}</span>)}
        </div>
        <p className="p" style={{ marginTop: 12 }}>
          Don’t see your area? Book anyway — we’ll confirm availability.
        </p>
      </div>
    </section>
  );
}
