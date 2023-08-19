import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenu, toggleMenu } from "../utils/appSlice";
import {
  USER_PROFILE,
  DEFAULT_PROFILE,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [search, setSearch] = useState("");

  const [searchSuggestion, setSearchSuggestion] = useState([]);

  const [showLoginBox, setShowLoginbox] = useState(false);

  const [logUserName, setlogUserName] = useState("");

  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search.results);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[search]) {
        setSearchSuggestion(searchCache[search]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [search]);
  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + search);
    const json = await data.json();
    setSearchSuggestion(json[1]);
    dispatch(
      cacheResults({
        [search]: json[1],
      })
    );
  };

  const {
    suggestion,
    setShowSuggestion,
    loggedInUser,
    setUserName,
    login,
    setLogin,
  } = useContext(UserContext);

  const toggleMenuHandler = () => dispatch(toggleMenu());

  return (
    <div className="grid grid-flow-col fixed top-0 right-0 left-0 bg-white p-3 mx-1 z-10 shadow-lg">
      <div
        onClick={() => setShowSuggestion(false)}
        className="flex items-center col-span-4 "
      >
        <img
          className="h-10 cursor-pointer hover:bg-gray-300 hover:rounded-md p-2"
          alt="HamburgerButton"
          src="https://cdn-icons-png.flaticon.com/512/6015/6015685.png"
          onClick={toggleMenuHandler}
        />
        <Link onClick={() => dispatch(openMenu())} to="/">
          <img
            className="h-12 mx-3"
            alt="logo"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </Link>
      </div>
      <form className="w-full relative col-span-4 pt-2 flex flex-col">
        <div className="flex">
          <input
            placeholder="Search"
            className="w-full shadow-inner px-3 py-1 border border-gray-400 focus:outline-blue-300 rounded-l-full"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
          />
          <Link to={"/results?search_query=" + search}>
            <button className="w-14 p-2 bg-gray-200 border border-gray-400 hover:bg-gray-300 rounded-r-full">
              <img
                className="m-auto h-5"
                alt="search"
                src="https://cdn-icons-png.flaticon.com/512/2811/2811806.png"
              />
            </button>
          </Link>
        </div>
        {search !== "" && suggestion && (
          <div className="absolute top-12 w-[91%] left-0  bg-white py-2 shadow-lg rounded-lg border border-gray-200">
            <ul>
              {searchSuggestion.map((s) => (
                <li key={s} onClick={() => setShowSuggestion(false)}>
                  <Link
                    to={"/results?search_query=" + s}
                    className="flex my-1 py-2 hover:bg-gray-200 items-center font-semibold"
                  >
                    <img
                      className="h-5 px-2"
                      alt="search"
                      src="https://cdn-icons-png.flaticon.com/512/2811/2811806.png"
                    />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>
      <div
        onClick={() => setShowSuggestion(false)}
        className="relative flex justify-end col-span-4 p-1"
      >
        <img
          onClick={() =>
            showLoginBox ? setShowLoginbox(false) : setShowLoginbox(true)
          }
          className="h-8 float-right mr-[20%] rounded-full cursor-pointer"
          alt="User"
          src={login ? USER_PROFILE : DEFAULT_PROFILE}
        />
        {showLoginBox && (
          <div className=" bg-gray-200 right-[30%] w-60 h-40 absolute rounded-lg shadow-2xl p-2">
            {login ? (
              <div className="flex flex-col gap-y-3">
                <div className="p-2 flex gap-3 items-center">
                  <img className="h-10" alt="user" src={USER_PROFILE} />
                  <div>
                    <h2 className="font-semibold">{loggedInUser}</h2>
                    <h3>{loggedInUser}@Enjoy🚀</h3>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setUserName("");
                    setLogin(false);
                    setlogUserName("");
                    setShowLoginbox(false);
                  }}
                  className="bg-green-300 hover:bg-blue-200 w-full p-1 rounded-lg font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setUserName(logUserName);
                  logUserName && setLogin(true);
                  !logUserName ? setError(true) : setError(false);
                }}
                id="user"
              >
                <label className="font-semibold">User Name</label>
                <input
                  placeholder="Type Your Name..."
                  className="text-red-600  border-b-2 border-blue-400 mx-1  bg-transparent focus:outline-none "
                  value={logUserName}
                  onChange={(e) => setlogUserName(e.target.value)}
                  type="text"
                />
                {error && (
                  <div className="text-xs text-red-600">Enter Valid Name</div>
                )}
                <button className=" mt-5 hover:bg-blue-300 bg-slate-300 block w-full  py-1 my-2 rounded-lg">
                  Login
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
