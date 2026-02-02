const items = [
  { title: "AC Repair", desc: "Cooling issues, leakage, noise, tripping, PCB faults, fan problems." },
  { title: "AC Installation", desc: "New AC installation with proper vacuuming, piping, and testing." },
  { title: "AC Service", desc: "General + deep cleaning, indoor/outdoor service for better cooling." },
  { title: "Gas Refill", desc: "Leak check, pressure test, and gas charging (when required)." },
  { title: "AC Shifting", desc: "Safe uninstall + reinstall, proper piping, sealing, and testing." },
  { title: "Inspection", desc: "Quick diagnosis + solution plan before you decide." },
];

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="sectionTitle">Services</h2>
        <div className="grid3">
          {items.map((x) => (
            <div key={x.title} className="card serviceCard">
              <h3>{x.title}</h3>
              <p>{x.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
