import { FaCirclePlay } from "react-icons/fa6";

export default function MoviePlayer({ movie, playUrl, onPlay, onClose }) {
  console.log("MoviePlayer Props:", { movie, playUrl });

  let embedUrl = null;

  if (playUrl) {
    embedUrl = playUrl.includes("youtube.com")
      ? playUrl.replace("watch?v=", "embed/") +
        "?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3"
      : playUrl;
  } else if (movie?.videoId) {
    embedUrl = `https://www.youtube.com/embed/${movie.videoId}?autoplay=1&modestbranding=1&rel=0&controls=0`;
  }

  console.log("Embed URL:", embedUrl);

  return (
    <>
      {/* MODAL */}
      <div className="modal fade show d-block border border-light" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-lg-down">
          <div className="modal-content bg-dark text-white rounded-4 border border-light overflow-hidden position-relative">

            {/* CLOSE BUTTON */}
            <button
              className="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3"
              onClick={onClose}
            />

            {/* BANNER OR VIDEO */}
            {!playUrl ? (
              /* ---------- BANNER ---------- */
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

                  {/* Debug remove later */}
                  {/* <pre>{JSON.stringify(movie, null, 2)}</pre> */}

                  <button
                    className="btn btn-light fw-semibold px-4 mt-3 d-flex align-items-center"
                    onClick={() => onPlay(movie)} // ✅ pass movie if needed
                  >
                    <FaCirclePlay className="me-2" /> Play
                  </button>
                </div>
              </div>
            ) : (
              /* ---------- VIDEO ---------- */
              <div className="ratio ratio-16x9 position-relative">

                {/* TOP OVERLAY */}
                <div className="position-absolute top-0 start-0 w-100 px-3 py-2 bg-dark bg-opacity-75 z-2">
                  <span className="fw-semibold">{movie?.title}</span>
                </div>

                <iframe
                  className="w-100 h-100 border-0"
                  src={embedUrl}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Movie Player"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* BACKDROP */}
      <div className="modal-backdrop fade show"></div>
    </>
  );
}