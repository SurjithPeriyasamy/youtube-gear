import { useState, useContext } from "react";
import { addUser } from "../utils/userSlice";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import InputForSign from "./InputForSign";
import LoginError from "./LoginError";

const SignUpPage = () => {
  const [userName, setUserName] = useState("");

  const [userPassword, setUserPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");

  const [userEmail, setUserEmail] = useState("");

  const [errorPassword, setErrorPassword] = useState(false);

  const [emptyError, setEmptyError] = useState(false);

  const [existError, setExistError] = useState(false);
  const dispatch = useDispatch();

  const oldUsers = useSelector((store) => store.user.users);
  //console.log(oldUsers);

  const { setSignUpForm, setSignInForm } = useContext(UserContext);

  return (
    <div className="flex flex-col ">
      <form
        id="signup"
        onSubmit={(e) => {
          e.preventDefault();
          const oldUser = oldUsers.find((u) => u.email === userEmail);
          if (
            userName !== "" &&
            userEmail !== "" &&
            userPassword !== "" &&
            confirmPassword !== ""
          ) {
            if (userPassword === confirmPassword) {
              if (oldUser) {
                if (oldUser.email !== userEmail) {
                  dispatch(
                    addUser({
                      name: userName,
                      email: userEmail,
                      password: userPassword,
                    })
                  );
                  setSignInForm(true);
                  setSignUpForm(false);
                } else {
                  setExistError(true);
                }
              } else {
                dispatch(
                  addUser({
                    name: userName,
                    email: userEmail,
                    password: userPassword,
                  })
                );
                setSignInForm(true);
                setSignUpForm(false);
              }
            } else {
              setEmptyError(false);
              setErrorPassword(true);
            }
          } else {
            setErrorPassword(false);
            setEmptyError(true);
          }
        }}
      >
        <h1 className="text-center text-lg font-bold text-red-500 [text-shadow:_0_5px_2px_gray]">
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
        {existError && (
          <LoginError errorMessage={"Your account already registered"} />
        )}
        <div>
          <label className="font-medium text-sm">Password</label>
          <div className="border-b border-gray-500 flex justify-between ">
            <input
              placeholder="Enter password"
              className="text-gray-700 placeholder:text-sm bg-transparent focus:outline-none "
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
        <InputForSign
          labelName={"Confirm password"}
          placeholderName={"Confirm password"}
          typeName={"password"}
          value={confirmPassword}
          setValue={setConfirmPassword}
        />
        {errorPassword && (
          <LoginError errorMessage={"Password doesn't match"} />
        )}

        <button className="font-semibold mt-5 hover:bg-blue-300 bg-slate-300 block w-full  py-1 my-2 rounded-lg">
          Sign Up
        </button>
        {emptyError && (
          <LoginError errorMessage={" Please Fill all input fields"} />
        )}
      </form>
      <div className="font-semibold text-sm">
        Already have account?
        <span
          onClick={() => {
            setSignUpForm(false);
            setSignInForm(true);
          }}
          className="text-blue-500 text-base cursor-pointer mx-1"
        >
          Sign In
        </span>
      </div>
    </div>
  );
};

export default SignUpPage;
