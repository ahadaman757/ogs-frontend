import Styles from "./postajob.module.css";
import { useState, useEffect } from "react";
import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import { TextInput, List } from "../Forms/InputFields";
import InputField from "../../Components/inputfield/inputfield";
import TagInput from "../Forms/TagInput";
import InputSelect from "../../Components/inputselect/inputfselect";
import TextEditer from "../../Components/textediter/textediter";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import styles from "../authpages/main.module.css";
import axios from "axios";
import jwtCheck from "../../system/jwtChecker";
import { useNavigate } from "react-router-dom";

const Postajob = () => {
  const [data, Setdata] = useState("");
  const [skills, setSkills] = useState();
  const [Description, setDescription] = useState("");
  console.log(skills);
  const navigate = useNavigate();
  if (jwtCheck(1) === false) {
    navigate("/adminlogin");
  }

  const [dropDownOptions, setdropDownOptions] = useState("");
  const display = (d) => {
    console.log("value");
    console.log(d);
    Setdata(d);
  };
  const getjoboptions = () => {
    axios.get("http://3.110.201.21:3002/jobs/jobsoptions").then((res) => {
      setdropDownOptions(res.data);
    });
  };
  useEffect(() => {
    getjoboptions();
  }, []);

  const jobPostFormIk = useFormik({
    initialValues: {
      job_title: "",
      job_description: "",
      country: "",
      city: "",
      career_level: "",
      min_salary: "",
      max_salary: "",
      functional_area: "",
      gender_title: "",
      job_shift: "",
      required_qualification: "",
      degree_title: "",
      min_experience: "",
      max_experience: "",
      experience_info: "",
      min_age: "",
      max_age: "",
      supervisor_gender_title: "",
      co_worker_percentage: "",
      valid_upto: "",
    },

    validationSchema: Yup.object({
      job_title: Yup.string().required("Required"),
      // job_description: Yup.string().required("Required"),
      country: Yup.number("invalid type").required("Required"),
      city: Yup.number("invalid type").required("Required"),
      // area: Yup.number("invalid type").required('Required'),
      career_level: Yup.number("invalid type").required("Required"),
      min_salary: Yup.number("invalid type").required("Required"),
      max_salary: Yup.number("invalid type").required("Required"),
      functional_area: Yup.number("invalid type").required("Required"),
      gender_title: Yup.number("invalid type").required("Required"),
      job_type_title: Yup.number("invalid type").required("Required"),
      job_shift: Yup.number("invalid type").required("Required"),
      required_qualification: Yup.number("invalid type").required("Required"),
      min_experience: Yup.number("invalid type").required("Required"),
      max_experience: Yup.number("invalid type").required("Required"),
      experience_info: Yup.string("invalid type").required("Required"),
      min_age: Yup.number("invalid type").required("Required"),
      max_age: Yup.number("invalid type").required("Required"),
    }),
    onSubmit: (values) => {
      values.job_description = Description;
      console.log(values);
      console.log(skills);
      alert("submitted");
      let result = skills.map((a) => a.id);
      // let result = [33, 34, "New Skill"]
      const DataToBESend = { ...values, skill_id: skills };
      axios
        .post("http://3.110.201.21:3002/jobs", DataToBESend, {
          headers: {
            "Content-Type": "application/json",
            accesstoken: localStorage.getItem("accessToken"),
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log("error occured");
          console.log(error);
        });
    },
  });
  console.log(jobPostFormIk);
  const [cities, setcities] = useState([]);
  useEffect(() => {
    axios
      .post("http://3.110.201.21:3002/get_city_by_country_id", {
        country_id: jobPostFormIk.values.country || 1,
      })
      .then((res) => {
        console.log("cites response");
        console.log(res);
        setcities(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [jobPostFormIk.values.country]);
  return (
    <div className="asdesaser">
      <DashboardNavbar side={display} />
      <div
        className={`pt-5 ${Styles.Postajobmain} ${
          data ? "sidebarmarginmin" : "sidebarmarginmax"
        }`}
      >
        <form onSubmit={jobPostFormIk.handleSubmit} className="mt-5">
          <div className={`container ${Styles.Postajobchild}`}>
            <div className="p-3">
              <h1 className="py-3 ogsfonts24">Post a Job</h1>
              <h1 className="ogsfonts18">Job Detail</h1>
              <p className="ogsfonts16 py-2">
                Asterisk (*) indicates required field
              </p>
              <div className="row">
                <div className="col-md-6 pe-5">
                  <div>
                    <TextInput
                      id="job_title"
                      label="Enter Job title"
                      formik={jobPostFormIk}
                    />
                    <label className={`${styles.form_input__lable}`}>
                      Enter Skills
                    </label>
                    <div className={`${Styles.taginputContainer} py-2`}>
                      <TagInput setSkills={setSkills} />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <List
                          options={dropDownOptions.country}
                          id="country"
                          list_id="countries"
                          label="Select Country"
                          formik={jobPostFormIk}
                        />
                      </div>
                      <div className="col-md-6">
                        <List
                          options={cities}
                          id="city"
                          label="Select city"
                          formik={jobPostFormIk}
                        />
                      </div>
                    </div>
                    {/* <List id='area' label="Select area" formik={jobPostFormIk} /> */}
                    <List
                      options={dropDownOptions.career_level}
                      id="career_level"
                      list_id="career_levels"
                      label="Required Career Level*"
                      formik={jobPostFormIk}
                    />
                  </div>
                  <div className={`d-flex align-items-start ${Styles.SRm}`}>
                    <div className={`pe-5 ${Styles.SRm2}`}>
                      <List
                        options={dropDownOptions.max_salary}
                        list_id="start_salaries"
                        id="min_salary"
                        label="start salary"
                        formik={jobPostFormIk}
                      />
                    </div>
                    <div className={` ${Styles.SRm2}`}>
                      {" "}
                      <List
                        options={dropDownOptions.max_salary}
                        list_id="end_salaries"
                        id="max_salary"
                        label="end salary"
                        formik={jobPostFormIk}
                      />
                    </div>
                  </div>
                  <div>
                    {" "}
                    <List
                      options={dropDownOptions.functional_area}
                      list_id="functional_areas"
                      id="functional_area"
                      label="Functional Area"
                      formik={jobPostFormIk}
                    />
                    <List
                      options={dropDownOptions.gender}
                      list_id="genders"
                      id="gender_title"
                      label="Gender"
                      formik={jobPostFormIk}
                    />
                  </div>
                  <div>
                    {" "}
                    <h1 className="ogsfonts16 my-3">Additional Conditions</h1>
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
                        Receive resumes of applicants to this job through your
                        email
                      </label>
                    </div>
                    <div className="form-check ">
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
                        Deactivate this job after the Apply By Date
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <TextEditer setDescription={setDescription} />
                  </div>
                  <div
                    className={`d-flex flex-wrap align-items-start ${Styles.SRm}`}
                  >
                    <div className={`pe-5 ${Styles.SRm2}`}>
                      <List
                        options={dropDownOptions.job_type}
                        list_id="job_types"
                        id="job_type_title"
                        label="Job Type"
                        formik={jobPostFormIk}
                      />
                    </div>
                    <div className={` ${Styles.SRm2}`}>
                      {" "}
                      <List
                        options={dropDownOptions.job_shift}
                        list_id="job_shifts"
                        id="job_shift"
                        label="Job Shift"
                        formik={jobPostFormIk}
                      />
                    </div>
                  </div>
                  <h1 className="ogsfonts16 my-3">Publish This Post</h1>
                  <div className={` my-3 d-flex`}>
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
                        immediately
                      </label>
                    </div>
                    <div className="form-check mx-5">
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
                        Future Date
                      </label>
                    </div>
                  </div>
                  <div>
                    <TextInput
                      id="valid_upto"
                      type="date"
                      formik={jobPostFormIk}
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className={`row`}>
                <div className={`col-md-6`}>
                  <div className={`d-flex align-items-end ${Styles.SRm}`}>
                    <div className={`pe-5 ${Styles.SRm2}`}>
                      <List
                        options={dropDownOptions.required_qualification}
                        list_id="qualifications"
                        id="required_qualification"
                        label="Qualification"
                        formik={jobPostFormIk}
                      />
                    </div>
                  </div>
                  <div className={`pe-5 ${Styles.SRm2}`}>
                    <TextInput
                      id="degree_title"
                      label="Specific Degree Title"
                      formik={jobPostFormIk}
                    />
                  </div>
                  <div className={`d-flex align-items-end ${Styles.SRm}`}>
                    <div className={`pe-5 ${Styles.SRm2}`}>
                      <List
                        options={dropDownOptions.max_experience}
                        list_id="min_experiences"
                        id="min_experience"
                        label="Min Experience"
                        formik={jobPostFormIk}
                      />
                    </div>
                    <div className={` ${Styles.SRm2}`}>
                      {" "}
                      <List
                        options={dropDownOptions.max_experience}
                        list_id="max_experiences"
                        id="max_experience"
                        label="Max Experience"
                        formik={jobPostFormIk}
                      />
                    </div>
                  </div>
                  <div>
                    <TextInput
                      id="experience_info"
                      label="More Info About Experience"
                      formik={jobPostFormIk}
                    />
                  </div>
                  <div className={`d-flex align-items-end ${Styles.SRm}`}>
                    <div className={`pe-5 ${Styles.SRm2}`}>
                      <List
                        options={dropDownOptions.max_age}
                        list_id="min_ages"
                        id="min_age"
                        label="Min Age Requirement"
                        formik={jobPostFormIk}
                      />
                    </div>
                    <div className={` ${Styles.SRm2}`}>
                      {" "}
                      <List
                        options={dropDownOptions.max_age}
                        list_id="max_ages"
                        id="max_age"
                        label="Max Age Requirement"
                        formik={jobPostFormIk}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              {/* <div className={`row`}>
                <div className={`col-6`}>
                  <h1 className="ogsfonts18">Workplace Environment</h1>
                  <div>
                    <InputSelect title={"Job Shift"} />
                    <InputSelect title={"Job Shift"} />
                  </div>
                </div>
              </div> */}
              {/* <hr /> */}
              {/* <div className={`row`}>
                <div className={`col-6`}>
                  <h1 className="ogsfonts18">Workplace Environment</h1>
                  <p className="ogsfonts14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                  <div>
                    <InputSelect title={"Job Shift"} />
                    <InputSelect title={"Job Shift"} />
                    <InputSelect title={"Job Shift"} />
                    <InputSelect title={"Job Shift"} />
                  </div>
                </div>
              </div> */}
              <hr />
              <div className={`row`}>
                <div className={`col-md-6`}>
                  <h1 className="ogsfonts18">Refine Your Applicant Pool</h1>
                  <p>
                    Pre-filter Applicants Limit applications based on the
                    following filters -select all that apply.
                  </p>
                  <div className="d-flex flex-wrap">
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
                        gender_title
                      </label>
                    </div>
                    <div className="form-check me-3">
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
                        Experience
                      </label>
                    </div>
                    <div className="form-check me-3">
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
                        Degree Level
                      </label>
                    </div>
                    <div className="form-check me-3">
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
                        Age
                      </label>
                    </div>
                    <div className="form-check me-3">
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
                        City
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className="form-check my-3">
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
                        Screen your applicants further with custom questions
                      </label>
                    </div>
                    <div className="form-check  my-3">
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
                        Attach A Test
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap justify-content-end">
                <button type="submit" className={`mx-2 mt-3 ${Styles.btnPost}`}>
                  Post Job{" "}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Postajob;
