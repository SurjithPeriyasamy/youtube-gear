import { createContext } from "react";

const UserContext = createContext({
  suggestion: false,
  loggedInUser: null,
  signUpForm: true,
  signInForm: false,
  showUser: false,
});

export default UserContext;
