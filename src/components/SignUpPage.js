import { useState, useContext } from "react";
import { addUser } from "../utils/userSlice";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import InputForSign from "./InputForSign";

const SignUpPage = () => {
  const [userName, setUserName] = useState("");

  const [userPassword, setUserPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");

  const [userEmail, setUserEmail] = useState("");

  const [errorPassword, setErrorPassword] = useState(false);

  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const { setSignUpForm, setSignInForm } = useContext(UserContext);

  return (
    <div className="">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          userName && userEmail && userPassword
            ? dispatch(
                addUser({
                  name: userName,
                  email: userEmail,
                  password: userPassword,
                })
              )
            : setError(true);
          userPassword !== confirmPassword && setErrorPassword(true);
          setSignInForm(true);
          setSignUpForm(false);
        }}
        id="user"
      >
        <h1 className="text-center font-bold text-red-500 [text-shadow:_0_5px_2px_gray]">
          Welcome to <span className="text-blue-500">Sign Up</span>
        </h1>
        <InputForSign
          labelName={"UserName"}
          placeholderName={"Type Your Name..."}
          typeName={"text"}
          value={userName}
          setValue={setUserName}
        />
        <InputForSign
          labelName={"Email"}
          placeholderName={"eg.. surjith123@gmail.com"}
          typeName={"email"}
          value={userEmail}
          setValue={setUserEmail}
        />
        <label className="font-medium text-sm">Password</label>
        <div className="border-b-2 border-blue-300 flex w-[95%]">
          <input
            placeholder="Enter password"
            className="placeholder:text-sm mx-1 bg-transparent focus:outline-none "
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
        <InputForSign
          labelName={"Confirm password"}
          placeholderName={"Confirm password"}
          typeName={"password"}
          value={confirmPassword}
          setValue={setConfirmPassword}
        />
        {errorPassword && (
          <div className="text-xs text-red-600">Password doesn't match</div>
        )}

        <button className="font-semibold mt-5 hover:bg-blue-300 bg-slate-300 block w-full  py-1 my-2 rounded-lg">
          Sign Up
        </button>
        {error && (
          <div className="text-xs text-red-600">
            Please Fill all input fields
          </div>
        )}
      </form>
      <div className="font-semibold text-sm">
        Already have account?
        <span
          onClick={() => {
            setSignUpForm(false);
            setSignInForm(true);
          }}
          className="text-blue-400 text-base cursor-pointer mx-1"
        >
          Sign In
        </span>
      </div>
    </div>
  );
};

export default SignUpPage;
