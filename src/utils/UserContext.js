import { createContext } from "react";

const UserContext = createContext({
  suggestion: false,
  loggedInUser: null,
  signUpForm: true,
  signInForm: false,
  showLogin: false,
});

export default UserContext;
