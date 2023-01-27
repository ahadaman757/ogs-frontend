import Styles from './login.module.css';
import logo from '../../Assets/Images/mobilelogo.jpg';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Redalert from '../../Components/redalert/redalert';
import Greenalert from '../../Components/greenalert/greenalert';
import eye from '../../Assets/Images/eye.svg';
import eyedes from '../../Assets/Images/eye-disable.svg';
const Frogetlink = () => {
  const [userPassword, setuserPassword] = useState('');
  const [userrePassword, setuserrePassword] = useState('');
  const [erroralert, Seterroralert] = useState(null);
  const { id } = useParams();
  const [logov, setlogov] = useState(eye);
  const [logov2, setlogov2] = useState(eye);
  const [passwordType, setPasswordType] = useState('password');
  const [passwordType2, setPasswordType2] = useState('password');

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      setlogov(eyedes);
      return;
    }
    setPasswordType('password');
    setlogov(eye);
  };
  const togglePassword2 = () => {
    if (passwordType2 === 'password') {
      setPasswordType2('text');
      setlogov2(eyedes);
      return;
    }
    setPasswordType2('password');
    setlogov2(eye);
  };
  console.log(id, 'id');
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
                {' '}
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
                    type={passwordType2}
                    onChange={(e) => setuserPassword(e.target.value)}
                  />
                  <button
                    className={`p-2 ${Styles.passinput}`}
                    type="button"
                    id="button-addon2"
                    onClick={togglePassword2}
                  >
                    <span>
                      <img src={logov2} />
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

              <div className="d-flex df">
                <label className={`mt-4 ogsfonts16`}>Confirm Password</label>
                <div class="input-group mb-3">
                  <input
                    className={`form-control p-2 ${Styles.InputField2}`}
                    placeholder="Password"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    type={passwordType}
                    onChange={(e) => setuserrePassword(e.target.value)}
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
              </div>
              <div className="mt-3 d-flex justify-content-end align-items-center mt-4">
                <button
                  className={`py-3 ogsfonts16 px-5 ${Styles.linksendbbtn}`}
                  onClick={() => {
                    if (userrePassword == userPassword) {
                      axios
                        .post(
                          `https://3.14.27.53:3003/users/resetPass
`,
                          {
                            id: id,
                            password: userPassword,
                          }
                        )
                        .then((response) => {
                          if (
                            response.data.message ===
                            'No account found by email as'
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
                  ''
                ) : erroralert ? (
                  <Greenalert message={'Please login again'} />
                ) : (
                  <Redalert message={'Password does not match'} />
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
