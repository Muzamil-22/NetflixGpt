import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="MovieListBg">
      <div className="MovieListCards">
        <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies} />
        <MovieList title={"UpComing"} movies={movies.UpcomingMovies} />
        <MovieList title={"Top Rated"} movies={movies.TopRatedMovies} />
        <MovieList title={"Popular"} movies={movies.PopularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
