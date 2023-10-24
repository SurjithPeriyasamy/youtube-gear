import { createContext } from "react";

const UserContext = createContext({
  suggestion: false,
  signUpForm: true,
});

export default UserContext;
