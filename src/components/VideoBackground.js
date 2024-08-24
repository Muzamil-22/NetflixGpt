import { useDispatch, useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ id }) => {
  const trailerVideo = useSelector((store) => store.movies.TrailerVideo);

  useTrailerVideo(id);

  return (
    <div className="VideoBackground">
      <iframe
        width="100%"
        height="100%"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?rel=0&autoplay=1&mute=1&controls=0&fs=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
