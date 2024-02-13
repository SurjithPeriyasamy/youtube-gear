import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early Return pattern
  if (!isMenuOpen) return null;
  return (
    <div
      className={`fixed z-30 ${
        isMenuOpen ? "left-0" : "-left-3/4"
      } w-48 shadow-lg bg-white py-3 px-5 h-screen shrink-0`}
    >
      <ul className=" p-2">
        <li className="font-bold">
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <ul className=" p-2">
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
      </ul>
      <div className=" p-2">
        <h1 className="font-semibold text-md">Subscription</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
      <div className=" p-2">
        <h1 className="font-semibold text-md">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Learning</li>
          <li>Fashion & Beauty</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
