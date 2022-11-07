import React from "react";
import Home from "./Pages/Homepage/Home";
import Signin from "./Pages/authpages/Signin";
import AboutUs from "./Pages/about us/Aboutus";
import Ogscourses from "./Pages/Ogscourses/ogscourses";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Managejobs from "./Pages/ManageJobs/Managejobs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Postajob from "./Pages/post a job/postAjob";

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
  {
    path: "ogscourses",
    element: <Ogscourses />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "managejobs",
    element: <Managejobs />,
  },
  {
    path: "postajob",
    element: <Postajob />,
  },
]);
function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
