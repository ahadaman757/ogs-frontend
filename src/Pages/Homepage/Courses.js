import React from "react";
import CourseImg from "../../Assets/Images/course.png";
import Styles from "./homepage.module.css";
import Logo from "../../Assets/Images/image 1.png";
const Courses = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <div className="my-3 container">
        <h1 className="ogsfonts25">Courses</h1>
        <div className="d-flex justify-content-evenly flex-wrap">
          <div className={`p-3 my-3 ${Styles.coursecard}`}>
            <img src={Logo} />
            <h1 className="ogsfonts25">Courses</h1>
            <img className={` ${Styles.coursecardimg}`} src={CourseImg} />
            <div className="d-flex justify-content-between align-items-center my-2">
              <p className="m-0 ogsfonts14">Posted On: 12-12-2022</p>{" "}
              <button
                className={`ogsfonts18 py-3 px-3 ${Styles.coursecardbbttn}`}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
