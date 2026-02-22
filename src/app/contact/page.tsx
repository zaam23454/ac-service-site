import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

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

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <h1 className="display-6 mb-3">Contact & Booking</h1>
              <p className="mb-4">
                Call or WhatsApp for quick booking and confirmation of time & charges.
              </p>

              <div className="d-flex gap-2 flex-wrap mb-4">
                <a className="btn btn-primary" href={telLink}>
                  Call {phone}
                </a>
                <a className="btn btn-outline-primary" href={waLink} target="_blank" rel="noreferrer">
                  WhatsApp {wa}
                </a>
              </div>

              <BookingForm />
            </div>

            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: 450 }}>
              <div className="position-relative rounded overflow-hidden h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src="/template/img/feature.jpg"
                  alt="AC Service"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}