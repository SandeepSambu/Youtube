import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className="shadow-xl pr-28 pl-4 py-2">
      <Link to="/">
        <h1 className="m-2">Home</h1>
      </Link>
      <Link to="/">
        <h1 className="m-2">Shorts</h1>
      </Link>
      <Link to="/">
        <h1 className="m-2">Subscriptions</h1>
      </Link>
      <h1 className="font-bold mt-2">You</h1>
      <ul className="m-2">
        <li className="m-2">Your Channel</li>
        <li className="m-2">History</li>
        <li className="m-2">Playlists</li>
        <li className="m-2">Your Videos</li>
        <li className="m-2">Watch Later</li>
        <li className="m-2">Liked Videos</li>
      </ul>
      <h1 className="font-bold">Subscriptions</h1>
      <ul className="m-2">
        <li className="m-2">Your Channel</li>
        <li className="m-2">History</li>
        <li className="m-2">Playlists</li>
        <li className="m-2">Your Videos</li>
        <li className="m-2">Watch Later</li>
        <li className="m-2">Liked Videos</li>
      </ul>
    </div>
  );
};

export default SideBar;
