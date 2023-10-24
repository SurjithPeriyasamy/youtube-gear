import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const UserPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.loginUser);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {});
  };
  return (
    <div className="flex flex-col gap-y-3 tracking-wide bg-gray-100 min-w-[15%]  xl:top-3 xl:right-14 top-16 h-fit absolute rounded-lg shadow-2xl p-2">
      <h1 className="text-center italic font-bold text-blue-500  [text-shadow:_0_5px_2px_gray]">
        Have <span className="text-red-500">Fun</span> 🫰
      </h1>
      <div className="p-2 flex gap-x-3">
        <img className="h-10" alt="user" src={user.profile} />
        <div className="font-semibold">
          <h1>{user.email}</h1>
          <h2>{user.name}</h2>
        </div>
      </div>
      <button
        onClick={handleSignOut}
        className="bg-green-300 hover:bg-blue-200 w-full p-1 rounded-lg font-medium"
      >
        Sign out
      </button>
    </div>
  );
};

export default UserPage;
