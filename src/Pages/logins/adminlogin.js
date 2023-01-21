import Styles from "./login.module.css";
import bggside from "../../Assets/Images/sign-in-right.png";
import InputField from "../../Components/inputfield/inputfield";
import axios from "axios";
import { useEffect, useState } from "react";
import jwt from "jwt-decode";
import jwtDecode from "jwt-decode";
import jwtCheck from "../../system/jwtChecker";
import { useNavigate } from "react-router-dom";
import Redalert from "../../Components/redalert/redalert";
import Greenalert from "../../Components/greenalert/greenalert";
import eye from "../../Assets/Images/eye.svg";
import eyedes from "../../Assets/Images/eye-disable.svg";
const AdminLogin = () => {
  const [email, setEmail] = useState();
  const [erroralert, Seterroralert] = useState(null);
  const [password, setPassword] = useState();
  const [logov, setlogov] = useState(eye);
  const [passwordType, setPasswordType] = useState("password");

  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const checkAuth = jwtCheck();
  if (checkAuth === true) {
    navigate("/managealljobs");
  }
  useEffect(() => {
    if (checkAuth === true) {
      navigate("/managealljobs");
    }
  }, []);
  const signInHandler = () => {
    axios
      .post(`https://3.14.27.53:3003/users/signin`, {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.error == 1) {
          alert("Login Error!");
        } else {
          localStorage.setItem("accessToken", response.data.accesstoken);
          navigate("/managealljobs");
        }
      });
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setlogov(eyedes);
      return;
    }
    setPasswordType("password");
    setlogov(eye);
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
                {erroralert == null ? (
                  ""
                ) : erroralert ? (
                  <Redalert message={"Please check your email or password"} />
                ) : (
                  <Greenalert message={"Login successfully"} />
                )}
                <InputField title={"Email"} onChange={emailHandler} />
                {/* <InputField title={'Password'} onChange={passwordHandler} /> */}
                <div className="my-3">
                  <div className="d-flex justify-content-between">
                    <p className="ogsfonts16">Password</p>
                    <p className={`ogsfonts16 ${Styles.InputFieldRe}`}></p>
                  </div>
                  <div class="input-group mb-3">
                    <input
                      className={`form-control p-2 ${Styles.InputField2}`}
                      placeholder="Password"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                      onChange={passwordHandler}
                      type={passwordType}
                    />
                    <button
                      className={`p-2 ${Styles.passinput}`}
                      type="button"
                      id="button-addon2"
                      onClick={togglePassword}
                    >
                      <span>
                        <img src={logov} />
                      </span>
                    </button>
                  </div>

                  {/* <input
                    className={`p-2 ${Styles.InputField}`}
                    onChange={(e) => setUserPassword(e.target.value)}
                    type={passwordType}
                    required
                  /> */}
                </div>
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
