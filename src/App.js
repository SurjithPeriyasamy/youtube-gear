import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import store from "./utils/store";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import UserContext from "./utils/UserContext";

function App() {
  const [showSuggestion, setShowSuggestion] = useState();

  const [loggedInUser, setLoggedInUser] = useState(null);

  const [signIn, setSignInForm] = useState(false);
  const [SignUp, setSignUpForm] = useState(true);
  const [user, setShowUser] = useState(false);

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
          showUser: user,
          setShowUser,
        }}
      >
        <div className="App box-border ">
          <Header />
          <div className="mt-20">
            <Outlet />
          </div>
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
