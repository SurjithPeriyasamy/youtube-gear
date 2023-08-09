import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => dispatch(toggleMenu());

  return (
    <div className="grid grid-flow-col  p-3 m-2 shadow-lg">
      <div className="flex items-center col-span-1 ">
        <img
          className="h-10 cursor-pointer hover:bg-gray-300 p-2"
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
      <div className="flex col-span-10 place-content-center p-2">
        <input
          placeholder="Search"
          className="px-3 border border-gray-500 w-1/2 rounded-l-full"
          type="text"
        />
        <button className="px-2 bg-gray-200 border border-gray-500 rounded-r-full">
          <img
            className="h-5"
            alt="search"
            src="https://cdn-icons-png.flaticon.com/512/2811/2811806.png"
          />
        </button>
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
