import React from "react";
import { USER_PROFILE } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const UserPage = () => {
  const { setShowUser, loggedInUser, setLoggedInUser, setSignInForm } =
    useContext(UserContext);
  //console.log(loggedInUser);
  return (
    <div>
      <div className="flex flex-col gap-y-3">
        <h1 className="text-center italic font-bold text-blue-500  [text-shadow:_0_5px_2px_gray]">
          Have <span className="text-red-500">Fun</span> 🫰
        </h1>
        <div className="p-2 flex gap-3">
          <img className="h-10" alt="user" src={USER_PROFILE} />
          <div>
            <h1 className="font-semibold">{loggedInUser.email}</h1>
            <h2>{loggedInUser.name}</h2>
            <h3 className="font-medium">{loggedInUser.name}@Enjoy🚀</h3>
          </div>
        </div>
        <button
          onClick={() => {
            setShowUser(false);
            setSignInForm(true);
            setLoggedInUser(null);
          }}
          className="bg-green-300 hover:bg-blue-200 w-full p-1 rounded-lg font-medium"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserPage;
