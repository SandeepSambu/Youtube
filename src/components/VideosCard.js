import { useSelector } from "react-redux";

const VideosCard = ({ video }) => {
  const nav = useSelector((store) => store.nav.isMenuOpen);
  if (!video) return null;

  const { snippet, statistics, contentDetails } = video;

  const { title, thumbnails, channelTitle } = snippet;

  const time = contentDetails.duration;

  let hours = "";

  let minutes = "";

  let seconds = "";

  for (var i = time.length - 1; i >= 0; i--) {
    if (time[i] === "S") {
      seconds +=
        time[i - 2] === "M" ? "0" + time[i - 1] : time[i - 2] + time[i - 1];
    }
    if (time[i] === "M") {
      minutes +=
        time[i - 2] === "H" || time[i - 2] === "T"
          ? time[i - 1]
          : time[i - 2] + time[i - 1];
    }
    if (time[i] === "H") {
      hours += time[i - 2] === "T" ? time[i - 1] : time[i - 2] + time[i - 1];
    }
  }

  minutes.length === 0 ? (minutes += "0") : (minutes += "");
  seconds.length === 0 ? (seconds += "00") : (seconds += "");

  return (
    <div className="relative">
      <div className="p-2">
        <img
          className={`rounded-lg ${nav ? "w-[400px] h-56" : "w-[480px] h-62"}`}
          src={thumbnails.medium.url}
          alt="thumbnail"
        />
        <p
          className={`bg-black text-white text-center rounded-md absolute -my-9 ${
            nav ? "mx-[350px]" : "mx-[430px]"
          } ${hours ? "w-20" : "w-11"}`}
        >
          {(hours && hours + ":") + minutes + ":" + seconds}
        </p>
      </div>

      <h1 className="font-bold pt-2 w-[300px]">{title}</h1>
      <h2>{channelTitle}</h2>
      <h3>{Math.floor(statistics.viewCount / 1000)}k views</h3>
    </div>
  );
};

export default VideosCard;
