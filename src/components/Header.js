import { useDispatch, useSelector } from "react-redux";
import {
  HAMBURGER_ICON,
  MOSTPOPULAR_VIDEOS,
  USER_ICON,
  VOICE_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCHAPI,
} from "../utils/constants";
import { isOpenMenu } from "../utils/navSlice";
import { addVideos } from "../utils/video";
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const NavBar = () => {
    dispatch(isOpenMenu());
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCHAPI + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(
      () =>
        cache[searchQuery]
          ? setSuggestions(cache[searchQuery])
          : getSearchSuggestions(),
      200
    );
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const HandelVideos = async () => {
    const data = await fetch(MOSTPOPULAR_VIDEOS);
    const json = await data.json();
    dispatch(addVideos(json.items));
  };

  useEffect(() => {
    HandelVideos();
  }, []);

  return (
    <div className="grid grid-flow-col p-2 shadow-lg items-center">
      <div className="flex col-span-2">
        <img
          src={HAMBURGER_ICON}
          alt="menu"
          className="w-10 h-10 mx-2 cursor-pointer"
          onClick={() => NavBar()}
        />
        <img
          src={YOUTUBE_LOGO}
          alt="youtube-logo"
          className="w-32 h-8 mt-1 mx-2"
        />
      </div>
      <div className="col-span-9">
        <div className="flex ml-20">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="my-2 w-1/2 h-10 px-4 border border-black rounded-l-full bg-gray-100"
          />
          <button className="border border-black rounded-r-full my-2 p-2 h-10 bg-gray-100">
            🔍
          </button>
          <img
            src={VOICE_ICON}
            alt="voice-icon"
            className="w-8 h-8 mt-3 mx-3"
          />
        </div>
        {showSuggestions && suggestions.length > 1 && (
          <div className="absolute ml-20 bg-white w-[30rem] p-2 shadow-lg rounded-lg">
            <ul className="m-2">
              {suggestions.map((suggestion) => (
                <li key={suggestion} className="hover:bg-gray-200">
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 justify-self-end pr-2">
        <img src={USER_ICON} alt="user" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default Header;
