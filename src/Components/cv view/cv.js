import Styles from "./cv.module.css";
import useradd from "../../Assets/Images/New folder (3)/user-add.svg";
import userremove from "../../Assets/Images/New folder (3)/user-remove 01.svg";
import check from "../../Assets/Images/New folder (3)/check mark-rectangle.svg";
import eyeicon from "../../Assets/Images/New folder (3)/eye.svg";
import downicon from "../../Assets/Images/New folder (3)/download.svg";
import selecticon from "../../Assets/Images/check mark-rectangle.svg";
import profimg from "../../Assets/Images/Rectangle 1246.png";
import likeicon from "../../Assets/Images/New folder (3)/like.svg";
import dislikeicon from "../../Assets/Images/New folder (3)/dislike.svg";
import { useState } from "react";
import axios from "axios";
import { BasicDocument } from "../pdfDownload";
import { PDFDownloadLink, Image } from "@react-pdf/renderer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Cv = ({ applicant, job_id }) => {
  const navigate = useNavigate();
  const cv = {
    contact_number: "03458914711",
  };
  const [shortlisted, setShortlisted] = useState(applicant.is_shortlisted);
  const [rejected, setRejected] = useState(applicant.is_rejected);
  const [download, setdownload] = useState(false);
  const [unlockCV, setUnlockCV] = useState(false);
  const [additionalFiles, setAdditionalFiles] = useState([]);
  console.log("CV..", applicant.code);
  const updateCvView = (currentStatus) => {
    axios
      .post("https://3.14.27.53:3003/jobs/job_applicants_status_update", {
        status: !shortlisted,
        column: "is_shortlisted",
        cv_id: applicant.cv_id,
        job_id: job_id,
      })
      .then((res) => {
        setShortlisted(!shortlisted);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const rejectCv = (currentStatus) => {
    axios
      .post("https://3.14.27.53:3003/jobs/job_applicants_status_update", {
        status: !rejected,
        cv_id: applicant.cv_id,
        job_id: job_id,
        column: "is_rejected",
      })
      .then((res) => {
        setRejected(!rejected);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .post("https://3.14.27.53:3003/jobs/getAdditionalData", {
        cv_id: applicant.cv_id,
        job_id: job_id,
      })
      .then((res) => {
        // console.log("ADDITIONALLLL ", res);
        setAdditionalFiles(res.data.message[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {" "}
      <div className={` p-4 my-4 ${Styles.Cvmainds}`}>
        <div className="d-flex  justify-content-between">
          <>
            {applicant.is_rejected == "1" ? (
              <button
                className={` my-2 ogsfonts14 ${Styles.cvheadicon}`}
                onClick={() => {
                  axios
                    .post(
                      `https://3.14.27.53:3003/jobs/changeCVState`,
                      {
                        action: "shortlist",
                        cvId: applicant.cv_id,
                      },
                      {
                        headers: {
                          accessToken: localStorage.getItem("accessToken"),
                        },
                      }
                    )
                    .then((response) => console.log(response));
                }}
              >
                <span>
                  <img className="me-1" src={eyeicon} />
                </span>
                Un-Reject
              </button>
            ) : (
              <button
                className={` my-2 ogsfonts14 ${Styles.cvheadicon}`}
                onClick={() => {
                  axios
                    .post(
                      `https://3.14.27.53:3003/jobs/changeCVState`,
                      {
                        action: "reject",
                        cvId: applicant.cv_id,
                      },
                      {
                        headers: {
                          accessToken: localStorage.getItem("accessToken"),
                        },
                      }
                    )
                    .then((response) => alert(response.data.message));
                }}
              >
                <span>
                  <img className="me-1" src={eyeicon} />
                </span>
                Reject
              </button>
            )}
            <button className={` my-2 ogsfonts14 ${Styles.cvheadicon}`}>
              <span>
                <img className="me-1" src={eyeicon} />
              </span>
              Preview CV
            </button>
            {applicant.is_shortlisted == "1" ? (
              <button
                className={` my-2 ogsfonts14 ${Styles.cvheadicon}`}
                onClick={() => {
                  axios
                    .post(
                      `https://3.14.27.53:3003/jobs/changeCVState`,
                      {
                        action: "shortlist",
                        cvId: applicant.cv_id,
                      },
                      {
                        headers: {
                          accessToken: localStorage.getItem("accessToken"),
                        },
                      }
                    )
                    .then((response) => console.log(response));
                }}
              >
                <span>
                  <img className="me-1" src={eyeicon} />
                </span>
                Un-shortlist
              </button>
            ) : (
              <button
                className={` my-2 ogsfonts14 ${Styles.cvheadicon}`}
                onClick={() => {
                  axios
                    .post(
                      `https://3.14.27.53:3003/jobs/changeCVState`,
                      {
                        action: "shortlist",
                        cvId: applicant.cv_id,
                      },
                      {
                        headers: {
                          accessToken: localStorage.getItem("accessToken"),
                        },
                      }
                    )
                    .then((response) => alert(response.data.message));
                }}
              >
                <span>
                  <img className="me-1" src={eyeicon} />
                </span>
                Shortlist
              </button>
            )}
            <button
              onClick={() => setdownload(true)}
              className={`my-2 ogsfonts14 ${Styles.cvheadicon}`}
            >
              <span>
                <img className="me-1" src={downicon} />
              </span>
              <PDFDownloadLink
                className="my-2"
                document={<BasicDocument cv_data={applicant} />}
                fileName="somename.pdf"
              >
                {({ loading, error }) => {
                  console.log(error);
                  return loading ? "Loading document..." : "Download now!";
                }}
              </PDFDownloadLink>
            </button>
          </>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-3">
            <img
              style={{ width: "124px", height: "140px" }}
              className="img-fluid"
              src={`https://3.14.27.53:3003/${applicant?.cv_image?.replace(
                "images",
                "images/"
              )}`}
            />
          </div>
          <div className="col-md-9">
            <div className="d-flex flex-wrap">
              <p className="me-3 ogsfonts20">
                {applicant.code != "none"
                  ? applicant.first_name + " " + applicant.last_name
                  : "Name hidden"}
              </p>
              <p className="ogsfonts14">
                {`(${applicant.gender_title}, ${applicant.age}, ${applicant.country} ${applicant.city})`}{" "}
              </p>
            </div>
            <div className="d-flex flex-wrap">
              {" "}
              <p className="me-3 ogsfonts16">CV Number:</p>
              <p className="ogsfonts14">
                {" "}
                {`${applicant.cv_id}, Apply Date: ${applicant.applied_at}`}
              </p>
            </div>
            <div className="d-flex flex-wrap">
              {" "}
              <p className="me-3 ogsfonts16">Education:</p>
              <p className="ogsfonts14">{`${applicant.qualification}`}</p>
            </div>
            <div className="d-flex">
              <p className="me-3 ogsfonts16">Career Level:</p>
              <p className="ogsfonts14">{applicant.career_title}</p>
            </div>
            <div className="d-flex flex-wrap">
              {" "}
              <p className="me-3 ogsfonts16">Industry:</p>
              <p className="ogsfonts14">{applicant.business_type_name}</p>
            </div>
          </div>
        </div>
        <hr />
        {additionalFiles.map((f) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                target={"_blank"}
                href={`https://3.14.27.53:3003/${f.file_name}`}
              >
                <img
                  src={`https://3.14.27.53:3003/${f.file_name}`}
                  width="200"
                  height="200"
                />
              </a>
              <br />
            </div>
          );
        })}

        <hr />
        <div className="d-flex flex-wrap justify-content-between">
          <div>
            <p className="text-center ogsfonts14">Years of Experience</p>
            <p className="text-center ogsfonts18 m-0">
              {applicant.max_experience}
            </p>
          </div>
          <div>
            <p className="text-center ogsfonts14">Current Salary</p>
            <p className="text-center ogsfonts18 m-0">
              {applicant.current_salary} /Month
            </p>
          </div>
          <div>
            <p className="text-center ogsfonts14">Expected Salary</p>
            <p className="text-center ogsfonts18 m-0">
              {applicant.expected_salary} /Month
            </p>
          </div>
        </div>
      </div>
      <div className={` p-4 my-4 ${Styles.Cvmainmb}`}>
        <div className="d-flex  justify-content-between">
          <>
            {applicant.is_rejected == "1" ? (
              <button
                className={` my-2 ogsfonts14 ${Styles.cvheadicon}`}
                onClick={() => {
                  axios
                    .post(
                      `https://3.14.27.53:3003/jobs/changeCVState`,
                      {
                        action: "shortlist",
                        cvId: applicant.cv_id,
                      },
                      {
                        headers: {
                          accessToken: localStorage.getItem("accessToken"),
                        },
                      }
                    )
                    .then((response) => console.log(response));
                }}
              >
                <span>
                  <img className="me-1" src={eyeicon} />
                </span>
                Un-Reject
              </button>
            ) : (
              <button
                className={` my-2 ogsfonts14 ${Styles.cvheadicon}`}
                onClick={() => {
                  axios
                    .post(
                      `https://3.14.27.53:3003/jobs/changeCVState`,
                      {
                        action: "reject",
                        cvId: applicant.cv_id,
                      },
                      {
                        headers: {
                          accessToken: localStorage.getItem("accessToken"),
                        },
                      }
                    )
                    .then((response) => alert(response.data.message));
                }}
              >
                <span>
                  <img className="me-1" src={eyeicon} />
                </span>
                Reject
              </button>
            )}
            <button className={` my-2 ogsfonts14 ${Styles.cvheadicon}`}>
              <span>
                <img className="me-1" src={eyeicon} />
              </span>
              Preview CVs
            </button>
            {applicant.is_shortlisted == "1" ? (
              <button
                className={` my-2 ogsfonts14 ${Styles.cvheadicon}`}
                onClick={() => {
                  axios
                    .post(
                      `https://3.14.27.53:3003/jobs/changeCVState`,
                      {
                        action: "shortlist",
                        cvId: applicant.cv_id,
                      },
                      {
                        headers: {
                          accessToken: localStorage.getItem("accessToken"),
                        },
                      }
                    )
                    .then((response) => console.log(response));
                }}
              >
                <span>
                  <img className="me-1" src={eyeicon} />
                </span>
                Un-shortlist
              </button>
            ) : (
              <button
                className={` my-2 ogsfonts14 ${Styles.cvheadicon}`}
                onClick={() => {
                  axios
                    .post(
                      `https://3.14.27.53:3003/jobs/changeCVState`,
                      {
                        action: "shortlist",
                        cvId: applicant.cv_id,
                      },
                      {
                        headers: {
                          accessToken: localStorage.getItem("accessToken"),
                        },
                      }
                    )
                    .then((response) => alert(response.data.message));
                }}
              >
                <span>
                  <img className="me-1" src={eyeicon} />
                </span>
                Shortlist
              </button>
            )}
            <button
              onClick={() => setdownload(true)}
              className={`my-2 ogsfonts14 ${Styles.cvheadicon}`}
            >
              <span>
                <img className="me-1" src={downicon} />
              </span>
              <PDFDownloadLink
                className="my-2"
                document={<BasicDocument cv_data={applicant} />}
                fileName="somename.pdf"
              >
                {({ loading, error }) => {
                  console.log(error);
                  return loading ? "Loading document..." : "Download now!";
                }}
              </PDFDownloadLink>
            </button>
          </>
        </div>
        <hr />
        <div className="">
          <div className=" row">
            <div className="col-6">
              <img
                style={{ width: "124px", height: "140px" }}
                className="img-fluid"
                src={`https://3.14.27.53:3003/${applicant?.cv_image?.replace(
                  "images",
                  "images/"
                )}`}
              />
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap">
                <p className="me-3 ogsfonts20">
                  {applicant.first_name + " " + applicant.last_name}
                </p>
                <p className="ogsfonts14">
                  {`(${applicant.gender_title}, ${applicant.age}, ${applicant.country} ${applicant.city})`}{" "}
                </p>
              </div>
              <div className="d-flex flex-wrap">
                {" "}
                <p className="me-3 ogsfonts16">CV Number:</p>
                <p className="ogsfonts14"> {`${applicant.cv_id} `}</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="row">
              <div className="col-6">
                <p className="ogsfonts14"> Apply Date:</p>
              </div>
              <div className="col-6">
                <p className="ogsfonts14">{applicant.applied_at}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                {" "}
                <p className="me-3 ogsfonts16">Education:</p>
              </div>
              <div className="col-6">
                {" "}
                <p className="ogsfonts14">{`${applicant.qualification}`}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6"></div>
            </div>
            <div className="row">
              <div className="col-6">
                <p className="me-3 ogsfonts16">Career Level:</p>
              </div>
              <div className="col-6">
                {" "}
                <p className="ogsfonts14">{applicant.career_title}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p className="me-3 ogsfonts16">Industry:</p>
              </div>
              <div className="col-6">
                {" "}
                <p className="ogsfonts14">{applicant.business_type_name}</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-wrap justify-content-between">
          <div>
            <p className="text-center ogsfonts14">Years of Experience</p>
            <p className="text-center ogsfonts18 m-0">
              {applicant.max_experience}
            </p>
          </div>
          <div>
            <p className="text-center ogsfonts14">Current Salary</p>
            <p className="text-center ogsfonts18 m-0">
              {applicant.current_salary} /Month
            </p>
          </div>
          <div>
            <p className="text-center ogsfonts14">Expected Salary</p>
            <p className="text-center ogsfonts18 m-0">
              {applicant.expected_salary} /Month
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cv;
