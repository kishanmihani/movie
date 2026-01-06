export default function MovieCard({ movie, onPlay }) {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div
        className="card bg-dark text-white border-0 cursor-pointer"
        onClick={() => onPlay(movie)}
      >
        <img
          src={movie?.thumbnail}
          className="card-img-top"
          alt={movie?.title}
        />
        <div className="card-body p-2">
          <h6 className="card-title text-truncate">{movie?.title}</h6>
        </div>
      </div>
    </div>
  );
}
