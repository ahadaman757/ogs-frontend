import { useEffect, useState } from "react";
import CourseImg from "../../Assets/Images/course.png";
import Styles from "./BrowseJobs.module.css";
import mobilelogo from "../../Assets/Images/mobilelogo.jpg";
import axios from "axios";

const BrowseJobs = () => {
  const [jobsLoading, setjobsLoading] = useState(false);
  const [dataCourses, setdataCourses] = useState("");
  useEffect(() => {
    setjobsLoading(true);
    axios
      .get("https://3.14.27.53:3003/general/getCourses")
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
            <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : dataCourses.length == 0 ? (
            <p>No Courses Found</p>
          ) : (
            dataCourses.map((item) => {
              return (
                <div className="m-2">
                  {" "}
                  <div className={`p-3 my-3 ${Styles.coursecard}`}>
                    <img src={mobilelogo} />
                    <div className="d-flex">
                      <h1 className="ogsfonts20 me-1">Institute name: </h1>{" "}
                      <h1 className="ogsfonts20">{item.institute_name}</h1>
                    </div>
                    <div className="d-flex">
                      <p className="ogsfonts16 me-1">Description: </p>{" "}
                      <p className="ogsfonts16">{item.description}</p>
                    </div>
                    <div
                      className={` ${Styles.coursecardimg}`}
                      style={{
                        backgroundImage: `url(${
                          `https://3.14.27.53:3003/public/` + item.thumbnail
                        })`,
                      }}
                    ></div>
                    {/* <img
                      className={` ${Styles.coursecardimg}`}
                      src={`https://3.14.27.53:3003/public/` + item.thumbnail}
                    /> */}
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

export default BrowseJobs;
