import Styles from "./persanal.module.css";
import Seekersidebar from "../../../Components/seekersidebar/seekersidebar";
import removeicon from "../../../Assets/Images/New folder (3)/remove 01.png";
import plusicon from "../../../Assets/Images/New folder (3)/plus 01.svg";
import editeicon from "../../../Assets/Images/New folder (3)/edit-rectangle.svg";
import profimg from "../../../Assets/Images/Rectangle 1158.png";
import removeye from "../../../Assets/Images/remove.png";
import videoicom from "../../../Assets/Images/Rectangle 1185.png";
import camraicon from "../../../Assets/Images/camera video.svg";
import tick from "../../../Assets/Images/tick.svg";
import leftarrow from "../../../Assets/Images/arrow-left.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtCheck from "../../../system/jwtChecker";
const Persanalinfo = () => {
  const [data, Setdata] = useState("");
  const [displayon, Setdisplayon] = useState("");
  const [displayon1, Setdisplayon1] = useState("");
  const [displayon2, Setdisplayon2] = useState("");
  const [displayon3, Setdisplayon3] = useState("");
  const [displayon4, Setdisplayon4] = useState("");
  const [displayon5, Setdisplayon5] = useState("");
  const [displayon6, Setdisplayon6] = useState("");
  const [displayon7, Setdisplayon7] = useState("");
  const [displayon8, Setdisplayon8] = useState("");
  const [progress, setprogress] = useState(false);
  const [progress1, setprogress1] = useState(true);
  const [progress2, setprogress2] = useState(false);
  const [progress3, setprogress3] = useState(true);
  const [progress4, setprogress4] = useState(false);
  const [progress5, setprogress5] = useState(true);
  const [progress6, setprogress6] = useState(false);
  const [progress7, setprogress7] = useState(false);
  const navigate = useNavigate();
  if (jwtCheck(1) === false) {
    navigate("/seekerlogin");
  }
  const display = (d) => {
    console.log("value");
    console.log(d);
    Setdata(d);
  };
  return (
    <div className="asdesaser">
      <Seekersidebar side={display} />
      <div
        className={`pt-5 ${Styles.Persanalinfomain} ${
          data ? "sidebarmarginmin" : "sidebarmarginmax"
        }`}
      >
        <div className="container">
          <div
            style={{ display: displayon ? "none" : "block" }}
            className={`my-4 p-2 ${Styles.topheader}`}
          >
            <div className="d-flex justify-content-end">
              {" "}
              <button
                onClick={() => {
                  Setdisplayon(!displayon);
                }}
                className={`${Styles.notibtn}`}
              >
                <span>
                  {" "}
                  <img src={removeicon} />
                </span>
              </button>
            </div>
            <h1 className="ogsfonts14">
              Your email address has not been confirmed yet!
            </h1>
            <p className="ogsfonts12">
              Your job applications won't be forwarded to the employers until
              you confirm your account. Send me a confirmation email
            </p>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className={`p-3 mt-4 ${Styles.profdetailscon}`}>
                <div
                  className={`d-flex justify-content-between align-items-center`}
                >
                  <h1 className="m-0 ogsfonts18">Personal Information</h1>
                  <button className={`${Styles.notibtn}`}>
                    <span>
                      <img src={editeicon} />
                    </span>
                  </button>
                </div>
                <div className="d-flex align-items-center  mt-4">
                  <img className={`me-3 ${Styles.profimg}`} src={profimg} />
                  <div>
                    <h1 className="ogsfonts38">Magen_fox</h1>
                    <p className="ogsfonts16">.NET (Web based) Engineer</p>
                    <p className="ogsfonts16">
                      Jin Technologies (Pvt.) Ltd - California, USA
                    </p>
                    <p className="ogsfonts16">magenfox@gmail.com</p>
                    <p className="ogsfonts16">+1.1715256</p>
                  </div>
                </div>
              </div>
              <div className={`my-4 p-3 ${Styles.addcon}`}>
                <div className="d-flex justify-content-between">
                  <h1 className="m-0 ogsfonts18">Personal Information</h1>
                  <button
                    onClick={() => {
                      Setdisplayon1(!displayon1);
                    }}
                    className={`${Styles.notibtn}`}
                  >
                    <span>
                      <img src={plusicon} />
                    </span>
                  </button>{" "}
                </div>
                <div className="my-3">
                  <p>No summary has been added yet</p>
                </div>
                <div style={{ display: displayon1 ? "block" : "none" }}>
                  <input className={`me-3 ${Styles.inputadd}`} />
                  <button className={`p-2 ${Styles.addibtn}`}>save</button>
                </div>
              </div>
              <div className={`my-4 p-3 ${Styles.addcon}`}>
                <div className="d-flex justify-content-between">
                  <h1 className="m-0 ogsfonts18">Personal Information</h1>
                  <button
                    onClick={() => {
                      Setdisplayon2(!displayon2);
                    }}
                    className={`${Styles.notibtn}`}
                  >
                    <span>
                      <img src={plusicon} />
                    </span>
                  </button>{" "}
                </div>
                <div className="my-3">
                  <p>No summary has been added yet</p>
                </div>
                <div style={{ display: displayon2 ? "block" : "none" }}>
                  <input className={`me-3 ${Styles.inputadd}`} />
                  <button className={`p-2 ${Styles.addibtn}`}>save</button>
                </div>
              </div>
              <div className={`my-4 p-3 ${Styles.addcon}`}>
                <div className="d-flex justify-content-between">
                  <h1 className="m-0 ogsfonts18">Projects</h1>
                  <button
                    onClick={() => {
                      Setdisplayon3(!displayon3);
                    }}
                    className={`${Styles.notibtn}`}
                  >
                    <span>
                      <img src={plusicon} />
                    </span>
                  </button>{" "}
                </div>
                <div className="my-3">
                  <p>No summary has been added yet</p>
                </div>
                <div style={{ display: displayon3 ? "block" : "none" }}>
                  <input className={`me-3 ${Styles.inputadd}`} />
                  <button className={`p-2 ${Styles.addibtn}`}>save</button>
                </div>
              </div>
              <div className={`my-4 p-3 ${Styles.addcon}`}>
                <div className="d-flex justify-content-between">
                  <h1 className="m-0 ogsfonts18">Experience</h1>
                  <button
                    onClick={() => {
                      Setdisplayon4(!displayon4);
                    }}
                    className={`${Styles.notibtn}`}
                  >
                    <span>
                      <img src={plusicon} />
                    </span>
                  </button>{" "}
                </div>
                <div className="my-3">
                  <p>No summary has been added yet</p>
                </div>
                <div style={{ display: displayon4 ? "block" : "none" }}>
                  <input className={`me-3 ${Styles.inputadd}`} />
                  <button className={`p-2 ${Styles.addibtn}`}>save</button>
                </div>
              </div>
              <div className={`my-4 p-3 ${Styles.addcon}`}>
                <div className="d-flex justify-content-between">
                  <h1 className="m-0 ogsfonts18">Skills</h1>
                  <button
                    onClick={() => {
                      Setdisplayon5(!displayon5);
                    }}
                    className={`${Styles.notibtn}`}
                  >
                    <span>
                      <img src={plusicon} />
                    </span>
                  </button>{" "}
                </div>
                <div className="my-3">
                  <p>No summary has been added yet</p>
                </div>
                <div style={{ display: displayon5 ? "block" : "none" }}>
                  <input className={`me-3 ${Styles.inputadd}`} />
                  <button className={`p-2 ${Styles.addibtn}`}>save</button>
                </div>
              </div>
              <div className={`my-4 p-3 ${Styles.addcon}`}>
                <div className="d-flex justify-content-between">
                  <h1 className="m-0 ogsfonts18">Languages</h1>
                  <button
                    onClick={() => {
                      Setdisplayon8(!displayon8);
                    }}
                    className={`${Styles.notibtn}`}
                  >
                    <span>
                      <img src={plusicon} />
                    </span>
                  </button>{" "}
                </div>
                <div className="my-3">
                  <p>No summary has been added yet</p>
                </div>
                <div style={{ display: displayon8 ? "block" : "none" }}>
                  <input className={`me-3 ${Styles.inputadd}`} />
                  <button className={`p-2 ${Styles.addibtn}`}>save</button>
                </div>
              </div>
              <div className={`my-4 p-3 ${Styles.addcon}`}>
                <div className="d-flex justify-content-between">
                  <h1 className="m-0 ogsfonts18">Job Preferences</h1>
                  <button
                    onClick={() => {
                      Setdisplayon6(!displayon6);
                    }}
                    className={`${Styles.notibtn}`}
                  >
                    <span>
                      <img src={plusicon} />
                    </span>
                  </button>{" "}
                </div>
                <div className="my-3">
                  <p>No summary has been added yet</p>
                </div>
                <div style={{ display: displayon6 ? "block" : "none" }}>
                  <input className={`me-3 ${Styles.inputadd}`} />
                  <button className={`p-2 ${Styles.addibtn}`}>save</button>
                </div>
              </div>
              <div className={`my-4 p-3 ${Styles.addcon}`}>
                <div className="d-flex justify-content-between">
                  <h1 className="m-0 ogsfonts18">CV Privacy Settings</h1>
                  <button
                    onClick={() => {
                      Setdisplayon7(!displayon7);
                    }}
                    className={`${Styles.notibtn}`}
                  >
                    <span>
                      <img src={plusicon} />
                    </span>
                  </button>{" "}
                </div>
                <div className="my-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label ogsfonts18"
                      for="flexRadioDefault1"
                    >
                      Public
                    </label>
                  </div>
                  <p className="ogsfonts16">
                    Your CV will be visible to every registered Rozee employer.
                  </p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label
                      className="form-check-label ogsfonts18"
                      for="flexRadioDefault2"
                    >
                      Private
                    </label>
                  </div>
                  <p className="ogsfonts16">
                    Your CV will not be visible to anyone except you. However,
                    you will be able to attach it when applying for a job.
                  </p>
                </div>
                <div style={{ display: displayon7 ? "block" : "none" }}>
                  <input className={`me-3 ${Styles.inputadd}`} />
                  <button className={`p-2 ${Styles.addibtn}`}>save</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`mt-4   ${Styles.innersidehead}`}>
                <div className="d-flex justify-content-end">
                  <button className={`${Styles.notibtn}`}>
                    <span>
                      <img src={removeye} />
                    </span>
                  </button>
                </div>
                <div className="px-4 pb-4">
                  <h1 className="ogsfonts16">
                    Learn more about your dashboard features.
                  </h1>
                  <img width="100%" src={videoicom} />
                </div>
              </div>
              <div className={`mt-3  ${Styles.innersidehead3}`}>
                <div className="d-flex px-3 py-2 justify-content-between">
                  <button className={`${Styles.notibtn}`}>
                    <span>
                      <img src={camraicon} />
                    </span>
                  </button>
                  <button className={`${Styles.notibtn}`}>add</button>
                </div>
                <div className="px-4 pb-4">
                  <h1 className="ogsfonts16">
                    Learn more about your dashboard features.
                  </h1>
                  <img width="100%" src={videoicom} />
                </div>
              </div>
              <div className={`mt-3 p-4  ${Styles.innersidehead3}`}>
                <h1 className="ogsfonts18 mb-3">
                  Update your profile for better job recommendations
                </h1>
                <div className="progress my-3">
                  <div
                    className="progress-bar w-75"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="d-flex my-3">
                  <img className="me-2" src={progress ? tick : leftarrow} />{" "}
                  <h1 className=" ogsfonts18">Work History</h1>
                </div>
                <div className="d-flex my-3">
                  <img className="me-2" src={progress1 ? tick : leftarrow} />{" "}
                  <h1 className=" ogsfonts18">Personal Info</h1>
                </div>
                <div className="d-flex my-3">
                  <img className="me-2" src={progress2 ? tick : leftarrow} />{" "}
                  <h1 className=" ogsfonts18">Education</h1>
                </div>
                <div className="d-flex my-3">
                  <img className="me-2" src={progress3 ? tick : leftarrow} />{" "}
                  <h1 className=" ogsfonts18">Profile Picture</h1>
                </div>
                <div className="d-flex my-3">
                  <img className="me-2" src={progress4 ? tick : leftarrow} />{" "}
                  <h1 className=" ogsfonts18">Professional Summary</h1>
                </div>
                <div className="d-flex my-3">
                  <img className="me-2" src={progress5 ? tick : leftarrow} />{" "}
                  <h1 className=" ogsfonts18">Skills</h1>
                </div>
                <div className="d-flex my-3">
                  <img className="me-2" src={progress6 ? tick : leftarrow} />{" "}
                  <h1 className=" ogsfonts18">Project</h1>
                </div>
                <div className="d-flex my-3">
                  <img className="me-2" src={progress7 ? tick : leftarrow} />{" "}
                  <h1 className=" ogsfonts18">Languages</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Persanalinfo;
