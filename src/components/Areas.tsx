const areas = [
  "Gulshan-e-Iqbal",
  "Johar",
  "DHA",
  "Clifton",
  "North Nazimabad",
  "Nazimabad",
  "PECHS",
  "Shah Faisal",
  "Malir",
  "Scheme 33",
  "Korangi",
  "Saddar",
];

export default function Areas() {
  return (
    <>
      <h2 className="sectionTitle">Areas We Serve</h2>
      <p className="p dim">Serving all over Karachi — availability depends on workload.</p>

      <div className="pillRow" style={{ marginTop: 14 }}>
        {areas.map((a) => (
          <div key={a} className="pill">
            {a}
          </div>
        ))}
      </div>

      <p className="p dim" style={{ marginTop: 10 }}>
        Don’t see your area? Book anyway — we’ll confirm.
      </p>
    </>
  );
}