import Styles from "./managealljobs.module.css";
import { useEffect, useState } from "react";
import Adminsidebar from "../../../Components/adminsidebar/adminsidebar";
import TagInput from "../../Forms/TagInput";

import jwtCheck from "../../../system/jwtChecker";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { TextInput, List } from "../../Forms/InputFields";
import TextEditer from "../../../Components/textediter/textediter";
import styles from "../../post a job/postajob.module.css";
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
      .post(
        `http://localhost:3002/jobs/admingetjobdetail`,
        {
          jobId: params.jobId,
        },
        {
          headers: {
            accesstoken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        setJobData(response.data[0][0]);
        setLoading(false);
      });
    console.log(jobData);
  }, [loading]);

  const params = useParams();

  // Edit Job Formik

  // get record

  return (
    <div className={`${Styles.back}`}>
      <Adminsidebar side={display} />
      <div
        className={`${Styles.Managejobsmain} ${data ? "adminsider" : "sidebarmarginmax"
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
                <EditJobForm params={params} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EditJobForm = ({ params }) => {
  const [dropDownOptions, setdropDownOptions] = useState([]);
  const [skills, setSkills] = useState();
  const [Description, setDescription] = useState("");
  const [cities, setcities] = useState([]);

  const EditJobFormIk = useFormik({
    initialValues: {
      job_title: "",
      // job_description: "",
      country: "",
      city: "",
      career_level: "",
      min_salary: "",
      max_salary: "",
      functional_area: "",
      gender_title: "",
      job_shift: "",
      required_qualification: "",
      job_type_title: "",
      degree_title: "",
      min_experience: "",
      max_experience: "",
      experience_info: "",
      min_age: "",
      max_age: "",
      supervisor_gender_title: "",
      co_worker_percentage: "",
      valid_upto: "",
      job_id: "",
    },

    validationSchema: Yup.object({
      // first_name: Yup.string().required('Required'),
      // last_name: Yup.string().required('Required'),
      // position: Yup.string().required('Required'),
      // country: Yup.string().required('Required'),
      // city: Yup.string().required('city is Required'),
      // contact_number: Yup.string().required('Required'),
      // address: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      axios
        .put(
          "http://localhost:3002/admin/jobs",
          {
            values,
          },
          {
            headers: {
              accesstoken: localStorage.getItem("accessToken"),
            },
          }
        )
        .then((res) => {
          console.log();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  useEffect(() => {
    axios
      .post(
        `http://localhost:3002/jobs/admingetjobdetail`,
        {
          jobId: params.jobId,
        },
        {
          headers: {
            accesstoken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        const data = res.data[0][0];
        EditJobFormIk.values.job_id = data.id;
        EditJobFormIk.values.job_title = data.job_title;
        // EditJobFormIk.values.job_description = data.job_description
        EditJobFormIk.values.country = data.country_id;
        EditJobFormIk.values.city = data.city_id;
        EditJobFormIk.values.career_level = data.career_level_id;
        EditJobFormIk.values.min_salary = data.min_salary_id;
        EditJobFormIk.values.max_salary = data.max_salary_id;
        EditJobFormIk.values.functional_area = data.functional_area_id;
        EditJobFormIk.values.gender_title = data.gender_title_id;
        EditJobFormIk.values.job_shift = data.job_shift_id;
        EditJobFormIk.values.job_type_title = data.job_shift_id;
        EditJobFormIk.values.required_qualification =
          data.required_qualification_id;
        EditJobFormIk.values.degree_title = data.degree_title;
        EditJobFormIk.values.min_experience = data.min_experience_id;
        EditJobFormIk.values.max_experience = data.max_experience_id;
        EditJobFormIk.values.experience_info = data.experience_info;
        EditJobFormIk.values.min_age = data.min_age_id;
        EditJobFormIk.values.max_age = data.max_age_id;
        EditJobFormIk.values.supervisor_gender_title =
          data.supervisor_gender_title;
        EditJobFormIk.values.co_worker_percentage = data.co_worker_percentage;
        EditJobFormIk.values.valid_upto = data.valid_upto;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const getjoboptions = () => {
    axios.get("http://localhost:3002/jobs/jobsoptions").then((res) => {
      setdropDownOptions(res.data);
    });
  };
  console.log(EditJobFormIk);
  useEffect(() => {
    getjoboptions();
  }, []);
  useEffect(() => {
    axios
      .post("http://localhost:3002/get_city_by_country_id", {
        country_id: EditJobFormIk.values.country || 1,
      })
      .then((res) => {
        console.log("cites response");
        console.log(res);
        setcities(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [EditJobFormIk.values.country]);
  return (
    <form onSubmit={EditJobFormIk.handleSubmit} className="mt-5">
      <div className={`container ${Styles.Postajobchild}`}>
        <div className="p-3">
          <h1 className="py-3 ogsfonts24">edit a Job</h1>
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
                  formik={EditJobFormIk}
                />
                {/* <label className={`${styles.form_input__lable}`}>
                  Enter Skills
                </label>
                <div className={`${Styles.taginputContainer} py-2`}>
                  <TagInput setSkills={setSkills} />
                </div> */}
                <div className="row">
                  <div className="col-md-6">
                    <List
                      options={dropDownOptions.country}
                      id="country"
                      list_id="countries"
                      label="Select Country"
                      formik={EditJobFormIk}
                    />
                  </div>
                  <div className="col-md-6">
                    <List
                      options={cities}
                      id="city"
                      label="Select city"
                      formik={EditJobFormIk}
                    />
                  </div>
                </div>
                {/* <List id='area' label="Select area" formik={EditJobFormIk} /> */}
                <List
                  options={dropDownOptions.career_level}
                  id="career_level"
                  list_id="career_levels"
                  label="Required Career Level*"
                  formik={EditJobFormIk}
                />
              </div>
              <div className={`d-flex align-items-start ${Styles.SRm}`}>
                <div className={`pe-5 ${Styles.SRm2}`}>
                  <List
                    options={dropDownOptions.max_salary}
                    list_id="start_salaries"
                    id="min_salary"
                    label="start salary"
                    formik={EditJobFormIk}
                  />
                </div>
                <div className={` ${Styles.SRm2}`}>
                  {" "}
                  <List
                    options={dropDownOptions.max_salary}
                    list_id="end_salaries"
                    id="max_salary"
                    label="end salary"
                    formik={EditJobFormIk}
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
                  formik={EditJobFormIk}
                />
                <List
                  options={dropDownOptions.gender}
                  list_id="genders"
                  id="gender_title"
                  label="Gender"
                  formik={EditJobFormIk}
                />
              </div>
              {/* <div>
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
              </div> */}
            </div>
            <div className="col-md-6">
              {/* <div>
                <TextEditer setDescription={setDescription} />
              </div> */}
              <div
                className={`d-flex flex-wrap align-items-start ${Styles.SRm}`}
              >
                <div className={`pe-5 ${Styles.SRm2}`}>
                  <List
                    options={dropDownOptions.job_type}
                    list_id="job_types"
                    id="job_type_title"
                    label="Job Type"
                    formik={EditJobFormIk}
                  />
                </div>
                <div className={` ${Styles.SRm2}`}>
                  {" "}
                  <List
                    options={dropDownOptions.job_shift}
                    list_id="job_shifts"
                    id="job_shift"
                    label="Job Shift"
                    formik={EditJobFormIk}
                  />
                </div>
              </div>
              {/* <h1 className="ogsfonts16 my-3">Publish This Post</h1> */}
              {/* <div className={` my-3 d-flex`}>
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
              </div> */}
              <div>
                <TextInput
                  label="Valid Upto"
                  id="valid_upto"
                  type="date"
                  formik={EditJobFormIk}
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
                    formik={EditJobFormIk}
                  />
                </div>
              </div>
              <div className={`pe-5 ${Styles.SRm2}`}>
                <TextInput
                  id="degree_title"
                  label="Specific Degree Title"
                  formik={EditJobFormIk}
                />
              </div>
              <div className={`d-flex align-items-end ${Styles.SRm}`}>
                <div className={`pe-5 ${Styles.SRm2}`}>
                  <List
                    options={dropDownOptions.max_experience}
                    list_id="min_experiences"
                    id="min_experience"
                    label="Min Experience"
                    formik={EditJobFormIk}
                  />
                </div>
                <div className={` ${Styles.SRm2}`}>
                  {" "}
                  <List
                    options={dropDownOptions.max_experience}
                    list_id="max_experiences"
                    id="max_experience"
                    label="Max Experience"
                    formik={EditJobFormIk}
                  />
                </div>
              </div>
              <div>
                <TextInput
                  id="experience_info"
                  label="More Info About Experience"
                  formik={EditJobFormIk}
                />
              </div>
              <div className={`d-flex align-items-end ${Styles.SRm}`}>
                <div className={`pe-5 ${Styles.SRm2}`}>
                  <List
                    options={dropDownOptions.max_age}
                    list_id="min_ages"
                    id="min_age"
                    label="Min Age Requirement"
                    formik={EditJobFormIk}
                  />
                </div>
                <div className={` ${Styles.SRm2}`}>
                  {" "}
                  <List
                    options={dropDownOptions.max_age}
                    list_id="max_ages"
                    id="max_age"
                    label="Max Age Requirement"
                    formik={EditJobFormIk}
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

          <div className="d-flex flex-wrap justify-content-end">
            <button
              type="submit"
              className={`mx-2 text-white unset-btn p-2 mt-3 ${Styles.btnPost}`}
            >
              Update Job{" "}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditJob;
