import Link from "next/link";

export default function Footer() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "03160027404";
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "923160027404";
  const email = process.env.NEXT_PUBLIC_EMAIL || "info@ShirazAcFix.com";

  const waLink = `https://wa.me/${wa}?text=${encodeURIComponent(
    "Hi! I want to book AC service in Karachi. My area is ____ and issue is ____."
  )}`;

  return (
    <>
      <div className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6">
              <h1 className="text-white mb-4">
                <img
                  className="img-fluid me-3"
                  src="/template/img/icon/icon-02-light.png"
                  alt="Logo"
                />
                Shiraz AC Fix
              </h1>
              <span>
                Professional AC installation, repair, service, gas refill and shifting in Karachi. Same-day
                visits available.
              </span>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Get In Touch</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>Karachi, Pakistan
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>
                {phone}
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>
                {email}
              </p>
              <p>
                <i className="fab fa-whatsapp me-3"></i>
                <a className="text-white-50" href={waLink} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </p>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Our Services</h5>
              <span className="btn btn-link">AC Installation</span>
              <span className="btn btn-link">AC Repair</span>
              <span className="btn btn-link">Gas Refill + Leak Fix</span>
              <span className="btn btn-link">Maintenance / Service</span>
              <span className="btn btn-link">AC Shifting</span>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Quick Links</h5>
              <Link className="btn btn-link" href="/">
                Home
              </Link>
              <Link className="btn btn-link" href="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="container-fluid copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                © {new Date().getFullYear()} <Link href="/">Shiraz AC Fix</Link>. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top (template JS toggles this) */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
}
