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
      .get("http://3.110.201.21:3002/jobs/view_all_jobs")
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
          <div>
            <h2>Pakistan Jobs</h2>
            {jobsLoading ? (
              <span>Jobs Loading</span>
            ) : AllJobs.length == 0 ? (
              <p>No Jobs Found</p>
            ) : (
              AllJobs.map((job_data) => {
                return <Jobcardhome job_data={job_data} />;
              })
            )}
          </div>
        </div>
        <br />
        <br />
        <div className={`${styles.pakistanJobs__container}`}>
          <div>
            <h2>Middle East Jobs</h2>
          </div>
        </div>
        <br />
        <br />
        <div className={`${styles.pakistanJobs__container}`}>
          <div>
            <h2>International Jobs</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jobs;
