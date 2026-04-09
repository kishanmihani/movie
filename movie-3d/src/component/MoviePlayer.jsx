import { useEffect } from "react";
import { FaCirclePlay } from "react-icons/fa6";

export default function MoviePlayer({ movie, playUrl, onPlay, onClose }) {
  console.log("MoviePlayer Props:", { movie, playUrl });

  let embedUrl = null;
  let isYouTube = false;

  // ---------- URL HANDLING ----------
  if (playUrl) {
    if (playUrl.includes("youtube.com") || playUrl.includes("youtu.be")) {
      isYouTube = true;

      const videoId = playUrl.includes("watch?v=")
        ? playUrl.split("watch?v=")[1].split("&")[0]
        : playUrl.split("/").pop();

      embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1&controls=1`;
    } else {
      embedUrl = playUrl; // mp4 or other video
    }
  } else if (movie?.videoId) {
    isYouTube = true;
    embedUrl = `https://www.youtube.com/embed/${movie.videoId}?autoplay=1&mute=1&modestbranding=1&rel=0&controls=1`;
  }

  console.log("Embed URL:", embedUrl);

  // ---------- ESC KEY CLOSE ----------
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // ---------- CLOSE HANDLER ----------
  const handleClose = () => {
    onClose(); // parent should reset playUrl
  };

  return (
    <>
      {/* MODAL */}
      <div className="modal fade show d-block" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-lg-down">
          <div className="modal-content bg-dark text-white rounded-4 overflow-hidden position-relative">

            {/* CLOSE BUTTON */}
            <button
              className="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3"
              onClick={handleClose}
            />

            {/* ---------- BANNER ---------- */}
            {!playUrl ? (
              <div
                className="position-relative"
                style={{
                  height: "450px",
                  backgroundImage: `
                    linear-gradient(to top, rgba(0,0,0,.85), rgba(0,0,0,.2)),
                    url(${movie?.thumbnail})
                  `,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="position-absolute bottom-0 p-4">
                  <h1 className="fw-bold">{movie?.title}</h1>

                  <button
                    className="btn btn-light fw-semibold px-4 mt-3 d-flex align-items-center"
                    onClick={() => onPlay(movie)}
                  >
                    <FaCirclePlay className="me-2" /> Play
                  </button>
                </div>
              </div>
            ) : (
              /* ---------- VIDEO PLAYER ---------- */
              <div className="w-100 position-relative">

                {/* TOP BAR */}
                <div className="position-absolute text-left d-flex top-0 start-0 w-100 px-3 py-3 bg-dark z-2">
                  <span className="fw-semibold">{movie?.title}</span>
                </div>

                {/* VIDEO */}
                {isYouTube ? (
                  <iframe
                    className="w-100 border-0"
                    style={{ height: "450px" }}
                    src={embedUrl}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Movie Player"
                  />
                ) : (
                  <video
                    className="w-100"
                    style={{ height: "450px", objectFit: "cover" }}
                    src={embedUrl}
                    controls
                    autoPlay
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* BACKDROP */}
      <div className="modal-backdrop text-light" onClick={handleClose}></div>
    </>
  );
}