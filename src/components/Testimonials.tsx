const reviews = [
  {
    name: "Ali",
    area: "Gulshan",
    text: "Quick response and proper cooling after service. Very professional work.",
    img: "/template/img/testimonial-1.jpg",
  },
  {
    name: "Babar",
    area: "DHA",
    text: "Installed inverter AC neatly — proper piping and testing done. Highly recommended.",
    img: "/template/img/testimonial-2.jpg",
  },
  {
    name: "Hassan",
    area: "Johar",
    text: "Leakage issue identified fast and fixed. Charges were fair and transparent.",
    img: "/template/img/testimonial-3.jpg",
  },
];

export default function Testimonials() {
  return (
    <>
      <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 560 }}>
        <h1 className="display-6 mb-3">Customer Reviews</h1>
        <p className="mb-0">Real results, clean work, and transparent charges.</p>
      </div>

      <div className="row g-5 mt-2">
        <div className="col-lg-3 d-none d-lg-block">
          <div className="testimonial-left h-100">
            <img className="img-fluid animated pulse infinite" src="/template/img/testimonial-1.jpg" alt="" />
            <img className="img-fluid animated pulse infinite" src="/template/img/testimonial-2.jpg" alt="" />
            <img className="img-fluid animated pulse infinite" src="/template/img/testimonial-3.jpg" alt="" />
          </div>
        </div>

        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          {/* main.js will convert this into an owl carousel */}
          <div className="owl-carousel testimonial-carousel">
            {reviews.map((r) => (
              <div key={r.name} className="testimonial-item text-center">
                <div
				  className="mx-auto mb-4"
				  style={{
					width: 160,
					height: 160,
					borderRadius: "50%",
					overflow: "hidden",
					background: "#fff",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				  }}
				>
				  <img
					src={r.img}
					alt={r.name}
					style={{
					  width: "100%",
					  height: "100%",
					  objectFit: "contain",
					  objectPosition: "center",
					  borderRadius: 0,
					  maxWidth: "none",
					}}
				  />
				</div>
                <p className="fs-5">{r.text}</p>
                <h5 className="mb-1">{r.name}</h5>
                <span>{r.area}, Karachi</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-3 d-none d-lg-block">
          <div className="testimonial-right h-100">
            <img className="img-fluid animated pulse infinite" src="/template/img/testimonial-1.jpg" alt="" />
            <img className="img-fluid animated pulse infinite" src="/template/img/testimonial-2.jpg" alt="" />
            <img className="img-fluid animated pulse infinite" src="/template/img/testimonial-3.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
