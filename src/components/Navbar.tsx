import Link from "next/link";

export default function Navbar() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "0300-0000000";
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "923000000000";
  const waLink = `https://wa.me/${wa}?text=${encodeURIComponent("Hi, I need AC service. Please share availability.")}`;

  return (
    <div className="nav">
      <div className="container navInner">
        <div className="brand">
          <span>❄️ AC Expert</span>
          <span className="badge">Karachi</span>
        </div>

        <div className="navLinks">
          <Link className="link" href="/">Home</Link>
          <Link className="link" href="/contact">Contact</Link>
          <a className="btn btnSmall" href={`tel:${phone}`}>Call</a>
          <a className="btn btnSmall btnPrimary" href={waLink} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
