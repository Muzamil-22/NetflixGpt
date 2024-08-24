import { useDispatch } from "react-redux";
import { addPopularMovies, addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();

    dispatch(addUpcomingMovies(jsonData.results));
  };

  useEffect(() => {
    getMovieList();
  }, []);
};

export default useUpcomingMovies;
