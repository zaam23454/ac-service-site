const services = [
  {
    title: "AC Installation",
    img: "/template/img/service-1.jpg",
    icon: "/template/img/icon/icon-01-light.png",
  },
  {
    title: "AC Repair & Troubleshooting",
    img: "/template/img/service-4.jpg",
    icon: "/template/img/icon/icon-04-light.png",
  },
  {
    title: "General / Deep Service",
    img: "/template/img/service-2.jpg",
    icon: "/template/img/icon/icon-02-light.png",
  },
  {
    title: "Gas Refill & Leakage Fix",
    img: "/template/img/service-3.jpg",
    icon: "/template/img/icon/icon-03-light.png",
  },
  {
    title: "AC Shifting",
    img: "/template/img/service-5.jpg",
    icon: "/template/img/icon/icon-05-light.png",
  },
  {
    title: "Inspection / Diagnosis",
    img: "/template/img/service-6.jpg",
    icon: "/template/img/icon/icon-06-light.png",
  },
];

export default function Services() {
  return (
    <>
      <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 560 }}>
        <h1 className="display-6 mb-3">Our Services</h1>
        <p className="mb-0">Professional AC services in Karachi — clean work, honest diagnosis, and fast visits.</p>
      </div>

      <div className="row g-4 justify-content-center mt-2">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay={`${0.1 + (i % 3) * 0.2}s`}
          >
            <div className="service-item">
              <img className="img-fluid" src={s.img} alt={s.title} />
              <div className="d-flex align-items-center bg-light">
                <div className="service-icon flex-shrink-0 bg-primary">
                  <img className="img-fluid" src={s.icon} alt="" />
                </div>
                <a className="h4 mx-4 mb-0" href="#booking">
                  {s.title}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
