import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import $ from 'jquery';
const LoginInformationValidation = {
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
        });


    },
};
const BusinessInformationValidation = {
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


    },
};
const AddressInformationValidation = {
    initialValues: {
        address: '',
        country: '',
        businessWebpage: '',
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
            console.log(name[2])
            name[2].click()
            alert("Form Submitted")
        });


    },
};
export { LoginInformationValidation, BusinessInformationValidation, AddressInformationValidation }