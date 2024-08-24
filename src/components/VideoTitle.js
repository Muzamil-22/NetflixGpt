const VideoTitle = ({ title, overview }) => {
  return (
    <div className="VideoTitle">
      <h1 className="movieTitle">{title}</h1>
      <p className="MovieOverview">{overview}</p>
      <div className="InfoPlay-bt">
        <button className="Display-bt">► Play</button>
        <button className="Display-bt moreInfo">More info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
