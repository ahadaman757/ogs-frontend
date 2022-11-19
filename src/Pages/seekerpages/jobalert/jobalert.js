import Styles from "./jobalert.module.css";
import Seekersidebar from "../../../Components/seekersidebar/seekersidebar";
import { useState } from "react";
import Jobcard from "../../../Components/jobcard/Jobcard";
import calender from "../../../Assets/Images/New folder (3)/calendar 01.svg";
import trash from "../../../Assets/Images/New folder (3)/trash 3.svg";
import edit from "../../../Assets/Images/New folder (3)/edit.svg";
import check from "../../../Assets/Images/New folder (3)/check mark-rectangle.svg";
import Inputfield from "../../../Components/inputfield/inputfield";
import InputSelect from "../../../Components/inputselect/inputfselect";
const Jobalert = () => {
  const [data, Setdata] = useState("");
  const display = (d) => {
    console.log("value");
    console.log(d);
    Setdata(d);
  };
  return (
    <div>
      <Seekersidebar side={display} />
      <div
        style={{ marginLeft: data ? "55px" : "200px" }}
        className={`pt-5 ${Styles.Myjobsmain}`}
      >
        <div className="container">
          <div className="mt-5">
            <h1 className="ogsfonts24 ms-3">MY JOB ALERTS</h1>
            <div
              className={`p-3 my-3 d-flex justify-content-between  ${Styles.Myjobshead}`}
            >
              <h1 className="ogsfonts18">Manage Your Job Alerts</h1>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className={`btn btn-primary ogsfonts16 ${Styles.modalbtn}`}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Launch demo modal
                </button>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-body p-4">
                        <div className="d-flex justify-content-between">
                          <h1 className="ogsfonts18">Create Alert</h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <p className="ogsfonts14">
                          Please fill the form to create job alert for
                        </p>
                        <div className="my-3">
                          <Inputfield title={"Keywords *"} />
                          <h1 className="ogsfonts14 mt-3">
                            Additional Conditions
                          </h1>
                          <div className="d-flex flex-wrap">
                            <div class="form-check me-3  my-3">
                              <input
                                class={`form-check-input ${Styles.radioer}`}
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                class="form-check-label ogsfonts12"
                                for="flexCheckDefault"
                              >
                                Job Title
                              </label>
                            </div>

                            <div class="form-check me-3   my-3">
                              <input
                                class={`form-check-input ${Styles.radioer}`}
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                class="form-check-label ogsfonts12"
                                for="flexCheckDefault"
                              >
                                Skills
                              </label>
                            </div>
                            <div class="form-check   my-3">
                              <input
                                class={`form-check-input ${Styles.radioer}`}
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                class="form-check-label ogsfonts12"
                                for="flexCheckDefault"
                              >
                                Company
                              </label>
                            </div>
                          </div>
                          <InputSelect title={"Career Level*"} />
                          <InputSelect title={"Your Experience*"} />
                          <InputSelect title={"Your Expected Salary (PKR)*"} />
                          <InputSelect title={"City*"} />
                        </div>

                        <div className="d-flex justify-content-end">
                          {" "}
                          <button
                            type="button"
                            class={`me-3 ${Styles.modalbtnc} `}
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            class={`py-2 px-3 ${Styles.modalbtns} `}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`p-3 my-3 ${Styles.jacon}`}>
              <div className="d-flex justify-content-between">
                <div>
                  <h1 className="ogsfonts18">Its Job</h1>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="m-0 me-3 ogsfonts16">Dec 30, 2021</p>
                  <img src={calender} />
                </div>
              </div>
              <div className="d-flex justify-content-between my-3">
                <div>
                  <p className="ogsfonts16">
                    Search Criteria: Experienced Professional, Rawalpindi Search
                  </p>
                  <p className="ogsfonts16">Keyword in: Job Title</p>
                </div>
                <div>
                  <button className={`me-3 ${Styles.ctebtn}`}>
                    <span>
                      <img src={check} />
                    </span>
                  </button>
                  <button className={`me-3 ${Styles.ctebtn}`}>
                    <span>
                      <img src={trash} />
                    </span>
                  </button>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                    className={`${Styles.ctebtn}`}
                  >
                    <span>
                      <img src={edit} />
                    </span>
                  </button>
                  <div
                    class="modal fade"
                    id="exampleModal1"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel1"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-content">
                          <div class="modal-body p-4">
                            <div className="d-flex justify-content-between">
                              <h1 className="ogsfonts18">Create Alert</h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <p className="ogsfonts14">
                              Please fill the form to create job alert for
                            </p>
                            <div className="my-3">
                              <Inputfield title={"Keywords *"} />
                              <h1 className="ogsfonts14 mt-3">
                                Additional Conditions
                              </h1>
                              <div className="d-flex flex-wrap">
                                <div class="form-check me-3  my-3">
                                  <input
                                    class={`form-check-input ${Styles.radioer}`}
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    class="form-check-label ogsfonts12"
                                    for="flexCheckDefault"
                                  >
                                    Job Title
                                  </label>
                                </div>

                                <div class="form-check me-3   my-3">
                                  <input
                                    class={`form-check-input ${Styles.radioer}`}
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    class="form-check-label ogsfonts12"
                                    for="flexCheckDefault"
                                  >
                                    Skills
                                  </label>
                                </div>
                                <div class="form-check   my-3">
                                  <input
                                    class={`form-check-input ${Styles.radioer}`}
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    class="form-check-label ogsfonts12"
                                    for="flexCheckDefault"
                                  >
                                    Company
                                  </label>
                                </div>
                              </div>
                              <InputSelect title={"Career Level*"} />
                              <InputSelect title={"Your Experience*"} />
                              <InputSelect
                                title={"Your Expected Salary (PKR)*"}
                              />
                              <InputSelect title={"City*"} />
                            </div>

                            <div className="d-flex justify-content-end">
                              {" "}
                              <button
                                type="button"
                                class={`me-3 ${Styles.modalbtnc} `}
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="button"
                                class={`py-2 px-3 ${Styles.modalbtns} `}
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>{/* <Jobcard /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jobalert;
