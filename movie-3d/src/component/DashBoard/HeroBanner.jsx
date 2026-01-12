export default function HeroBanner() {
  return (
    <div
      className="d-flex align-items-end text-white"
      style={{
        height: "60vh",
        backgroundImage: "url('https://picsum.photos/1600/900?movie')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px",
      }}
    >
      <div className="col-md-6">
        <h1 className="display-5 fw-bold mb-3">
          Featured Movie
        </h1>
        <p className="text-light mb-4">
          Watch the latest blockbuster now streaming in HD quality.
        </p>
        <button className="btn btn-light fw-semibold">
          ▶ Play
        </button>
      </div>
    </div>
  );
}
