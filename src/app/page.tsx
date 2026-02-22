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

  return (
    <>
      <Navbar />

      {/* Template Carousel Hero */}
      <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="/template/img/carousel-1.jpg" alt="AC Repair" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-4 animated slideInDown">
                        AC Repair, Service & Gas Refill in Karachi
                      </h1>
                      <p className="fs-5 text-body mb-4 pb-2 mx-sm-5 animated slideInDown">
                        Fast visits, honest diagnostics, and reliable work by Shiraz AC Fix.
                      </p>
                      <div className="d-flex gap-2 justify-content-center">
                        <a href="#booking" className="btn btn-primary py-3 px-5 animated slideInDown">
                          Book Now
                        </a>
                        <a href={telLink} className="btn btn-outline-light py-3 px-5 animated slideInDown">
                          Call {phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img className="w-100" src="/template/img/carousel-2.jpg" alt="AC Installation" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-4 animated slideInDown">
                        AC Installation & Shifting — Clean & Professional
                      </h1>
                      <p className="fs-5 text-body mb-4 pb-2 mx-sm-5 animated slideInDown">
                        Secure mounting, proper piping, leakage check and testing.
                      </p>
                      <div className="d-flex gap-2 justify-content-center">
                        <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-primary py-3 px-5">
                          WhatsApp Now
                        </a>
                        <a href="#booking" className="btn btn-outline-light py-3 px-5">
                          Get Quote
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Booking form section (existing backend stays) */}
      <div id="booking" className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-6">
              <h1 className="display-6 mb-3">Book a Service</h1>
              <p className="mb-4">
                Tell us your area and issue. We’ll confirm availability and share the visit charges.
              </p>
              <div className="d-flex gap-2">
                <a href={telLink} className="btn btn-primary">
                  Call Now
                </a>
                <a href={waLink} className="btn btn-outline-primary" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-light rounded p-4">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keep your existing sections for now; we will re-skin them next */}
      <div className="container-xxl py-5">
        <div className="container">
          <Services />
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <Pricing />
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <Areas />
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <Testimonials />
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <FAQ />
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <CTA />
        </div>
      </div>

      <Footer />
    </>
  );
}
