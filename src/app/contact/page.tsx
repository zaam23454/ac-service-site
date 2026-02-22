import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "03160027404";
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "923160027404";

  const telLink = `tel:${phone.replace(/[^0-9+]/g, "")}`;
  const waLink = `https://wa.me/${wa}?text=${encodeURIComponent(
    "Hi Shiraz AC Fix! I want to book AC service in Karachi. My area is ____ and issue is ____."
  )}`;

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container fadeInUp">
          <h2 className="sectionTitle">Contact</h2>
          <p className="p dim">Call or WhatsApp for quick booking and confirmation of time & charges.</p>

          <div className="grid2" style={{ marginTop: 18 }}>
            <div className="card">
              <div className="small dim">Phone</div>
              <div className="big">
                <a href={telLink} className="miniLink">
                  {phone}
                </a>
              </div>
              <p className="p dim" style={{ marginTop: 10 }}>
                Tap to call directly.
              </p>
              <a className="btn" href={telLink}>
                Call Now
              </a>
            </div>

            <div className="card">
              <div className="small dim">WhatsApp</div>
              <div className="big">
                <a href={waLink} className="miniLink" target="_blank" rel="noreferrer">
                  {wa}
                </a>
              </div>
              <p className="p dim" style={{ marginTop: 10 }}>
                Tap to open WhatsApp with prefilled message.
              </p>
              <a className="btn btnPrimary" href={waLink} target="_blank" rel="noreferrer">
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}