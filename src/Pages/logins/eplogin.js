import Styles from "./login.module.css";
import bggside from "../../Assets/Images/sign-in-right.png";
import InputField from "../../Components/inputfield/inputfield";
import axios from "axios";
import React, { useState } from "react";
import Redalert from "../../Components/redalert/redalert";
import Greenalert from "../../Components/greenalert/greenalert";

import { useNavigate } from "react-router-dom";

const EmployerLogin = () => {
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [loginResponse, setLoginResponse] = useState();
  const [erroralert, Seterroralert] = useState(null);
  const navigate = useNavigate();
  return (
    <div
      className={`${Styles.auth_page} py-5   container-fluid px-5 primary-bg`}
    >
      <div className="container">
        <div className={`  row d-flex justify-content-center `}>
          <div className={`col-md-6 p-4 ${Styles.auth_page__model}`}>
            <div className="">
              <h1>OGS Man Power</h1>
              <h3 className={`${Styles.form_heading_1}`}>Employer Login</h3>
              <p className={`${Styles.form_description}`}>
                Registration with OGS (Pvt) Ltd is 100% free <br />
                Please fill up this form to login at OGS Man Power
              </p>
              <div className={`pt-5 ${Styles.from}`}>
                {erroralert == null ? (
                  ""
                ) : erroralert ? (
                  <Redalert message={"Please check your email or password"} />
                ) : (
                  <Greenalert message={"Login successfully"} />
                )}

                {/* <InputField title={"Email"} onChange={setUserEmail} /> */}
                <div className="my-3">
                  <div className="d-flex justify-content-between">
                    <p className="ogsfonts16">Email</p>
                    <p className={`ogsfonts16 ${Styles.InputFieldRe}`}></p>
                  </div>

                  <input
                    className={`p-2 ${Styles.InputField}`}
                    onChange={(e) => {
                      setUserEmail(e.target.value);
                      console.log(userEmail);
                    }}
                    required
                  />
                </div>
                <div className="my-3">
                  <div className="d-flex justify-content-between">
                    <p className="ogsfonts16">Password</p>
                    <p className={`ogsfonts16 ${Styles.InputFieldRe}`}></p>
                  </div>

                  <input
                    className={`p-2 ${Styles.InputField}`}
                    onChange={(e) => setUserPassword(e.target.value)}
                    type="password"
                    required
                  />
                </div>
                {/* <InputField title={"password"} onChange={setUserPassword} /> */}

                <button
                  onClick={() => {
                    axios
                      .post(`https://3.110.201.21:3002/users/signin`, {
                        email: userEmail,
                        password: userPassword,
                      })
                      .then((response) => {
                        console.log(response);
                        if (response.data.code == 0) {
                          setLoginResponse(response.data.message);
                          Seterroralert(true);
                        } else {
                          localStorage.setItem(
                            "accessToken",
                            response.data.accesstoken
                          );
                          if (
                            localStorage.getItem("accessToken") == "undefined"
                          ) {
                            Seterroralert(true);
                          } else {
                            navigate("/dashboard");
                            Seterroralert(false);
                          }

                          setLoginResponse(response.data.message);
                        }
                      });
                  }}
                  className="unset_button w-100 text-white py-2 form_action_button  submit"
                  type="submit"
                >
                  Continue
                </button>
                <a
                  className={` py-3 hov ogsfonts16`}
                  onClick={() => {
                    navigate("/frogetpass");
                  }}
                >
                  Forget Password?
                </a>
              </div>
            </div>
          </div>

          <div className={`col-md-6  p-0  ${Styles.auth_img} `}>
            <img style={{ width: "100%", height: "100%" }} src={bggside} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployerLogin;
