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

const Cv = ({ applicant }) => {
  const [data, Setdata] = useState(true);
  return (
    <div className={` p-4 my-4 ${Styles.Cvmain}`}>
      <div className="d-flex justify-content-between">
        <button
          onClick={() => {
            Setdata(!data);
          }}
          className={`${Styles.cvheadicon}`}
        >
          <span>
            <img src={data ? check : selecticon} />
          </span>
        </button>
        <p className="m-0 ogsfonts16 ">Viewed</p>
        <button className={`ogsfonts16 ${Styles.cvheadicon}`}>
          <span>
            <img className="me-3" src={eyeicon} />
          </span>
          Preview CV
        </button>
        <button className={`ogsfonts16 ${Styles.cvheadicon}`}>
          <span>
            <img className="me-3" src={downicon} />
          </span>
          Download CV
        </button>
        <button className={`ogsfonts16 ${Styles.cvheadicon}`}>
          <span>
            <img className="me-3" src={useradd} />
          </span>
          ShortList
        </button>
        <button className={`ogsfonts16 ${Styles.cvheadicon}`}>
          <span>
            <img className="me-3" src={userremove} />
          </span>
          Reject
        </button>
        <div class="dropdown">
          <button
            className={`ogsfonts16 ${Styles.cvheadicon}`}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            More Actions
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-2">
          <img className="img-fluid" src={`http://localhost:3002/${applicant.cv_image.replace("images", "images/")}`} />
          <div className=" mt-2 d-flex justify-content-evenly">
            <img src={likeicon} />
            <img src={dislikeicon} />
          </div>
        </div>
        <div className="col-9">
          <div className="d-flex">
            <p className="me-3 ogsfonts20">{applicant.first_name + " " + applicant.last_name}</p>
            <p className="ogsfonts14">{`(${applicant.gender_title}, ${applicant.age}, ${applicant.country} ${applicant.city})`}   </p>
          </div>
          <div className="d-flex">
            {" "}
            <p className="me-3 ogsfonts16">CV Number:</p>
            <p className="ogsfonts14"> {`${applicant.cv_id}, Apply Date: ${applicant.applied_at}`}</p>
          </div>
          <div className="d-flex">
            {" "}
            <p className="me-3 ogsfonts16">Experience:</p>
            <p className="ogsfonts14">
              Content analyst at S&P Global Market Intelligence (Aug 2016 - Dec
              2018)
            </p>
          </div>
          <div className="d-flex">
            {" "}
            <p className="me-3 ogsfonts16">Education:</p>
            <p className="ogsfonts14">{`${applicant.qualification}`}</p>
          </div>
          <div className="d-flex">
            <p className="me-3 ogsfonts16">Career Level:</p>
            <p className="ogsfonts14">{applicant.career_title}</p>
          </div>
          <div className="d-flex">
            {" "}
            <p className="me-3 ogsfonts16">Industry:</p>
            <p className="ogsfonts14">{applicant.business_type_name}</p>
          </div>
          <div className="d-flex align-items-center">
            <p className="me-3 ogsfonts16">Skills:</p>
            <div className="d-flex flex-wrap">
              <p className={`p-2 me-3 ${Styles.skills}`}>Skills</p>
              <p className={`p-2 me-3 ${Styles.skills}`}>Skills</p>
              <p className={`p-2 me-3 ${Styles.skills}`}>Skills</p>
              <p className={`p-2 me-3 ${Styles.skills}`}>Skills</p>
              <p className={`p-2 me-3 ${Styles.skills}`}>Skills</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <div>
          <p className="text-center ogsfonts14">Years of Experience</p>
          <p className="text-center ogsfonts18 m-0">{applicant.max_experience}</p>
        </div>
        <div>
          <p className="text-center ogsfonts14">Current Salary</p>
          <p className="text-center ogsfonts18 m-0">PKR 30K - 35K /Month</p>
        </div>
        <div>
          <p className="text-center ogsfonts14">Expected Salary</p>
          <p className="text-center ogsfonts18 m-0">PKR 35K - 40K /Month</p>
        </div>
      </div>
    </div>
  );
};
export default Cv;
