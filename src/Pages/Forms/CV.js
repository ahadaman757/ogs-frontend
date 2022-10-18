import React, { useState } from 'react'
import styles from '../authpages/main.module.css'
import classes from './classes'
function CV() {
    return (
        <div className={`${styles.auth_page} py-5   container-fluid px-2 px-md--5 primary-bg`}>
            <div className="container">
                <div className={` ${styles.auth_page__model} row `}>
                    <div className="col-md-12 d-flex justify-content-center align-items-center py-md-4 py-2 px-md-5 px-2 " style={{ overflow: 'hidden' }}>
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
                            <p className='text__note'>
                                Note: Fields marked as * are mandatory
                            </p>
                            <form action="">
                                <h1 className={`${styles.form_heading_bg}`}>
                                    Login Information
                                </h1>
                                <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                    <div className="row d-flex align-items-center">
                                        <div className='col-md-4'>
                                            <label htmlFor="position" className={`${styles.form_input__lable}`}>Email:</label>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" class={`${styles.form_input}`} aria-label="First name" />
                                        </div>
                                        <div className="col-md-4 ">
                                            <span className='text__note_green'>it can be yours eamil</span>
                                        </div>
                                    </div>
                                </div>
                                <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                    <div className="row d-flex align-items-center">
                                        <div className='col-md-4'>
                                            <label htmlFor="position" className={`${styles.form_input__lable}`}>Password:</label>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" class={`${styles.form_input}`} aria-label="First name" />
                                        </div>
                                        <div className="col-md-4 ">
                                            <span className='text__note_green'>minimum 4 characters, maximum 16</span>
                                        </div>
                                    </div>
                                </div>
                                <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                    <div className="row d-flex align-items-center">
                                        <div className='col-md-4'>
                                            <label htmlFor="position" className={`${styles.form_input__lable}`}>Re-enter Password:</label>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" class={`${styles.form_input}`} aria-label="First name" />
                                        </div>
                                        <div className="col-md-4 ">
                                            <span className='text__note_green'>minimum 4 characters, maximum 16</span>
                                        </div>
                                    </div>
                                </div>

                                <h1 className={`${styles.form_heading_bg}`}>
                                    Login Information
                                </h1>
                                <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                    <div className="row d-flex align-items-center">
                                        <div className='col-md-4'>
                                            <label htmlFor="position" className={`${styles.form_input__lable}`}>Requirement:</label>
                                        </div>
                                        <div className="col-md-4 d-flex justify-content-between">
                                            <label class="radio-inline">
                                                <input type="radio" name="optradio" checked /> Job
                                            </label>
                                            <label class="radio-inline">
                                                <input type="radio" name="optradio" />Internship
                                            </label>
                                            <label class="radio-inline">
                                                <input type="radio" name="optradio" />Both
                                            </label>
                                        </div>
                                        <div className="col-md-4 ">
                                            <span className='text__note_green'>minimum 4 characters, maximum 16</span>
                                        </div>
                                    </div>
                                </div>
                                <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                    <div className="row d-flex align-items-center">
                                        <div className='col-md-4'>
                                            <label htmlFor="position" className={`${styles.form_input__lable}`}>Business Industry:</label>
                                        </div>
                                        <div className="col-md-4 d-flex justify-content-between align-items-center">

                                            <div className='position-relative'>
                                                <label htmlFor='browser'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                    </svg>
                                                </label>

                                                <input class={`${styles.form_input}`} list="browsers" name="browser" id="browser" />
                                            </div>

                                            <datalist id="browsers">
                                                <option value="Edge" />
                                                <option value="Firefox" />
                                                <option value="Chrome" />
                                                <option value="Opera" />
                                                <option value="Safari" />
                                            </datalist>
                                        </div>
                                        <div className="col-md-4 ">
                                            <span className='text__note_green'>minimum 4 characters, maximum 16</span>
                                        </div>
                                    </div>
                                </div>
                                <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                    <div className="row d-flex align-items-center">
                                        <div className='col-md-4'>
                                            <label htmlFor="position" className={`${styles.form_input__lable}`}>Main Job title:</label>
                                        </div>
                                        <div className="col-md-4 d-flex justify-content-between align-items-center">

                                            <div className='position-relative'>
                                                <label htmlFor='browser'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                    </svg>
                                                </label>

                                                <input class={`${styles.form_input}`} list="browsers" name="browser" id="browser" />
                                            </div>

                                            <datalist id="browsers">
                                                <option value="Edge" />
                                                <option value="Firefox" />
                                                <option value="Chrome" />
                                                <option value="Opera" />
                                                <option value="Safari" />
                                            </datalist>
                                        </div>
                                        <div className="col-md-4 ">
                                            <span className='text__note_green'>minimum 4 characters, maximum 16</span>
                                        </div>
                                    </div>
                                </div>
                                <h2 className='text__note_green text-center my-3'>
                                    OR
                                </h2>
                                <h1 className={`${styles.form_heading_bg}`}>
                                    Personal Information
                                </h1>
                                <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                    <div className="row d-flex align-items-center">
                                        <div className='col-md-4'>
                                            <label htmlFor="position" className={`${styles.form_input__lable}`}>First Name<span className='text__note'>*</span>:</label>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" class={`${styles.form_input}`} aria-label="First name" />
                                        </div>
                                        <div className="col-md-4 ">
                                            <span className='text__note_green'>Enter Your First Name here</span>
                                        </div>
                                    </div>
                                </div>
                                <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                    <div className="row d-flex align-items-center">
                                        <div className='col-md-4'>
                                            <label htmlFor="position" className={`${styles.form_input__lable}`}>Last Name <span className='text__note'>*</span>:</label>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" class={`${styles.form_input}`} aria-label="First name" />
                                        </div>
                                        <div className="col-md-4 ">
                                            <span className='text__note_green'>minimum 4 characters, maximum 16</span>
                                        </div>
                                    </div>
                                </div>
                                <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                    <div className="row d-flex align-items-center">
                                        <div className='col-md-4'>
                                            <label htmlFor="position" className={`${styles.form_input__lable}`}>Gender <span className='text__note'>*</span>:</label>
                                        </div>
                                        <div className="col-md-4">
                                            <div className='position-relative'>
                                                <label htmlFor='genders'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                    </svg>
                                                </label>

                                                <input class={`${styles.form_input}`} list="genders" name="gender" id="gender" />
                                            </div>

                                            <datalist id="genders">
                                                <option value="Male" />
                                                <option value="Female" />
                                                <option value="Other" />

                                            </datalist>
                                        </div>
                                        <div className="col-md-4 ">
                                            <span className='text__note_green'>minimum 4 characters, maximum 16</span>
                                        </div>
                                    </div>
                                </div>
                                <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                    <div className="row d-flex align-items-center">
                                        <div className='col-md-4'>
                                            <label htmlFor="position" className={`${styles.form_input__lable}`}>Date Of Birth <span className='text__note'>*</span>:</label>
                                        </div>
                                        <div className="col-md-4">
                                            <div className='position-relative'>
                                                <label htmlFor='genders'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                    </svg>
                                                </label>

                                                <input class={`${styles.form_input}`} list="genders" name="gender" id="gender" />
                                            </div>

                                            <datalist id="genders">
                                                <option value="Male" />
                                                <option value="Female" />
                                                <option value="Other" />

                                            </datalist>
                                        </div>
                                        <div className="col-md-4 ">
                                            <span className='text__note_green'>minimum 4 characters, maximum 16</span>
                                        </div>
                                    </div>
                                </div>
                                <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                    <div className="row d-flex align-items-center">
                                        <div className='col-md-4'>
                                            <label htmlFor="position" className={`${styles.form_input__lable}`}>Domicile<span className='text__note'>*</span>:</label>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" class={`${styles.form_input}`} aria-label="First name" />
                                        </div>
                                        <div className="col-md-4 ">
                                            <span className='text__note_green'>Enter Your First Name here</span>
                                        </div>
                                    </div>
                                </div>
                                <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                    <div className="row d-flex align-items-center">
                                        <div className='col-md-4'>
                                            <label htmlFor="position" className={`${styles.form_input__lable}`}>Postal/Zip code<span className='text__note'>*</span>:</label>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="text" class={`${styles.form_input}`} aria-label="First name" />
                                        </div>
                                        <div className="col-md-4 ">
                                            <span className='text__note_green'>Enter Your First Name here</span>
                                        </div>
                                    </div>
                                </div>
                                <div class={`${styles.inline_form_lable} col-lg-12 col-md-12  `} >
                                    <div className="row d-flex align-items-center">
                                        <div className='col-md-3'>
                                            <label htmlFor="position" className={`${styles.form_input__lable}`}>Mobile Number<span className='text__note'>*</span>:</label>
                                        </div>
                                        <div className="col-md-3">
                                            <div className='position-relative'>
                                                <label htmlFor='mobile_no'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                    </svg>
                                                </label>

                                                <input placeholder='Please select Country' class={`${styles.form_input}`} list="mobile_numbers" name="mobile_no" id="mobile_no" />
                                            </div>

                                            <datalist id="mobile_numbers">
                                                <option value="Edge" />
                                                <option value="Firefox" />
                                                <option value="Chrome" />
                                                <option value="Opera" />
                                                <option value="Safari" />
                                            </datalist>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="row align-items-center">
                                                <div className='col-md-6'>
                                                    <label htmlFor="position" className={`${styles.form_input__lable}`}>Country Code<span className='text__note'>*</span>:</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" class={`${styles.form_input}`} aria-label="First name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="row align-items-center">
                                                <div className='col-md-6'>
                                                    <label htmlFor="position" className={`${styles.form_input__lable}`}>Country Code<span className='text__note'>*</span>:</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" class={`${styles.form_input}`} aria-label="First name" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class={`${styles.inline_form_lable} col-lg-12 col-md-12  `} >
                                    <div className="row d-flex align-items-center">
                                        <div className='col-md-3'>
                                            <label htmlFor="position" className={`${styles.form_input__lable}`}>Work Number<span className='text__note'>*</span>:</label>
                                        </div>
                                        <div className="col-md-3">
                                            <div className='position-relative'>
                                                <label htmlFor='mobile_no'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                    </svg>
                                                </label>

                                                <input placeholder='Please select Country' class={`${styles.form_input}`} list="mobile_numbers" name="mobile_no" id="mobile_no" />
                                            </div>

                                            <datalist id="mobile_numbers">
                                                <option value="Edge" />
                                                <option value="Firefox" />
                                                <option value="Chrome" />
                                                <option value="Opera" />
                                                <option value="Safari" />
                                            </datalist>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="row align-items-center">
                                                <div className='col-md-6'>
                                                    <label htmlFor="position" className={`${styles.form_input__lable}`}>Country Code<span className='text__note'>*</span>:</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" class={`${styles.form_input}`} aria-label="First name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="row align-items-center">
                                                <div className='col-md-6'>
                                                    <label htmlFor="position" className={`${styles.form_input__lable}`}>Country Code<span className='text__note'>*</span>:</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" class={`${styles.form_input}`} aria-label="First name" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class={`${styles.inline_form_lable} col-lg-12 col-md-12  `} >
                                    <div className="row d-flex align-items-center">
                                        <div className='col-md-3'>
                                            <label htmlFor="position" className={`${styles.form_input__lable}`}>Home Number<span className='text__note'>*</span>:</label>
                                        </div>
                                        <div className="col-md-3">
                                            <div className='position-relative'>
                                                <label htmlFor='mobile_no'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                    </svg>
                                                </label>

                                                <input placeholder='Please select Country' class={`${styles.form_input}`} list="mobile_numbers" name="mobile_no" id="mobile_no" />
                                            </div>

                                            <datalist id="mobile_numbers">
                                                <option value="Edge" />
                                                <option value="Firefox" />
                                                <option value="Chrome" />
                                                <option value="Opera" />
                                                <option value="Safari" />
                                            </datalist>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="row align-items-center">
                                                <div className='col-md-6'>
                                                    <label htmlFor="position" className={`${styles.form_input__lable}`}>Country Code<span className='text__note'>*</span>:</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" class={`${styles.form_input}`} aria-label="First name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="row align-items-center">
                                                <div className='col-md-6'>
                                                    <label htmlFor="position" className={`${styles.form_input__lable}`}>Country Code<span className='text__note'>*</span>:</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" class={`${styles.form_input}`} aria-label="First name" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class={`${styles.inline_form_lable} col-lg-12 col-md-12  `} >
                                    <div className="row d-flex align-items-center">
                                        <div className='col-md-3 align-self-start'>
                                            <label htmlFor="position" className={`${styles.form_input__lable}`}>Address<span className='text__note'>*</span>:</label>
                                        </div>
                                        <div className="col-md-9">
                                            <textarea rows={6} className='w-100'></textarea>
                                            <p>
                                                Your street Address (maximum characters 100)
                                            </p>
                                        </div>


                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default CV