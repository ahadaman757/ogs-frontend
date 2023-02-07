import Styles from './postajob.module.css';
import { useState, useEffect } from 'react';
import DashboardNavbar from '../../Components/DashboardNavbar/DashboardNavbar';
import { TextInput, List, FileUpload, PassInput, ListSecond } from '../Forms/InputFields';
import TagInput from '../Forms/TagInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { UploadImageSide } from '../authpages/Registeration';
import PhoneInput from 'react-phone-number-input';
import eye from '../../Assets/Images/eye.svg';
import eyedes from '../../Assets/Images/eye-disable.svg';
const SignUpCv = () => {
  const [cvResponse, setcvResponse] = useState('');
  const [FormikError, setFormikError] = useState(null);
  const [ProfileImage, setProfileImage] = useState(null);
  const [cvError, setcvError] = useState('');
  const [JobTitles, setJobTitles] = useState([]);
  const [data, Setdata] = useState('');
  const [skills, setSkills] = useState();
  const [Description, setDescription] = useState('');
  const [dropDownOptions, setdropDownOptions] = useState('');
  const [logov, setlogov] = useState(eye);
  const [logov2, setlogov2] = useState(eye);
  const [passwordType, setPasswordType] = useState('password');
  const [passwordType2, setPasswordType2] = useState('password');
  const [notAvailable, setNotAvailable] = useState(false);
  const [additionalFiles, setAdditionalFiles] = useState([]);
  const [additionalLoading, setAdditionalLoading] = useState(true);
  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      setlogov(eyedes);
      return;
    }
    setPasswordType('password');
    setlogov(eye);
  };
  const togglePassword2 = () => {
    if (passwordType2 === 'password') {
      setPasswordType2('text');
      setlogov2(eyedes);
      return;
    }
    setPasswordType2('password');
    setlogov2(eye);
  };
  console.log(ProfileImage);
  const display = (d) => {
    console.log('value');
    console.log(d);
    Setdata(d);
  };
  const getjoboptions = () => {
    axios.get('https://3.14.27.53:3003/jobs/jobsoptions').then((res) => {
      setdropDownOptions(res.data);
    });
  };
  useEffect(() => {
    getjoboptions();
    axios.get(`https://3.14.27.53:3003/general/getAdditionalFiles`).then(res => {
      if(res.data.code == 1) {
        console.log("files", res.data.files);
        localStorage.setItem("additionalFiles", res.data.files.length);
        setAdditionalFiles(res.data.files[0]);
        setAdditionalLoading(false);
      }
    })
  }, []);
  console.log(dropDownOptions);
  const CvFormIk = useFormik({
    initialValues: additionalFiles.reduce((acc, add) => {
        if (add.column_name) {
    acc[add.column_name] = '';
  }
      return acc;
    }, {
      passport_photo: '',
      image: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      re_type_password: '',
      // cv Info
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
      nationality: '',
      religion: '',
      marital_status: '',
      current_salary: '',
      expected_salary: '',
      skin_color: '',
      weight: '',
      height: '',
      min_experience: '',
    }),
    validationSchema: Yup.object({
      corona_certificate: Yup.mixed().required('You need to provide a file'),
      passport_photo: Yup.mixed().required('You need to provide a file'),
      image: Yup.mixed().required('You need to provide a file'),

      first_name: Yup.string('invalid type').required('First Name is Required'),
      last_name: Yup.string('invalid type').required('Required'),
      email: Yup.string('invalid type').required('Required'),
      password: Yup.string().required('Password is Required'),
      re_type_password: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match'
      ),
      interested_in: Yup.string('invalid type').required('Required'),
      industry: Yup.number('invalid type').required('Required'),
      job_title: Yup.string('invalid type').required('Required'),
      f_name: Yup.string('invalid type').required('Required'),
      gender: Yup.string('invalid type').required('Required'),
      dob: Yup.string('invalid type').required('Required'),
      domicile: Yup.string('invalid type').required('Required'),
      postal_code: Yup.string('invalid type').required('Required'),
      mobile_number: Yup.string('invalid type').required('Required'),
      work_number: Yup.string('invalid type').required('Required'),
      home_number: Yup.string('invalid type').required('Required'),
      address: Yup.string('invalid type').required('Required'),
      country: Yup.string('invalid type').required('Required'),
      city: Yup.string('invalid type').required('Required'),
      id_card_no: Yup.string('invalid type').required('Required'),
      passport_number: Yup.string('invalid type').required('Required'),
      valid_upto: Yup.string('invalid type').required('Required'),
      education_level: Yup.string('invalid type').required('Required'),
      degree_title: Yup.string('invalid type').required('Required'),
      institution: Yup.string('invalid type').required('Required'),
      max_experience: Yup.string('invalid type').required('Required'),
      career_level: Yup.string('invalid type').required('Required'),
      nationality: Yup.string('invalid type').required('Required'),
      religion: Yup.string('invalid type').required('Required'),
      marital_status: Yup.string('invalid type').required('Required'),
      current_salary: Yup.string('invalid type').required('Required'),
      expected_salary: Yup.string('invalid type').required('Required'),
      skin_color: Yup.string('invalid type').required('Required'),
      weight: Yup.string('invalid type').required('Required'),
      height: Yup.string('invalid type').required('Required'),
      min_experience: Yup.string('invalid type').required('Required'),
    }),
    onSubmit: (values) => {
      const fullFormData = { ...values };
      const formdata = new FormData();
      const additionalFormData = new FormData();
      const add = [];
      const tempAdd = [];
      for(let i = 0; i < additionalFiles.length; i++) {
        add.push(i == 0 ? additionalFiles[i].column_name : additionalFiles[i].column_name + "|");
        tempAdd.push(additionalFiles[i].column_name);
      }
      formdata.append("additionalFiles", localStorage.getItem("additionalFiles"));
      formdata.append("additionalFilesName", add);
      additionalFormData.append("additionalFiles", localStorage.getItem("additionalFiles"));
      additionalFormData.append("additionalFilesName", add);
      for (var key in fullFormData) {
        if(tempAdd.includes(key) !== true) {
          formdata.append(key, fullFormData[key]);
        } else {
          additionalFormData.append(key, fullFormData[key])
        }
      }
      axios
        .post('https://3.14.27.53:3003/users', formdata, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
          },
        })
        .then((res) => {
          setcvResponse('Account Created');
          additionalFormData.append("userId", res.data.userId);
        })
        .catch((error) => {
          console.log(error);
          setcvError(error.response.data.message);
          // setcvError("error occured while creating CV")
        })
        .finally(() => {
          
            axios.post(`https://3.14.27.53:3003/users/uploadAdditionalFiles`, additionalFormData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
          },
            }).then((res) => {
              console.log(res.data);
            })
            setTimeout(() => {
            setcvResponse('');
            setcvError('');
          }, 5000);
        });
    },
  }) 
  const [cities, setcities] = useState([]);
  useEffect(() => {
    axios
      .post('https://3.14.27.53:3003/get_city_by_country_id', {
        country_id: CvFormIk.values.country || 1,
      })
      .then((res) => {
        console.log(res);
        setcities(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [CvFormIk.values.country]);
  useEffect(() => {
    axios
      .post('https://3.14.27.53:3003/get_job_titles_by_industry_id', {
        industry_id: CvFormIk.values.industry || 1,
      })
      .then((res) => {
        console.log(res);
        setJobTitles(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [CvFormIk.values.industry]);
  console.log(CvFormIk);

  return (
    <div className="asdesaser">
      <div className={`pt-5 ${Styles.Postajobmain} `}>
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
                <div className="col-md-6">
                  <div>
                    <TextInput
                      id="first_name"
                      label="First Name"
                      formik={CvFormIk}
                    />
                    <TextInput
                      id="last_name"
                      label="Last Name"
                      formik={CvFormIk}
                    />
                    <TextInput id="email" label="Email" formik={CvFormIk} />
                    <PassInput
                      type="password"
                      id="password"
                      label="Password"
                      formik={CvFormIk}
                      togglePassword={togglePassword}
                      logov={logov}
                      passwordType={passwordType}
                    />
                    <PassInput
                      type="password"
                      id="repeat_password"
                      label="Repeat Password"
                      formik={CvFormIk}
                      togglePassword={togglePassword2}
                      logov={logov2}
                      passwordType={passwordType2}
                    />
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center  ">
                  <UploadImageSide
                    id="image"
                    formik={CvFormIk}
                    title="Upload Profile Photo"
                  />
                  {/* {
                    ProfileImage && <img className={`border-round ${Styles.profile_img} `} src={ProfileImage} />
                  } */}
                </div>
              </div>
              <hr />
              <div className={`row`}>
                <h3 className={`${Styles.formSectionHeading}`}>
                  Job / Internship Requirement
                </h3>
                <div className="col-md-12">
                  <List
                    id="industry"
                    options={dropDownOptions.functional_area}
                    label="Industry"
                    formik={CvFormIk}
                  />
                </div>
                  {
                    notAvailable === false ?                 
                    <div className="col-md-6">
                  <ListSecond
                  options={JobTitles}
                    id="job_title"
                    label="Job Title"
                    formik={CvFormIk}
                  />
                   <a href="#" onClick={() => setNotAvailable(true)}>Can't find what you're looking for? Click here!</a>
                </div>
 :                                     <div className="col-md-6">
 <TextInput
   id="job_title"
   label="Job Title"
   formik={CvFormIk}
 />

</div>
                  }

                {/* <div className="col-md-6">
                  <TextInput
                    id="job_title"
                    label="Job Title"
                    formik={CvFormIk}
                  />
                </div> */}

                <div className="col-md-6">
                  <List
                    id="interested_in"
                    options={dropDownOptions.job_type}
                    label="Job Type"
                    formik={CvFormIk}
                  />
                </div>
              </div>
              <hr />
              <div className={`row`}>
                <h3 className={`${Styles.formSectionHeading}`}>
                  Personal Information
                </h3>
                <div className="col-md-6">
                  <TextInput label="Full Name" id="f_name" formik={CvFormIk} />
                </div>
                {/* <div className="col-md-6">
                  <List
                    label="Position"
                    id="position"
                    options={dropDownOptions.position}
                    formik={CvFormIk}
                  />
                </div> */}
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
                  <FileUpload
                    formik={CvFormIk}
                    id="passport_photo"
                    name="passport_photo"
                    label="Passport Photo"
                  />
                </div>
                    {
                      additionalFiles.map((add) => {
                        return (
                                          <div className="col-md-6">
                  <FileUpload
                    formik={CvFormIk}
                    id={add.column_name}
                    name={add.column_name}
                    label={add.label}
                  />
                </div>
                        )
                      })
                    }
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
                    label="Passport Issue Date"
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
                <div className="col-md-6">
                  {/* {
                    CvFormIk.errors && <p className="text-danger">
                      {
                        Object.values(CvFormIk.errors)[0]
                      }
                    </p>
                  } */}
                  {cvResponse && (
                    <p className="text-success">Account Created with Cv</p>
                  )}
                  {cvError && <p className="text-danger fw-bold">{cvError}</p>}
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-end">
                <button type="submit" className={`mx-2 ${Styles.btnPost}`}>
                  Register{' '}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUpCv;
