import React from "react";
import CourseImg from "../../Assets/Images/course.png";
const Courses = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-4">
            <br />
            <img src={CourseImg} />
          </div>
          <div className="col-6 col-md-4">
            <br />
            <img src={CourseImg} />
          </div>
          <div className="col-6 col-md-4">
            <br />
            <img src={CourseImg} />
          </div>
          <div className="col-6 col-md-4">
            <br />
            <img src={CourseImg} />
          </div>
          <div className="col-6 col-md-4">
            <br />
            <img src={CourseImg} />
          </div>
          <div className="col-6 col-md-4">
            <br />
            <img src={CourseImg} />
            <br />
          </div>
          <br />
          <br />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Courses;
