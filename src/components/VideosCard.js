import { useSelector } from "react-redux";

const VideosCard = ({ video }) => {
  const nav = useSelector((store) => store.nav.isMenuOpen);
  if (!video) return null;

  const { snippet, statistics } = video;

  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="p-2">
      <img
        className={
          nav ? "rounded-lg w-[400px] h-56" : "rounded-lg w-[480px] h-62"
        }
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <h1 className="font-bold pt-2 w-[300px]">{title}</h1>
      <h2>{channelTitle}</h2>
      <h3>{Math.floor(statistics.viewCount / 1000)}k views</h3>
    </div>
  );
};

export default VideosCard;
