import Link from "next/link";

export default function Navbar() {
  const phone = process.env.NEXT_PUBLIC_PHONE || "03160027404";
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "923160027404";
  const email = process.env.NEXT_PUBLIC_EMAIL || "info@kaacib.com";

  const telLink = `tel:${phone.replace(/[^0-9+]/g, "")}`;
  const waLink = `https://wa.me/${wa}?text=${encodeURIComponent(
    "Hi! I want to book AC service in Karachi. My area is ____ and issue is ____."
  )}`;

  return (
    <>
      {/* Topbar */}
      <div className="container-fluid bg-dark text-white-50 py-2 px-0 d-none d-lg-block">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="fa fa-phone-alt me-2"></small>
              <small>{phone}</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="far fa-envelope-open me-2"></small>
              <small>{email}</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <ol className="breadcrumb justify-content-end mb-0">
              <li className="breadcrumb-item">
                <Link className="text-white-50 small" href="/">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white-50 small" href={waLink} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white-50 small" href={telLink}>
                  Call
                </a>
              </li>
              <li className="breadcrumb-item">
                <Link className="text-white-50 small" href="/contact">
                  Contact
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <h1 className="m-0">
            <img
              className="img-fluid me-3"
              src="/template/img/icon/icon-02-primary.png"
              alt="Logo"
            />
            Shiraz AC Fix
          </h1>
        </Link>

        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto bg-light pe-4 py-3 py-lg-0">
            <Link href="/" className="nav-item nav-link">
              Home
            </Link>
            <Link href="/contact" className="nav-item nav-link">
              Contact Us
            </Link>
          </div>

          <div className="d-flex gap-2 align-items-center">
            <a className="btn btn-primary" href={telLink}>
              Call Now
            </a>
            <a className="btn btn-outline-primary" href={waLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
