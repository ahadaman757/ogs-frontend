import React, { createContext } from "react";
import Home from "./Pages/Homepage/Home";
import Registeration from "./Pages/authpages/Registeration";
import AboutUs from "./Pages/about us/Aboutus";
import Ogscourses from "./Pages/Ogscourses/ogscourses";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Managejobs from "./Pages/ManageJobs/Managejobs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Postajob from "./Pages/post a job/postAjob";
import SeekerRegisteration from "./Pages/authpages/SeekerRegsiteration";


import Jobpop from "./Components/job pop/jobpop";
import Setting from "./Pages/setting/setting";
import Cvsearch from "./Pages/cvsearch/cvsearch";
import Newapplicant from "./Pages/new applicant/newapplicant";

import CV from "./Pages/FirstCv/FirstCv";
import DemoLogin from "./Pages/authpages/DemoLogin";


const getContextValue = () => {
  let token = localStorage.getItem("accessToken");
  if (token === null || token == "") {
    return false;
  } else {
    return true;
  }
};

const UserContext = createContext(getContextValue);

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
  {

    path: "jobpop",
    element: <Jobpop />,
  },
  {
    path: "setting",
    element: <Setting />,
  },
  {
    path: "cvsearch",
    element: <Cvsearch />,
  },
  {
    path: "newapplicant",
    element: <Newapplicant />,
  }, {
    path: "demologin",
    element: <DemoLogin />,

  },
]);
function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
