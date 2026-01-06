import plans from "../data/Plans.json"
export default function Plans() {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4 mt-4 trending-title">
        Choose Your Plan
      </h2>

      <div className="row g-4">
        {plans.map((plan) => (
          <div key={plan.id} className="col-12 col-lg-6 col-xl-3">
            <div className="card backgroundColor shadow h-100">
              <div className="card-body text-center d-flex flex-column">
                <h5 className="card-title text-white fs-5 text-decoration-underline">{plan.name}</h5>
                <h3 className="text-white fw-bold fs-2">{plan.price}</h3>
                <p className="text-white fw-bold fs-3">{plan.duration}</p>
                <p className="text-white fs-6 p-3">{plan.features}</p>
                <button className="btn btn-success mt-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}