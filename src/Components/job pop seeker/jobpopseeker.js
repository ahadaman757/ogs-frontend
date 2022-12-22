import Styles from "./jobpopseeker.module.css";
import { useState, useEffect } from "react";
import Seekersidebar from "../seekersidebar/seekersidebar";
import removeicon from "../../Assets/Images/remove.svg";
import gasco from "../../Assets/Images/gasco.png";
import { useLocation } from "react-router-dom";
import axios from "axios";
const Jobpopseeker = () => {
  const { state } = useLocation();
  const { job_data, AppliedCvs } = state;
  const [skills, setskills] = useState();
  const [UserCvs, setUserCvs] = useState([]);
  const [data, Setdata] = useState("");
  console.log("applied cvs");
  console.log(AppliedCvs);
  console.log("having");
  console.log(UserCvs);
  const ApplyJob = (cv_id) => {
    axios
      .post(
        `http://3.110.201.21:3002/jobs/jobapply`,
        {
          job_id: job_data.id,
          cv_id: cv_id,
        },
        {
          headers: {
            accesstoken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const display = (d) => {
    console.log("value");
    console.log(d);
    Setdata(d);
  };
  useEffect(() => {
    const job_id = job_data.id;
    axios
      .get(`http://3.110.201.21:3002/skills_for_job_by_id/${job_id}`)
      .then((res) => {
        setskills(res.data.skills);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://3.110.201.21:3002/users/my_cvs", {
        headers: {
          accesstoken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log(res.data);
        const filteredArray = res.data.map((cv) => {
          const isApplied = AppliedCvs.filter((applied_cv) => {
            return applied_cv.cv_id == cv.cv_id;
          });
          if (isApplied.length) {
            return { ...cv, is_applied: true };
          } else {
            return { ...cv, is_applied: false };
          }
        });
        setUserCvs(filteredArray);
      });
  }, []);
  console.log(UserCvs);
  return (
    <div>
      <Seekersidebar side={display} />
      <div
        className={`pt-4 px-1 ${Styles.jobpopmain} ${
          data ? "sidebarmarginmin" : "sidebarmarginmax"
        }`}
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
              <h1 className="ogsfonts18 my-3">
                {" "}
                {job_data.min_salary ? job_data.min_salary + "-" : null}{" "}
                {job_data.max_salary}{" "}
              </h1>
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
              {skills?.length && skills[0].skill_id
                ? skills.map((skill) => {
                    return (
                      <h2
                        className={`text-center p-3 me-4 my-3 ogsfonts16 ${Styles.skillset}`}
                      >
                        {skill.skill}
                      </h2>
                    );
                  })
                : "No Skills"}
            </div>
          </div>
          <div className="my-5">
            <h1 className="ogsfonts32">Job Description</h1>
            <div className="d-flex">
              <div className="me-3">
                <h1 className="ogsfonts18 my-3">Job Channel:</h1>
                <h1 className="ogsfonts18 my-3">Industry: </h1>
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
                <h1 className="ogsfonts18 my-3">{job_data.industry}</h1>
                <h1 className="ogsfonts18 my-3">
                  Secretarial, Clerical & Front Office
                </h1>
                <h1 className="ogsfonts18 my-3">2 Posts</h1>
                <h1 className="ogsfonts18 my-3">{job_data.job_type}</h1>
                <h1 className="ogsfonts18 my-3">{job_data.job_shift}</h1>
                <h1 className="ogsfonts18 my-3">
                  {job_data.country} , {job_data.city}{" "}
                </h1>
                <h1 className="ogsfonts18 my-3">{job_data.gender_title}</h1>
                <h1 className="ogsfonts18 my-3">{job_data.qualification}</h1>
                <h1 className="ogsfonts18 my-3">{job_data.career_title}</h1>
                <h1 className="ogsfonts18 my-3">{job_data.max_experience}</h1>
                <h1 className="ogsfonts18 my-3">{job_data.last_date_apply}</h1>
                <h1 className="ogsfonts18 my-3">{job_data.posted_at}</h1>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button
              onClick={ApplyJob}
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className={`px-4 py-3 me-3 ${Styles.btnsve}`}
            >
              Apply
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="d-flex justify-content-between">
                      <h1 className="ogsfonts18">Select your CV</h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div
                      className={`p-2 container-fluid justify-content-between  ${Styles.modalapply}`}
                    >
                      {UserCvs?.length &&
                        UserCvs.map((cv) => {
                          console.log(cv);
                          return (
                            <div className="d-flex align-items-center py-2 row">
                              <div className="col-9">
                                <p className="ogsfonts18">
                                  {cv.first_name +
                                    " " +
                                    cv.last_name +
                                    ":" +
                                    cv.cv_id}
                                </p>
                                <p className="ogsfonts14 m-0">
                                  {cv.position_title}
                                </p>
                                {/* <p className="ogsfonts14 m-0">034-164-21256</p>
                              <p className="ogsfonts14 m-0">Rawalpindi</p> */}
                              </div>
                              <div className="col-3">
                                {cv.is_applied ? (
                                  <button
                                    disabled
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    className={`px-4  me-3 w-100 unset-btn text-white`}
                                  >
                                    Appied
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => ApplyJob(cv.cv_id)}
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    className={`px-4 py- w-100 me-3 ${Styles.btnsve}`}
                                  >
                                    Apply
                                  </button>
                                )}
                              </div>
                              <hr />
                            </div>
                          );
                        })}
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
