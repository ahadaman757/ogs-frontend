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

const ShowCustomJob = (props) => {
    const [jobTitleLoading, setJobTitleLoading] = useState(false);
     const [titleJob, setTitleJob] = useState([]);
    useEffect(() => {
        if(props.selectedCountry == 0) {
                    setJobTitleLoading(true);
        axios.post(`https://3.14.27.53:3003/jobs/getJobByCountry`, {
                        countryId: props.selectedCountry
                      }).then(res => {
                        if(res.data.code == 1) {
                          setTitleJob (res.data.jobs);
                          console.log(res.data)
                        } else {
                          alert("No jobs found");
                        }
                      })
        setJobTitleLoading(false);
        } else {
                    setJobTitleLoading(true);
        axios.post(`https://3.14.27.53:3003/jobs/getJobByTitle`, {
                        title: props.search
                      }).then(res => {
                        if(res.data.code == 1) {
                          setTitleJob (res.data.jobs);
                          console.log(res.data)
                        } else {
                          alert("No jobs found");
                        }
                      })
        setJobTitleLoading(false);
        }

    },[props.search])
    return (
        <>
            <div className="row my-5 d-flex justify-content-center">
              <h1 className="col-12 ogsfonts2">Results for: { props.search }</h1> <u><p style={{cursor: 'pointer'}} onClick={() => {
                props.showCustomHandler(false);
              }}>View All Jobs</p></u>
              <hr />
            </div>
            <div className="row ">
              {jobTitleLoading ? (
                <div class="d-flex justify-content-center">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : titleJob.length == 0 ? (
                <p>No Jobs Found</p>
              ) : (
                titleJob.filter((job_data) => {
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
        </>
    );
}
export default ShowCustomJob;