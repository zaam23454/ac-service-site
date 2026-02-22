const areas = [
  "Gulshan-e-Iqbal",
  "Johar",
  "DHA",
  "Clifton",
  "North Nazimabad",
  "Nazimabad",
  "PECHS",
  "Shah Faisal",
  "Malir",
  "Scheme 33",
  "Korangi",
  "Saddar",
];

export default function Areas() {
  return (
    <div className="bg-light rounded p-4 p-lg-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="row g-4 align-items-center">
        <div className="col-lg-4">
          <h2 className="mb-2">Areas We Serve</h2>
          <p className="mb-0">Serving across Karachi — availability depends on workload.</p>
        </div>

        <div className="col-lg-8">
          <div className="d-flex flex-wrap gap-2">
            {areas.map((a) => (
              <span key={a} className="badge bg-white text-dark border py-2 px-3">
                {a}
              </span>
            ))}
          </div>
          <div className="mt-3">
            <small className="text-muted">Don’t see your area? Book anyway — we’ll confirm.</small>
          </div>
        </div>
      </div>
    </div>
  );
}
