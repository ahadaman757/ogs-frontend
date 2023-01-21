import Styles from "./managecources.module.css";
import { useEffect, useState } from "react";
import Adminsidebar from "../../../Components/adminsidebar/adminsidebar";
import InputField from "../../../Components/inputfield/inputfield";
import Table from "../../../Components/table/managecousestable";
import check from "../../../Assets/Images/New folder (3)/check mark-rectangle.svg";
import { Formik, useFormik } from "formik";
import axios from "axios";
import jwtCheck from "../../../system/jwtChecker";
import { useNavigate } from "react-router-dom";

const detail = [
  {
    Code: "ewe",
    Title: "qw",
  },
];
const Managecources = () => {
  const [data, setData] = useState();
  const [addCourseThumbnail, setAddCourseThumbnail] = useState();
  const [loading, setLoading] = useState(false);
  const [tableloading, settableLoading] = useState(true);
  const [returnMessage, setReturnMessage] = useState();
  const [uploadStatus, setUploadStatus] = useState("");
  const [tabledata, settabledata] = useState();
  const [updateTable, setUpdateTabe] = useState();
  const navigate = useNavigate();
  if (jwtCheck(3) === false) {
    navigate("/adminlogin");
  }

  const display = (d) => {
    console.log("value");
    console.log(d);
    setData(d);
  };
  useEffect(() => {
    axios
      .get("https://3.14.27.53:3003/admin/getCourses", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        settabledata(res.data.getAllCourses[0]);
        settableLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updateTable]);
  console.log(tabledata);

  const addCourseFormik = useFormik({
    initialValues: {
      course_name: "",
      course_description: "",
      institute_name: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      setUploadStatus("Adding information to database");
      axios
        .post(
          "https://3.14.27.53:3003/admin/addCourse",
          {
            course_name: values.course_name,
            course_description: values.course_description,
            institute_name: values.institute_name,
          },
          {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          }
        )
        .then((res) => {
          // console.log(res.data);
          uploadThumbnail(res.data.lastId, res.data.offset);
        });
    },
  });

  const uploadThumbnail = (id, offset) => {
    const image = new FormData();
    image.append("file", addCourseThumbnail);
    image.append("id", id);
    image.append("fileName", addCourseThumbnail.name);
    image.append("offset", offset);
    let cid = id;
    setUploadStatus("Uploading Image");
    axios
      .post("https://3.14.27.53:3003/admin/addCourseThumbnail", image, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => updateCourse(cid, addCourseThumbnail.name));
  };

  const updateCourse = (cid, fName) => {
    axios
      .post(
        "https://3.14.27.53:3003/admin/updateCourse",
        {
          offset: cid,
          fName: fName,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        setReturnMessage("Uploaded");
        setUpdateTabe(!updateTable);
        setTimeout(() => {
          setReturnMessage("");
        }, 3000);
        setUploadStatus("");
      });
  };

  const updateHandler = (e) => {
    setUpdateTabe(e);
  };

  return (
    <div className={`${Styles.back}`}>
      <Adminsidebar side={display} />
      <div
        className={`${Styles.Managejobsmain} ${
          data ? "adminsider" : "sidebarmarginmax"
        }`}
      >
        <div className="container">
          <div className="mt-5">
            <h1 className="ogsfonts38">Welcome</h1>
            <h1 className="ogsfonts20">to OGS manpower Administration Panel</h1>
            <div className={`p-4 my-5 ${Styles.maincontainer}`}>
              <h1 className="ogsfonts20">Cources Management Section</h1>
              <p className="ogsfonts16">Manage Courses</p>
              <div className="d-flex flex-wrap justify-content-between">
                <div className="d-flex align-items-center"></div>
                <div className="d-flex align-items-center">
                  {" "}
                  <p className="ogsfonts16 m-0 me-3 "></p>{" "}
                  <button
                    className={` ogsfonts16 px-4 py-3 ${Styles.btnplode}`}
                    data-bs-toggle="modal"
                    data-bs-target="#addCourses"
                  >
                    Add Course
                  </button>
                </div>
              </div>

              {tableloading ? (
                "loading"
              ) : (
                <Table
                  array={tabledata}
                  Sr={"Sr No."}
                  Option={"werer"}
                  title={"Title"}
                  description={"Description"}
                  institute_name={"Institute Name"}
                  updateHandler={updateHandler}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* ADD COURSE POPUP */}
      <div
        className="modal fade"
        id="addCourses"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="d-flex justify-content-between">
                <h1 className="ogsfonts18">Add a course</h1>
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
                <form onSubmit={addCourseFormik.handleSubmit}>
                  {returnMessage == "" ? "" : returnMessage}
                  <div className="my-3">
                    <div className="d-flex justify-content-between">
                      <p className="ogsfonts16">Course Name</p>
                    </div>

                    <input
                      id="course_name"
                      className={`${Styles.InputField}`}
                      name="course_name"
                      type="text"
                      onChange={addCourseFormik.handleChange}
                      value={addCourseFormik.values.course_name}
                      requiredclassName={`${Styles.InputField}`}
                    />
                  </div>
                  <div className="my-3">
                    <div className="d-flex justify-content-between">
                      <p className="ogsfonts16">Course Description</p>
                    </div>

                    <input
                      id="course_description"
                      name="course_description"
                      type="text"
                      onChange={addCourseFormik.handleChange}
                      value={addCourseFormik.values.course_description}
                      required
                      className={`${Styles.InputField}`}
                    />
                  </div>
                  <div className="my-3">
                    <div className="d-flex justify-content-between">
                      <p className="ogsfonts16">Institute Name</p>
                    </div>

                    <input
                      id="institute_name"
                      name="institute_name"
                      type="text"
                      onChange={addCourseFormik.handleChange}
                      value={addCourseFormik.values.institute_name}
                      required
                      className={`${Styles.InputField}`}
                    />
                  </div>

                  <input
                    type="file"
                    required
                    onChange={(e) => {
                      let fileExt = e.target.files[0].name.split(".").pop();
                      if (
                        fileExt == "png" ||
                        fileExt == "jpg" ||
                        fileExt == "jpeg"
                      ) {
                        setAddCourseThumbnail(e.target.files[0]);
                      } else {
                        console.log(fileExt);
                        alert("Only images are supported");
                      }
                    }}
                  />
                  <br />
                  <br />
                  <button
                    className={` ogsfonts16 px-3 py-2 ${Styles.btnplode}`}
                    type="submit"
                  >
                    {uploadStatus == "" ? "Add Course" : uploadStatus}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Managecources;
