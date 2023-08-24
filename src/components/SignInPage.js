import React from "react";
import { useState } from "react";
import InputForSign from "./InputForSign";
import { useDispatch, useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { closeUserForm } from "../utils/appSlice";

const SignInPage = () => {
  const [userPassword, setUserPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [userEmail, setUserEmail] = useState("");

  const [error, setError] = useState(false);

  const [existError, setExistError] = useState(false);

  const [misMatchError, setMissMatchError] = useState(false);

  const dispatch = useDispatch();

  const { setLoggedInUser, setSignUpForm, setSignInForm, setShowLogin } =
    useContext(UserContext);

  const userDetails = useSelector((store) => store.user.users);
  //console.log(userDetails);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = userDetails.find((u) => u.email === userEmail);
    if (userEmail !== "" && userPassword !== "") {
      setError(false);
      if (storedUser) {
        if (
          storedUser.email === userEmail &&
          storedUser.password === userPassword
        ) {
          setLoggedInUser(storedUser);
          setSignInForm(false);
          setShowLogin(false);
          dispatch(closeUserForm());
        } else {
          setMissMatchError(true);
        }
      } else {
        setExistError(true);
      }
    } else {
      setExistError(false);
      setError(true);
    }
  };
  return (
    <div className="w-full">
      <form onSubmit={(e) => handleSubmit(e)} id="signin">
        <h1 className="skew-x-12 text-lg text-center font-bold text-red-600  [text-shadow:_0_5px_2px_gray]">
          Welcome <span className="text-green-700">Buddy</span> 🫰
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
        <div className="my-5 ">
          <label className="font-medium text-sm block">Password</label>
          <div className="border-b border-gray-500  flex justify-between">
            <input
              placeholder="Enter password"
              className="text-gray-700 placeholder:text-sm mx-1 bg-transparent focus:outline-none "
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
        </div>

        {misMatchError && (
          <div className="text-xs text-red-600">Enter Valid Password</div>
        )}
        {error && (
          <div className="text-xs text-red-600">
            Please Fill all input fields
          </div>
        )}

        <button className="font-semibold mt-10 hover:bg-blue-300 bg-slate-300 block w-full  py-1 my-2 rounded-lg">
          Sign In
        </button>
      </form>
      <div className="font-semibold mt-10 text-sm">
        Create a new account ?
        <span
          onClick={() => {
            setSignUpForm(true);
            setSignInForm(false);
          }}
          className="text-blue-500 text-base cursor-pointer mx-1"
        >
          Sign up
        </span>
      </div>
    </div>
  );
};

export default SignInPage;
