import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import $, { data } from 'jquery';
import axios from 'axios';
import API from '../config'
const LoginInformationValidation = (setformdata) => {
    return {
        initialValues: {
            position: '',
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            position: Yup.string().required('Required'),
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            email: Yup.string().required('Required'),
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
const BusinessInformationValidation = (setformData) => {
    return {
        initialValues: {
            businessName: '',
            businessType: '',
            businessWebpage: '',
            mobileNumber: '',
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
const AddressInformationValidation = (setformData, data, setRegisterResponse, setRegisterError) => {
    return {
        initialValues: {
            registerType: 'recruiter',
            address: '',
            country: '',
            employerName: '',
            employerNumber: '',
            employerEmail: '',
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
            $(document).ready(function () {
                const name = $(".slide_button button")
                name[2].click()
                const formData = { ...data, ...values }
                axios.post(`http://localhost:3002/users`, formData).then(res => {
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