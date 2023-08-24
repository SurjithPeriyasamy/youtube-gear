import React from "react";
import SignUpPage from "./SignUpPage";
import SignInPage from "./SignInPage";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Login = () => {
  const { signUpForm, signInForm } = useContext(UserContext);
  return (
    <div className="flex justify-center items-center h-screen p-2 bg-orange-50">
      <div className="flex flex-wrap basis-1/2 justify-center items-center">
        <div className="basis-1/2">
          <img
            className="h-auto w-full"
            alt="logo"
            src="https://www.freepnglogos.com/uploads/youtube-logo-png/youtube-transparent-youtube-icon-29.png"
          ></img>
        </div>
        <div className="basis-1/2 h-auto max-w-sm rounded-xl shadow-[-30px_0_30px_5px_rgba(0,0,0,0.3)] bg-white p-3">
          {signUpForm && <SignUpPage />}
          {signInForm && <SignInPage />}
        </div>
      </div>
    </div>
  );
};

export default Login;
