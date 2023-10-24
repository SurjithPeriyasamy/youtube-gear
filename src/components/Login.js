import React from "react";
import SignUpPage from "./SignUpPage";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen p-2 bg-gray-900">
      <div className="flex flex-wrap w-11/12 justify-center items-center">
        <div className="basis-1/2">
          <Link to={"/"}>
            <img
              className="h-auto w-full"
              alt="logo"
              src="https://www.freepnglogos.com/uploads/youtube-logo-png/youtube-transparent-youtube-icon-29.png"
            ></img>
          </Link>
        </div>
        <div className="basis-1/2 h-auto max-w-sm rounded-xl shadow-[-30px_0_30px_5px_rgba(0,0,0,0.3)] bg-gray-200 p-3">
          <SignUpPage />
        </div>
      </div>
    </div>
  );
};

export default Login;
