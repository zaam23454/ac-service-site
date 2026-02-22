export default function CTA() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "03160027404";
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "923160027404";

  const telLink = `tel:${phone.replace(/[^0-9+]/g, "")}`;
  const waLink = `https://wa.me/${wa}?text=${encodeURIComponent(
    "Hi Shiraz AC Fix! I need urgent AC help in Karachi. My area is ____ and issue is ____."
  )}`;

  return (
    <div className="card ctaCard">
      <div>
        <h2 className="sectionTitle" style={{ marginBottom: 8 }}>
          Need urgent AC help?
        </h2>
        <p className="p dim">
          Call or WhatsApp now — we’ll confirm time and charges upfront.
        </p>
      </div>

      <div className="ctaRow">
        <a className="btn" href={telLink}>
          Call Now
        </a>
        <a className="btn btnPrimary" href={waLink} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </div>
  );
}