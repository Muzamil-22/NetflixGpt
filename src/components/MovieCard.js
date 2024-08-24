import { POSTER_PATH } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div>
      <img
        className="MovieCard"
        alt="Not rendered"
        src={POSTER_PATH + posterPath}
      ></img>
    </div>
  );
};

export default MovieCard;
