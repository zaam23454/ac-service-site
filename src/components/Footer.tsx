export default function Footer() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "0300-0000000";
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "923000000000";
  const waLink = `https://wa.me/${wa}?text=${encodeURIComponent("Hi, I need AC service. Please share availability.")}`;

  return (
    <footer className="footer">
      <div className="container">
        <div className="pillRow">
          <span className="pill">Same-day visits (subject to availability)</span>
          <span className="pill">Transparent pricing</span>
          <span className="pill">Technician verified</span>
        </div>

        <div style={{ marginTop: 14 }} className="small">
          Phone: <a href={`tel:${phone}`}>{phone}</a> · WhatsApp: <a href={waLink} target="_blank" rel="noreferrer">{wa}</a>
        </div>

        <div style={{ marginTop: 10 }} className="small">
          © {new Date().getFullYear()} AC Expert Karachi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
