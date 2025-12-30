import { useRef } from "react";
import trending from "../data/trending.json";
import "./TrendingSlider.css";

export default function TrendingSlider() {
  const rowRef = useRef(null);

  const scrollLeft = () => {
    rowRef.current.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  };

  return (
    <div className="trending-wrapper">
      <h2 className="trending-title">Trending Now</h2>

      {/* LEFT ARROW */}
      <button className="arrow left" onClick={scrollLeft}>
        &#10094;
      </button>

      {/* RIGHT ARROW */}
      <button className="arrow right" onClick={scrollRight}>
        &#10095;
      </button>

      <div className="trending-row" ref={rowRef}>
        {trending.map((item, index) => (
          <div className="trending-card" key={item.id}>
            <span className="trending-number">{index + 1}</span>
            <img src={item.image} alt={item.title} className="trending-img" />
          </div>
        ))}
      </div>
    </div>
  );
}
//