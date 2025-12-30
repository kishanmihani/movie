export default function Plans() {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4 mt-4 trending-title">Choose Your Plan</h2>

      <div className="row">
        <div className="col-md-4">
          <div className="card backgroundColor shadow">
            <div className="card-body text-center">
              <h5 className="card-title text-white">Basic</h5>
              <h3 className="text-white">₹199</h3>
              <p className="text-white">1 Month Access</p>
              <button className="btn btn-success mt-2">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card backgroundColor shadow">
            <div className="card-body text-center">
              <h5 className="card-title text-white">Standard</h5>
              <h3 className="text-white">₹499</h3>
              <p className="text-white">3 Months Access</p>
              <button className="btn mt-2 btn-success">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card backgroundColor shadow">
            <div className="card-body  text-center">
              <h5 className="card-title text-white">Premium</h5>
              <h3 className="text-white">₹899</h3>
              <p className="text-white">1 Year Access</p>
              <button className="btn btn-success mt-2">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
