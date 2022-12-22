import Styles from './login.module.css';
import bggside from '../../Assets/Images/sign-in-right.png';
import InputField from '../../Components/inputfield/inputfield';
import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
const SeekerLogin = () => {
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [loginResponse, setLoginResponse] = useState();
  console.log('dsd', loginResponse);

  const navigate = useNavigate();
  return (
    <div
      className={`${Styles.auth_page} py-5   container-fluid px-5 primary-bg`}
    >
      <div className="container">
        <div className={`  row `}>
          <div className={`col-md-6 p-4 ${Styles.auth_page__model}`}>
            <div className="container-fluid">
              <h1>OGS Man Power</h1>
              <h3 className={`${Styles.form_heading_1}`}>Seeker Login</h3>
              <p className={`${Styles.form_description}`}>
                Registration with OGS (Pvt) Ltd is 100% free <br />
                Please fill up this form to register free at OGS
              </p>
              <div className={`pt-5 ${Styles.from}`}>
                <div className="my-3">
                  <div className="d-flex justify-content-between">
                    <p className="ogsfonts16">Email</p>
                    <p className={`ogsfonts16 ${Styles.InputFieldRe}`}></p>
                  </div>

                  <input
                    className={`${Styles.InputField}`}
                    onChange={(e) => {
                      setUserEmail(e.target.value);
                      console.log(userEmail);
                    }}
                  />
                </div>
                <div className="my-3">
                  <div className="d-flex justify-content-between">
                    <p className="ogsfonts16">password</p>
                    <p className={`ogsfonts16 ${Styles.InputFieldRe}`}></p>
                  </div>

                  <input
                    className={`${Styles.InputField}`}
                    onChange={(e) => setUserPassword(e.target.value)}
                    type="password"
                  />
                </div>
                <button
                  className="unset_button w-100 text-white py-2 form_action_button  submit"
                  type="submit"
                  onClick={() => {
                    axios
                      .post(`http://3.110.201.21:3002/users/signin`, {
                        email: userEmail,
                        password: userPassword,
                      })
                      .then((response) => {
                        console.log(response);
                        if (response.data.code == 0) {
                          setLoginResponse(response.data.message);
                        } else {
                          localStorage.setItem(
                            'accessToken',
                            response.data.accesstoken
                          );
                          // navigate("/");
                          setLoginResponse(response.data.message);
                        }
                      });
                  }}
                >
                  Continue
                </button>
                <p>{loginResponse}</p>
              </div>
            </div>
          </div>

          <div className={`col-md-6 p-0  ${Styles.auth_img} `}>
            <img style={{ width: '100%', height: '100%' }} src={bggside} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SeekerLogin;
