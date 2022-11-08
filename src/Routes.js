import React from "react";
import Home from "./Pages/Homepage/Home";
import Registeration from "./Pages/authpages/Registeration";
import AboutUs from "./Pages/about us/Aboutus";
import Ogscourses from "./Pages/Ogscourses/ogscourses";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Managejobs from "./Pages/ManageJobs/Managejobs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Postajob from "./Pages/post a job/postAjob";

import CV from "./Pages/Forms/CV";

const UserContext = React.createContext(null);

import SeekerRegisteration from "./Pages/authpages/SeekerRegsiteration";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "register",
    element: <Registeration />,
  },
  {
    path: "cv",
    element: <CV />,
  },
  {
    path: "seeker",
    element: <SeekerRegisteration />,
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
