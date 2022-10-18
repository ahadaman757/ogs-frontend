import React, { useState } from 'react'

import styles from './main.module.css'
import MultiStep from 'react-multistep'
import $ from 'jquery';


const UploadImageSide = () => {
    return (
        <div className="col-md-6">
            <h1>sdfsd</h1>
            <div className='d-flex'>
                <div class={`${styles.upload_btn_wrapper}`}>
                    <button class={`${styles.btn}`}>Upload a file</button>
                    <input type="file" name="myfile" />
                </div>
            </div>
        </div>
    )

}
const LoginInformation = ({ sel }) => {
    sel(1)
    return <>
        <div className='slideInRight'>
            <h3 className='text-dark'>
                Login Information
            </h3>
            <div class="col-12">

                <label htmlFor="position" className={`${styles.form_input__lable}`}> Position</label>
                <input type="text" class={`${styles.form_input}`} placeholder="Position" aria-label="First name" />
            </div>
            <div class="col-12">
                <label htmlFor="position" className={`${styles.form_input__lable}`}> First Name</label>
                <input type="text" class={`${styles.form_input}`} placeholder="First name" aria-label="First name" />
            </div>
            <div class="col-12">
                <label htmlFor="position" className={`${styles.form_input__lable}`}> Last Name</label>
                <input type="text" class={`${styles.form_input}`} placeholder="First name" aria-label="First name" />
            </div>
            <div class="col-12">
                <label htmlFor="position" className={`${styles.form_input__lable}`}>Email</label>
                <input type="text" class={`${styles.form_input}`} placeholder="First name" aria-label="First name" />
            </div>
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
                <input type="text" class={`${styles.form_input}`} placeholder="Position" aria-label="First name" />
            </div>
            <div class="col-12">
                <label htmlFor="position" className={`${styles.form_input__lable}`}>Business Type</label>
                <input type="text" class={`${styles.form_input}`} placeholder="First name" aria-label="First name" />
            </div>
            <div class="col-12">
                <label htmlFor="position" className={`${styles.form_input__lable}`}>Business Webpage</label>
                <input type="text" class={`${styles.form_input}`} placeholder="First name" aria-label="First name" />
            </div>
            <div class="col-12">
                <label htmlFor="position" className={`${styles.form_input__lable}`}>Mobile Number</label>
                <input type="text" class={`${styles.form_input}`} placeholder="First name" aria-label="First name" />
            </div>
        </div>

    </>
}
const AddressDetails = ({ sel }) => {
    sel(4)
    return <>
        <div className='slideInRight row'>
            <h3 className='text-dark'>
                Address Details
            </h3>
            <div class="col-12 ">

                <label htmlFor="position" className={`${styles.form_input__lable}`}> Business Address</label>
                <input type="text" class={`${styles.form_input}`} placeholder="Position" aria-label="First name" />
            </div>
            <div class="col-6">
                <label htmlFor="position" className={`${styles.form_input__lable}`}>Country</label>
                <input type="text" class={`${styles.form_input}`} placeholder="First name" aria-label="First name" />
            </div>
            <div class="col-6">
                <label htmlFor="position" className={`${styles.form_input__lable}`}>city</label>
                <input type="text" class={`${styles.form_input}`} placeholder="First name" aria-label="First name" />
            </div>
            <h3 className={`${styles.form_heading_2}`}>
                CEO/Head/GM/HR/Admin For conformation
            </h3>
            <div class="col-12">
                <label htmlFor="position" className={`${styles.form_input__lable}`}>Email</label>
                <input type="text" class={`${styles.form_input}`} placeholder="First name" aria-label="First name" />
            </div>
            <div class="col-6">
                <label htmlFor="position" className={`${styles.form_input__lable}`}>Contact Number</label>
                <input type="text" class={`${styles.form_input}`} placeholder="First name" aria-label="First name" />
            </div>
            <div class="col-6">
                <label htmlFor="position" className={`${styles.form_input__lable}`}>Email</label>
                <input type="text" class={`${styles.form_input}`} placeholder="First name" aria-label="First name" />
            </div>
        </div>

    </>
}
function Signin() {
    const [formStep, setformStep] = useState(1)
    const selected = (index) => {

        setformStep(index)
    }
    const steps = [
        { name: 'StepOne', component: <div ><LoginInformation sel={selected} /></div> },
        { name: 'StepTwo', component: <div ><Businessinformation sel={selected} /></div> },
        { name: 'StepThree', component: <div ><AddressDetails sel={selected} /></div> },
    ];
    return (
        <div className={`${styles.auth_page} py-5   container-fluid px-5 primary-bg`}>
            <div className="container">
                <div className={` ${styles.auth_page__model} row `}>
                    <div className="col-md-6 d-flex justify-content-center align-items-center py-md-4 py-2 px-md-5 px-2 ">
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
                                        <MultiStep prevStyle={{ backgroundColor: 'red' }} activeStep={1} showNavigation={true} steps={steps} />
                                    </div>
                                    {
                                        (formStep == 4) ? <button className='primary-bg form_action_button unset_button py-2'> Register</button> : null
                                    }
                                </>

                                }

                            </div>
                        </div>
                    </div>


                    {
                        (formStep == 2 ? <div className="col-md-6">
                            <UploadImageSide />

                        </div> : <div className={`col-md-6 bg-secondary ${styles.auth_img} `}>
                        </div>)
                    }

                </div>
            </div>
        </div >
    )
}


// export default Test
export default Signin
