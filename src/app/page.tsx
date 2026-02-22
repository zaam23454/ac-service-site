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
  const phone = process.env.NEXT_PUBLIC_PHONE || "03160027404";
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "923160027404";

  const telLink = `tel:${phone.replace(/[^0-9+]/g, "")}`;
  const waLink = `https://wa.me/${wa}?text=${encodeURIComponent(
    "Hi Shiraz AC Fix! I want to book AC service in Karachi. My area is ____ and issue is ____."
  )}`;

  // ✅ Your two images
  const heroPhoto = "https://images.pexels.com/photos/6471912/pexels-photo-6471912.jpeg";
  const secondPhoto = "https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg";

  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="container heroGrid">
          <div className="fadeInUp">
            <div className="eyebrow">AC Installation & Repair • Karachi</div>

            <h1 className="h1">
              Professional Installation & <span className="gradText">Expert Repair</span>
              <br />
              by Shiraz AC Fix
            </h1>

            <p className="p dim">
              Ghar ho ya office — flawless fitting, secure wiring & piping, maximum cooling performance,
              full diagnostics & troubleshooting, gas refilling & leakage solutions.
            </p>

            <div className="ctaRow">
              <a className="btn btnPrimary" href={waLink} target="_blank" rel="noreferrer">
                WhatsApp Now
              </a>
              <a className="btn" href={telLink}>
                Call Now
              </a>
            </div>

            <div className="kpis">
              <div className="kpi">✅ Flawless Installation</div>
              <div className="kpi">🛠️ Reliable Repair & Maintenance</div>
              <div className="kpi">🧪 Leak Check + Gas Refill</div>
              <div className="kpi">⚡ Fast, professional service</div>
              <div className="kpi">📍 Serving All Over Karachi</div>
            </div>
          </div>

          <div className="card heroCard fadeInUp">
            <div className="imgStack">
              <img src={heroPhoto} alt="AC technician repairing" className="heroImg" loading="lazy" />
              <img
                src={secondPhoto}
                alt="AC installation and service"
                className="heroImg heroImgSmall"
                loading="lazy"
              />
            </div>

            <div className="heroNote">
              <b>Shiraz AC Fix</b> — Where expert installation meets trusted repairs.
            </div>

            <div className="divider" />

            {/* Booking form (functionality stays exactly the same) */}
            <BookingForm />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Services />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Pricing />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Areas />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Testimonials />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FAQ />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CTA />
        </div>
      </section>

      <Footer />
    </>
  );
}