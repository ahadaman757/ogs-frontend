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
import Persanalinfo from "./Pages/seekerpages/persanalinfo/persanalinfo";
import Myjobs from "./Pages/seekerpages/myjobs/myjobs";
import Jobalert from "./Pages/seekerpages/jobalert/jobalert";
import Jobpreferences from "./Pages/seekerpages/JobPreferences/Jobpreferences";
import Manageyoucvs from "./Pages/seekerpages/Manageyoucvs/Manageyoucvs";
import SeekerCv from "./Pages/seekerpages/seekerCv/seekerCv";
import EmployerLogin from "./Pages/logins/eplogin";
import SeekerLogin from "./Pages/logins/seekerlogin";
import Test from "./Pages/test/test";
import BasicDocument from "./Components/pdfDownload";

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
    path: "/pdf",
    element: <BasicDocument />,
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
  },
  {
    path: "demologin",
    element: <DemoLogin />,
  },
  {
    path: "persanalinfo",
    element: <Persanalinfo />,
  },
  {
    path: "myjobs",
    element: <Myjobs />,
  },
  {
    path: "jobalert",
    element: <Jobalert />,
  },
  {
    path: "jobpreferences",
    element: <Jobpreferences />,
  },
  {
    path: "manageyoucvs",
    element: <Manageyoucvs />,
  },
  {
    path: "seekercv",
    element: <SeekerCv />,
  },
  {
    path: "employerlogin",
    element: <EmployerLogin />,
  },
  {
    path: "seekerlogin",
    element: <SeekerLogin />,
  },
  {
    path: "test",
    element: <Test />,
  },
]);
function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
