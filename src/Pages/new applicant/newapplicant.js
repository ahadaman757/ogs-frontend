import Styles from "./newapplicant.module.css";
import { useState, useEffect } from "react";
import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import filltericon from "../../Assets/Images/filter.svg";
import usericon from "../../Assets/Images/New folder (3)/user.svg";
import smileicon from "../../Assets/Images/New folder (3)/smile-rectangle.svg";
import useraddicon from "../../Assets/Images/New folder (3)/user-add.svg";
import invoiceicon from "../../Assets/Images/New folder (3)/invoice.svg";
import userremoveicon from "../../Assets/Images/New folder (3)/user-remove 01.svg";
import erroricon from "../../Assets/Images/New folder (3)/warning-error.svg";
import usericonb from "../../Assets/Images/New folder (4)/user.svg";
import smileiconb from "../../Assets/Images/New folder (4)/smile-rectangle.svg";
import useraddiconb from "../../Assets/Images/New folder (4)/user-add.svg";
import invoiceiconb from "../../Assets/Images/New folder (4)/invoice.svg";
import userremoveiconb from "../../Assets/Images/New folder (4)/user-remove 2.svg";
import erroriconb from "../../Assets/Images/New folder (4)/warning-error.svg";
import Searchicon from "../../Assets/Images/search.png";
import selecticon from "../../Assets/Images/check mark-rectangle.svg";
import diskicon from "../../Assets/Images/disk.svg";
import piechart from "../../Assets/Images/chart-pie 01.svg";
import Cv from "../../Components/cv view/cv";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Newapplicant = () => {
  const { state } = useLocation()
  console.log(state)
  // get all applicants
  const [appicantsList, setappicantsList] = useState()
  const getAllApplicants = () => {
    axios.post("http://localhost:3002/jobs/jobapplicants", { job_id: state.id }).then(res => {
      console.log(res.data)
      setappicantsList(res.data)
    }).catch(error => {
      console.log(error)
    })
  }
  useEffect(() => {
    getAllApplicants()


  }, [])

  const [data, Setdata] = useState("");
  const [icon1, seticon] = useState(usericon);
  const [icon2, seticon2] = useState(smileicon);
  const [icon3, seticon3] = useState(useraddicon);
  const [icon4, seticon4] = useState(invoiceicon);
  const [icon5, seticon5] = useState(userremoveicon);
  const [icon6, seticon6] = useState(erroricon);
  const display = (d) => {
    console.log("value");
    console.log(d);
    Setdata(d);
  };
  return (
    <div>
      <DashboardNavbar side={display} />
      <div
        style={{ marginLeft: data ? "55px" : "200px" }}
        className={`pt-5 ${Styles.newapplicantmain}`}
      >
        <div className="container">
          <div className="mt-5 row">
            <div className={`col-md-9`}>
              <div className={` p-4 my-3 ${Styles.head_container}`}>
                <div className="d-flex">
                  {" "}
                  <h1 className="ogsfonts24 me-2">
                    1269898 / Receptionist - Rawalpindi{" "}
                  </h1>{" "}
                  <button className={`${Styles.fillterbtn}`}>
                    {" "}
                    <span>
                      <img src={filltericon} />
                    </span>
                  </button>
                </div>
                <div className="d-flex">
                  <h1 className="ogsfonts18  me-3">Featured Jobs</h1>
                  <div className="d-flex">
                    <p className={`me-2 pe-2 ${Styles.viewsix}`}>96 Views</p>
                    <p>36 Applied</p>
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-md-end">
                  <button className={`me-3 p-2 ${Styles.btnUpload}`}>
                    {" "}
                    Upload Applican’s CV
                  </button>
                  <button className={`p-2 ${Styles.btnUpload}`}>
                    {" "}
                    Deactivate Job
                  </button>
                </div>
              </div>
              <div className={`p-4 ${Styles.iocon}`}>
                <div className="d-flex flex-wrap justify-content-between">
                  <div
                    className={`d-flex mt-2  flex-column align-items-center ${Styles.neuserggcon}`}
                    onMouseEnter={() => {
                      seticon(usericonb);
                    }}
                    onMouseLeave={() => {
                      seticon(usericon);
                    }}
                  >
                    <span>
                      <img className={`${Styles.neusergg}`} src={icon1} />
                    </span>
                    <p className="py-1 ogsfonts16 m-0">Applicants</p>
                    <p className="py-1 ogsfonts16 m-0">31</p>
                  </div>
                  <div
                    className={`d-flex mt-2   p-1 flex-column align-items-center ${Styles.neuserggcon1}`}
                    onMouseEnter={() => {
                      seticon2(smileiconb);
                    }}
                    onMouseLeave={() => {
                      seticon2(smileicon);
                    }}
                  >
                    <img className={`${Styles.neusergg}`} src={icon2} />
                    <p className="py-1 ogsfonts16 m-0">InstaMatch</p>
                    <p className="py-1 ogsfonts16 m-0">75</p>
                  </div>
                  <div
                    className={`d-flex mt-2  p-1  flex-column align-items-center ${Styles.neuserggcon2}`}
                    onMouseEnter={() => {
                      seticon3(useraddiconb);
                    }}
                    onMouseLeave={() => {
                      seticon3(useraddicon);
                    }}
                  >
                    <img className={`${Styles.neusergg}`} src={icon3} />
                    <p className="py-1 ogsfonts16 m-0">Shortlisted</p>
                    <p className="py-1 ogsfonts16 m-0">0</p>
                  </div>
                  <div
                    className={`d-flex p-1 mt-2   flex-column align-items-center ${Styles.neuserggcon3}`}
                    onMouseEnter={() => {
                      seticon4(invoiceiconb);
                    }}
                    onMouseLeave={() => {
                      seticon4(invoiceicon);
                    }}
                  >
                    <img className={`${Styles.neusergg}`} src={icon4} />
                    <p className="py-1 ogsfonts16 m-0">Interview</p>
                    <p className="py-1 ogsfonts16 m-0">0</p>
                  </div>
                  <div
                    className={`d-flex p-1 mt-2   flex-column align-items-center ${Styles.neuserggcon4}`}
                    onMouseEnter={() => {
                      seticon5(userremoveiconb);
                    }}
                    onMouseLeave={() => {
                      seticon5(userremoveicon);
                    }}
                  >
                    <img className={`${Styles.neusergg}`} src={icon5} />
                    <p className="py-1 ogsfonts16 m-0">Spam</p>
                    <p className="py-1 ogsfonts16 m-0">31</p>
                  </div>
                  <div
                    className={`d-flex p-1 mt-2   flex-column align-items-center ${Styles.neuserggcon5}`}
                    onMouseEnter={() => {
                      seticon6(erroriconb);
                    }}
                    onMouseLeave={() => {
                      seticon6(erroricon);
                    }}
                  >
                    <img className={`${Styles.neusergg}`} src={icon6} />
                    <p className="py-1 p-1 ogsfonts16 m-0">Rejected</p>
                    <p className="py-1 ogsfonts16 m-0">0</p>
                  </div>
                </div>
                <div className={`mt-4 row`}>
                  <div className="col-md-8 mb-2">
                    <input className={`${Styles.inputfiled}`} />
                  </div>
                  <div className="col-md-4 d-flex">
                    {" "}
                    <button className={`me-3 ${Styles.btnnpb}`}>
                      <span>
                        <img src={Searchicon} />
                      </span>
                    </button>
                    <button className={`${Styles.btnnp}`}>
                      Advance Search
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`p-4 my-4 d-flex flex-wrap justify-content-between align-items-center ${Styles.fillterbar}`}
              >
                <div className="d-flex flex-wrap">
                  <button className={`me-2 ${Styles.btnicons}`}>
                    <span>
                      <img src={selecticon} />
                    </span>
                  </button>
                  <p className="m-0 p-2 me-2">Select all</p>
                  <select
                    id="Select"
                    class={`form-select me-2 ${Styles.selectfrom}`}
                  >
                    <option>Sort By: Revelance</option>
                    <option>Disabled select</option>
                    <option>Disabled select</option>
                  </select>
                </div>
                <div>
                  <button className={`me-2 ${Styles.btnicons}`}>
                    <span>
                      <img src={diskicon} />
                    </span>
                  </button>
                  <button className={`me-2 ${Styles.btnicons}`}>
                    <span>
                      <img src={piechart} />
                    </span>
                  </button>
                </div>
              </div>
              {
                appicantsList ? appicantsList.map(applicant => {
                  return <Cv applicant={applicant} />
                }) : 'loading'
              }


            </div>
            <div className={`col-md-3 `}>
              <div className={`p-4 my-3 ${Styles.siderightbar}`}>
                {" "}
                <h1 className="ogsfonts18">Applicant Filters</h1>
                {/* /////////////////////////////////////toe////////////////// */}
                <div class="accordion" id="accordionPanelsStayOpenExample">
                  <div class="accordion-item accordion234">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        Skills
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div class="accordion-body accordion234">
                        <select
                          id="Select"
                          class={`form-select me-2 my-2 ${Styles.selectfrom3}`}
                        >
                          <option>select</option>
                          <option>Disabled select</option>
                          <option>Disabled select</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item accordion234">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        Applicants by date
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div class="accordion-body accordion234">
                        <div className="d-flex my-2">
                          <input
                            placeholder="as"
                            className={`p-1 me-1 ${Styles.inputfiledq}`}
                          />
                          <input
                            placeholder="as"
                            className={`p-1 me-1 ${Styles.inputfiledq}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item accordion234">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        Find Nearby
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div class="accordion-body accordion234">
                        <select
                          id="Select"
                          class={`form-select me-2 my-2 ${Styles.selectfrom3}`}
                        >
                          <option>select</option>
                          <option>Disabled select</option>
                          <option>Disabled select</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item accordion234">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingFour"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        Job Title
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingFour"
                    >
                      <div class={`accordion-body accordion234 `}>
                        <div class={`p-3 ${Styles.jobtradio}`}>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Front Desk
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Front Desk Manager
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              CSR
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Media
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Security
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item accordion234">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingFive"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFive"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFive"
                      >
                        Company
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFive"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingFive"
                    >
                      <div class={`accordion-body accordion234 `}>
                        <div class={`p-3 ${Styles.jobtradio}`}>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Front Desk
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Front Desk Manager
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              CSR
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Media
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Security
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item accordion234">
                    <h2 class="accordion-header" id="panelsStayOpen-headingSix">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseSix"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseSix"
                      >
                        Current Salary
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseSix"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingSix"
                    >
                      <div class={`accordion-body accordion234 `}>
                        <div class={`p-3 ${Styles.jobtradio}`}>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Front Desk
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Front Desk Manager
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              CSR
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Media
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Security
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item accordion234">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingSeven"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseSeven"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseSeven"
                      >
                        Expected Salary
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseSeven"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingSeven"
                    >
                      <div class={`accordion-body accordion234 `}>
                        <div class={`p-3 ${Styles.jobtradio}`}>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Front Desk
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Front Desk Manager
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              CSR
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Media
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Security
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item accordion234">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingEight"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseEight"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseEight"
                      >
                        Country
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseEight"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingEight"
                    >
                      <div class={`accordion-body accordion234 `}>
                        <select
                          id="Select"
                          class={`form-select me-2 my-2 ${Styles.selectfrom3}`}
                        >
                          <option>select</option>
                          <option>Disabled select</option>
                          <option>Disabled select</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item accordion234">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingNine"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseNine"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseNine"
                      >
                        City
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseNine"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingNine"
                    >
                      <div class={`accordion-body accordion234 `}>
                        <select
                          id="Select"
                          class={`form-select me-2 my-2 ${Styles.selectfrom3}`}
                        >
                          <option>select</option>
                          <option>Disabled select</option>
                          <option>Disabled select</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item accordion234">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTen">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTen"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTen"
                      >
                        Degree Level
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTen"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTen"
                    >
                      <div class={`accordion-body accordion234 `}>
                        <div class={`p-2 ${Styles.jobtradio}`}>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Front Desk
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item accordion234">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingEleven"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseEleven"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseEleven"
                      >
                        Experience
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseEleven"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingEleven"
                    >
                      <div class={`accordion-body accordion234 `}>
                        <div class={`p-2 ${Styles.jobtradio}`}>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Front Desk
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item accordion234">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingTwelve"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwelve"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwelve"
                      >
                        Age
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwelve"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwelve"
                    >
                      <div class={`accordion-body accordion234 `}>
                        <div class={`p-2 ${Styles.jobtradio}`}>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Front Desk
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item accordion234">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingThriteen"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThriteen"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThriteen"
                      >
                        University
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThriteen"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThriteen"
                    >
                      <div class={`accordion-body accordion234 `}>
                        <div class={`p-2 ${Styles.jobtradio}`}>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Front Desk
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item accordion234">
                    <h2
                      class="accordion-header"
                      id="panelsStayOpen-headingfourteen"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapsefourteen"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapsefourteen"
                      >
                        Marital Status
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapsefourteen"
                      class="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingfourteen"
                    >
                      <div class={`accordion-body accordion234 `}>
                        <div class={`p-2 ${Styles.jobtradio}`}>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Front Desk
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class={`form-check-input ${Styles.radioer}`}
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label ogsfonts14"
                              for="flexCheckDefault"
                            >
                              Manager
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newapplicant;
