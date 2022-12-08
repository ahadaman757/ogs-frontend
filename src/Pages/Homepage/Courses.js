import React from "react";
import CourseImg from "../../Assets/Images/course.png";
const Courses = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="d-flex justify-content-evenly flex-wrap">
          <div className=" ">
            <br />
            <img src={CourseImg} />
          </div>
          <div className=" ">
            <br />
            <img src={CourseImg} />
          </div>
          <div className="">
            <br />
            <img src={CourseImg} />
          </div>
          <div className="">
            <br />
            <img src={CourseImg} />
          </div>
          <div className="">
            <br />
            <img src={CourseImg} />
          </div>
          <div className="">
            <br />
            <img src={CourseImg} />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
