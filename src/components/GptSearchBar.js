import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.language.lang);
  return (
    <div className="gptSearchBar">
      <form className="gptSearchForm">
        <input
          type="text"
          placeholder={lang[langKey].gptPlaceholder}
          className="gptSearchInput"
        ></input>
        <button className="gptSearch-bt" onClick={(e) => e.preventDefault()}>
          {" "}
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
