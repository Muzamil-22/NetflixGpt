import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addMovieSearchResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.language.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const tmdbSearch = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearch = async () => {
    console.log(searchText);
    console.log(searchText?.current?.value);

    const gptQuery =
      "Imagine you are an Movie suggestion bot. Example result: Hera pheri, golmal, Andaz apna apna.Give only 5 movie titles with comma seperated and no quotes or numbers as initials. Here's the prompt, " +
      searchText?.current?.value;

    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion.choices);

    const gptMovies = chatCompletion.choices[0].message.content.split(",");
    console.log(gptMovies);

    const promiseArray = gptMovies.map((movie) => tmdbSearch(movie));
    const tmdbMovieSuggestions = await Promise.all(promiseArray);
    console.log(tmdbMovieSuggestions);

    // const filteredMovieResults = tmdbMovieSuggestions.map((movieArr, index) => {
    //   return movieArr.filter((movie) => movie?.title === gptMovies[index]);
    // });

    // const filteredMovieResults = tmdbMovieSuggestions
    //   .map((movieArr, index) => {
    //     return movieArr.filter((movie) => movie?.title === gptMovies[index]);
    //   })
    //   .flat();

    // console.log(filteredMovieResults);

    dispatch(
      addMovieSearchResults({
        gptMovies: gptMovies,
        tmdbMovies: tmdbMovieSuggestions,
      })
    );
  };

  return (
    <div className="gptSearchBar">
      <form className="gptSearchForm" onClick={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptPlaceholder}
          className="gptSearchInput"
        ></input>
        <button className="gptSearch-bt" onClick={handleGptSearch}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
