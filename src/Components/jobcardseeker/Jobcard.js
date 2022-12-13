import Styles from "./jobcard.module.css";
import viewicon from "../../Assets/Images/eye.png";
import React, { useState, useEffect } from "react";
import shareicon from "../../Assets/Images/share.png";
import deleticon from "../../Assets/Images/Trash.png";
import { useNavigate } from "react-router-dom";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import axios from "axios";

const Jobcard = ({ job_data }) => {
  const [Applied, setApplied] = useState(false);
  const [AppliedCvs, setAppliedCvs] = useState(false);
  const CheckApplied = () => {
    const job_id = job_data.id
    axios.post("http://localhost:3002/jobs/checkjobapply", {
      job_id: job_id
    }, {
      headers: {
        accesstoken: localStorage.getItem("accessToken")
      }
    }).then(res => {
      if (res.data.check_job_apply.length) {
        setAppliedCvs(res.data.check_job_apply)
        setApplied(true)
      }
      else
        setApplied(false)


    }).catch(error => {
      setApplied(false)
    })
  }
  useEffect(() => {
    CheckApplied();
  }, []);

  const navigate = useNavigate();
  const navigateToJobDetails = () => {
    navigate("/jobpopseeker", { state: { job_data: job_data, AppliedCvs } });
  };
  return (
    <div className={`p-3 my-2 ${Styles.Jobcardmain}`}>
      <div className=" d-flex align-items-center">
        <div className="d-flex">
          <p className="m-1 ogsfonts14"> Posted Date: {job_data.posted_at} </p>
          {Applied ? (
            <p className="ogsfonts14 m-1 text-bold text-success">Applied </p>
          ) : (
            <button
              onClick={() => navigateToJobDetails(AppliedCvs)}
              className="btn-primary px-2 text-light unset_button"
            >
              Apply for Job
            </button>
          )}
        </div>
        <p className={` mx-2 ogsfonts14 m-0 ${Styles.Jobcardheading}`}></p>
      </div>
      <div
        className={`d-flex justify-content-between align-items-center `}
        onClick={() => {
          return navigateToJobDetails(AppliedCvs);
        }}
      >
        <div className={`d-flex`}>
          <h1 className="ogsfonts24 m-0">
            {" "}
            {job_data.job_title} - {job_data.country} , {job_data.city}
          </h1>
          <button className={`mx-2 ${Styles.filaneyebtn}`}>
            <span>
              <img src={viewicon} />
            </span>
          </button>
        </div>
      </div>

      <div className="d-flex">
        <p>
          Offered salary: {job_data.min_salary} - {job_data.max_salary}{" "}
        </p>
      </div>
      {/* <div
        className={`d-flex flex-wrap justify-content-evenly my-4 ${Styles.jobcardinfo}`}
      >
        <div>
          <div className={`${Styles.jobcarddetailsl}`}>
            <p className="ogsfonts24 text-center p-4"></p>
          </div>
          <p className="ogsfonts14 text-center">Applied</p>
        </div>
        <div>
          <div className={`${Styles.jobcarddetails}`}>
            {" "}
            <p className="ogsfonts24 text-center p-4">18</p>
          </div>
          <p className="ogsfonts14 text-center"> Reviewed</p>
        </div>
        <div>
          <div className={`${Styles.jobcarddetailsb}`}>
            {" "}
            <p className="ogsfonts24 text-center p-4">18</p>
          </div>
          <p className="ogsfonts14 text-center">shortlisted</p>
        </div>
        <div>
          <div className={`${Styles.jobcarddetailsbl}`}>
            {" "}
            <p className="ogsfonts24 text-center p-4">18</p>
          </div>
          <p className="ogsfonts14 text-center">Interviews</p>
        </div>
      </div> */}
      <div className="d-flex flex-wrap m-0 my-2 ">
        {/* <h1 className="ogsfonts18 mx-1">PKR 27K - 46K </h1>
        <p className="ogsfonts14">Average salary based on similar jobs</p> */}
        <b>Industry: </b> {job_data.industry}
      </div>
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <div className="d-flex flex-wrap">
          <p className="my-0  ogsfonts14">
            Expiry Date: {job_data.last_date_apply}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Jobcard;
