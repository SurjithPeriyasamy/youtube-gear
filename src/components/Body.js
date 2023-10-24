import React, { useEffect } from "react";
import SideBar from "./SideBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { closeUserForm } from "../utils/appSlice";
import Header from "./Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setShowSuggestion } = useContext(UserContext);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is Signed In
        dispatch(
          addUser({
            name: user.displayName,
            email: user.email,
            profile: user.photoURL,
          })
        );
        navigate("/");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });

    return () => unSubscribe();
  }, []);

  return (
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
  );
};

export default Body;
