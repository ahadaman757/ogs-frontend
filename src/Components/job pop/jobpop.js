import Styles from "./jobpop.module.css";
import { useState } from "react";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import removeicon from "../../Assets/Images/remove.svg";
import gasco from "../../Assets/Images/gasco.png";
const Jobpop = () => {
  const [data, Setdata] = useState("");
  const display = (d) => {
    console.log("value");
    console.log(d);
    Setdata(d);
  };
  return (
    <div>
      <DashboardNavbar side={display} />
      <div
        className={`pt-5  ${Styles.jobpopmain}`}
        style={{ marginLeft: data ? "55px" : "200px" }}
      >
        <div className={`container mt-5 p-4 ${Styles.Jobpopchild}`}>
          <div className={`d-flex justify-content-end`}>
            <img src={removeicon} />
          </div>

          <div
            className={`d-flex  flex-md-row flex-column-reverse   justify-content-between`}
          >
            <div>
              <h1 className="ogsfonts32">Receptionist</h1>
              <div className="d-flex">
                <h1 className="ogsfonts18 my-3">OGS (PVt) Limited</h1>
                <p className=" mx-2 ogsfonts16 color404040 my-3">
                  <span>
                    <img />
                  </span>
                  Rawalpindi, Pakistan
                </p>
              </div>
              <h1 className="ogsfonts18 my-3">PKR. 25,000 - 30,000/Month</h1>
              <p className="ogsfonts16 color404040 my-4">
                <span>
                  <img />
                </span>
                Posted May 26, 2022
              </p>
            </div>
            <div className="pe-5">
              <img src={gasco} />
            </div>
          </div>
          <div className="my-4">
            <h1 className="ogsfonts32">Job Description</h1>
            <p className="ogsfonts16 color404040">
              Serve as the primary resource for day to day jobs and
              administrative support Maintain and ensure a comfortable, clean,
              and safe environment for patients Answering and screening
              telephone calls and delivering messages promptly to the concerned
              person Show courtesy and tact in communication with patients,
              relatives and visitors and assisting them in their needs Ensure
              effective front desk customer dealing Initiate problem solving &
              patients guidance as per need Provide service that is respectful
              of patients values and beliefs
            </p>
          </div>
          <div>
            <h1 className="ogsfonts32">Skills</h1>
            <div className="d-flex flex-wrap">
              <h2
                className={`text-center p-3 me-4 my-3 ogsfonts16 ${Styles.skillset}`}
              >
                tyqw
              </h2>
              <h2
                className={`text-center p-3 me-4 my-3 ogsfonts16 ${Styles.skillset}`}
              >
                tyqw
              </h2>
              <h2
                className={`text-center p-3 me-4 my-3 ogsfonts16 ${Styles.skillset}`}
              >
                tyqw
              </h2>
              <h2
                className={`text-center p-3 me-4 my-3 ogsfonts16 ${Styles.skillset}`}
              >
                tyqw
              </h2>
            </div>
          </div>
          <div className="my-5">
            <h1 className="ogsfonts32">Job Description</h1>
            <div className="d-flex">
              <div className="me-3">
                <h1 className="ogsfonts18 my-3">Job Channel:</h1>
                <h1 className="ogsfonts18 my-3">Industry:</h1>
                <h1 className="ogsfonts18 my-3">Functional Area:</h1>
                <h1 className="ogsfonts18 my-3">Total Positions:</h1>
                <h1 className="ogsfonts18 my-3">Job Type:</h1>
                <h1 className="ogsfonts18 my-3">Job Shift:</h1>
                <h1 className="ogsfonts18 my-3">Job Location:</h1>
                <h1 className="ogsfonts18 my-3">Gender:</h1>
                <h1 className="ogsfonts18 my-3">Minimum Education: </h1>
                <h1 className="ogsfonts18 my-3">Career Level: </h1>
                <h1 className="ogsfonts18 my-3">Maximum Experience: </h1>
                <h1 className="ogsfonts18 my-3">Apply Before:</h1>
                <h1 className="ogsfonts18 my-3">Posting Date:</h1>
              </div>
              <div>
                <h1 className="ogsfonts18 my-3">Women Jobs</h1>
                <h1 className="ogsfonts18 my-3">
                  Recruitment / Employment Firms
                </h1>
                <h1 className="ogsfonts18 my-3">
                  Secretarial, Clerical & Front Office
                </h1>
                <h1 className="ogsfonts18 my-3">2 Posts</h1>
                <h1 className="ogsfonts18 my-3">Full Time/Permanent</h1>
                <h1 className="ogsfonts18 my-3">First Shift (Day)</h1>
                <h1 className="ogsfonts18 my-3">Rawalpindi, Pakistan</h1>
                <h1 className="ogsfonts18 my-3">Gender:Female</h1>
                <h1 className="ogsfonts18 my-3">Intermediate/A-Level</h1>
                <h1 className="ogsfonts18 my-3">Entry Level</h1>
                <h1 className="ogsfonts18 my-3">Doesn't Matter</h1>
                <h1 className="ogsfonts18 my-3">Jun 27, 2022</h1>
                <h1 className="ogsfonts18 my-3">May 26, 2022</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jobpop;
