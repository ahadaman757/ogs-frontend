import Styles from "./postajob.module.css";
import { useState } from "react";
import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import { TextInput, List } from '../Forms/InputFields'
import InputField from "../../Components/inputfield/inputfield";
import TagInput from '../Forms/TagInput'
import InputSelect from "../../Components/inputselect/inputfselect";
import TextEditer from "../../Components/textediter/textediter"
import { Formik, useFormik } from 'formik';
import styles from '../authpages/main.module.css'
import * as Yup from 'yup';
const Postajob = () => {
  const [data, Setdata] = useState("");
  const display = (d) => {
    console.log("value");
    console.log(d);
    Setdata(d);
  };
  const jobPostFormIk = useFormik(
    {
      initialValues: {
        job_title: "",
        job_description: "",
        country: "",
        city: "",
        area: "",
        career_level: "",
        start_salary: "",
        end_salary: "",
        functional_area: "",
        gender: "",
        job_shift: "",
        required_qualification: "",
        degree_title: "",
        min_experience: "",
        max_experience: "",
        experience_info: "",
        min_age_requirement: "",
        max_age_requirement: "",
        supervisor_gender: "",
        co_worker_percentage: "",
        valid_upto: "",

      },

      validationSchema: Yup.object({
        job_title: Yup.string().required('Required'),
        job_description: Yup.string().required('Required'),
        start_salary: Yup.string().required('Required'),
        end_salary: Yup.string().required('Required'),
      }),
      onSubmit: values => {
        alert("submmitted")

      },
    }
  )
  return (
    <div>
      <DashboardNavbar side={display} />
      <div
        className={`pt-5 ${Styles.Postajobmain}`}
        style={{ marginLeft: data ? "55px" : "200px" }}
      >
        <div className="mt-5">
          <div className={`container ${Styles.Postajobchild}`}>
            <div className="p-3">
              <h1 className="py-3 ogsfonts24">Post a Job</h1>
              <h1 className="ogsfonts18">Job Detail</h1>
              <p className="ogsfonts16 py-2">
                Asterisk (*) indicates required field
              </p>
              <div className="row">
                <div className="col-6 pe-5">
                  <div>
                    <TextInput id="job_title" label="Enter Job title" formik={jobPostFormIk} />
                    <label className={`${styles.form_input__lable}`}>
                      Enter Skills
                    </label>
                    <div className={`${Styles.taginputContainer} py-2`}>
                      <TagInput />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <List id='country' label="Select Country" formik={jobPostFormIk} />
                      </div>
                      <div className="col-md-6">
                        <List id='city' label="Select city" formik={jobPostFormIk} />
                      </div>
                    </div>
                    <List id='area' label="Select area" formik={jobPostFormIk} />
                    <List id='career_level' label="Required Career Level*" formik={jobPostFormIk} />
                  </div>
                  <div className={`d-flex align-items-end ${Styles.SRm}`}>
                    <div className={`pe-5 ${Styles.SRm2}`}>
                      <List id='start_salary' label="start salary" formik={jobPostFormIk} />
                    </div>
                    <div className={` ${Styles.SRm2}`}>
                      {" "}
                      <List id='end_salary' label="end salary" formik={jobPostFormIk} />
                    </div>
                  </div>
                  <div>
                    {" "}
                    <List id='functional_area' label="Functional Area" formik={jobPostFormIk} />
                    <List id='gender' label="Gender Requirement" formik={jobPostFormIk} />
                  </div>
                  <div>
                    {" "}
                    <h1 className="ogsfonts16 my-3">Additional Conditions</h1>
                    <div class="form-check">
                      <input
                        class={`form-check-input ${Styles.radioer}`}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ogsfonts14"
                        for="flexCheckDefault"
                      >
                        Receive resumes of applicants to this job through your
                        email
                      </label>
                    </div>
                    <div class="form-check ">
                      <input
                        class={`form-check-input ${Styles.radioer}`}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ogsfonts14"
                        for="flexCheckDefault"
                      >
                        Deactivate this job after the Apply By Date
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div>
                    <TextEditer />
                  </div>
                  <div className={`d-flex align-items-end ${Styles.SRm}`}>
                    <div className={`pe-5 ${Styles.SRm2}`}>
                      <InputSelect title={"Job Shift"} />
                    </div>
                    <div className={` ${Styles.SRm2}`}>
                      {" "}
                      <InputSelect title={""} />
                    </div>
                  </div>
                  <h1 className="ogsfonts16 my-3">Publish This Post</h1>
                  <div className={` my-3 d-flex`}>
                    <div class="form-check">
                      <input
                        class={`form-check-input ${Styles.radioer}`}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ogsfonts14"
                        for="flexCheckDefault"
                      >
                        immediately
                      </label>
                    </div>
                    <div class="form-check mx-5">
                      <input
                        class={`form-check-input ${Styles.radioer}`}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ogsfonts14"
                        for="flexCheckDefault"
                      >
                        Future Date
                      </label>
                    </div>
                  </div>
                  <div>
                    <InputSelect title={"Apply By Date"} />
                  </div>
                </div>
              </div>
              <hr />
              <div className={`row`}>
                <div className={`col-6`}>
                  <div className={`d-flex align-items-end ${Styles.SRm}`}>
                    <div className={`pe-5 ${Styles.SRm2}`}>
                      <InputSelect title={"Job Shift"} />
                    </div>
                    <div className={` ${Styles.SRm2}`}>
                      {" "}
                      <InputSelect title={""} />
                    </div>
                  </div>
                  <div>
                    <InputField
                      title={"Job Location*"}
                      requre={"Not in Pakistan"}
                    />
                  </div>
                  <div className={`d-flex align-items-end ${Styles.SRm}`}>
                    <div className={`pe-5 ${Styles.SRm2}`}>
                      <InputSelect title={"Job Shift"} />
                    </div>
                    <div className={` ${Styles.SRm2}`}>
                      {" "}
                      <InputSelect title={""} />
                    </div>
                  </div>
                  <div>
                    <InputField
                      title={"Job Location*"}
                      requre={"Not in Pakistan"}
                    />
                  </div>
                  <div className={`d-flex align-items-end ${Styles.SRm}`}>
                    <div className={`pe-5 ${Styles.SRm2}`}>
                      <InputSelect title={"Job Shift"} />
                    </div>
                    <div className={` ${Styles.SRm2}`}>
                      {" "}
                      <InputSelect title={""} />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className={`row`}>
                <div className={`col-6`}>
                  <h1 className="ogsfonts18">Workplace Environment</h1>
                  <div>
                    <InputSelect title={"Job Shift"} />
                    <InputSelect title={"Job Shift"} />
                  </div>
                </div>
              </div>
              <hr />
              <div className={`row`}>
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
              </div>
              <hr />
              <div className={`row`}>
                <div className={`col-6`}>
                  <h1 className="ogsfonts18">Refine Your Applicant Pool</h1>
                  <p>
                    Pre-filter Applicants Limit applications based on the
                    following filters -select all that apply.
                  </p>
                  <div className="d-flex">
                    <div class="form-check">
                      <input
                        class={`form-check-input ${Styles.radioer}`}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ogsfonts14"
                        for="flexCheckDefault"
                      >
                        Gender
                      </label>
                    </div>
                    <div class="form-check mx-3">
                      <input
                        class={`form-check-input ${Styles.radioer}`}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ogsfonts14"
                        for="flexCheckDefault"
                      >
                        Experience
                      </label>
                    </div>
                    <div class="form-check mx-3">
                      <input
                        class={`form-check-input ${Styles.radioer}`}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ogsfonts14"
                        for="flexCheckDefault"
                      >
                        Degree Level
                      </label>
                    </div>
                    <div class="form-check mx-3">
                      <input
                        class={`form-check-input ${Styles.radioer}`}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ogsfonts14"
                        for="flexCheckDefault"
                      >
                        Age
                      </label>
                    </div>
                    <div class="form-check mx-3">
                      <input
                        class={`form-check-input ${Styles.radioer}`}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ogsfonts14"
                        for="flexCheckDefault"
                      >
                        City
                      </label>
                    </div>
                  </div>
                  <div>
                    <div class="form-check my-3">
                      <input
                        class={`form-check-input ${Styles.radioer}`}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ogsfonts14"
                        for="flexCheckDefault"
                      >
                        Screen your applicants further with custom questions
                      </label>
                    </div>
                    <div class="form-check  my-3">
                      <input
                        class={`form-check-input ${Styles.radioer}`}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ogsfonts14"
                        for="flexCheckDefault"
                      >
                        Attach A Test
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button className={`mx-2 ${Styles.btndraft}`}>
                  Save as Draft
                </button>
                <button className={`mx-2 ${Styles.btnPreview}`}>Preview</button>
                <button className={`mx-2 ${Styles.btnPost}`}>Post Job </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Postajob;
