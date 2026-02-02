export default function CTA() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "0300-0000000";
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "923000000000";
  const waLink = `https://wa.me/${wa}?text=${encodeURIComponent("Hi, I want to book AC service. My area is ____ and issue is ____.")}`;

  return (
    <section className="section">
      <div className="container">
        <div className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          <div>
            <h2 className="sectionTitle" style={{ marginBottom: 6 }}>Need urgent AC help?</h2>
            <p className="p">Call or WhatsApp now — we’ll confirm time and charges upfront.</p>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a className="btn" href={`tel:${phone}`}>Call Now</a>
            <a className="btn btnPrimary" href={waLink} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
