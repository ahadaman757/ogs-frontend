import Styles from "./managealljobs.module.css";
import { useEffect, useState } from "react";
import Adminsidebar from "../../../Components/adminsidebar/adminsidebar";
import InputField from "../../../Components/inputfield/inputfield";
import Table from "../../../Components/table/table";
import ManageJobsTable from "../../../Components/table/ManageJobsTable";
import jwtCheck from "../../../system/jwtChecker";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Formik, useFormik } from "formik";
const EditJob = () => {
  const [data, setData] = useState();
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const display = (d) => {
    setData(d);
  };
  useEffect(() => {
    if (jwtCheck() === false) {
      navigate("/adminlogin");
    }
    axios
      .post(`http://localhost:3002/jobs/admingetjobdetail`, {
        jobId: params.jobId,
        headers: {
          accesstoken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setJobData(response.data[0][0]);
        setLoading(false);
      });
    console.log(jobData);
  }, [loading]);

  const params = useParams();

  return (
    <div className={`${Styles.back}`}>
      <Adminsidebar side={display} />
      <div
        className={`${Styles.Managejobsmain} ${
          data ? "sidebarmarginmin" : "sidebarmarginmax"
        }`}
      >
        <div className="container">
          <div className="mt-5">
            <h1 className="ogsfonts38">Welcome</h1>
            <h1 className="ogsfonts20">to OGS manpower Administration Panel</h1>
            <div className={`p-4 my-5 ${Styles.maincontainer}`}>
              <h1 className="ogsfonts20">Content Managment Section</h1>
              <p className="ogsfonts16">Edit Job {params.jobId}</p>
              {loading ? (
                "Loading. Please wait..."
              ) : (
                <EditJobForm jobData={jobData} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EditJobForm = (props) => {
  const formik = useFormik({
    initialValues: {
      id: props.jobData.id,
      job_title: props.jobData.job_title,
      job_description: props.jobData.job_description,
      experience: props.jobData.experience_info,
      sup_gender: "",
      co_worker_percentage: props.jobData.co_worker_percentage,
      valid_upto: props.jobData.valid_upto,
      country: props.jobData.country,
      city: props.jobData.city,
      career_level: props.jobData.career_title,
      min_salary: "",
      max_salary: "",
      functional_area: "",
      gender: "",
      job_shift: "",
      required_qualification: "",
      min_exp: "",
      max_exp: "",
      min_age: "",
      max_age: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label style={{ marginRight: "20px" }}>Id: </label>
        <input
          id="id"
          name="id"
          type="id"
          onChange={formik.handleChange}
          value={formik.values.id}
        />
      </div>
      <div>
        <label style={{ marginRight: "20px" }}>Job Title: </label>
        <input
          id="job_title"
          name="job_title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.job_title}
        />
      </div>
      <div>
        <label style={{ marginRight: "20px" }}>Job Description: </label>
        <input
          id="job_description"
          name="job_description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.job_description}
        />
      </div>
      <div>
        <label style={{ marginRight: "20px" }}>Experience: </label>
        <input
          id="experience"
          name="experience"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.experience}
        />
      </div>
      <div>
        <label style={{ marginRight: "20px" }}>Supervisor Gender: </label>
        <input
          id="sup_gender"
          name="sup_gender"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.sup_gender}
        />
      </div>
      <div>
        <label style={{ marginRight: "20px" }}>Co Worker Percentage: </label>
        <input
          id="co_worker_percentage"
          name="co_worker_percentage"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.co_worker_percentage}
        />
      </div>
      <div>
        <label style={{ marginRight: "20px" }}>Valid Upto: </label>
        <input
          id="valid_upto"
          name="valid_upto"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.valid_upto}
        />
      </div>
      <div>
        <label style={{ marginRight: "20px" }}>Country: </label>
        <input
          id="country"
          name="country"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.country}
        />
      </div>
      <div>
        <label style={{ marginRight: "20px" }}>City: </label>
        <input
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.city}
        />
      </div>
      <div>
        <label style={{ marginRight: "20px" }}>Career Level: </label>
        <input
          id="career_level"
          name="career_level"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.career_level}
        />
      </div>
      <div>
        <label style={{ marginRight: "20px" }}>Minimum Salary: </label>
        <input
          id="min_salary"
          name="min_salary"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.min_salary}
        />
      </div>
      <div>
        <label style={{ marginRight: "20px" }}>Maximum Salary: </label>
        <input
          id="max_salary"
          name="max_salary"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.max_salary}
        />
      </div>
      <div>
        <label style={{ marginRight: "20px" }}>Functional Area: </label>
        <input
          id="functional_area"
          name="functional_area"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.functional_area}
        />
      </div>
      <div>
        <label style={{ marginRight: "20px" }}>Gender: </label>
        <input
          id="gender"
          name="gender"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.gender}
        />
      </div>
      <div>
        <label style={{ marginRight: "20px" }}>Job Shift: </label>
        <input
          id="job_shift"
          name="job_shift"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.job_shift}
        />
      </div>
      <div>
        <label style={{ marginRight: "20px" }}>Required qualification: </label>
        <input
          id="required_qualification"
          name="required_qualification"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.required_qualification}
        />
      </div>
      <div>
        <label style={{ marginRight: "20px" }}>Min Experience: </label>
        <input
          id="min_exp"
          name="min_exp"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.min_exp}
        />
      </div>
      <div>
        <label style={{ marginRight: "20px" }}>Max Experience: </label>
        <input
          id="max_exp"
          name="max_exp"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.max_exp}
        />
      </div>
      <div>
        <label style={{ marginRight: "20px" }}>Minimum Age: </label>
        <input
          id="min_age"
          name="min_age"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.min_age}
        />
      </div>
      <div>
        <label style={{ marginRight: "20px" }}>Maximum Age: </label>
        <input
          id="max_age"
          name="max_age"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.max_age}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditJob;
