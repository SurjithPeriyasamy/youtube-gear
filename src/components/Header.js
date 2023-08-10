import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const [search, setSearch] = useState("");

  const [searchSuggestion, setSearchSuggestion] = useState([]);

  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => clearTimeout(timer);
  }, [search]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + search);
    const json = await data.json();
    setSearchSuggestion(json[1]);
  };
  const toggleMenuHandler = () => dispatch(toggleMenu());

  return (
    <div className="grid grid-flow-col fixed top-0 right-0 left-0 bg-white p-3 mx-1 z-10 shadow-lg">
      <div className="flex items-center col-span-1 ">
        <img
          className="h-10 cursor-pointer hover:bg-gray-300 hover:rounded-md p-2"
          alt="HamburgerButton"
          src="https://cdn-icons-png.flaticon.com/512/6015/6015685.png"
          onClick={toggleMenuHandler}
        />
        <img
          className="h-12 mx-3"
          alt="logo"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
        />
      </div>
      <div className="col-span-10 pt-2 relative flex flex-col">
        <div className="flex  place-content-center ">
          <input
            placeholder="Search"
            className="px-3 py-1 border border-gray-400 focus:outline-blue-300  w-1/2 rounded-l-full relative"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="px-2 bg-gray-200 border border-gray-400 hover:bg-gray-300 rounded-r-full">
            <img
              className="h-5"
              alt="search"
              src="https://cdn-icons-png.flaticon.com/512/2811/2811806.png"
            />
          </button>
        </div>
        {search !== "" && showSuggestion && (
          <div className="absolute top-11 mr-6 self-center w-2/4  bg-white py-2  shadow-lg rounded-lg border border-gray-200 ">
            <ul>
              {searchSuggestion.map((suggestion) => (
                <li
                  key={suggestion}
                  className="flex my-1 py-2 hover:bg-gray-200 items-center font-semibold"
                >
                  <img
                    className="h-5 px-2"
                    alt="search"
                    src="https://cdn-icons-png.flaticon.com/512/2811/2811806.png"
                  />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 place-self-center">
        <img
          className="h-8"
          alt="User"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        />
      </div>
    </div>
  );
};

export default Header;
