import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

export default function ContactPage() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "0300-0000000";
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "923000000000";
  const waLink = `https://wa.me/${wa}?text=${encodeURIComponent("Hi, I want to book AC service. My area is ____ and issue is ____.")}`;

  return (
    <>
      <Navbar />
      <main className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div className="card">
            <h2 className="sectionTitle">Contact</h2>
            <p className="p">Call or WhatsApp for quick booking.</p>
            <hr className="hr" />
            <div className="small">Phone</div>
            <div style={{ fontWeight: 800, marginTop: 6 }}>
              <a href={`tel:${phone}`}>{phone}</a>
            </div>

            <div className="small" style={{ marginTop: 14 }}>WhatsApp</div>
            <div style={{ fontWeight: 800, marginTop: 6 }}>
              <a href={waLink} target="_blank" rel="noreferrer">{wa}</a>
            </div>

            <p className="p" style={{ marginTop: 14 }}>
              Working hours: 10am – 10pm (example)
            </p>
          </div>

          <BookingForm />
        </div>

        <style>{`
          @media (max-width: 900px){
            main .container{ grid-template-columns: 1fr !important; }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
