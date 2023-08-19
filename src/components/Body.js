import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {
  const { setShowSuggestion } = useContext(UserContext);

  return (
    <div onClick={() => setShowSuggestion(false)} className="flex m-2">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
