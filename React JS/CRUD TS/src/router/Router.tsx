import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import UserDetail from "../pages/UserDetail";
import CreateUser from "../pages/CreateUser";

export const mainRoute = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/userdetail/:id",
        element: <UserDetail />,
      },
      {
        path: "/createuser",
        element: <CreateUser />,
      },
    ],
  },
]);
