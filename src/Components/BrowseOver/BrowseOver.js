import "./BrowseOver.css";
import Googlelogo from "../../Assets/Images/google 1.png";
import MicroSoftlogo from "../../Assets/Images/microsoft 1.png";
import Facebook from "../../Assets/Images/Vector (5).png";
import Ibm from "../../Assets/Images/Vector (4).png";
import Combo from "../../Assets/Images/combo shape.png";
import { useEffect, useState } from "react";

import axios from "axios";
import { useLocation } from "react-router-dom";
import Jobcardhome from "./../jobcardhome/Jobcardhome";
import { useFormik } from "formik";

const BrowseOver = () => {
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
  return (
    <div style={{ backgroundColor: "#f5f5f5" }} className={` py-5 `}>
      <div>
        <div className="container">
          <div className="row my-5   d-flex justify-content-center">
            <h1 className="col-12 ogsfonts2">Gulf Countries</h1>
            <hr />
          </div>
          <div className="container">
            <div className="row ">
              {jobsLoading ? (
                <div class="d-flex justify-content-center">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
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
                    <div className="col-md-4 my-2  ">
                      {" "}
                      <Jobcardhome job_data={job_data} />
                    </div>
                  );
                })
              )}
            </div>
            <div className="row my-5   d-flex justify-content-center">
              <h1 className="col-12 ogsfonts2">Pakistan</h1>
              <hr />
            </div>
            <div className="row ">
              {jobsLoading ? (
                <div class="d-flex justify-content-center">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : AllJobs.length == 0 ? (
                <p>No Jobs Found</p>
              ) : (
                AllJobs.filter((job_data) => {
                  if (job_data.country.toLowerCase() == "pakistan") {
                    return job_data;
                  }
                }).map((job_data) => {
                  return (
                    <div className="col-md-4 my-2  ">
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
    </div>
  );
};
export default BrowseOver;
