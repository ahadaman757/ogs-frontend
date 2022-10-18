import React from "react";
import Home from "./Pages/Homepage/Home";
import Signin from "./Pages/authpages/Signin";
import AboutUs from "./Pages/about us/Aboutus";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "aboutus",
    element: <AboutUs />,
  },
]);
function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
