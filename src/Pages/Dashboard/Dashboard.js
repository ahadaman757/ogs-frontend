import React, { useState } from "react";
import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import Styles from "./Dashboard.module.css";
import proimg from "../../Assets/Images/Rectangle 1143.png";
import Chart from "react-apexcharts";
import userslogo from "../../Assets/Images/users 02.svg";
import Active from "../../Components/Active/Active";
import axios from "axios";
import mobilelogo from "../../Assets/Images/mobilelogo.jpg";
import { useEffect } from "react";
import jwtCheck from "../../system/jwtChecker";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ parentToChild }) => {
  const [data, setData] = useState();
  const [userData, setUserData] = useState();
  const [userDataLoading, setUserDataLoading] = useState(true);
  const [jobs, setJobs] = useState();
  const [jobsLoading, setJobsLoading] = useState(true);
  const [cvRecieved, setCvRecieved] = useState(0);
  console.log(data);
  const navigate = useNavigate();
  if (jwtCheck(2) === false) {
    navigate("/employerlogin");
  }
  useEffect(() => {
    axios
      .get("https://3.14.27.53:3003/jobs/getEmployerData", {
        headers: {
          accesstoken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => console.log("EMPLOYER DATA -> ", res.data));
    // GET USER DATA
    axios
      .get("https://3.14.27.53:3003/users/me", {
        headers: {
          accesstoken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        setUserData(res.data);
        setUserDataLoading(false);
      });
    // GET JOBS
    axios
      .get(`https://3.14.27.53:3003/jobs/myjobs`, {
        headers: {
          accesstoken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        setJobs(res.data);
        setJobsLoading(false);
      });
  }, []);
  console.log(userData, "userData");

  const [options, setoptions] = useState({
    fill: {
      colors: ["#532efe"],
    },

    chart: {
      id: "basic-bar",

      offsetX: 5,
    },

    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1996, 1997],
    },
  });
  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 30, 49, 60, 70],
    },
  ]);

  const display = (d) => {
    console.log("value");
    console.log(d);
    setData(d);
  };

  return (
    <div className="asdesaser">
      <DashboardNavbar side={display} />
      <div
        className={`${Styles.Managejobsmain} ${
          data ? "sidebarmarginmin" : "sidebarmarginmax"
        }`}
      >
        <div className="container-md">
          <div className="row py-4 px-md-4 mt-5">
            <div className="col-lg-9">
              {/* <div className={`p-3 d-flex ${Styles.companyconn}`}>
                <div className="me-4">
                  {!userDataLoading ? (
                    <img
                      src={`https://3.14.27.53:3003/${userData.company_logo}`}
                    />
                  ) : (
                    ''
                  )}
                </div>
                <div>
                  <h1 className="ogsfonts18">
                    {userDataLoading ? '-' : userData.company_name}
                  </h1>
                  <p className="ogsfonts14">
                    {userDataLoading ? '-' : userData.business}
                  </p>
                </div>
              </div> */}
              <div className={`d-flex justify-content-between flex-wrap `}>
                <div className={` p-3 my-2 mx-1  ${Styles.postjobslimit}`}>
                  <div className={``}>
                    <h1 className={`ogsfonts18`}>Posted Jobs</h1>
                    <p className={`ogsfonts12`}>No. of jobs you posted</p>
                  </div>
                  <div className={`d-flex justify-content-end`}>
                    <h1 className={`ogsfonts38  ${Styles.jobsstac}`}>
                      {jobsLoading ? "-" : jobs.length}
                    </h1>
                  </div>
                </div>
                <div className={` p-3 my-2 mx-1 ${Styles.postjobslimit}`}>
                  <div className={``}>
                    <h1 className={`ogsfonts18`}>Shortlisted</h1>
                    <p className={`ogsfonts12`}>CVs you have reviewed</p>
                  </div>
                  <div className={`d-flex justify-content-end`}>
                    <h1 className={`ogsfonts38  ${Styles.jobsstac}`}>0</h1>
                  </div>
                </div>
                <div className={` p-3 my-2 mx-1 ${Styles.postjobslimit}`}>
                  <div className={``}>
                    <h1 className={`ogsfonts18`}>Rejected</h1>
                    <p className={`ogsfonts12`}>CVs you have reviewed</p>
                  </div>
                  <div className={`d-flex justify-content-end`}>
                    <h1 className={`ogsfonts38  ${Styles.jobsstac}`}>0</h1>
                  </div>
                </div>
              </div>

              <div>
                <div
                  className={`d-flex justify-content-between align-items-center`}
                >
                  {" "}
                  <h1 className="ogsfonts24">Post Jobs</h1>
                </div>
                <div>{jobsLoading ? "Loading..." : <Active jobs={jobs} />}</div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className={`d-flex p-4 text-center flex-column justify-content-center align-items-center ${Styles.profcard}`}
              >
                {!userDataLoading ? (
                  <img
                    className={`${Styles.profimg}`}
                    src={`https://3.14.27.53:3003/${userData.company_logo}`}
                  />
                ) : (
                  ""
                )}

                <h1 className="ogsfonts24 cblack">
                  {userDataLoading
                    ? "Loading..."
                    : userData.first_name + " " + userData.last_name}
                </h1>
                <p className="ogsfonts16 cblack">
                  {userDataLoading ? "Loading..." : userData.company_name}
                </p>
                <p className="ogsfonts16 cblack">
                  {userDataLoading ? "Loading..." : userData.business}
                </p>
                <p className="ogsfonts16 cblack">
                  {userDataLoading ? "Loading..." : userData.position}
                </p>
                <p className="ogsfonts14 cblack">
                  {userDataLoading ? "Loading..." : userData.email}{" "}
                </p>
                <p className="ogsfonts14 cblack">
                  {" "}
                  Job Posted |{jobsLoading ? "-" : jobs.length}{" "}
                </p>

                {/* <p className="ogsfonts14">
                  {userDataLoading
                    ? "Loading..."
                    : userData.company.business_mobile_number == null
                    ? "Not set"
                    : userData.company.business_mobile_number}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
