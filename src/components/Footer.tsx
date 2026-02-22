export default function Footer() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "03160027404";
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "923160027404";

  const telLink = `tel:${phone.replace(/[^0-9+]/g, "")}`;
  const waLink = `https://wa.me/${wa}?text=${encodeURIComponent(
    "Hi Shiraz AC Fix! I need AC service in Karachi. Please share availability."
  )}`;

  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <div className="footerBrand">
            <span>❄️</span>
            <span>Shiraz AC Fix</span>
          </div>
          <p className="p dim" style={{ marginTop: 10 }}>
            Professional AC Installation, Expert Repair & Maintenance, Gas refill & leakage solutions.
            Serving all over Karachi.
          </p>

          <div className="footerLinks">
            <a className="miniLink" href={telLink}>
              Call: {phone}
            </a>
            <a className="miniLink" href={waLink} target="_blank" rel="noreferrer">
              WhatsApp: {wa}
            </a>
          </div>
        </div>

        <div>
          <div className="footerTitle">Quick Services</div>
          <div className="pillRow" style={{ marginTop: 10 }}>
            <div className="pill">Repair</div>
            <div className="pill">Installation</div>
            <div className="pill">Service</div>
            <div className="pill">Gas Refill</div>
            <div className="pill">Shifting</div>
            <div className="pill">Inspection</div>
          </div>
        </div>

        <div>
          <div className="footerTitle">Trust Signals</div>
          <div className="stack" style={{ marginTop: 10 }}>
            <div className="tick">✅ Verified technician</div>
            <div className="tick">💰 Transparent charges</div>
            <div className="tick">⚡ Fast response</div>
            <div className="tick">🧰 Professional tools</div>
          </div>
        </div>
      </div>

      <div className="container footerBottom">
        <div className="small dim">
          © {new Date().getFullYear()} Shiraz AC Fix (Shiraz Gill). All rights reserved.
        </div>
      </div>
    </footer>
  );
}