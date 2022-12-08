import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import styles from "./main.module.css";
import { TextInput, List } from "../Forms/InputFields";
import axios from "axios";
const SeekerRegister = () => {
  const [signupResponse, setsignupResponse] = useState();
  const [signupError, setsignupError] = useState();
  const signupFormIk = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      password: Yup.string().required("Password is Required"),
      repeatPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: (values) => {
      axios
        .post("http://3.110.201.2:3002/users", values)
        .then((res) => {
          console.log(res);
          setsignupResponse(res.data.message);
        })
        .catch((error) => {
          setsignupError(error.response.data.message);
          console.log(error);
        });
    },
  });
  return (
    <div className="">
      <h3 className="text-dark">Login Information</h3>
      <form className="row" onSubmit={signupFormIk.handleSubmit}>
        <div className="col-md-6">
          <TextInput id="firstName" formik={signupFormIk} label="First Name" />
        </div>
        <div className="col-md-6">
          <TextInput id="lastName" formik={signupFormIk} label="Last Name" />
        </div>

        <div className="col-12">
          <TextInput
            type="email"
            id="email"
            formik={signupFormIk}
            label="Email"
          />
        </div>
        <div className="col-md-6">
          <TextInput
            type="password"
            id="password"
            formik={signupFormIk}
            label="Password"
          />
        </div>
        <div className="col-md-6">
          <TextInput
            type="password"
            id="repeatPassword"
            formik={signupFormIk}
            label="Repeat Password"
          />
        </div>
        {signupError && <p className="text-danger">{signupError}</p>}
        {signupResponse && <p>{signupResponse}</p>}
        <button
          className="unset_button w-100 text-white py-2 form_action_button  submit"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

function SeekerRegisteration() {
  return (
    <div
      className={`${styles.auth_page} py-5   d-flex flex-column  container-fluid px-md-5  primary-bg`}
    >
      <div className="container d-flex flex-grow-1 ">
        <div className={` ${styles.auth_page__model} row  `}>
          <div
            className={`${"col-md-6"}  d-flex justify-content-center align-items-center py-md-4 py-2 px-md-5 px-2`}
            style={{ overflow: "hidden" }}
          >
            <div className="container-fluid">
              <h1>Logo</h1>
              <h3 className={`${styles.form_heading_1}`}>User Registeration</h3>
              <p className={`${styles.form_description}`}>
                Registration with OGS (Pvt) Ltd is 100% free <br />
                Please fill up this form to register free at OGS
              </p>
              <div className="row gy-3">
                <SeekerRegister />
              </div>
            </div>
          </div>
          <div className={`col-md-6 bg-secondary ${styles.auth_img} `}></div>
        </div>
      </div>
    </div>
  );
}

export default SeekerRegisteration;
