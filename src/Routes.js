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
// import Test from "./Pages/test/test";
import BasicDocument from "./Components/pdfDownload";

import Contentmanagment from "./Pages/adminpanel/contentmanagment/contentmanagment";
import Usermanagement from "./Pages/adminpanel/usermanagement/usermanagement";
import Ogsinstitute from "./Pages/adminpanel/ogsinstitute/ogsinstitute";
import Privacypolicy from "./Pages/adminpanel/privacypolicy/privacypolicy";
import Employment from "./Pages/adminpanel/Employment/employment";
import Searchjobs from "./Pages/adminpanel/Search Jobs/searchjobs";
import ContactusSec from "./Pages/adminpanel/Contact Us/contactus";
import Internship from "./Pages/adminpanel/Internship/internship";
import Aboutussec from "./Pages/adminpanel/About Us/aboutus";
import Faqs from "./Pages/adminpanel/Faq's/faqs";
import Manageseeker from "./Pages/adminpanel/Manage Seeker/manageseeker";
import Manageemployer from "./Pages/adminpanel/Manage Employer/manageemployer";
import Managealljobs from "./Pages/adminpanel/Manage All Jobs/managealljobs";
import Managejobsdispaly from "./Pages/adminpanel/Manage Jobs Dispaly Limits/managejobsdispaly";
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
    path: "personalinfo",
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
    path: "manageyourcvs",
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
    path: "contentmanagement",
    element: <Contentmanagment />,
  },
  {
    path: "usermanagement",
    element: <Usermanagement />,
  },
  {
    path: "ogsinstitute",
    element: <Ogsinstitute />,
  },
  {
    path: "privacypolicy",
    element: <Privacypolicy />,
  },
  {
    path: "employment",
    element: <Employment />,
  },
  {
    path: "searchjobs",
    element: <Searchjobs />,
  },
  {
    path: "contactussec",
    element: <ContactusSec />,
  },
  {
    path: "internship",
    element: <Internship />,
  },
  {
    path: "aboutussec",
    element: <Aboutussec />,
  },
  {
    path: "faqs",
    element: <Faqs />,
  },
  {
    path: "manageseeker",
    element: <Manageseeker />,
  },
  {
    path: "manageemployer",
    element: <Manageemployer />,
  },
  {
    path: "managealljobs",
    element: <Managealljobs />,
  },
  {
    path: "managejobsdispaly",
    element: <Managejobsdispaly />,
  },
]);
function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
