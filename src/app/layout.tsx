import "./template.css";

import Script from "next/script";

export const metadata = {
  title: "AC Repair & Installation | Karachi",
  description: "AC repair, installation, service, gas refill, and shifting in Karachi. Same-day visits available.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts (from template) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;800&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* Icons (from template) */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        {/* Optional animation styles (template) */}
        <link href="/template/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="/template/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
      </head>
      <body>
        {/* Spinner (used by template main.js) */}
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div className="spinner-grow text-primary" role="status" aria-label="Loading"></div>
        </div>

        {children}

        {/* Back to top (used by template main.js) */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
          <i className="bi bi-arrow-up"></i>
        </a>

        {/* Bootstrap JS (needed for navbar toggler, carousel, dropdowns) */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* Template JS dependencies (only if you keep template effects) */}
        <Script
          src="https://code.jquery.com/jquery-3.4.1.min.js"
          strategy="afterInteractive"
        />
        <Script src="/template/lib/wow/wow.min.js" strategy="afterInteractive" />
        <Script src="/template/lib/easing/easing.min.js" strategy="afterInteractive" />
        <Script src="/template/lib/waypoints/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/template/lib/counterup/counterup.min.js" strategy="afterInteractive" />
        <Script src="/template/lib/owlcarousel/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/template/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
