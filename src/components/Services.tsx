const items = [
  {
    title: "Flawless Installation",
    desc: "Perfect fitting, secure wiring & piping. Vacuuming, testing, and leak check for best performance.",
    icon: "snowflake",
  },
  {
    title: "Reliable Repair & Maintenance",
    desc: "Full diagnostics & troubleshooting. Low cooling, noise, tripping, PCB faults, fan issues, and more.",
    icon: "wrench",
  },
  {
    title: "AC Service (General / Deep)",
    desc: "Indoor + outdoor cleaning, coil wash, drain check — improved cooling and efficiency.",
    icon: "fan",
  },
  {
    title: "Gas Refill & Leakage Solution",
    desc: "Leak check, pressure testing, gas charging (when required). Fix leakage for stable cooling.",
    icon: "droplet",
  },
  {
    title: "AC Shifting",
    desc: "Safe uninstall + reinstall. Proper sealing, piping, and final testing at new location.",
    icon: "truck",
  },
  {
    title: "Inspection / Diagnosis",
    desc: "Quick site visit to diagnose problem and share solution plan + estimated charges.",
    icon: "clipboard-check",
  },
];

function iconUrl(name: string) {
  return `https://unpkg.com/lucide-static@latest/icons/${name}.svg`;
}

export default function Services() {
  return (
    <>
      <h2 className="sectionTitle">Services</h2>
      <p className="p dim">Fast, professional & guaranteed work — serving all over Karachi.</p>

      <div className="grid3" style={{ marginTop: 14 }}>
        {items.map((x) => (
          <div key={x.title} className="card serviceCard">
            <div className="serviceRow">
              <div className="serviceIcon">
                <img src={iconUrl(x.icon)} alt={x.title} width={26} height={26} />
              </div>

              <div>
                <h3 className="h3">{x.title}</h3>
                <p className="p dim" style={{ marginTop: 6 }}>
                  {x.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}