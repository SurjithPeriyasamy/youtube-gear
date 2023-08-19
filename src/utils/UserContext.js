import { createContext } from "react";

const UserContext = createContext({
  suggestion: false,
  loggedInUser: "Default User",
  login: false,
});

export default UserContext;
