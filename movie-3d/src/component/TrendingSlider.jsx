import { useEffect, useState } from "react";
// import trending from "../data/trending.json";
import "./TrendingSlider.css";

export default function TrendingSlider(props) {
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
   const carouselId = `trending-${Math?.random().toString(36).substr(2, 9)}`;

  // Set condition based on screen size
  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 576) {
      setItemsPerSlide(2); // Mobile
    } else if (width < 992) {
      setItemsPerSlide(3); // Tablet
    } else {
      setItemsPerSlide(4); // Desktop
    }
  };

  useEffect(() => {
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Chunk data based on itemsPerSlide
  const slides = [];
  const movieList=props?.playList;;
  console.log(props?.playLists)
  for (let i = 0; i < movieList?.length; i += itemsPerSlide) {
    slides.push(movieList.slice(i, i + itemsPerSlide));
  }

  return (
    <div className="container">
      <h2 className="trending-title mt-4 text-start  text-uppercase fw-normal ">
        
        {props?.title}
      </h2>

      <div
        id={carouselId}
        className="carousel slide  "
        // data-bs-ride="carousel"
         // hover pe pause
         data-bs-ride="false" 
  data-bs-wrap="true" 
      >
        <div className="carousel-inner">
          {slides.map((group, slideIndex) => (
            <div
              key={slideIndex}
              className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
            >
              <div className="row g-3">
                {group.map((item) => (
                  <div
                    key={item.id}
                    className={`col-${12 / itemsPerSlide}`}
                  >
                    <div className="movie-card">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="movie-img"
                      />
                      <p className="movie-title">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </div>
  );
}
