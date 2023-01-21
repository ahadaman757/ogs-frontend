import { useEffect, useState } from "react";
import styles from "./homepage.module.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Jobcardhome from "../../Components/jobcardhome/Jobcardhome";
import { useFormik } from "formik";
export const Jobs = () => {
  const [JobData, setJobData] = useState("");
  const [inJobData, setinJobData] = useState([]);

  const { state } = useLocation();
  const [AllJobs, setAllJobs] = useState([]);
  const [jobsLoading, setjobsLoading] = useState(false);
  const [cities, setcities] = useState();
  const [dropDownOptions, setdropDownOptions] = useState("");
  const [submit, setsubmit] = useState("asas");
  const filtersFormik = useFormik({
    initialValues: {
      start_date: "",
      end_date: "",
      country: "",
      city: "",
      education_level: "",
      max_experience: "",
      min_age: "",
      max_age: "",
      gender: "",
      marital_status: "",
      current_salary: "",
      expected_salary: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    setjobsLoading(true);
    axios
      .get("https://3.14.27.53:3003/jobs/view_all_jobs")
      .then((res) => {
        console.log(res.data);
        setAllJobs(res.data);
        setjobsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setjobsLoading(false);
      });
  }, []);

  console.log("asasas", JobData);
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <br />
        <br />
        <div className={`${styles.pakistanJobs__container}`}>
          <div className="my-3">
            <h2>Gulf countries</h2>
            {jobsLoading ? (
              <span>Jobs Loading</span>
            ) : AllJobs.length == 0 ? (
              <p>No Jobs Found</p>
            ) : (
              AllJobs.filter((job_data) => {
                if (
                  job_data.country.toLowerCase() == "bahrain" ||
                  job_data.country.toLowerCase() == "kuwait" ||
                  job_data.country.toLowerCase() == "oman" ||
                  job_data.country.toLowerCase() == "qatar" ||
                  job_data.country.toLowerCase() == "saudi arabia" ||
                  job_data.country.toLowerCase() == "united arab emirates"
                ) {
                  return job_data;
                }
              }).map((job_data) => {
                return (
                  <div className="my-2">
                    {" "}
                    <Jobcardhome job_data={job_data} />
                  </div>
                );
              })
            )}
          </div>
          <div>
            <h2>Pakistan Jobs</h2>
            {jobsLoading ? (
              <span>Jobs Loading</span>
            ) : AllJobs.length == 0 ? (
              <p>No Jobs Found</p>
            ) : (
              AllJobs.filter((job_data) => {
                if (job_data.country.toLowerCase() == "pakistan") {
                  return job_data;
                }
              }).map((job_data) => {
                return (
                  <div className="my-2">
                    {" "}
                    <Jobcardhome job_data={job_data} />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jobs;
