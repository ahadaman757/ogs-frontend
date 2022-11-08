import React, { useState } from "react";
import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import Styles from "./Dashboard.module.css";
import proimg from "../../Assets/Images/Rectangle 1143.png";
import Chart from "react-apexcharts";
import userslogo from "../../Assets/Images/users 02.svg";
import Active from "../../Components/Active/Active";
import axios from "axios";
import { useEffect } from "react";

const Dashboard = ({ parentToChild }) => {
  const [data, setData] = useState();
  const [userData, setUserData] = useState();
  const [userDataLoading, setUserDataLoading] = useState(true);
  const [jobs, setJobs] = useState();
  const [jobsLoading, setJobsLoading] = useState(true);
  console.log(data);
  useEffect(() => {
    // GET USER DATA
    axios
      .get("http://localhost:3002/users/me", {
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
      .get(`http://localhost:3002/jobs/myjobs`, {
        headers: {
          accesstoken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        setJobs(res.data);
        setJobsLoading(false);
      });
  }, []);

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
    <div>
      <DashboardNavbar side={display} />
      <div
        className={`${Styles.Managejobsmain}`}
        style={{ marginLeft: data ? "55px" : "200px" }}
      >
        <div className="container">
          <div className="row p-4 mt-5">
            <div className="col-9">
              <div className={`d-flex justify-content-between`}>
                <div className={` p-3  ${Styles.postjobslimit}`}>
                  <div className={``}>
                    <h1 className={`ogsfonts18`}>Posted Jobs</h1>
                    <p className={`ogsfonts12`}>No. of jobs you posted</p>
                  </div>
                  <div className={`d-flex justify-content-end`}>
                    <h1 className={`ogsfonts38  ${Styles.jobsstac}`}>85</h1>
                  </div>
                </div>
                <div className={` p-3  ${Styles.postjobslimit}`}>
                  <div className={``}>
                    <h1 className={`ogsfonts18`}>Reviewed</h1>
                    <p className={`ogsfonts12`}>CVs you have reviewed</p>
                  </div>
                  <div className={`d-flex justify-content-end`}>
                    <h1 className={`ogsfonts38  ${Styles.jobsstac}`}>85</h1>
                  </div>
                </div>
                <div className={` p-3  ${Styles.postjobslimit}`}>
                  <div className={``}>
                    <h1 className={`ogsfonts18`}>Shortlisted</h1>
                    <p className={`ogsfonts12`}>
                      Candidates you have shortlisted
                    </p>
                  </div>
                  <div className={`d-flex justify-content-end`}>
                    <h1 className={`ogsfonts38  ${Styles.jobsstac}`}>85</h1>
                  </div>
                </div>
                <div className={` p-3  ${Styles.postjobslimit}`}>
                  <div className={``}>
                    <h1 className={`ogsfonts18`}>Interviews</h1>
                    <p className={`ogsfonts12`}>Interviews taken</p>
                  </div>
                  <div className={`d-flex justify-content-end`}>
                    <h1 className={`ogsfonts38 ${Styles.jobsstac}`}>85</h1>
                  </div>
                </div>
              </div>
              <div className={`my-3 p-3 ${Styles.Chartsecmain}`}>
                <div className={`d-flex`}>
                  <h1 className="ogsfonts18">Applications statistics</h1>
                  <p className="ogsfonts14 mx-3">
                    (who have applied to my jobs)
                  </p>
                </div>
                <div className={` d-flex justify-content-between my-3 `}>
                  <div className={` d-flex align-items-start`}>
                    <img style={{ width: "62px" }} src={userslogo} />
                    <div>
                      <p className={`p-0 my-0 mx-3 ogsfonts16`}>
                        Total Applicants
                      </p>
                      <p className={`p-0 my-0 mx-3 ogsfonts16`}>159</p>
                    </div>
                  </div>
                  <div className="">
                    {" "}
                    <Chart
                      className=""
                      options={options}
                      series={series}
                      type="bar"
                      width="600"
                      height="300"
                    />
                  </div>
                </div>
                <div className={`d-flex`}>
                  {" "}
                  <h1 className={`ogsfonts18`}>HOW INSTAMATCH</h1>
                  <p className="ogsfonts14 mx-3">
                    {" "}
                    assisted me in finding talent?
                  </p>
                </div>
                <div className={`d-flex justify-content-evenly my-3`}>
                  <div className={`text-center p-3 ${Styles.revicon1}`}>
                    <h1 className={`ogsfonts38`}>0%</h1>
                    <h1 className={` ogsfonts24`}>Reviewed</h1>
                  </div>
                  <div className={`text-center p-3 ${Styles.revicon2}`}>
                    <h1 className={`ogsfonts38`}>0%</h1>
                    <h1 className={` ogsfonts24`}>Reviewed</h1>
                  </div>
                  <div className={`text-center p-3 ${Styles.revicon3}`}>
                    <h1 className={`ogsfonts38`}>0%</h1>
                    <h1 className={` ogsfonts24`}>Reviewed</h1>
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
            <div className="col-3">
              <div
                className={`d-flex p-4 text-center flex-column justify-content-center align-items-center ${Styles.profcard}`}
              >
                <img className={`${Styles.profimg}`} src={proimg} />
                <h1 className="ogsfonts24">
                  {userDataLoading
                    ? "Loading..."
                    : userData.first_name + " " + userData.last_name}
                </h1>
                <p className="ogsfonts16">
                  {userDataLoading ? "Loading..." : userData.position}
                </p>
                <p className="ogsfonts14">
                  {userDataLoading ? "Loading..." : userData.email}{" "}
                </p>
                <p className="ogsfonts14">
                  {userDataLoading
                    ? "Loading..."
                    : userData.company.business_mobile_number}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
