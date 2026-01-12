const movies = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  image: `https://picsum.photos/300/450?random=${i}`,
}));

export default function MovieRow({ title }) {
  return (
    <div className="container-fluid mt-5">
      <h4 className="mb-3">{title}</h4>

      <div className="d-flex gap-3 overflow-auto pb-2">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={movie.image}
            alt=""
            className="rounded"
            style={{
              width: "180px",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          />
        ))}
      </div>
    </div>
  );
}
