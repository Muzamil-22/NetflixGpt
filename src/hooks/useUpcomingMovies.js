import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const UpcomingMovies = useSelector((store) => store.movies.UpcomingMovies);

  const getMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();

    dispatch(addUpcomingMovies(jsonData.results));
  };

  useEffect(() => {
    !UpcomingMovies && getMovieList();
  }, []);
};

export default useUpcomingMovies;
