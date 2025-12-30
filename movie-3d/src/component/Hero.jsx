import data from "../data/landing.json";
import heroImg from "../assets/heroImg.jpg";

export default function Hero() {
  return (
    <section
      className="hero-section d-flex align-items-center"
      style={{ backgroundImage: `url(${heroImg})`,height: "90vh",
    backgroundSize: "100%" }}
    >
      <div className="container text-white">
        <div className="col-md-6">
          <h1 className="display-4 fw-bold">{data.hero.title}</h1>
          <p className="lead">{data.hero.subtitle}</p>
          <button className="btn btn-primary btn-lg">
            {data.hero.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
