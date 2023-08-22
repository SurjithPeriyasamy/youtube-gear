import React from "react";
import { useState } from "react";
import InputForSign from "./InputForSign";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const SignInPage = () => {
  const [userPassword, setUserPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [userEmail, setUserEmail] = useState("");

  const [error, setError] = useState(false);

  const [existError, setExistError] = useState(false);

  const [misMatchError, setMissMatchError] = useState(false);

  const { setLoggedInUser, setSignUpForm, setShowUser, setSignInForm } =
    useContext(UserContext);

  const userDetails = useSelector((store) => store.user.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    userEmail === "" && userPassword === "" ? setError(true) : setError(false);
    const storedUser = userDetails.find((u) => u.email === userEmail);
    if (storedUser) {
      setLoggedInUser(storedUser);
      if (
        storedUser.email === userEmail &&
        storedUser.password === userPassword
      ) {
        setShowUser(true);
        setSignInForm(false);
      } else {
        setMissMatchError(true);
      }
    } else {
      setExistError(true);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} id="user">
        <h1 className="skew-x-12 text-center font-bold text-blue-500  [text-shadow:_0_5px_2px_gray]">
          Welcome <span className="text-red-500">Buddy</span> 🫰
        </h1>
        <InputForSign
          labelName={"Email"}
          placeholderName={"eg.. surjith123@gmail.com"}
          typeName={"email"}
          value={userEmail}
          setValue={setUserEmail}
        />
        {existError && (
          <div className="text-xs text-red-600">No user Found ⏬</div>
        )}
        <label className="font-medium text-sm">Password</label>
        <div className="border-b-2 border-blue-400 flex w-[95%]">
          <input
            placeholder="Enter password"
            className="placeholder:text-sm text-red-600 mx-1 bg-transparent focus:outline-none "
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
          />
          <span
            className="cursor-pointer text-lg"
            onClick={() =>
              showPassword ? setShowPassword(false) : setShowPassword(true)
            }
          >
            👁️‍🗨️
          </span>
        </div>
        {misMatchError && (
          <div className="text-xs text-red-600">Enter Valid Password</div>
        )}
        {error && (
          <div className="text-xs text-red-600">
            Please Fill all input fields
          </div>
        )}
        <button className="font-semibold mt-5 hover:bg-blue-300 bg-slate-300 block w-full  py-1 my-2 rounded-lg">
          Sign In
        </button>
      </form>
      <div className="font-semibold text-sm">
        Create a new account ?
        <span
          onClick={() => {
            setSignUpForm(true);
            setSignInForm(false);
          }}
          className="text-green-600 text-base cursor-pointer mx-1"
        >
          SignUp
        </span>
      </div>
    </div>
  );
};

export default SignInPage;
