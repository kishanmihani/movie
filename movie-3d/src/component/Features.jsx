import data from "../data/landing.json";

export default function Features() {
  return (
    <section className="container py-5">
      <h2 className="text-center text-white mb-4">Features</h2>
      <div className="row g-4">
        {data.features.map((f, i) => (
          <div key={i} className="col-sm-6 col-md-4">
            <div className="card bg-dark text-white h-100 shadow">
              <div className="card-body text-center">
                <h5>{f.title}</h5>
                <p>{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
