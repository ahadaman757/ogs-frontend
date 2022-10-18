import React from 'react'
import styles from './main.module.css'
import MultiStep from 'react-multistep'
import $ from 'jquery';

$('.slide-button button').addClass('nextbutton')
const LoginInformation = () => {
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
const Businessinformation = () => {
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
const AddressDetails = () => {
    return <>
        <div className='slideInRight'>
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
            <h3 className={`${styles.form_heading_1}`}>
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
    const steps = [
        { name: 'StepOne', component: <div ><LoginInformation /></div> },
        { name: 'StepTwo', component: <div ><Businessinformation /></div> },
        { name: 'StepThree', component: <div ><LoginInformation2 /></div> },
        { name: 'StepFour', component: <div><LoginInformation /></div> }
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
                                    <div className='slide-button'>
                                        <MultiStep prevStyle={{ backgroundColor: 'red' }} activeStep={1} showNavigation={true} steps={steps} />

                                    </div>

                                </>

                                }

                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 bg-secondary ${styles.auth_img} `}>
                    </div>
                </div>
            </div>
        </div >
    )
}


// export default Test
export default Signin
