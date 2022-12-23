import Styles from '../post a job/postajob.module.css';
import { useState, useEffect } from 'react';
import Seekersidebar from '../../Components/seekersidebar/seekersidebar';
import { TextInput, List, FileUpload, FileUpload2 } from '../Forms/InputFields';
import TagInput from '../Forms/TagInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { UploadImageSide } from '../authpages/Registeration';
import { useNavigate } from 'react-router-dom';
const CreateCv = () => {
  const navigate = useNavigate();
  const [LogoData, setLogoData] = useState();
  const [PassportFile, setPassportFile] = useState();
  const [ProfileFile, setProfileFile] = useState();
  const [data, Setdata] = useState('');
  const [skills, setSkills] = useState();
  const [Description, setDescription] = useState('');

  const [dropDownOptions, setdropDownOptions] = useState('');
  const display = (d) => {
    Setdata(d);
  };
  const getjoboptions = () => {
    axios.get('http://3.110.201.21:3002/jobs/jobsoptions').then((res) => {
      setdropDownOptions(res.data);
    });
  };
  useEffect(() => {
    getjoboptions();
  }, []);
  const CvFormIk = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      interested_in: '',
      industry: '',
      job_title: '',
      f_name: '',
      gender: '',
      dob: '',
      domicile: '',
      postal_code: '',
      mobile_number: '',
      work_number: '',
      home_number: '',
      address: '',
      country: '',
      city: '',
      id_card_no: '',
      passport_number: '',
      valid_upto: '',
      passport_issue_date: '',
      education_level: '',
      degree_title: '',
      institution: '',
      max_experience: '',
      career_level: '',
      position: '',
      nationality: '',
      religion: '',
      marital_status: '',
      current_salary: '',
      expected_salary: '',
      skin_color: '',
      weight: '',
      height: '',
      min_experience: '',
    },
    onSubmit: (values) => {
      const fullFormData = { ...values };
      const formdata = new FormData();
      formdata.append('image', ProfileFile);
      console.log(PassportFile);
      formdata.append('passport_photo', PassportFile);
      for (var key in fullFormData) {
        formdata.append(key, fullFormData[key]);
      }

      axios
        .post('http://3.110.201.21:3002/createcv', formdata, {
          headers: {
            accesstoken: localStorage.getItem('accessToken'),
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
          },
        })
        .then((res) => {
          alert('account created');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  const [cities, setcities] = useState([]);
  useEffect(() => {
    axios
      .post('http://3.110.201.21:3002/get_city_by_country_id', {
        country_id: CvFormIk.values.country || 1,
      })
      .then((res) => {
        setcities(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [CvFormIk.values.country]);
  return (
    <div className="asdesaser">
      <Seekersidebar side={display} />
      <div
        className={`pt-5 ${Styles.Postajobmain} ${
          data ? 'sidebarmarginmin' : 'sidebarmarginmax'
        }`}
      >
        <form onSubmit={CvFormIk.handleSubmit} className="mt-5">
          <div className={`container ${Styles.Postajobchild}`}>
            <div className="p-3">
              <h1 className="py-3 ogsfonts24">Create Cv</h1>
              <h3 className={`${Styles.formSectionHeading}`}>
                Personal Information
              </h3>
              {/* <p className="ogsfonts16 py-2">
                Asterisk (*) indicates required field
              </p> */}
              <div className={`row`}>
                <h3 className={`${Styles.formSectionHeading}`}>
                  Job / Internship Requirement
                </h3>
                <div className="col-md-6">
                  <TextInput
                    id="job_title"
                    label="Job Title"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <List
                    id="industry"
                    options={dropDownOptions.functional_area}
                    label="Industry"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <List
                    id="interested_in"
                    options={dropDownOptions.job_type}
                    label="Job Type"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <FileUpload2
                    required
                    id="image"
                    name="image"
                    setFileData={setProfileFile}
                    label="Profile Photo"
                  />
                </div>
              </div>
              <hr />
              <div className={`row`}>
                <h3 className={`${Styles.formSectionHeading}`}>
                  Personal Information
                </h3>
                <div className="col-md-6">
                  <TextInput
                    id="first_name"
                    label="First Name"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    id="last_name"
                    label="Last Name"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <List
                    label="Position"
                    id="position"
                    options={dropDownOptions.position}
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <List
                    label="Gender"
                    id="gender"
                    options={dropDownOptions.gender}
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <List
                    label="Nationality"
                    id="nationality"
                    options={dropDownOptions.nationality}
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <List
                    label="Religion"
                    id="religion"
                    options={dropDownOptions.religion}
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <List
                    label="Marital Status"
                    id="marital_status"
                    options={dropDownOptions.marital_status}
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <List
                    id="career_level"
                    options={dropDownOptions.career_level}
                    label="career_level"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    id="dob"
                    type="date"
                    label="DOB"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <TextInput id="domicile" label="Domicile" formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <TextInput
                    id="postal_code"
                    label="Postal Code"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    id="mobile_number"
                    type="phone"
                    label="Phone Number"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    id="work_number"
                    type="phone"
                    label="Work Phone Number"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    id="home_number"
                    type="phone"
                    label="Home Phone Number"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <TextInput id="address" label="Address" formik={CvFormIk} />
                </div>
                <div className="col-md-6">
                  <List
                    id="country"
                    options={dropDownOptions.country}
                    label="Country"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <List
                    id="city"
                    options={cities}
                    label="City"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    id="id_card_no"
                    label="CNIC No"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    id="passport_number"
                    label="Passport Number"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <FileUpload2
                    required
                    id="passport_id"
                    name="passport_photo"
                    setFileData={setPassportFile}
                    label="Passport Photo"
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    id="valid_upto"
                    type="date"
                    label="valid Upto"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    id="passport_issue_date"
                    type="date"
                    label="Passport expiry"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <List
                    id="education_level"
                    options={dropDownOptions.required_qualification}
                    label="Education"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    id="degree_title"
                    label="Degree Title"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    id="institution"
                    label="Institution"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    id="skin_color"
                    label="Skin Color"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    id="weight"
                    label="Weight (kg)"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    id="height"
                    label="Height (in)"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <List
                    id="max_experience"
                    options={dropDownOptions.max_experience}
                    label="Min Experience"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <List
                    id="min_experience"
                    options={dropDownOptions.max_experience}
                    label="Max Experience"
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <List
                    id="current_salary"
                    label="Current Salary"
                    options={dropDownOptions.max_salary}
                    formik={CvFormIk}
                  />
                </div>
                <div className="col-md-6">
                  <List
                    id="expected_salary"
                    label="Expected Salary"
                    options={dropDownOptions.max_salary}
                    formik={CvFormIk}
                  />
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-end">
                <button type="submit" className={`mx-2 ${Styles.btnPost}`}>
                  Create cv{' '}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateCv;
