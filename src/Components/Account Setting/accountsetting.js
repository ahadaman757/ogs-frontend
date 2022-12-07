import React, { useState } from "react";
import Styles from "./accountsetting.module.css";
import InputField from "../inputfield/inputfield";
import { Formik, useFormik } from "formik";
import { TextInput } from "../../Pages/Forms/InputFields";
import * as Yup from 'yup'
import axios from "axios";
const Accountsetting = () => {
  const [formresponse, setformresponse] = useState()
  const [formerror, setformerror] = useState()
  const resetFormik = useFormik({
    initialValues: {
      email: "",
      old_password: '',
      new_password: '',
      new_repeat_password: ''
    },
    onSubmit: (values => {
      axios.post('http://3.110.201.2:3002/users/resetpassword', values, {
        headers: {
          accesstoken: localStorage.getItem("accessToken"),
        },
      }).then(res => {
        console.log(res)
        setformresponse(res.data.message)
      }).catch(error => {
        console.log(error)
        setformerror(error.response.data.message)
      })
      resetFormik.resetForm()
    }),
    validationSchema: Yup.object({
      email: Yup.string().required('Required'),
      old_password: Yup.string().required('Required'),
      new_password: Yup.string().required('Password is Required'),
      new_repeat_password: Yup.string().oneOf([Yup.ref('new_password'), null], 'Passwords must match')
    }),
  })
  if (resetFormik.touched.email) {
    formresponse && setformresponse(null)
    formerror && setformerror(null)
  }

  return (
    <div className={`row p-4 ${Styles.Accountsettingmain}`}>
      <form onSubmit={resetFormik.handleSubmit}>
        <h1 className=" mb-4 ogsfonts25">Account Setting</h1>
        <h1 className="mb-3 ogsfonts18">My Account Settings</h1>
        <p className=" mb-3 ogsfonts16">
          This pane provides an overview of your account settings, allows you to
          change your password.
        </p>
        <div className="row">
          <div className="col-md-6">
            <TextInput id='email' type="email" label="Email" formik={resetFormik} />
            <TextInput id='old_password' label="Old password" formik={resetFormik} />
            <TextInput id='new_password' label="Enter a new Password" formik={resetFormik} />
            <TextInput id='new_repeat_password' label="Re enter a new password" formik={resetFormik} />
          </div>
        </div>
        <div className="row">
          {
            formerror && <p className="text-danger">
              {formerror}
            </p>

          }
          {
            formresponse && <p className="text-success">
              {formresponse}
            </p>
          }
          <div className="col-md-6 d-flex justify-content-end my-3">
            <button type="submit" className={` ${Styles.profsbtn}`}>Save</button>

          </div>
        </div>
      </form >
    </div>
  );
};
export default Accountsetting;
