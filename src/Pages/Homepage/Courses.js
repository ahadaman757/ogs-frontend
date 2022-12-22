import { useEffect, useState } from "react";
import CourseImg from "../../Assets/Images/course.png";
import Styles from "./homepage.module.css";
import Logo from "../../Assets/Images/image 1.png";
import axios from "axios";

const Courses = () => {
  const [jobsLoading, setjobsLoading] = useState(false);
  const [dataCourses, setdataCourses] = useState("");
  useEffect(() => {
    setjobsLoading(true);
    axios
      .get("http://3.110.201.21:3002/general/getCourses")
      .then((res) => {
        setdataCourses(res.data.getAllCourses[0]);
        setjobsLoading(false);
      })
      .catch((error) => {});
  }, []);
  console.log(dataCourses, "hhhhhhhhhh");
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <div className="py-3 container">
        <h1 className="ogsfonts25">Courses</h1>
        <div className="d-flex justify-content-evenly flex-wrap">
          {jobsLoading ? (
            <span>Jobs Loading</span>
          ) : dataCourses.length == 0 ? (
            <p>No Courses Found</p>
          ) : (
            dataCourses.map((item) => {
              return (
                <div className="my-2">
                  {" "}
                  <div className={`p-3 my-3 ${Styles.coursecard}`}>
                    <img src={Logo} />
                    <h1 className="ogsfonts25">{item.institute_name}</h1>
                    <img
                      className={` ${Styles.coursecardimg}`}
                      src={`http://3.110.201.21:3002/public/` + item.thumbnail}
                    />
                    <div className="d-flex justify-content-between align-items-center my-2">
                      <p className="m-0 ogsfonts14">Posted On: 12-12-2022</p>{" "}
                      {/* <button
                        className={`ogsfonts18 py-3 px-3 ${Styles.coursecardbbttn}`}
                      >
                        Apply Now
                      </button> */}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
