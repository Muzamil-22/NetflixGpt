import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptMovies, tmdbMovies } = useSelector((store) => store.gptSearch);

  return (
    tmdbMovies && (
      <div className="GptMovieSuggestions MovieListCards">
        {tmdbMovies.map((movieArray, index) => (
          <MovieList
            key={gptMovies[index]}
            title={gptMovies[index]}
            movies={movieArray}
          />
        ))}
      </div>
    )
  );
};

export default GptMovieSuggestions;
