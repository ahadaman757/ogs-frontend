import Styles from "./login.module.css";
import logo from "../../Assets/Images/mobilelogo.jpg";
import { useState } from "react";
import axios from "axios";
import Redalert from "../../Components/redalert/redalert";
import Greenalert from "../../Components/greenalert/greenalert";
const Frogetpass = () => {
  const [userEmail, setUserEmail] = useState("");
  const [erroralert, Seterroralert] = useState(null);
  return (
    <>
      <div className={`${Styles.Frogetpassmain}`}>
        <div className="d-flex align-items-md-center mt-md-4 pt-md-5 df">
          <div className="d-flex p-2 ">
            <img src={logo} />
          </div>
          <div className={`d-flex  ${Styles.Frogetpassmain}`}>
            <div
              className={`d-flex p-2 p-md-5 flex-colum ${Styles.Frogetpassin}`}
            >
              <h1 className="ogsfonts30 mt-4">Forgotten password?</h1>
              <p className={`ogsfonts16 mt-3 ${Styles.fontcol}`}>
                Fill in your email address to reset your password
              </p>

              <label className={`mt-4 ogsfonts16`}>Email Address</label>
              <input
                placeholder="Enter your valid email address"
                className={`mt-2 ps-4 ${Styles.fogetinput}`}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                  console.log(userEmail);
                }}
              />
              <div className="mt-3 pb-2 d-flex justify-content-between align-items-center mt-4">
                <a className={`ogsfonts16 hov ${Styles.back}`}>
                  {" "}
                  Back to login{" "}
                </a>
                <button
                  className={`py-3 ogsfonts16 px-5 ${Styles.linksendbbtn}`}
                  onClick={() => {
                    axios
                      .post(
                        `https://3.110.201.21:3002/users/findAccountByEmail`,
                        {
                          email: userEmail,
                        }
                      )
                      .then((response) => {
                        if (
                          response.data.message ===
                          "No account found by email as"
                        ) {
                          Seterroralert(false);
                        } else {
                          Seterroralert(true);
                        }
                        console.log(response);
                      });
                  }}
                >
                  Send Link
                </button>
              </div>
              {erroralert == null ? (
                ""
              ) : erroralert ? (
                <Redalert message={"Email not found"} />
              ) : (
                <Greenalert message={"Please check your email"} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Frogetpass;
