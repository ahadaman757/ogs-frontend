import React, { useEffect, useState } from 'react'

import styles from './main.module.css'
import MultiStep from 'react-multistep'
import $ from 'jquery';
import CV from '../Forms/CV'
import { useFormik } from 'formik';
import * as Yup from 'yup';





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
const LoginInformation = ({ sel }) => {
    // Register Validation start
    const formik = useFormik({

        initialValues: {
            position: '',
        },
        validationSchema: Yup.object({
            position: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            $(document).ready(function () {

                const name = $(".slide_button button")
                console.log(name[2])
                name[2].click()
            });


        },
    });
    // Register Validation end


    sel(1)
    return <>
        <div className='slideInRight'>
            <h3 className='text-dark'>
                Login Information
            </h3>
            <form onSubmit={(e) => {
                e.preventDefault()
                formik.handleSubmit()
            }}>
                <div class="col-12">
                    <label htmlFor="position" className={`${styles.form_input__lable}`}>Position</label>

                    <br />
                    <div className='position-relative'>
                        <label htmlFor='position'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                            </svg>
                        </label>

                        <input {...formik.getFieldProps('position')} class={`${styles.form_input}`} list="positions" name="position" id="position" />
                    </div>

                    <datalist
                        id="positions">
                        <option value="HR" />
                        <option value="Developer" />
                        <option value="CEO" />
                        <option value="Manager" />
                        <option value="Owner" />
                    </datalist>
                    {formik.touched.position && formik.errors.position ? (
                        <div>{formik.errors.position}</div>
                    ) : null}
                </div>
                <div class="col-12">
                    <label htmlFor="position" className={`${styles.form_input__lable}`}> First Name</label>
                    <input type="text" class={`${styles.form_input} ${styles.datalist}`} aria-label="First name" />
                </div>
                <div class="col-12">
                    <label htmlFor="position" className={`${styles.form_input__lable}`}> Last Name</label>
                    <input type="text" class={`${styles.form_input}`} aria-label="First name" />
                </div>
                <div class="col-12">
                    <label htmlFor="position" className={`${styles.form_input__lable}`}>Email</label>
                    <input type="text" class={`${styles.form_input}`} aria-label="First name" />
                </div>
                <button className='submit' type='submit'>Continue</button>
            </form>
        </div>

    </>
}
const Businessinformation = ({ sel }) => {
    sel(2)
    return <>

        <div className='slideInRight'>
            <h3 className='text-dark'>
                Business Information
            </h3>
            <div class="col-12">

                <label htmlFor="position" className={`${styles.form_input__lable}`}>Business Name</label>
                <input type="text" class={`${styles.form_input}`} aria-label="First name" />
            </div>
            <div class="col-12">
                <label htmlFor="position" className={`${styles.form_input__lable}`}>Business Type</label>
                <input type="text" class={`${styles.form_input}`} aria-label="First name" />
            </div>
            <div class="col-12">
                <label htmlFor="position" className={`${styles.form_input__lable}`}>Business Webpage</label>
                <input type="text" class={`${styles.form_input}`} aria-label="First name" />
            </div>
            <div class="col-12">
                <label htmlFor="position" className={`${styles.form_input__lable}`}>Mobile Number</label>
                <input type="text" class={`${styles.form_input}`} aria-label="First name" />
            </div>
        </div>

    </>
}
const AddressDetails = ({ sel }) => {
    sel(3)
    return <>
        <div className='slideInRight row'>
            <h3 className='text-dark'>
                Address Details
            </h3>
            <div class="col-12 ">

                <label htmlFor="position" className={`${styles.form_input__lable}`}> Business Address</label>
                <input type="text" class={`${styles.form_input}`} aria-label="First name" />
            </div>
            <div class="col-6">
                <label htmlFor="position" className={`${styles.form_input__lable}`}>Country</label>
                <input type="text" class={`${styles.form_input}`} aria-label="First name" />
            </div>
            <div class="col-6">
                <label htmlFor="position" className={`${styles.form_input__lable}`}>city</label>
                <input type="text" class={`${styles.form_input}`} aria-label="First name" />
            </div>
            <h3 className={`${styles.form_heading_2}`}>
                CEO/Head/GM/HR/Admin For conformation
            </h3>
            <div class="col-12">
                <label htmlFor="position" className={`${styles.form_input__lable}`}>Email</label>
                <input type="text" class={`${styles.form_input}`} aria-label="First name" />
            </div>
            <div class="col-6">
                <label htmlFor="position" className={`${styles.form_input__lable}`}>Contact Number</label>
                <input type="text" class={`${styles.form_input}`} aria-label="First name" />
            </div>
            <div class="col-6">
                <label htmlFor="position" className={`${styles.form_input__lable}`}>Email</label>
                <input type="text" class={`${styles.form_input}`} aria-label="First name" />
            </div>
        </div>

    </>
}
function Register() {
    const [formStep, setformStep] = useState(1)
    const selected = (index) => {

        setformStep(index)
    }
    const steps = [
        { name: 'StepOne', component: <div ><LoginInformation sel={selected} /></div> },
        { name: 'StepTwo', component: <div ><Businessinformation sel={selected} /></div> },
        { name: 'StepThree', component: <div ><AddressDetails sel={selected} /></div> },
        { name: 'StepThree', component: <div ><CV sel={selected} /></div> },
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
