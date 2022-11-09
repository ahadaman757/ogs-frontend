import React, { useState } from "react";
import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import Styles from "./Dashboard.module.css";
import proimg from "../../Assets/Images/Rectangle 1143.png";
import Chart from "react-apexcharts";
import userslogo from "../../Assets/Images/users 02.svg";
import Active from "../../Components/Active/Active";
const Dashboard = ({ parentToChild }) => {
  const [data, Setdata] = useState("");
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
    Setdata(d);
  };
  return (
    <div>
      <DashboardNavbar side={display} />
      <div
        className={`${Styles.Managejobsmain}`}
        style={{ marginLeft: data ? "55px" : "200px" }}
      >
        <div className="container-md">
          <div className="row py-4 px-md-4 mt-5">
            <div className="col-lg-9">
              <div className={`d-flex flex-wrap justify-content-between`}>
                <div className={` p-3 my-2  ${Styles.postjobslimit}`}>
                  <div className={``}>
                    <h1 className={`ogsfonts18`}>Post Jobs</h1>
                    <p className={`ogsfonts12`}>to find talent</p>
                  </div>
                  <div className={`d-flex justify-content-end`}>
                    <h1 className={`ogsfonts38  ${Styles.jobsstac}`}>85</h1>
                  </div>
                </div>
                <div className={` p-3 my-2  ${Styles.postjobslimit}`}>
                  <div className={``}>
                    <h1 className={`ogsfonts18`}>Reviewed</h1>
                    <p className={`ogsfonts12`}>CVs against opportunities</p>
                  </div>
                  <div className={`d-flex justify-content-end`}>
                    <h1 className={`ogsfonts38  ${Styles.jobsstac}`}>85</h1>
                  </div>
                </div>
                <div className={` p-3 my-2  ${Styles.postjobslimit}`}>
                  <div className={``}>
                    <h1 className={`ogsfonts18`}>Shortlisted</h1>
                    <p className={`ogsfonts12`}>candidates against jobs</p>
                  </div>
                  <div className={`d-flex justify-content-end`}>
                    <h1 className={`ogsfonts38  ${Styles.jobsstac}`}>85</h1>
                  </div>
                </div>
                <div className={` p-3 my-2  ${Styles.postjobslimit}`}>
                  <div className={``}>
                    <h1 className={`ogsfonts18`}>Inerviews</h1>
                    <p className={`ogsfonts12`}>candidates</p>
                  </div>
                  <div className={`d-flex justify-content-end`}>
                    <h1 className={`ogsfonts38 ${Styles.jobsstac}`}>85</h1>
                  </div>
                </div>
              </div>
              <div className={`my-3 p-3 ${Styles.Chartsecmain}`}>
                <div className={`d-flex flex-wrap`}>
                  <h1 className="ogsfonts18">Applications statistics</h1>
                  <p className="ogsfonts14 mx-3">
                    (who have applied to my jobs)
                  </p>
                </div>
                <div
                  className={` d-flex flex-wrap justify-content-between my-3 `}
                >
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
                      className={`${Styles.chart}`}
                      options={options}
                      series={series}
                      type="bar"
                      width="600"
                      height="300"
                    />
                  </div>
                </div>
                <div className={`d-flex flex-wrap`}>
                  {" "}
                  <h1 className={`ogsfonts18`}>HOW INSTAMATCH</h1>
                  <p className="ogsfonts14 mx-3">
                    {" "}
                    assisted me in finding talent?
                  </p>
                </div>
                <div className={`d-flex flex-wrap justify-content-evenly my-3`}>
                  <div className={`text-center p-3 my-2 ${Styles.revicon1}`}>
                    <h1 className={`ogsfonts38`}>0%</h1>
                    <h1 className={` ogsfonts24`}>Reviewed</h1>
                  </div>
                  <div className={`text-center p-3 my-2 ${Styles.revicon2}`}>
                    <h1 className={`ogsfonts38`}>0%</h1>
                    <h1 className={` ogsfonts24`}>Reviewed</h1>
                  </div>
                  <div className={`text-center p-3 my-2 ${Styles.revicon3}`}>
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
                  <h1 className="ogsfonts24">Post Jobs</h1> <a>View all Jobs</a>
                </div>
                <div>
                  <Active />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className={`d-flex p-4 text-center flex-column justify-content-center align-items-center ${Styles.profcard}`}
              >
                <img className={`${Styles.profimg}`} src={proimg} />
                <h1 className="ogsfonts24">Jasmine</h1>
                <p className="ogsfonts16">CEO</p>
                <p className="ogsfonts14">ceoogs@gmail.com</p>
                <p className="ogsfonts14">+92.300.5352636</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
