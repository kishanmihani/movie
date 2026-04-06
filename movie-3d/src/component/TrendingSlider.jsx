import { useState, useEffect } from "react";
import "./TrendingSlider.css";
import { playMovie } from "../services/movie.services";
import MoviePlayer from "./MoviePlayer";

export default function TrendingSlider(props) {
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const [visibleCount, setVisibleCount] = useState(8); // initial items
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [playUrl, setPlayUrl] = useState(null);
  const movieList = props?.playList || [];

  // Responsive items per row
  // const handleResize = () => {
  //   const width = window.innerWidth;

  //   if (width < 576) {
  //     setItemsPerRow(2);
  //     setVisibleCount(4);
  //   } else if (width < 992) {
  //     setItemsPerRow(3);
  //     setVisibleCount(6);
  //   } else {
  //     setItemsPerRow(4);
  //     setVisibleCount(8);
  //   }
  // };

  // useEffect(() => {
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // Show only limited items
  const visibleItems = movieList.slice(0, visibleCount);
  const handlePlay = async (videoId) => {
    const res = await playMovie(videoId);
    if (res.data.success) {
      setPlayUrl(res.data.play_url);
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
        <h2 className="trending-title fs-3s text-uppercase fw-normal">
          {props?.title}
        </h2>

        {/* Show More / Less Button */}
        {movieList.length > visibleCount ? (
          <button
            className="btn btn-sm btn-outline-light"
            onClick={() => setVisibleCount((prev) => prev + itemsPerRow)}
          >
            More
          </button>
        ) : movieList.length > 8 ? (
          <button
            className="btn btn-sm btn-outline-light "
            onClick={() => setVisibleCount(8)}
          >
            Less
          </button>
        ) : null}
      </div>

      {/* Movies Grid */}
      <div className="row g-3">
        {visibleItems?.map((item) => (
          <div key={item.id} onClick={() => {
            console.log("Selected Movie:", item);
                setSelectedMovie(item);
                setPlayUrl(null);
              }} className={`col-${12 / itemsPerRow}`}>
            <div className="movie-card">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="movie-img"
              />
              <p className="movie-title mt-2">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedMovie && (
              <MoviePlayer
                movie={selectedMovie}
                onPlay={() => handlePlay(selectedMovie.videoId)}
                onClose={() => {
                  setSelectedMovie(null);
                  setPlayUrl(null);
                }}
              />
            )}
    </div>
  );
}