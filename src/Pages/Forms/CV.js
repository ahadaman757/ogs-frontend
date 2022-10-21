import axios from 'axios'
import React, { useState } from 'react'
import styles from '../authpages/main.module.css'
import classes from './classes'

function CV({ sel }) {
    sel(4)
    axios.post('https://countriesnow.space/api/v0.1/countries/cities', {
        country: 'pakistan'
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
    return (
        <div className={`${styles.auth_page}    container-fluid px-2`}>

            <div className={` ${styles.auth_page__model} row `}>
                <div className="col-md-12 d-flex justify-content-center align-items-center py-md-4 py-2 px-md-5 px-2 " style={{ overflow: 'hidden' }}>
                    <div className="container-fluid">

                        <form action="">
                            {/* <h1 className={`${styles.form_heading_bg}`}>
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
                                </div> */}
                            <h1 className={`${styles.form_heading_bg}`}>
                                Job/Internship Requirement
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
                                    <div className="col-md-4 d-flex flex-grow-1 justify-content-between align-items-center">
                                        <div className='position-relative flex-grow-1'>
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
                                        <div className='position-relative flex-grow-1'>
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
                                            <option value="pakistan" />
                                            <option value="india" />
                                            <option value="bangladesh" />
                                            <option value="Nepal" />
                                            <option value="USA" />
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
                                                <label htmlFor="position" className={`${styles.form_input__lable}`}>Number<span className='text__note'>*</span>:</label>
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
                                                <label htmlFor="position" className={`${styles.form_input__lable}`}>Number<span className='text__note'>*</span>:</label>
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
                                                <label htmlFor="position" className={`${styles.form_input__lable}`}>Number<span className='text__note'>*</span>:</label>
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
                            <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                <div className="row d-flex align-items-center">
                                    <div className='col-md-4'>
                                        <label htmlFor="country" className={`${styles.form_input__lable}`}>Country <span className='text__note'>*</span>:</label>
                                    </div>
                                    <div className="col-md-4">
                                        <div className='position-relative'>
                                            <label htmlFor='country'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                </svg>
                                            </label>
                                            <input class={`${styles.form_input}`} list="countries" name="country" id="country" />
                                        </div>
                                        <datalist id="countries">
                                            <option value="pakistan" />
                                            <option value="India" />
                                            <option value="USA" />
                                        </datalist>
                                    </div>
                                </div>
                            </div>
                            <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                <div className="row d-flex align-items-center">
                                    <div className='col-md-4'>
                                        <label htmlFor="country" className={`${styles.form_input__lable}`}>City<span className='text__note'>*</span>:</label>
                                    </div>
                                    <div className="col-md-4">
                                        <div className='position-relative'>
                                            <label htmlFor='country'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                </svg>
                                            </label>
                                            <input class={`${styles.form_input}`} list="cities" name="city" id="city" />
                                        </div>
                                        <datalist id="cities">
                                            <option value="Rawalpindi" />
                                            <option value="Isl" />
                                            <option value="Lahore" />
                                        </datalist>
                                    </div>
                                </div>
                            </div>
                            <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                <div className="row d-flex align-items-center">
                                    <div className='col-md-4'>
                                        <label htmlFor="position" className={`${styles.form_input__lable}`}>ID card No:</label>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" class={`${styles.form_input}`} aria-label="id_card_no" />
                                    </div>
                                </div>
                            </div>
                            <div class={`${styles.inline_form_lable} col-lg-12 col-md-12  `} >
                                <div className="row d-flex align-items-center">
                                    <div className='col-md-3'>
                                        <label htmlFor="position" className={`${styles.form_input__lable}`}>Passport Number:</label>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" class={`${styles.form_input}`} aria-label="First name" />
                                    </div>
                                    <div className="col-md-5 d-flex  ">
                                        <span className='text-secondary'>first of passport number </span>
                                        <input type="file" name="passport_file" id="passport_file" />
                                    </div>
                                </div>
                            </div>
                            <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                <div className="row d-flex align-items-center">
                                    <div className='col-md-4'>
                                        <label htmlFor="position" className={`${styles.form_input__lable}`}>Valid Upto <span className='text__note'>*</span>:</label>
                                    </div>
                                    <div className="col-md-2">
                                        <div className='position-relative'>
                                            <label htmlFor='Months'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                </svg>
                                            </label>
                                            <input class={`${styles.form_input}`} placeholder='select Month' list="Months" name="month" id="month" />
                                        </div>
                                        <datalist id="Months">
                                            <option value="january" />
                                            <option value="Feb" />
                                            <option value="march" />
                                        </datalist>
                                    </div>
                                    <div className="col-md-2">
                                        <div className='position-relative'>
                                            <label htmlFor='Months'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                </svg>
                                            </label>
                                            <input class={`${styles.form_input}`} placeholder='select Day' list="Months" name="month" id="month" />
                                        </div>
                                        <datalist id="Months">
                                            <option value="january" />
                                            <option value="Feb" />
                                            <option value="march" />
                                        </datalist>
                                    </div>
                                    <div className="col-md-2">
                                        <div className='position-relative'>
                                            <label htmlFor='Months'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                </svg>
                                            </label>
                                            <input class={`${styles.form_input}`} placeholder='select Year' list="Months" name="month" id="month" />
                                        </div>
                                        <datalist id="Months">
                                            <option value="january" />
                                            <option value="Feb" />
                                            <option value="march" />
                                        </datalist>
                                    </div>
                                </div>
                            </div>
                            <div class={`${styles.inline_form_lable} col-lg-12 col-md-12  `} >
                                <div className="row d-flex align-items-center">
                                    <div className='col-md-3'>
                                        <label htmlFor="qualification" className={`${styles.form_input__lable}`}>Education Level:</label>
                                    </div>
                                    <div className="col-md-4">
                                        <div className='position-relative'>
                                            <label htmlFor='qualifications'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                </svg>
                                            </label>
                                            <input class={`${styles.form_input}`} placeholder='select One' list="qualifications" name="qualification" id="qualification" />
                                        </div>
                                        <datalist id="qualifications">
                                            <option value="Bsc" />
                                            <option value="MSc" />
                                            <option value="Phd" />
                                        </datalist>
                                    </div>
                                    <div className="col-md-5 d-flex  ">
                                        <span className='text-secondary'>Attach scan copy </span>
                                        <input type="file" name="passport_file" id="passport_file" />
                                    </div>
                                </div>
                            </div>
                            <div class={`${styles.inline_form_lable} col-lg-12 col-md-12  `} >
                                <div className="row d-flex align-items-center">
                                    <div className='col-md-3'>
                                        <label htmlFor="education-title" className={`${styles.form_input__lable}`}>Education Title:</label>
                                    </div>
                                    <div className="col-md-3">
                                        <div className='position-relative'>
                                            <label htmlFor='qualifications'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                </svg>
                                            </label>
                                            <input class={`${styles.form_input}`} placeholder='Civil engineering' list="education-titles" name="education-title" id="education-title" />
                                        </div>
                                        <datalist id="education-title">
                                            <option value="Civil Engineering" />
                                            <option value="BBA" />
                                            <option value="MBA" />
                                        </datalist>
                                    </div>
                                    <div className="col-md-5 d-flex align-items-center ">
                                        <span className='me-2 text__note_green'> OR</span>
                                        <div className="row d-flex align-items-center">
                                            <div className='col-md-6'>
                                                <label htmlFor="position" className={`${styles.form_input__lable}`}>Email:</label>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" class={`${styles.form_input}`} aria-label="First name" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                <div className="row d-flex align-items-center">
                                    <div className='col-md-4'>
                                        <label htmlFor="institution" className={`${styles.form_input__lable}`}>Institution:</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="text" class={`${styles.form_input}`} aria-label="First name" />
                                    </div>
                                </div>
                            </div>
                            <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                <div className="row d-flex align-items-center">
                                    <div className='col-md-4'>
                                        <label htmlFor="salary-ranges" className={`${styles.form_input__lable}`}>Valid Upto <span className='text__note'>*</span>:</label>
                                    </div>
                                    <div className="col-md-2">
                                        <div className='position-relative'>
                                            <label htmlFor='Froms'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                </svg>
                                            </label>
                                            <input class={`${styles.form_input}`} placeholder='From' list="Froms" name="from" id="from" />
                                        </div>
                                        <datalist id="Froms">
                                            <option value="10k" />
                                            <option value="20k" />
                                            <option value="30k" />
                                        </datalist>
                                    </div>
                                    <div className="col-md-2">
                                        <div className='position-relative'>
                                            <label htmlFor='tos'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                </svg>
                                            </label>
                                            <input class={`${styles.form_input}`} placeholder='To' list="tos" name="month" id="month" />
                                        </div>
                                        <datalist id="tos">
                                            <option value="10k" />
                                            <option value="20k" />
                                            <option value="30k" />
                                        </datalist>
                                    </div>
                                    <div className="col-md-2">
                                        <div className='position-relative'>
                                            <label htmlFor='currencies'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                </svg>
                                            </label>
                                            <input class={`${styles.form_input}`} placeholder='Currency' list="currencies" name="currency" id="currency" />
                                        </div>
                                        <datalist id="currencies">
                                            <option value="PKR" />
                                            <option value="Doller" />
                                            <option value="Euro" />
                                        </datalist>
                                    </div>
                                    <div className="col-md-2">
                                        <div className='position-relative'>
                                            <label htmlFor='per-months'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                </svg>
                                            </label>
                                            <input class={`${styles.form_input}`} placeholder='Per Month' list="per-months" name="per-month" id="per-month" />
                                        </div>
                                        <datalist id="per-months">
                                            <option value="Annum" />
                                            <option value="Month" />
                                            <option value="Day" />
                                        </datalist>
                                    </div>
                                </div>
                            </div>
                            <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                <div className="row d-flex align-items-center">
                                    <div className='col-md-4'>
                                        <label htmlFor="experiences" className={`${styles.form_input__lable}`}>Total Experience<span className='text__note'>*</span>:</label>
                                    </div>
                                    <div className="col-md-3">
                                        <div className='position-relative'>
                                            <label htmlFor='Froms'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                </svg>
                                            </label>
                                            <input class={`${styles.form_input}`} placeholder='Value' list="experiences" name="experience" id="experience" />
                                        </div>
                                        <datalist id="experiences">
                                            <option value="1" />
                                            <option value="2" />
                                            <option value="3" />
                                            <option value="4" />
                                        </datalist>
                                    </div>
                                    <div className="col-md-3">
                                        <div className='position-relative'>
                                            <label htmlFor='experiences-durations'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-short datalist-icon" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                </svg>
                                            </label>
                                            <input class={`${styles.form_input}`} placeholder='Duration' list="experiences-durations" name="experiences-duration" id="experiences-duration" />
                                        </div>
                                        <datalist id="experiences-durations">
                                            <option value="Year" />
                                            <option value="Months" />
                                        </datalist>
                                    </div>
                                </div>
                            </div>

                            <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                <div className="row d-flex align-items-center">
                                    <div className='col-md-4'>
                                        <label htmlFor="institution" className={`${styles.form_input__lable}`}>Sign up for newsletter:</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="checkbox" class={`${styles.form_input}`} aria-label="First name" />
                                    </div>
                                </div>
                            </div>
                            <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                <div className="row d-flex align-items-center">
                                    <div className='col-md-4'>
                                        <label htmlFor="institution" className={`${styles.form_input__lable}`}>Jobs Alert:</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="checkbox" class={`${styles.form_input}`} aria-label="First name" />
                                    </div>
                                </div>
                            </div>


                            <div class={`${styles.inline_form_lable} col-lg-9 col-md-12  `} >
                                <div className="row d-flex align-items-center">
                                    <div className='col-md-4'>

                                    </div>
                                    <div className="col-md-8">
                                        <button className={`unset_button text-light px-2 py-2`}>
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
            </div>

        </div >
    )
}
export default CV