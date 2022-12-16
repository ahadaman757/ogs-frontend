import Styles from "./jobcardhome.module.css";
import viewicon from "../../Assets/Images/eye.png";
import React, { useState, useEffect } from "react";
import shareicon from "../../Assets/Images/share.png";
import deleticon from "../../Assets/Images/Trash.png";
import { useNavigate } from "react-router-dom";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import axios from "axios";

const Jobcardhome = ({ job_data }) => {
  const [Applied, setApplied] = useState(false);
  const [AppliedCvs, setAppliedCvs] = useState(false);
  const CheckApplied = () => {
    const job_id = job_data.id;
    axios
      .post(
        "http://3.110.201.21:3002/jobs/checkjobapply",
        {
          job_id: job_id,
        },
        {
          headers: {
            accesstoken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        if (res.data.check_job_apply.length) {
          setAppliedCvs(res.data.check_job_apply);
          setApplied(true);
        } else setApplied(false);
      })
      .catch((error) => {
        setApplied(false);
      });
  };
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
          <h1 className={` m-0 ${Styles.ogsfont14}`}>
            {" "}
            {job_data.job_title} - {job_data.country} , {job_data.city}
          </h1>
        </div>
      </div>

      <div className="d-flex">
        <p>
          Offered salary: {job_data.min_salary} - {job_data.max_salary}{" "}
        </p>
      </div>

      <div className="d-flex flex-wrap m-0 my-2 ">
        {/* <h1 className="ogsfonts18 mx-1">PKR 27K - 46K </h1>
        <p className="ogsfonts14">Average salary based on similar jobs</p> */}
        <b>Industry : </b> {job_data.industry}
      </div>
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <div className="d-flex flex-wrap">
          <p className="my-0  ogsfonts14">
            Expiry Date: {job_data.last_date_apply}{" "}
          </p>
        </div>
      </div>
      <div>
        <button
          onClick={() => navigate("/cv")}
          className={` mt-2 ogsfonts18 px-md-2 m-0 ${Styles.btnaply}`}
        >
          Apply for Job
        </button>
      </div>
    </div>
  );
};
export default Jobcardhome;
