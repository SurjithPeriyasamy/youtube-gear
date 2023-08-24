import { Provider } from "react-redux";
import "./App.css";
import store from "./utils/store";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import UserContext from "./utils/UserContext";

function App() {
  const [showSuggestion, setShowSuggestion] = useState();

  const [loggedInUser, setLoggedInUser] = useState(null);

  const [signIn, setSignInForm] = useState(false);
  const [SignUp, setSignUpForm] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          suggestion: showSuggestion,
          setShowSuggestion,
          loggedInUser: loggedInUser,
          setLoggedInUser,
          signInForm: signIn,
          setSignInForm,
          signUpForm: SignUp,
          setSignUpForm,
          showLogin: showLogin,
          setShowLogin,
        }}
      >
        <div className="App box-border">
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
