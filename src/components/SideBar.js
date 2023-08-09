import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early Return pattern
  if (!isMenuOpen) return null;
  return (
    <div className="w-48 shadow-lg bg-gray-200 p-2 shrink-0">
      <ul className="border border-b-gray-400 p-2">
        <li className="font-bold">
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <ul className="border border-b-gray-400 p-2">
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
      </ul>
      <div className="border border-b-gray-400 p-2">
        <h1 className="font-semibold text-md">Subscription</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
      <div className="border border-b-gray-400 p-2">
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
