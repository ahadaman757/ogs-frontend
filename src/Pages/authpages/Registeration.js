import React, { useEffect, useState } from 'react'

import styles from './main.module.css'
import MultiStep from 'react-multistep'
import CV from '../Forms/CV'
import { LoginInformationValidation, BusinessInformationValidation, AddressInformationValidation } from '../../formsValidations/Registeration'
import { List, TextInput } from '../Forms/InputFields'
import { useFormik } from 'formik'




const UploadImageSide = () => {
    return (
        <div className="col-md-6 my-md-5 my-4">
            <div className="container d-flex align-items-center justify-content-center flex-column">
                <div class={`${styles.upload_btn_wrapper} card d-flex mx-auto align-items-center justify-content-center flex-column px-md-5 px-3`}>
                    <label htmlFor="logo" className={`${styles.pointer}`}>
                        <img className={`img-fluid ${styles.file_upload_icon} `} src={require("../../Assets/Images/file upload.png")} alt="" />
                    </label>

                    <input className={`${styles.file_upload_hide}`} type="file" name="logo" id="logo" />
                    <h4 className='text-dark mt-2'>Choose file to upload</h4>
                </div>
                <h4 className='mt-2'>
                    Logo Upload
                </h4>
            </div>
        </div>
    )

}
const LoginInformation = ({ sel, setformData }) => {
    const [loginInfo, setloginInfo] = useState(null)
    // Register Validation start
    const logininformationFormik = useFormik(LoginInformationValidation(setformData))



    // Register Validation end
    sel(1)
    return <>
        <div className='slideInRight'>
            <h3 className='text-dark'>
                Login Information
            </h3>
            <form onSubmit={(e) => {
                e.preventDefault()
                logininformationFormik.handleSubmit()
            }}>
                <div class="col-12">
                    <List id='position' list_id="positions" formik={logininformationFormik} label="Position" />
                </div>
                <div class="col-12">
                    <TextInput id='firstName' formik={logininformationFormik} label="First Name" />
                </div>
                <div class="col-12">
                    <TextInput id='lastName' formik={logininformationFormik} label="Last Name" />
                </div>
                <div class="col-12">
                    <TextInput id='email' formik={logininformationFormik} label="Email" />
                </div>
                <button className='unset_button w-100 text-white py-2 form_action_button  submit' type='submit'>Continue</button>
            </form>
        </div>

    </>
}
const Businessinformation = ({ sel, setformData }) => {
    const BusinessinformationFormik = useFormik(BusinessInformationValidation(setformData))

    sel(2)
    return <>

        <div className='slideInRight'>
            <h3 className='text-dark'>
                Business Information
            </h3>
            <form onSubmit={(e) => {
                e.preventDefault()
                BusinessinformationFormik.handleSubmit()
            }}>
                <div class="col-12">
                    <TextInput id='businessName' formik={BusinessinformationFormik} label="Business Name" />
                </div>
                <div class="col-12">
                    <List id='businessType' list_id="businessTypes" formik={BusinessinformationFormik} label="Business type" />
                </div>
                <div class="col-12">
                    <TextInput id='businessWebpage' formik={BusinessinformationFormik} label="Business Webpage" />
                </div>
                <div class="col-12">
                    <TextInput type='phone' id='mobileNumber' formik={BusinessinformationFormik} label="Mobile Number" />
                </div>
                <button className='unset_button w-100 text-white py-2 form_action_button  submit' type='submit'>Continue</button>
            </form>
        </div>

    </>
}
const AddressDetails = ({ sel, setformData, data }) => {
    const [RegisterResponse, setRegisterResponse] = useState(null)
    const [RegisterError, setRegisterError] = useState(null)
    console.log(RegisterResponse)
    console.log(RegisterError)
    setTimeout(() => {
        setRegisterResponse(null)
        setRegisterError(null)
    }, 5000);

    const AddressinformationFormik = useFormik(AddressInformationValidation(setformData, data, setRegisterResponse, setRegisterError))

    sel(3)
    return <>
        <form className='slideInRight row' onSubmit={(e) => {
            e.preventDefault()
            AddressinformationFormik.handleSubmit()
        }}>
            <h3 className='text-dark'>
                Address Details
            </h3>

            <div class="col-12 ">
                <TextInput id='address' formik={AddressinformationFormik} label="Business Address" />
            </div>
            <div class="col-6">
                <TextInput id='country' formik={AddressinformationFormik} label="Country" />

            </div>
            <div class="col-6">
                <TextInput id='city' formik={AddressinformationFormik} label="City" />
            </div>
            <h3 className={`${styles.form_heading_2}`}>
                CEO/Head/GM/HR/Admin For conformation
            </h3>
            <div class="col-12">

                <TextInput id='employerName' formik={AddressinformationFormik} label="Name Contact Person" />
            </div>
            <div class="col-6">
                <TextInput id='employerNumber' formik={AddressinformationFormik} label="Contact Number" />
            </div>
            <div class="col-6">
                <TextInput id='employerEmail' formik={AddressinformationFormik} label="Email" />
            </div>
            <button className='unset_button w-100 text-white py-2 form_action_button  submit' type='submit'>Register</button>
            {
                RegisterResponse && <div className='text-success'>
                    {RegisterResponse.data.message}
                </div>

            }
            {
                RegisterError && <div className='text-danger'>
                    {RegisterError.message}
                </div>
            }
        </form>

    </>
}
function Register() {
    const [formData, setformData] = useState([])
    const [formStep, setformStep] = useState(1)
    console.log("formdata")
    console.log(formData)
    const selected = (index) => {
        setformStep(index)
    }
    const steps = [
        { name: 'StepOne', component: <div ><LoginInformation sel={selected} setformData={setformData} /></div> },
        { name: 'StepTwo', component: <div ><Businessinformation sel={selected} setformData={setformData} /></div> },
        { name: 'StepThree', component: <div ><AddressDetails sel={selected} setformData={setformData} data={formData} /></div> },

    ];
    return (
        <div className={`${styles.auth_page} py-5   container-fluid px-5 primary-bg`}>
            <div className="container">
                <div className={` ${styles.auth_page__model} row `}>
                    <div className={`${formStep == 4 ? ' col-md-12' : 'col-md-6'}  d-flex justify-content-center align-items-center py-md-4 py-2 px-md-5 px-2`} style={{ overflow: 'hidden' }}>
                        <div className="container-fluid">
                            <h1>
                                Logo
                            </h1>
                            <h3 className={`${styles.form_heading_1}`}>
                                User Registeration
                            </h3>
                            <p className={`${styles.form_description}`}>
                                Registration with OGS (Pvt) Ltd is 100% free <br />
                                Please fill up this form to register free at OGS
                            </p>
                            <div class="row gy-3">
                                {<>
                                    <div className={` form_step ${(formStep != 4) ? 'slide_button' : "disable_slide_button"} `}>
                                        <MultiStep prevStyle={{ backgroundColor: 'red' }} activeStep={0} showNavigation={true} steps={steps} />
                                    </div>
                                    {
                                        (formStep == 4) ? <button className='primary-bg form_action_button text-white unset_button ogsfonts15 py-2'> Register</button> : null
                                    }
                                </>

                                }

                            </div>
                        </div>
                    </div>


                    {
                        (formStep == 2 ?
                            <UploadImageSide />

                            : formStep == 4 ? null : <div className={`col-md-6 bg-secondary ${styles.auth_img} `}>
                            </div>)
                    }

                </div>
            </div>
        </div >
    )
}


// export default Test
export default Register
