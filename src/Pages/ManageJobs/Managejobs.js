import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import { useState, useEffect } from "react";
import Styles from "./Managejobs.module.css";
import Searchicon from "../../Assets/Images/search.png";
import proimg from "../../Assets/Images/Rectangle 1143.png";
import Jobcard from "../../Components/jobcard/Jobcard";
import Active from "../../Components/Active/Active";
import Deactivated from "../../Components/Deactived/Deactived";
import Draft from "../../Components/Draft/Draft";
import jwtCheck from "../../system/jwtChecker";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Managejobs = () => {
  const [data, Setdata] = useState(false);
  const [currntstac, setcurrntstac] = useState("");

  const [mobileActive, setMobileActive] = useState(false);

  const navigate = useNavigate();
  if (jwtCheck(2) === false) {
    navigate("/employerlogin");
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 450) {
        setMobileActive(true);
      } else {
        setMobileActive(false);
      }
    });
  }, []);

  const [jobs, setJobs] = useState();
  const [jobsLoading, setJobsLoading] = useState(true);
  const [userData, setUserData] = useState();
  const [userDataLoading, setUserDataLoading] = useState();

  const display = (d) => {
    console.log("value");
    console.log(d);
    Setdata(d);
  };

  useEffect(() => {
    // GET USER DATA
    axios
      .get("https://3.14.27.53:3003/users/me", {
        headers: {
          accesstoken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        setUserData(res.data);
        setUserDataLoading(false);
        console.log(userData);
      });
    axios
      .get(`https://3.14.27.53:3003/jobs/myjobs`, {
        headers: {
          accesstoken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        setJobs(res.data);
        setJobsLoading(false);
      });
  }, []);
  return (
    <div className="asdesaser">
      <DashboardNavbar side={display} />
      <div
        className={`${Styles.Managejobsmain} ${
          data ? "sidebarmarginmin" : "sidebarmarginmax"
        }`}
      >
        <div>
          <div className="container">
            <div className="row pt-4 mt-5">
              <div className="col-md-9">
                <div className={` p-3 ${Styles.Managejobschild1}`}>
                  <h1 className={`ogsfonts25`}>
                    Manage Jobs -{" "}
                    {userData?.company == null
                      ? "Undefined"
                      : userData.company_name}
                  </h1>
                  <p>to find talent</p>
                  <div className="d-sm-flex">
                    <div
                      className={` input-group flex-row align-items-center inp ${Styles.inputmj} `}
                    >
                      <input
                        type="text"
                        className={`form-control ${Styles.inp1}  `}
                        aria-label="Text input with dropdown button"
                      />
                      <div className="hrwe"></div>
                      <button
                        className={`btn btn-outline-secondary dropdown-toggle btmxo ogsfonts15 ${Styles.inp1} `}
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        All Departments
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </li>
                      </ul>
                    </div>
                    <button className={` mx-sm-2 ${Styles.btnsearch}`}>
                      <span>
                        <img src={Searchicon} />
                      </span>
                    </button>
                  </div>
                </div>
                <div className={`d-flex flex-wrap p-3  my-3 ${Styles.tabsadd}`}>
                  <div className={`mx-5 p-2 ogsfonts16  ${Styles.tablinks}`}>
                    <a onClick={() => setcurrntstac("active")}>Active</a>
                  </div>

                  <div className={`mx-5 p-2 ogsfonts16  ${Styles.tablinks}`}>
                    <a onClick={() => setcurrntstac("deactive")}>Deavtivated</a>
                  </div>
                </div>
                <div>
                  {jobsLoading ? (
                    "Loading..."
                  ) : jobs.length > 0 ? (
                    currntstac == "active" ? (
                      <Active jobs={jobs} />
                    ) : (
                      <Deactivated jobs={jobs} />
                    )
                  ) : (
                    "No posted jobs"
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className={`d-flex p-4 text-center flex-column justify-content-center align-items-center ${Styles.profcard}`}
                >
                  <img className={`${Styles.profimg}`} src={proimg} />
                  <h1 className="ogsfonts24">Jasmine</h1>
                  <p className="ogsfonts16">CEO</p>
                  <p className="ogsfonts14">ceoogs@gmail.com</p>
                  <p className="ogsfonts14">+92.300.5352636</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Managejobs;
