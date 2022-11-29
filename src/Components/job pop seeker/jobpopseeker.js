import Styles from "./jobpopseeker.module.css";
import { useState } from "react";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import removeicon from "../../Assets/Images/remove.svg";
import gasco from "../../Assets/Images/gasco.png";
import { useLocation } from 'react-router-dom'
const Jobpopseeker = () => {
  const { state } = useLocation()
  const { job_data } = state
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

          <div className={`d-flex  flex-md-row flex-column-reverse   `}>
            <div className="pe-5">
              <img src={gasco} />
            </div>
            <div>
              <h1 className="ogsfonts32">{job_data.job_title}</h1>
              <div className="d-flex">
                <h1 className="ogsfonts18 my-3">OGS (PVt) Limited</h1>
                <p className=" mx-2 ogsfonts16 color404040 my-3">
                  <span>
                    <img />
                  </span>
                  {job_data.city}, {job_data.country}
                </p>
              </div>
              <h1 className="ogsfonts18 my-3"> {job_data.min_salary ? job_data.min_salary + "-" : null} {job_data.max_salary} </h1>
              <p className="ogsfonts16 color404040 my-4">
                <span>
                  <img />
                </span>
                Posted {job_data.posted_at}
              </p>
            </div>
          </div>
          <div className="my-4">
            <h1 className="ogsfonts32">Job Description</h1>
            <p className="ogsfonts16 color404040">
              {job_data.description ? job_data.description : "No Desscription"}
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
          <div className="d-flex justify-content-end">
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className={`px-4 py-3 me-3 ${Styles.btnsve}`}
            >
              Apply
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-body">
                    <div className="d-flex justify-content-between">
                      <h1 className="ogsfonts18">Select your CV</h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div
                      className={`p-2 d-flex justify-content-between ${Styles.modalapply}`}
                    >
                      <div className="">
                        <p className="ogsfonts18">Wasim Baig</p>
                        <p className="ogsfonts14 m-0">ceoogs@gmail.com</p>
                        <p className="ogsfonts14 m-0">034-164-21256</p>
                        <p className="ogsfonts14 m-0">Rawalpindi</p>
                      </div>
                      <div>
                        <button
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          className={`px-4 py-3 me-3 ${Styles.btnsve}`}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className={`px-4 py-3 ${Styles.btnapp}`}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jobpopseeker;
