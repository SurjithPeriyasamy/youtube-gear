import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSearchSuggestion } from "../utils/useSearchSuggestion";
const SearchBar = () => {
  const { suggestion, setShowSuggestion } = useContext(UserContext);
  const { search, setSearch, searchSuggestion } = useSearchSuggestion();

  return (
    <div>
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
  );
};

export default SearchBar;
