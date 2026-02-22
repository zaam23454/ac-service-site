export default function CTA() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "03160027404";
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "923160027404";

  const telLink = `tel:${phone.replace(/[^0-9+]/g, "")}`;
  const waLink = `https://wa.me/${wa}?text=${encodeURIComponent(
    "Hi Shiraz AC Fix! I need urgent AC help in Karachi. My area is ____ and issue is ____."
  )}`;

  return (
    <div className="bg-primary text-white rounded p-4 p-lg-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="row g-4 align-items-center">
        <div className="col-lg-8">
          <h2 className="mb-2">Need urgent AC help?</h2>
          <p className="mb-0">Call or WhatsApp now — we’ll confirm time and charges upfront.</p>
        </div>
        <div className="col-lg-4 d-flex gap-2 justify-content-lg-end flex-wrap">
          <a className="btn btn-light" href={telLink}>
            Call {phone}
          </a>
          <a className="btn btn-outline-light" href={waLink} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
