import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeUserForm, openMenu, toggleMenu } from "../utils/appSlice";
import {
  DEFAULT_PROFILE,
  USER_PROFILE,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { toggleUserForm } from "../utils/appSlice";
import UserPage from "./UserPage";

const Header = () => {
  const [search, setSearch] = useState("");

  const [searchSuggestion, setSearchSuggestion] = useState([]);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search.results);
  const toggleForm = useSelector((store) => store.app.isUserFormOpen);

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

  const { suggestion, loggedInUser, setShowSuggestion, setShowLogin } =
    useContext(UserContext);

  const toggleMenuHandler = () => dispatch(toggleMenu());

  return (
    <div className="grid grid-flow-col fixed top-0 right-0 left-0 bg-white p-3 mx-1 z-10 shadow-lg">
      <div
        onClick={() => {
          setShowSuggestion(false);
          dispatch(closeUserForm());
        }}
        className="flex items-center col-span-4 "
      >
        <img
          className="h-10 cursor-pointer hover:bg-gray-300 hover:rounded-md p-2"
          alt="HamburgerButton"
          src="https://cdn-icons-png.flaticon.com/512/6015/6015685.png"
          onClick={toggleMenuHandler}
        />
        <Link
          onClick={() => {
            dispatch(openMenu());
            setSearch("");
          }}
          className="mx-2"
          to="/"
        >
          <img
            className="h-12 w-full "
            alt="logo"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </Link>
      </div>
      <div
        onClick={() => dispatch(closeUserForm())}
        className="w-full relative col-span-4 flex justify-center flex-col"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShowSuggestion(false);
          }}
          id="search"
          className="flex"
        >
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
        </form>
        {search !== "" && suggestion && (
          <div className="absolute top-12 w-[91%]  bg-white py-2 shadow-lg rounded-lg border border-gray-200">
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
      </div>
      <div
        onClick={() => setShowSuggestion(false)}
        className="flex justify-end items-center col-span-4 p-1 "
      >
        {loggedInUser ? (
          <img
            onClick={() => dispatch(toggleUserForm())}
            className="h-8 rounded-full cursor-pointer"
            alt="User"
            src={USER_PROFILE}
          />
        ) : (
          <div
            className="flex font-semibold text-blue-500 cursor-pointer border items-center border-blue-600 rounded-full p-1"
            onClick={() => setShowLogin(true)}
          >
            <img
              className="h-6 rounded-full cursor-pointer"
              alt="User"
              src={DEFAULT_PROFILE}
            />
            <span>Sign In</span>
          </div>
        )}

        {toggleForm && <UserPage />}
      </div>
    </div>
  );
};

export default Header;
