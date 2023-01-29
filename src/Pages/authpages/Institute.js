import React, { useEffect, useState } from 'react';

import styles from './main.module.css';
import MultiStep from 'react-multistep';
import eye from '../../Assets/Images/eye.svg';
import eyedes from '../../Assets/Images/eye-disable.svg';

import {
  LoginInformationValidation,
  BusinessInformationValidation,
  AddressInformationValidation,
} from '../../formsValidations/Registeration';
import {
  List,
  TextInput,
  PassInput,
  SecondTextInput,
} from '../Forms/InputFields';
import { useFormik } from 'formik';
import axios from 'axios';
import mobilelogo from '../../Assets/Images/mobilelogo.jpg';

const UploadImageSide = ({ setLogoData, title, formik, id }) => {
  const [photoSelected, setphotoSelected] = useState();
  const handleInputChange = (event) => {
    setLogoData && setLogoData(event.target.files[0]);
    formik && formik.setFieldValue(id, event.currentTarget.files[0]);
    if (event.target.files && event.target.files[0]) {
      setphotoSelected(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className="col my-md-5 my-4">
      <div className="container d-flex align-items-center justify-content-center flex-column">
        <div
          className={`${styles.upload_btn_wrapper} card d-flex mx-auto align-items-center justify-content-center flex-column px-md-5 px-3`}
        >
          <label htmlFor="logo" className={`${styles.pointer}`}>
            {photoSelected == null ? (
              <img
                className={`img-fluid ${styles.file_upload_icon} `}
                src={require('../../Assets/Images/file upload.png')}
                alt=""
              />
            ) : (
              <img
                className={`img-fluid ${styles.profile_photo} `}
                src={photoSelected}
                alt=""
              />
            )}
          </label>

          <input
            className={`${styles.file_upload_hide}`}
            onChange={handleInputChange}
            type="file"
            name="logo"
            id="logo"
          />
          <h4 className="text-dark mt-2">Choose file to upload</h4>
        </div>
        <h4 className="mt-2">{title}</h4>
      </div>
    </div>
  );
};
const LoginInformation = ({
  sel,
  setformData,
  formData,
  employerRegsiterOptions,
}) => {
  function generateCode(length, characters) {
    var result = '';
    for (var i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  const [positions, setpostions] = useState();
  const [loginInfo, setloginInfo] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [codeGenerated, setCodeGenerated] = useState();
  const [logov, setlogov] = useState(eye);
  const [logov2, setlogov2] = useState(eye);
  const [passwordType, setPasswordType] = useState('password');
  const [passwordType2, setPasswordType2] = useState('password');
  const [message, setMessage] = useState();
  const [code, setCode] = useState();
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

  useEffect(() => {
    setpostions(employerRegsiterOptions?.positions);
  }, [employerRegsiterOptions]);

  // Register Validation start

  const logininformationFormik = useFormik(
    LoginInformationValidation(setformData, formData)
  );
  useEffect(() => {
    sel(1);
  }, []);
  // Register Validation end

  return (
    <>
      <div className="slideInRight">
        <h3 className="text-dark">Login Information</h3>
        <form
          className="row"
          onSubmit={(e) => {
            e.preventDefault();
            logininformationFormik.handleSubmit();
          }}
        >
          <div className="col-12">
            <List
              id="position"
              options={positions}
              formik={logininformationFormik}
              label="Position"
            />
          </div>
          <div className="col-md-6">
            <TextInput
              id="first_name"
              formik={logininformationFormik}
              label="First Name"
            />
          </div>
          <div className="col-md-6">
            <TextInput
              id="last_name"
              formik={logininformationFormik}
              label="Last Name"
            />
          </div>

          <div className="col-12">
            <TextInput
              type="email"
              id="email"
              formik={logininformationFormik}
              label="Email"
            />
          </div>
          {message}
          <br />
          <div className="col-12">
            <div className="row">
              <div className="col-md-6">
                <input
                  placeholder="Enter Verification Code"
                  style={{
                    padding: '6px 9px',
                    width: '100%',
                    border: '1px solid lightgray',
                  }}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                {codeSent ? (
                  <span
                    type="button"
                    className={`unset_button w-100 text-white py-2 form_action_button  submit ${styles.sobtn}`}
                    style={{ textAlign: 'center' }}
                    onClick={() => {
                      if (code == codeGenerated) {
                        setIsVerified(true);
                        setMessage('You have verified your email.');
                      } else {
                        setMessage('Incorrect Code');
                      }
                    }}
                  >
                    Verify
                  </span>
                ) : (
                  <span
                    className={`unset_button w-100 text-white py-2 form_action_button  submit ${styles.sobtn}`}
                    type="button"
                    style={{ textAlign: 'center' }}
                    onClick={() => {
                      setTimeout(() => {
                        localStorage.setItem(
                          'uMail',
                          logininformationFormik.values.email
                        );
                        let generatedCode = generateCode(6, '1234567890');
                        setCodeGenerated(generatedCode);
                        axios
                          .post(`https://3.14.27.53:3003/general/verifyEmail`, {
                            userEmail: localStorage.getItem('uMail'),
                            token: generatedCode,
                          })
                          .then((response) => {
                            console.log(response);
                            if (response.data.code == 1) {
                              setMessage('Please check your email');
                              setCodeSent(true);
                            } else {
                              setMessage(response.data.message);
                            }
                          });
                      }, 2000);
                    }}
                  >
                    Get Code
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <PassInput
              type="password"
              id="password"
              formik={logininformationFormik}
              label="Password"
              togglePassword={togglePassword}
              logov={logov}
              passwordType={passwordType}
            />
          </div>
          <div className="col-md-6">
            {/* <PassInput
              id="repeat_password"
              formik={logininformationFormik}
              label="Repeat Password"
            /> */}
            <PassInput
              type="password"
              id="repeat_password"
              formik={logininformationFormik}
              label="Repeat Password"
              togglePassword={togglePassword2}
              logov={logov2}
              passwordType={passwordType2}
            />
          </div>
          {isVerified ? (
            <button
              className={`unset_button w-100 text-white py-2 form_action_button  submit ${styles.sobtn}`}
              type="submit"
            >
              Continue
            </button>
          ) : (
            <span
              className={`unset_button w-100 text-white py-2 form_action_button  submit ${styles.sobtn}`}
              style={{ textAlign: 'center' }}
            >
              Verify Email To Continue
            </span>
          )}
        </form>
      </div>
    </>
  );
};
const Businessinformation = ({
  sel,
  setformData,
  formData,
  employerRegsiterOptions,
}) => {
  const BusinessinformationFormik = useFormik(
    BusinessInformationValidation(setformData, formData)
  );

  useEffect(() => {
    sel(2);
  }, []);

  return (
    <>
      <div className="slideInRight">
        <h3 className="text-dark">Business Information</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            BusinessinformationFormik.handleSubmit();
          }}
        >
          <div className="col-12">
            <TextInput
              id="businessName"
              formik={BusinessinformationFormik}
              label="Business Name"
            />
          </div>
          <div className="col-12">
            <List
              id="businessType"
              options={employerRegsiterOptions.industries}
              list_id="businessTypes"
              formik={BusinessinformationFormik}
              label="Business type"
            />
          </div>
          <div className="col-12">
            <TextInput
              id="businessWebpage"
              formik={BusinessinformationFormik}
              label="Business Webpage"
            />
          </div>
          <div className="col-12">
            <TextInput
              type="phone"
              id="mobileNumber"
              formik={BusinessinformationFormik}
              label="Mobile Number"
            />
            <UploadImageSide
              id="image"
              formik={BusinessinformationFormik}
              title="Logo Upload"
            />
          </div>
          <button
            className={`unset_button w-100 text-white py-2 form_action_button  submit ${styles.sobtn}`}
            type="submit"
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
};
const AddressDetails = ({
  sel,
  setformData,
  data,
  LogoData,
  formData,
  employerRegsiterOptions,
}) => {
  const [cities, setcities] = useState();
  const [RegisterResponse, setRegisterResponse] = useState(null);
  const [RegisterError, setRegisterError] = useState(null);
  setTimeout(() => {
    setRegisterResponse(null);
    setRegisterError(null);
  }, 5000);
  const AddressinformationFormik = useFormik(
    AddressInformationValidation(
      setformData,
      formData,
      data,
      setRegisterResponse,
      setRegisterError,
      LogoData
    )
  );
  useEffect(() => {
    sel(3);
  }, []);
  useEffect(() => {
    axios
      .post('https://3.14.27.53:3003/get_city_by_country_id', {
        country_id: AddressinformationFormik.values.country || 1,
      })
      .then((res) => {
        setcities(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [AddressinformationFormik.values.country]);
  return (
    <>
      <form
        className="slideInRight row"
        onSubmit={(e) => {
          e.preventDefault();
          AddressinformationFormik.handleSubmit();
        }}
      >
        <h3 className="text-dark">Address Details</h3>

        <div className="col-12 ">
          <TextInput
            id="address"
            formik={AddressinformationFormik}
            label="Business Address"
          />
        </div>
        <div className="col-6">
          <List
            id="country"
            options={employerRegsiterOptions.countries}
            formik={AddressinformationFormik}
            label="Country"
          />
        </div>
        <div className="col-6">
          <List
            id="city"
            options={cities}
            formik={AddressinformationFormik}
            label="City"
          />
        </div>
        <h3 className={`my-3 ${styles.form_heading_2}`}>
          CEO/Head/GM/HR/Admin For conformation
        </h3>
        <div className="col-12">
          <TextInput
            id="employerName"
            formik={AddressinformationFormik}
            label="Name Contact Person"
          />
        </div>
        <div className="col-6">
          <TextInput
            id="employerNumber"
            formik={AddressinformationFormik}
            label="Contact Number"
          />
        </div>
        <div className="col-6">
          <TextInput
            id="employerEmail"
            formik={AddressinformationFormik}
            label="Email"
          />
        </div>
        <button
          className={`unset_button w-100 text-white py-2 form_action_button  submit ${styles.sobtn}`}
          type="submit"
        >
          Register
        </button>
        {RegisterResponse && (
          <div className="text-success">{RegisterResponse.data.message}</div>
        )}
        {RegisterError && (
          <div className="text-danger">{RegisterError.message}</div>
        )}
      </form>
    </>
  );
};
function Instituteregister() {
  const [employerRegsiterOptions, setemployerRegsiterOptions] = useState();
  useEffect(() => {
    axios
      .get('https://3.14.27.53:3003/employer_register_options')
      .then((res) => {
        setemployerRegsiterOptions(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [LogoData, setLogoData] = useState();
  const [formData, setformData] = useState({
    position: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    repeat_password: '',
    businessName: '',
    businessType: '',
    businessWebpage: '',
    image: '',
    mobileNumber: '',
    address: '',
    country: '',
    employerName: '',
    employerNumber: '',
    employerEmail: '',
  });
  const [formStep, setformStep] = useState(1);

  const selected = (index) => {
    setformStep(index);
  };
  const steps = [
    {
      name: 'StepOne',
      component: (
        <div>
          <LoginInformation
            employerRegsiterOptions={employerRegsiterOptions}
            sel={selected}
            formData={formData}
            setformData={setformData}
          />
        </div>
      ),
    },
    {
      name: 'StepTwo',
      component: (
        <div>
          <Businessinformation
            employerRegsiterOptions={employerRegsiterOptions}
            sel={selected}
            formData={formData}
            setformData={setformData}
          />
        </div>
      ),
    },
    {
      name: 'StepThree',
      component: (
        <div>
          <AddressDetails
            employerRegsiterOptions={employerRegsiterOptions}
            sel={selected}
            formData={formData}
            setformData={setformData}
            LogoData={LogoData}
            data={formData}
          />
        </div>
      ),
    },
  ];
  return (
    <div
      className={`${styles.auth_page}    container-fluid p-0  py-sm-5 bg-primary`}
    >
      <div className="container-md">
        <div className={` ${styles.auth_page__model} row `}>
          <div
            className={`${
              formStep == 4 ? ' col-md-12' : 'col-md-6'
            }  d-flex justify-content-center align-items-center py-md-4 py-2 px-md-5 px-2`}
            style={{ overflow: 'hidden' }}
          >
            <div className="container-fluid">
              <div className="d-flex justify-content-center">
                <img src={mobilelogo} />{' '}
              </div>
              <div className="text-center my-4">
                <h3 className={`${styles.form_heading_1}`}>
                  Agent Registeration
                </h3>
                <p className={`${styles.form_description}`}>
                  Registration with OGS Man Power is 100% free <br />
                  Please fill up this form to register free at OGS
                </p>
              </div>

              <div className="row gy-3">
                {
                  <>
                    <div
                      className={` form_step ${
                        formStep != 4 ? 'slide_button' : 'disable_slide_button'
                      } `}
                    >
                      <MultiStep
                        prevStyle={{ backgroundColor: 'red' }}
                        activeStep={0}
                        showNavigation={true}
                        steps={steps}
                      />
                    </div>
                    {formStep == 4 ? (
                      <button
                        className={`primary-bg form_action_button text-white unset_button ogsfonts15 py-2 $`}
                      >
                        {' '}
                        Register
                      </button>
                    ) : null}
                  </>
                }
              </div>
            </div>
          </div>

          {formStep == 2 ? (
            <UploadImageSide setLogoData={setLogoData} title="Logo Upload" />
          ) : formStep == 4 ? null : (
            <div className={`col-md-6 bg-secondary ${styles.auth_img} `}></div>
          )}
        </div>
      </div>
    </div>
  );
}

// export default Test
export default Instituteregister;
export { UploadImageSide };
