import { Provider } from "react-redux";
import "./App.css";
import store from "./utils/store";
import Login from "./components/Login";
import Body from "./components/Body";
import { useState } from "react";
import UserContext from "./utils/UserContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import { lazy } from "react";
import { Suspense } from "react";

function App() {
  const [showSuggestion, setShowSuggestion] = useState();

  const [SignUp, setSignUpForm] = useState(true);

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          suggestion: showSuggestion,
          setShowSuggestion,
          signUpForm: SignUp,
          setSignUpForm,
        }}
      >
        <div className="App box-border">
          <RouterProvider router={appRouter} />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}
const SearchResults = lazy(() => import("./components/SearchResults"));
export const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: (
          <Suspense>
            <SearchResults />
          </Suspense>
        ),
      },
    ],
  },
]);
export default App;
