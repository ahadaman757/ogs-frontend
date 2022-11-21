import Styles from "./postajob.module.css";
import { useState, useEffect } from "react";
import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import { TextInput, List } from '../Forms/InputFields'
import TagInput from '../Forms/TagInput'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { UploadImageSide } from "../authpages/Registeration";
const SignUpCv = () => {
  const [LogoData, setLogoData] = useState()
  const [data, Setdata] = useState("");
  const [skills, setSkills] = useState()
  const [Description, setDescription] = useState('')

  const [dropDownOptions, setdropDownOptions] = useState("");
  const display = (d) => {
    console.log("value");
    console.log(d);
    Setdata(d);
  };
  const getjoboptions = () => {
    axios.get("http://localhost:3002/jobs/jobsoptions").then(res => {
      setdropDownOptions(res.data)
    })
  }
  useEffect(() => {
    getjoboptions()
  }, [])
  console.log(dropDownOptions)
  const CvFormIk = useFormik(
    {
      initialValues: {

        email: "",
        password: "",
        re_type_password: "",
        first_name: "",
        last_name: "",
        // cv Info
        interested_in: "",
        industry: "",
        job_title: "",
        f_name: "",
        gender: "",
        dob: "",
        domicile: "",
        postal_code: "",
        mobile_number: "",
        work_number: "",
        home_number: "",
        address: "",
        country: "",
        city: "",
        id_card_no: "",
        passport_number: "",
        valid_upto: "",
        education_level: "",
        degree_title: "",
        institution: "",
        min_experience: "",
        career_level: "",
        position: '',
        nationality: "",
        religion: "",
        marital_status: ''

      },
      validationSchema: Yup.object({
        // job_title: Yup.string().required("Required"),
        // // job_description: Yup.string().required("Required"),
        country: Yup.number("invalid type").required("Required"),
        // city: Yup.number("invalid type").required('Required'),
        // // area: Yup.number("invalid type").required('Required'),
        // career_level: Yup.number("invalid type").required('Required'),
        // min_salary: Yup.number("invalid type").required('Required'),
        // max_salary: Yup.number("invalid type").required('Required'),
        // functional_area: Yup.number("invalid type").required('Required'),
        // gender_title: Yup.number("invalid type").required('Required'),
        // job_type_title: Yup.number("invalid type").required('Required'),
        // job_shift: Yup.number("invalid type").required('Required'),
        // required_qualification: Yup.number("invalid type").required('Required'),
        // min_experience: Yup.number("invalid type").required('Required'),
        // max_experience: Yup.number("invalid type").required('Required'),
        // experience_info: Yup.string("invalid type").required('Required'),
        // min_age: Yup.number("invalid type").required('Required'),
        // max_age: Yup.number("invalid type").required('Required'),
      }),
      onSubmit: values => {
        const fullFormData = { ...values };
        const formdata = new FormData();
        formdata.append('image', LogoData)
        for (var key in fullFormData) {
          formdata.append(key, fullFormData[key]);
        }
        axios.post('http://localhost:3002/users', formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
          },
        }).then(res => {
          alert("account created")
        }).catch(error => {
          console.log(error)
        })
      },
    }
  )
  console.log(CvFormIk)
  const [cities, setcities] = useState([])
  useEffect(() => {
    axios.post('http://localhost:3002/get_city_by_country_id', {
      country_id: CvFormIk.values.country || 1
    }).then(res => {
      console.log(res)
      setcities(res.data)
    }).catch(error => {
      console.log(error)
    })
  }, [CvFormIk.values.country])
  return (
    <div>
      <DashboardNavbar side={display} />
      <div
        className={`pt-5 ${Styles.Postajobmain}`}
        style={{ marginLeft: data ? "55px" : "200px" }}
      >
        <form onSubmit={CvFormIk.handleSubmit} className="mt-5">
          <div className={`container ${Styles.Postajobchild}`}>
            <div className="p-3">
              <h1 className="py-3 ogsfonts24">Create Cv</h1>
              <h1 className="ogsfonts18">User Regsiteration</h1>
              <h3 className={`${Styles.formSectionHeading}`}>
                Personal Information
              </h3>
              {/* <p className="ogsfonts16 py-2">
                Asterisk (*) indicates required field
              </p> */}
              <div className="row">
                <div className="col-6">
                  <div>
                    <TextInput id="first_name" label="First Name" formik={CvFormIk} />
                    <TextInput id="last_name" label="Last Name" formik={CvFormIk} />
                    <TextInput id="email" label="Email" formik={CvFormIk} />
                    <TextInput id="password" label="Password" formik={CvFormIk} />
                    <TextInput id="repeat_password" label="Repeat Password" formik={CvFormIk} />
                  </div>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center  ">
                  <UploadImageSide setLogoData={setLogoData} title="Upload Profile Photo" />
                </div>
              </div>
              <hr />
              <div className={`row`}>
                <h3 className={`${Styles.formSectionHeading}`}>

                  Job / Internship Requirement
                </h3>
                <div className="col-md-6">
                  <TextInput id="job_title" label="Job Title" formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <List id="industry" options={dropDownOptions.functional_area} label="Industry" formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <List id="interested_in" options={dropDownOptions.job_type} label="Job Type" formik={CvFormIk} />
                </div>

              </div>
              <hr />
              <div className={`row`}>
                <h3 className={`${Styles.formSectionHeading}`}>

                  Personal Information
                </h3>
                <div className="col-md-6">
                  <TextInput label="Full Name" id='f_name' formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <List label="Position" id='position' options={dropDownOptions.position} formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <List label="Gender" id="gender" options={dropDownOptions.gender} formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <List label="Nationality" id="nationality" options={dropDownOptions.nationality} formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <List label="Religion" id="religion" options={dropDownOptions.religion} formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <List label="Marital Status" id="marital_status" options={dropDownOptions.marital_status} formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <List id="career_level" options={dropDownOptions.career_level} label="career_level" formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <TextInput id="dob" type="date" label="DOB" formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <TextInput id="domicile" label="Domicile" formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <TextInput id="postal_code" label="Postal Code" formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <TextInput id="mobile_number" type='phone' label="Phone Number" formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <TextInput id="work_number" type='phone' label="Work Phone Number" formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <TextInput id="home_number" type='phone' label="Home Phone Number" formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <TextInput id="address" label="Address" formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <List id="country" options={dropDownOptions.country} label="Country" formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <List id="city" options={cities} label="City" formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <TextInput id="id_card_no" label="CNIC No" formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <TextInput id="passport_number" label="Passport Number" formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <TextInput id="valid_upto" type='date' label="valid Upto" formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <List id="education_level" options={dropDownOptions.required_qualification} label="Education" formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <TextInput id="degree_title" label="Degree Title" formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <TextInput id="institution" label="Institution" formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <List id="min_experience" options={dropDownOptions.min_experience} label="Experience" formik={CvFormIk} />
                </div>

                <div className="col-md-6">
                  <List id="current_salary" label="Current Salary" options={dropDownOptions.min_salary} formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <List id="expected_salary" label="Expected Salary" options={dropDownOptions.min_salary} formik={CvFormIk} />
                </div>

              </div>
              <hr />
              <div className="d-flex justify-content-end">
                <button type="submit" className={`mx-2 ${Styles.btnPost}`}>Register </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUpCv;

