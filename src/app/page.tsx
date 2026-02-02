import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Areas from "@/components/Areas";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import BookingForm from "@/components/BookingForm";

export default function HomePage() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "0300-0000000";
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "923000000000";
  const waLink = `https://wa.me/${wa}?text=${encodeURIComponent("Hi, I need AC service in Karachi. My area is ____ and issue is ____.")}`;

  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <div className="container heroGrid">
            <div>
              <h1 className="h1">AC Repair & Installation in Karachi</h1>
              <p className="p">
                Same-day visits (subject to availability). Repair, installation, service, gas refill and shifting.
                Transparent charges and professional work.
              </p>

              <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
                <a className="btn btnPrimary" href={waLink} target="_blank" rel="noreferrer">WhatsApp Now</a>
                <a className="btn" href={`tel:${phone}`}>Call Now</a>
              </div>

              <div className="kpis">
                <span className="kpi">✅ Verified technician</span>
                <span className="kpi">🧾 Clear pricing</span>
                <span className="kpi">⚡ Quick response</span>
                <span className="kpi">🛠️ Repair + Install + Service</span>
              </div>
            </div>

            <BookingForm />
          </div>
        </section>

        <Services />
        <Pricing />
        <Areas />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
