export default function MovieCard({ movie, onPlay }) {
  return (
    <div className="card bg-dark text-white border-0">
      <img src={movie.thumbnail} className="card-img-top" alt={movie.title} />

      <div className="card-body">
        <h5>{movie.title}</h5>
        <p className="text-muted">{movie.description}</p>

        <button className="btn btn-danger" onClick={onPlay}>
          ▶ Play
        </button>
      </div>
    </div>
  );
}
