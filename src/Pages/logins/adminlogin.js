import Styles from './login.module.css';
import bggside from '../../Assets/Images/sign-in-right.png';
import InputField from '../../Components/inputfield/inputfield';
import axios from 'axios';
import { useEffect, useState } from 'react';
import jwt from 'jwt-decode';
import jwtDecode from 'jwt-decode';
import jwtCheck from '../../system/jwtChecker';
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const checkAuth = jwtCheck();
  if (checkAuth === true) {
    navigate('/managealljobs');
  }
  useEffect(() => {
    if (checkAuth === true) {
      navigate('/managealljobs');
    }
  }, []);
  const signInHandler = () => {
    axios
      .post(`http://3.110.201.21:3002/users/signin`, {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.error == 1) {
          alert('Login Error!');
        } else {
          localStorage.setItem('accessToken', response.data.accesstoken);
          navigate('/managealljobs');
        }
      });
  };

  return (
    <div
      className={`${Styles.auth_page} py-5   container-fluid px-5 primary-bg`}
    >
      <div className="container">
        <div className={`  row `}>
          <div className={`col-md-6 p-4 ${Styles.auth_page__model}`}>
            <div className="container-fluid">
              <h1>OGS Man Power</h1>
              <h3 className={`${Styles.form_heading_1}`}>Admin Login</h3>
              <p className={`${Styles.form_description}`}></p>
              <div className={`pt-5 ${Styles.from}`}>
                <InputField title={'Email'} onChange={emailHandler} />
                <InputField title={'Password'} onChange={passwordHandler} />
                <button
                  className="unset_button w-100 text-white py-2 form_action_button  submit"
                  type="submit"
                  onClick={() => signInHandler()}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>

          <div className={`col-md-6 p-0  ${Styles.auth_img} `}>
            <img src={bggside} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminLogin;
