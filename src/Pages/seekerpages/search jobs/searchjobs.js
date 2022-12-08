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

const JobsSearch = () => {
  const { state } = useLocation();
  const [AllJobs, setAllJobs] = useState([]);
  const [jobsLoading, setjobsLoading] = useState(false);
  const [cities, setcities] = useState();
  const [dropDownOptions, setdropDownOptions] = useState("");

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
  const [data, Setdata] = useState("");
  const display = (d) => {
    console.log("value");
    console.log(d);
    Setdata(d);
  };
  useEffect(() => {
    setjobsLoading(true);
    axios
      .get("http://localhost:3002/jobs/view_all_jobs")
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
        className={`pt-5 ${Styles.Manageyoucvsmain} ${data ? "sidebarmarginmin" : "sidebarmarginmax"
          }`}
      >
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-8">
              <div className="d-flex">
                <input className={`me-3 ${Styles.InputField}`} />
                <button className={` py-2 px-4 ${Styles.btnserfind}`}>
                  Find
                </button>
              </div>
              {jobsLoading ? (
                <span>Jobs Loading</span>
              ) : AllJobs.length == 0 ? (
                <p>No Jobs Found</p>
              ) : (
                AllJobs.map((job_data) => {
                  return <Jobcardseeker job_data={job_data} />;
                })
              )}
            </div>
            <div className="col-md-4">
              <div className={` ${Styles.searchfillter}`}>
                <div className={`p-4 my-3 ${Styles.siderightbar}`}>
                  {" "}
                  <h1 className="ogsfonts18">Applicant Filters</h1>
                  <button onClick={() => setapplyFilters(!applyFilters)}>
                    Apply filters
                  </button>
                  {/* /////////////////////////////////////toe////////////////// */}
                  <div
                    className="accordion"
                    id="accordionPanelsStayOpenExample"
                  >
                    <div className="accordion-item accordion234">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingTwo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseTwo"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseTwo"
                        >
                          Applicants by date
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingTwo"
                      >
                        <div className="accordion-body accordion234">
                          <div className="d-flex flex-column my-2">
                            <TextInput
                              label="Start date"
                              type="date"
                              id="start_date"
                              formik={filtersFormik}
                            />
                            <br />
                            <TextInput
                              label="End date"
                              type="date"
                              id="end_date"
                              formik={filtersFormik}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item accordion234">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree"
                        >
                          Gender
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree"
                      >
                        <div className="accordion-body accordion234">
                          <List
                            options={dropDownOptions.gender}
                            id="gender"
                            formik={filtersFormik}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item accordion234">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingFour"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseFour"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseFour"
                        >
                          Job Title
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingFour"
                      >
                        <div className={`accordion-body accordion234 `}>
                          <div className={`p-3 ${Styles.jobtradio}`}>
                            <div className="form-check">
                              <input
                                className={`form-check-input ${Styles.radioer}`}
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label ogsfonts14"
                                for="flexCheckDefault"
                              >
                                Front Desk
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className={`form-check-input ${Styles.radioer}`}
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label ogsfonts14"
                                for="flexCheckDefault"
                              >
                                Manager
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className={`form-check-input ${Styles.radioer}`}
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label ogsfonts14"
                                for="flexCheckDefault"
                              >
                                Front Desk Manager
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className={`form-check-input ${Styles.radioer}`}
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label ogsfonts14"
                                for="flexCheckDefault"
                              >
                                CSR
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className={`form-check-input ${Styles.radioer}`}
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label ogsfonts14"
                                for="flexCheckDefault"
                              >
                                Media
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className={`form-check-input ${Styles.radioer}`}
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label ogsfonts14"
                                for="flexCheckDefault"
                              >
                                Security
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="accordion-item accordion234">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingFive"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFive"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFive"
                      >
                        Company
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingFive"
                    >
                      <div className={`accordion-body accordion234 `}>
                        <div className={`p-3 ${Styles.jobtradio}`}>
                          <div className="form-check">
                            <input
                              className={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Front Desk
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Front Desk Manager
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              CSR
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Media
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Security
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                    <div className="accordion-item accordion234">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingSix"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseSix"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseSix"
                        >
                          Current Salary
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingSix"
                      >
                        <List
                          options={dropDownOptions.max_salary}
                          id="current_salary"
                          formik={filtersFormik}
                        />
                      </div>
                    </div>
                    <div className="accordion-item accordion234">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingSeven"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseSeven"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseSeven"
                        >
                          Expected Salary
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseSeven"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingSeven"
                      >
                        <List
                          options={dropDownOptions.max_salary}
                          id="expected_salary"
                          formik={filtersFormik}
                        />
                      </div>
                    </div>
                    <div className="accordion-item accordion234">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingEight"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseEight"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseEight"
                        >
                          Country
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseEight"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingEight"
                      >
                        <div className={`accordion-body accordion234 `}>
                          <List
                            id="country"
                            options={dropDownOptions.country}
                            formik={filtersFormik}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item accordion234">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingNine"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseNine"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseNine"
                        >
                          City
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseNine"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingNine"
                      >
                        <div className={`accordion-body accordion234 `}>
                          <List
                            id="city"
                            options={cities}
                            formik={filtersFormik}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item accordion234">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingTen"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseTen"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseTen"
                        >
                          Degree Level
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseTen"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingTen"
                      >
                        <div className={`accordion-body accordion234 `}>
                          <List
                            id="education_level"
                            options={dropDownOptions.required_qualification}
                            formik={filtersFormik}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item accordion234">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingEleven"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseEleven"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseEleven"
                        >
                          Experience
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseEleven"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingEleven"
                      >
                        <div className={`accordion-body accordion234 `}>
                          <List
                            id="max_experience"
                            options={dropDownOptions.max_experience}
                            formik={filtersFormik}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item accordion234">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingAge"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseAge"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseAge"
                        >
                          Applicants by Age(Years)
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseAge"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingAge"
                      >
                        <div className="accordion-body accordion234">
                          <div className="d-flex flex-column my-2">
                            <TextInput
                              type="number"
                              label="Minimum Age"
                              id="min_age"
                              formik={filtersFormik}
                            />
                            <br />
                            <TextInput
                              type="number"
                              label="Maximum Age"
                              id="max_age"
                              formik={filtersFormik}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="accordion-item accordion234">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThriteen"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThriteen"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThriteen"
                      >
                        University
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThriteen"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThriteen"
                    >
                      <div className={`accordion-body accordion234 `}>
                        <div className={`p-2 ${Styles.jobtradio}`}>
                          <div className="form-check">
                            <input
                              className={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Front Desk
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                    <div className="accordion-item accordion234">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingfourteen"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapsefourteen"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapsefourteen"
                        >
                          Marital Status
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapsefourteen"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingfourteen"
                      >
                        <List
                          options={dropDownOptions.marital_status}
                          id="marital_status"
                          formik={filtersFormik}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobsSearch;
