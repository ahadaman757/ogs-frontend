import Styles from "./login.module.css";
import logo from "../../Assets/Images/mobilelogo.jpg";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Redalert from "../../Components/redalert/redalert";
import Greenalert from "../../Components/greenalert/greenalert";
const Frogetlink = () => {
  const [userPassword, setuserPassword] = useState("");
  const [userrePassword, setuserrePassword] = useState("");
  const [erroralert, Seterroralert] = useState(null);
  const { id } = useParams();
  console.log(id, "id");
  return (
    <>
      <div className={`${Styles.Frogetpassmain}`}>
        <div className="d-flex align-items-md-center mt-md-5 pt-md-5 df">
          <div className="d-flex p-2 ">
            <img src={logo} />
          </div>
          <div className={`d-flex  ${Styles.Frogetpassmain}`}>
            <div
              className={`d-flex p-2 p-md-5 flex-colum ${Styles.Frogetpassins}`}
            >
              <h1 className="ogsfonts30 mt-4">Forgotten password?</h1>
              <p className={`ogsfonts16 mt-3 ${Styles.fontcol}`}>
                Fill in your email address to reset your password
              </p>
              <div className="d-flex df">
                {" "}
                <label className={`mt-4 ogsfonts16`}>New Password</label>
                <input
                  type="password"
                  placeholder="Enter your New Password"
                  className={`mt-2 ps-4 ${Styles.fogetinput}`}
                  onChange={(e) => {
                    setuserrePassword(e.target.value);
                  }}
                />
              </div>
              <div className="d-flex df">
                <label className={`mt-4 ogsfonts16`}>Confirm Password</label>

                <input
                  type="password"
                  placeholder="Enter your Confirm Password"
                  className={`mt-2 ps-4 ${Styles.fogetinput}`}
                  onChange={(e) => {
                    setuserPassword(e.target.value);
                  }}
                />
              </div>
              <div className="mt-3 d-flex justify-content-end align-items-center mt-4">
                <button
                  className={`py-3 ogsfonts16 px-5 ${Styles.linksendbbtn}`}
                  onClick={() => {
                    if (userrePassword == userPassword) {
                      axios
                        .post(
                          `https://3.110.201.21:3002/users/resetPass
`,
                          {
                            id: id,
                            password: userPassword,
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
                    } else {
                      Seterroralert(true);
                    }
                  }}
                >
                  Save Password
                </button>
              </div>
              <div className="mt-2">
                {erroralert == null ? (
                  ""
                ) : erroralert ? (
                  <Redalert message={"Password dose not match"} />
                ) : (
                  <Greenalert message={"Please login again"} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Frogetlink;
