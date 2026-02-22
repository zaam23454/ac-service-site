import Link from "next/link";

export default function Navbar() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "03160027404";
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "923160027404";

  const telLink = `tel:${phone.replace(/[^0-9+]/g, "")}`;
  const waLink = `https://wa.me/${wa}?text=${encodeURIComponent(
    "Hi Shiraz AC Fix! I need AC service in Karachi. Please share availability."
  )}`;

  return (
    <header className="nav">
      <div className="container navInner">
        <Link href="/" className="brand">
          <span className="brandIcon">❄️</span>
          <span className="brandText">Shiraz AC Fix</span>
          <span className="badge">Karachi</span>
        </Link>

        <nav className="navLinks">
          <Link className="link" href="/">
            Home
          </Link>
          <Link className="link" href="/contact">
            Contact
          </Link>

          <a className="btn btnSmall" href={telLink} aria-label="Call Shiraz AC Fix">
            Call
          </a>
          <a
            className="btn btnPrimary btnSmall"
            href={waLink}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp Shiraz AC Fix"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}