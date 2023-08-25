import React from "react";
import { USER_PROFILE } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { closeUserForm } from "../utils/appSlice";

const UserPage = () => {
  const { loggedInUser, setLoggedInUser, setSignInForm, setShowLogin } =
    useContext(UserContext);

  const dispatch = useDispatch();
  //console.log(loggedInUser);
  return (
    <div className="flex flex-col gap-y-3 bg-gray-100 min-w-[15%]  xl:top-3 xl:right-14 top-16 h-fit absolute rounded-lg shadow-2xl p-2">
      <h1 className="text-center italic font-bold text-blue-500  [text-shadow:_0_5px_2px_gray]">
        Have <span className="text-red-500">Fun</span> 🫰
      </h1>
      <div className="p-2 flex gap-x-3">
        <img className="h-10" alt="user" src={USER_PROFILE} />
        <div>
          <h1 className="font-semibold">{loggedInUser.email}</h1>
          <h2>{loggedInUser.name}</h2>
        </div>
      </div>
      <button
        onClick={() => {
          setSignInForm(true);
          setShowLogin(false);
          setLoggedInUser(null);
          dispatch(closeUserForm());
        }}
        className="bg-green-300 hover:bg-blue-200 w-full p-1 rounded-lg font-medium"
      >
        Sign out
      </button>
    </div>
  );
};

export default UserPage;
