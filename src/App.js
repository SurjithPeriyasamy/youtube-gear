import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import store from "./utils/store";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import UserContext from "./utils/UserContext";

function App() {
  const [showSuggestion, setShowSuggestion] = useState();

  const [userName, setUserName] = useState("");

  const [login, setLogin] = useState(false);

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          suggestion: showSuggestion,
          setShowSuggestion,
          loggedInUser: userName,
          setUserName,
          login: login,
          setLogin,
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
