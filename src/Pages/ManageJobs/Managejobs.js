import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import { useState, useEffect } from "react";
import Styles from "./Managejobs.module.css";
import Searchicon from "../../Assets/Images/search.png";
import proimg from "../../Assets/Images/Rectangle 1143.png";
import Jobcard from "../../Components/jobcard/Jobcard";
import Active from "../../Components/Active/Active";
import Deactivated from "../../Components/Deactived/Deactived";
import Draft from "../../Components/Draft/Draft";
import axios from "axios";
const Managejobs = () => {
  const [data, Setdata] = useState(false);
  const [currntstac, setcurrntstac] = useState("");

  const [mobileActive, setMobileActive] = useState(false);

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
      .get("http://localhost:3002/users/me", {
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
      .get(`http://localhost:3002/jobs/myjobs`, {
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
    <div>
      <DashboardNavbar side={display} />
      <div
        className={`${Styles.Managejobsmain}`}
        style={{
          marginLeft: data ? "55px" : "200px",
          // mobileActive === true && data === true
          //   ? "55px"
          //   : mobileActive === true && data === false
          //   ? "20px"
          //   : mobileActive === false && data === true
          //   ? "55px"
          //   : mobileActive === false && data === false
          //   ? "200px"
          //   : "",
        }}
      >
        <div className="row p-4 mt-5">
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
                    class={`form-control ${Styles.inp1}  `}
                    aria-label="Text input with dropdown button"
                  />
                  <div className="hrwe"></div>
                  <button
                    class={`btn btn-outline-secondary dropdown-toggle btmxo ogsfonts15 ${Styles.inp1} `}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    All Departments
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
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
                <a onClick={() => setcurrntstac("draft")}>Draft</a>
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
                ) : currntstac == "draft" ? (
                  <Draft jobs={jobs} />
                ) : (
                  <Deactivated jobs={jobs} />
                )
              ) : (
                "No posted jobs"
              )}
            </div>
          </div>
          <div className="col-3">
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
  );
};
export default Managejobs;
