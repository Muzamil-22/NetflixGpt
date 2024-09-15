import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const NowPlayingMovies = useSelector(
    (store) => store.movies.NowPlayingMovies
  );

  const getMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();

    dispatch(addNowPlayingMovies(jsonData.results));
  };

  useEffect(() => {
    !NowPlayingMovies && getMovieList();
  }, []);
};

export default useNowPlayingMovies;
