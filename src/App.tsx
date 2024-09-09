import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main, { mainLoader } from "./layouts/Main";
import Login, { loginAction } from "./pages/Login";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import UserContext from "./context/UserContext";
import Favourites from "./pages/Favourites";
import PropertiesContext from "./context/PropertiesContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      loader: mainLoader,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
          action: loginAction,
        },
        {
          path: "favourites",
          element: <Favourites />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
      ],
    },
  ]);
  return (
    <>
      <UserContext>
        <PropertiesContext>
          <RouterProvider router={router} />
        </PropertiesContext>
      </UserContext>
    </>
  );
}

export default App;
