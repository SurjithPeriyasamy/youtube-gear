import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeUserForm, openMenu, toggleMenu } from "../utils/appSlice";
import { DEFAULT_PROFILE } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { toggleUserForm } from "../utils/appSlice";
import UserPage from "./UserPage";
import SearchBar from "./SearchBar";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleForm = useSelector((store) => store.app.isUserFormOpen);

  const user = useSelector((store) => store.user.loginUser);

  const { setShowSuggestion } = useContext(UserContext);

  const toggleMenuHandler = () => dispatch(toggleMenu());

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="grid grid-flow-col fixed top-0 right-0 left-0 bg-white p-3 mx-1 z-10 shadow-lg">
      <div
        onClick={() => {
          setShowSuggestion(false);
          dispatch(closeUserForm());
        }}
        className="flex items-center col-span-4 "
      >
        <img
          className="h-10 cursor-pointer hover:bg-gray-300 hover:rounded-md p-2"
          alt="HamburgerButton"
          src="https://cdn-icons-png.flaticon.com/512/6015/6015685.png"
          onClick={toggleMenuHandler}
        />
        <Link
          onClick={() => {
            dispatch(openMenu());
          }}
          className="mx-2"
          to="/"
        >
          <img
            className="h-12 w-full "
            alt="logo"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </Link>
      </div>
      <div
        onClick={() => dispatch(closeUserForm())}
        className="w-full relative col-span-4 flex justify-center flex-col"
      >
        <SearchBar />
      </div>
      <div
        onClick={() => setShowSuggestion(false)}
        className="flex justify-end items-center col-span-4 p-1 "
      >
        {user ? (
          <>
            <img
              onClick={() => dispatch(toggleUserForm())}
              className="h-8 rounded-full cursor-pointer"
              alt="User"
              src={user.profile}
            />
            {toggleForm && <UserPage />}
          </>
        ) : (
          <div
            className="flex font-semibold text-blue-500 cursor-pointer border-2 items-center border-blue-600 rounded-full p-1"
            onClick={handleLogin}
          >
            <img
              className="h-6 rounded-full cursor-pointer"
              alt="User"
              src={DEFAULT_PROFILE}
            />
            <span>Sign In</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
