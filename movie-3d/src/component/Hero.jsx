import { useEffect, useState } from "react";
import data from "../data/landing.json";
import { fetchMovies, playMovie } from "../services/movie.services";
import MoviePlayer from "./MoviePlayer";

export default function Hero() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [playUrl, setPlayUrl] = useState(null);

  useEffect(() => {
    fetchMovies()
      .then((res) => {
        if (res.data.success) {
          setMovies(res.data.movies);
        }
      })
      .catch(console.error);
  }, []);

  const handlePlay = async (videoId) => {
    const res = await playMovie(videoId);
    if (res.data.success) {
      setPlayUrl(res.data.play_url);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="hero-wrapper container position-relative">
        <div className="carousel-inner">
          {movies.map((movie, index) => (
            <div
              key={movie.videoId}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              style={{
                backgroundImage: `url(${movie.thumbnail})`,
                height: "70vh",
                backgroundSize: "cover",
                cursor: "pointer",
              }}
              onClick={() => {
                setSelectedMovie(movie);
                setPlayUrl(null);
              }}
            />
          ))}
        </div>

        <div className="container position-absolute top-50 start-0 translate-middle-y text-white">
          <h1>{data.hero.title}</h1>
          <p>{data.hero.subtitle}</p>
        </div>
      </section>

      {/* MOVIE MODAL */}
      {selectedMovie && (
        <MoviePlayer
          movie={selectedMovie}
          playUrl={playUrl}
          onPlay={handlePlay}
          onClose={() => {
            setSelectedMovie(null);
            setPlayUrl(null);
          }}
        />
      )}
    </>
  );
}
