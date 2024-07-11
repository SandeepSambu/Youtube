import VideosCard from "./VideosCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const videos = useSelector((store) => store.vid.videos);

  return !videos ? null : (
    <div className="m-2 flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideosCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
