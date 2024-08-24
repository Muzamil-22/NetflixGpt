import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div>
        <h3 className="MovieListTitle">{title}</h3>
        <div className="MovieCardRow">
          {movies.map((movie) => (
            <MovieCard
              key={movie?.poster_path}
              title={title}
              posterPath={movie?.poster_path}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default MovieList;
