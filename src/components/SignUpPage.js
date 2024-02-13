import { useState, useContext, useRef } from "react";
import { addUser } from "../utils/userSlice";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import LoginError from "./LoginError";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { USER_PROFILE } from "../utils/constants";

const SignUpPage = () => {
  const userName = useRef(null);
  const userEmail = useRef(null);
  const userPassword = useRef(null);

  const [showPassword, setShowPassword] = useState(false);

  const [err, setErr] = useState(null);

  const [firebaseError, setFirebaseError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { setSignUpForm, signUpForm } = useContext(UserContext);

  const handleForm = (e) => {
    e.preventDefault();

    const err = checkValidData(
      userEmail.current.value,
      userPassword.current.value
    );
    setErr(err);
    if (err) return;
    if (signUpForm) {
      createUserWithEmailAndPassword(
        auth,
        userEmail.current.value,
        userPassword.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: userName.current.value,
            photoURL: USER_PROFILE,
          })
            .then(() => {
              // Profile updated!
              dispatch(
                addUser({
                  name: userName.current.value,
                  email: userEmail.current.value,
                  profile: USER_PROFILE,
                })
              );
              navigate("/");
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          setFirebaseError(error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        userEmail.current.value,
        userPassword.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          setFirebaseError(errorCode + "-" + error.message);
        });
    }
  };
  return (
    <div className="flex flex-col text-lg">
      <form onSubmit={handleForm}>
        {signUpForm ? (
          <h1 className="text-center text-xl font-bold text-red-500 ">
            Welcome to <span className="text-blue-500 ">Sign Up</span>
          </h1>
        ) : (
          <h1 className=" text-lg text-center font-bold text-red-600  ">
            Welcome <span className="text-green-700">Sign In</span> 🫰
          </h1>
        )}
        {signUpForm && (
          <div className="flex flex-col mt-3">
            <label className="font-medium text-sm">UserName</label>
            <input
              ref={userName}
              placeholder="Type Your Name..."
              className=" placeholder:text-sm placeholder:text-gray-500 placeholder:font-semibold border-b border-gray-500  bg-transparent focus:outline-none "
              type="text"
            />
          </div>
        )}
        <div className="flex flex-col mt-3 mb-3">
          <label className="font-medium text-sm">Email</label>
          <input
            ref={userEmail}
            placeholder="eg.. surjith123@gmail.com"
            className=" placeholder:text-sm placeholder:text-gray-500 placeholder:font-semibold border-b border-gray-500  bg-transparent focus:outline-none "
            type="text"
          />
        </div>
        <div>
          <label className="font-medium text-sm">Password</label>
          <div className="border-b border-gray-500 flex justify-between ">
            <input
              ref={userPassword}
              placeholder="Enter password"
              className=" placeholder:text-sm placeholder:text-gray-500 placeholder:font-semibold bg-transparent focus:outline-none "
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
        <LoginError errorMessage={err} />
        <button className="font-semibold mt-5 hover:bg-blue-300 bg-slate-300 block w-full  py-1 my-2 rounded-lg">
          {signUpForm ? "Sign Up" : "Sign In"}
        </button>
        <LoginError errorMessage={firebaseError} />
      </form>

      <div className="font-semibold text-sm">
        {signUpForm ? "Already have " : "Create a new "}account ?
        <span
          onClick={() => {
            setSignUpForm(!signUpForm);
            setFirebaseError(null);
          }}
          className="text-blue-500 text-base cursor-pointer mx-1"
        >
          {signUpForm ? "Sign In" : "Sign Up"}
        </span>
      </div>
    </div>
  );
};

export default SignUpPage;
