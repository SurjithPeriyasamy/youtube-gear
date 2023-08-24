import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { closeUserForm } from "../utils/appSlice";
import Header from "./Header";
import Login from "./Login";

const Body = () => {
  const dispatch = useDispatch();
  const { setShowSuggestion, showLogin } = useContext(UserContext);

  return (
    <>
      {!showLogin ? (
        <>
          <Header />
          <div
            onClick={() => {
              setShowSuggestion(false);
              dispatch(closeUserForm());
            }}
            className="flex m-2 mt-20"
          >
            <SideBar />
            <Outlet />
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Body;
