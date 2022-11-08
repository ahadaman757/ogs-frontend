import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import $, { data } from 'jquery';
import axios from 'axios';
import API from '../config'
const LoginInformationValidation = (setformdata, formData) => {
    console.log(formData)
    return {
        initialValues: {
            position: formData.position,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
            repeatPassword: formData.repeatPassword
        },

        validationSchema: Yup.object({
            position: Yup.string().required('Required'),
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            email: Yup.string().required('Required'),
            password: Yup.string().required('Password is Required'),
            repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: values => {
            $(document).ready(function () {
                const name = $(".slide_button button")
                console.log(name[2])
                name[2].click()
                setformdata(values)
            });


        },
    }

};
const BusinessInformationValidation = (setformData, formData) => {
    console.log(formData)
    return {
        initialValues: {
            businessName: formData.businessName,
            businessType: formData.businessType,
            businessWebpage: formData.businessWebpage,
            mobileNumber: formData.mobileNumber,
        },
        validationSchema: Yup.object({
            businessName: Yup.string().required('Required'),
            businessType: Yup.string().required('Required'),
            businessWebpage: Yup.string().required('Required'),
            mobileNumber: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            $(document).ready(function () {
                const name = $(".slide_button button")
                console.log(name[2])
                name[2].click()
            });

            setformData((pre) => {
                return { ...pre, ...values }
            })

        },
    }

};
const AddressInformationValidation = (setformData, formData, data, setRegisterResponse, setRegisterError, LogoData) => {
    return {
        initialValues: {
            registerType: 'recruiter',
            address: formData.address,
            country: formData.country,
            employerName: formData.employerName,
            employerNumber: formData.employerNumber,
            employerEmail: formData.employerEmail,
        },
        validationSchema: Yup.object({
            address: Yup.string().required('Required'),
            country: Yup.string().required('Required'),
            city: Yup.string().required('Required'),
            employerName: Yup.string().required('Required'),
            employerNumber: Yup.string().required('Required'),
            employerEmail: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            console.log("logodata")
            console.log(LogoData)
            $(document).ready(function () {
                const name = $(".slide_button button")
                name[2].click()
                const fullFormData = { ...data, ...values }
                const formdata = new FormData()
                // formdata.append('image', logo)
                for (var key in fullFormData) {
                    formdata.append(key, fullFormData[key]);
                }
                axios.post(`http://localhost:3002/users`, formdata, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Access-Control-Allow-Origin": "*"
                    }

                }).then(res => {
                    console.log(res)
                    setRegisterResponse(res)
                }).catch(error => {
                    setRegisterError(error.response.data)
                })
            });


        },
    }

};
export { LoginInformationValidation, BusinessInformationValidation, AddressInformationValidation }