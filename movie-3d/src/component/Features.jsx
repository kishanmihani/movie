import data from "../data/landing.json";

export default function Features() {
  return (
    <section className="container py-5 justify-content-center">
      <h2 className="trending-title p-3 fs-3 fs-md-2 fs-lg-1">More reasons to join</h2>
      <div className="row g-4 m-auto">
        {data.features.map((f, i) => (
          <div key={i} className="col-sm-12 col-xl-3 col-lg-6">
            <div className="card defaultgreadent text-white h-100 shadow">
              <div className="card-body text-start">
                <h5 className="fw-bold fs-3 md:fs-2 lg:fs-1 pb-3">{f.title}</h5>
                <p className="fw-normal fs-5 md:fs-4 lg:fs-3 pb-3">{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
