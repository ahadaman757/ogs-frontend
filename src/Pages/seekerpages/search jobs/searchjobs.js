import Styles from "./searchjobs.module.css";
import Seekersidebar from "../../../Components/seekersidebar/seekersidebar";
import filltericon from "../../../Assets/Images/filter.svg";
import Searchicon from "../../../Assets/Images/search.png";
import selecticon from "../../../Assets/Images/check mark-rectangle.svg";
import diskicon from "../../../Assets/Images/disk.svg";
import piechart from "../../../Assets/Images/chart-pie 01.svg";
import Cv from "../../../Components/cv view/cv";
import InputField from "../../../Components/inputfield/inputfield";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { List, TextInput } from "../../Forms/InputFields";
import { useFormik } from "formik";
import { BasicDocument } from "../../../Components/pdfDownload";
import { useState, useEffect } from "react";
import Jobcardseeker from "../../../Components/jobcardseeker/Jobcard";
import { useNavigate } from "react-router-dom";
import jwtCheck from "../../../system/jwtChecker";

const JobsSearch = () => {
  const { state } = useLocation();
  const [AllJobs, setAllJobs] = useState([]);
  const [jobsLoading, setjobsLoading] = useState(false);
  const [cities, setcities] = useState();
  const [dropDownOptions, setdropDownOptions] = useState("");
  const [find, setfind] = useState();
  const [query, setquery] = useState("");
  const [submit, setsubmit] = useState("");
  const handleChange = (e) => {
    setsubmit(query);
  };
  const [applyFilters, setapplyFilters] = useState(false);
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
  const navigate = useNavigate();
  if (jwtCheck(1) === false) {
    navigate("/seekerlogin");
  }
  const [data, Setdata] = useState("");
  const display = (d) => {
    console.log("value");
    console.log(d);
    Setdata(d);
  };
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
    <div className="asdesaser">
      <Seekersidebar side={display} />
      <div
        className={`pt-5 ${Styles.Manageyoucvsmain} ${
          data ? "sidebarmarginmin" : "sidebarmarginmax"
        }`}
      >
        <div className="container">
          <div className="row mt-5">
            <div className="">
              <div className="d-flex">
                <input
                  type="search"
                  onChange={(e) => {
                    setquery(e.target.value);
                  }}
                  className={`me-3 p-2 ${Styles.InputField}`}
                />
                <button
                  type="submit"
                  onClick={handleChange}
                  className={` py-2 px-4 ${Styles.btnserfind}`}
                >
                  Find
                </button>
              </div>
              {jobsLoading ? (
                <span>Jobs Loading</span>
              ) : AllJobs.length == 0 ? (
                <p>No Jobs Found</p>
              ) : (
                AllJobs.filter((job_data) => {
                  if (AllJobs == "") {
                    return job_data;
                  } else if (
                    job_data.job_title
                      .toLowerCase()
                      .includes(submit.toLowerCase())
                  ) {
                    return job_data;
                  } else if (
                    job_data.country
                      .toLowerCase()
                      .includes(submit.toLowerCase())
                  ) {
                    return job_data;
                  } else if (
                    job_data.city.toLowerCase().includes(submit.toLowerCase())
                  ) {
                    return job_data;
                  }
                }).map((job_data) => {
                  return <Jobcardseeker job_data={job_data} />;
                })
              )}
              {/* {AllJobs.filter((job_data) => {
                if (AllJobs == "") {
                  return job_data;
                } else if (
                  job_data.job_title.toLowerCase().includes(query.toLowerCase())
                ) {
                  return job_data;
                }
              }).map((job_data) => {
                return <Jobcardseeker job_data={job_data} />;
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobsSearch;
