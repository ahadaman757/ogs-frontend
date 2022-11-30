import React from "react";
import Styles from "./Manageyoucvs.module.css";

import calender from "../../../Assets/Images/New folder (3)/calendar 01.svg";
import trash from "../../../Assets/Images/New folder (3)/trash 3.svg";
import { useNavigate } from 'react-router-dom'
import check from "../../../Assets/Images/New folder (3)/check mark-rectangle.svg";
import Inputfield from "../../../Components/inputfield/inputfield";
import InputSelect from "../../../Components/inputselect/inputfselect";
<<<<<<< Updated upstream
import { BasicDocument } from '../../../Components/pdfDownload.js'
import {
    PDFDownloadLink,
    Image
} from "@react-pdf/renderer";

function SeekercvCard({ cv_data }) {
    const navigate = useNavigate()
    function navigateEditCv() {
        navigate("/editcv", { state: { cv_data: cv_data } })
    }
    return (
        <div className={`p-3 my-3 ${Styles.jacon}`}>
            <div className="d-flex flex-wrap justify-content-between">
                <div>
                    <h1 className="ogsfonts18">Overseas Promoters</h1>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="m-0 me-3 ogsfonts16">Dec 30, 2021</p>
                    <img src={calender} />
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-between my-3">
                <div className="d-flex ">
                    {/* <img className="me-2" src={invoice} /> */}
                    {/* <p className="ogsfonts16 m-1">Make Defualt</p> */}
                    <p className='bold'>CV no: {cv_data.cv_id}</p>
                </div>
                <div>
                    <button onClick={navigateEditCv} className={`me-3 ${Styles.ctebtn}`}>
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
                            <PDFDownloadLink document={<BasicDocument cv_data={cv_data} />} fileName="somename.pdf">
                                {({ loading, error }) => {
                                    console.log(error)
                                    return (loading ? 'Loading document...' : 'Download now!')
                                }}
                            </PDFDownloadLink>
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
=======
import invoice from "../../../Assets/Images/New folder (3)/invoice.svg";
import { BasicDocument } from "../../../Components/pdfDownload.js";
import { PDFDownloadLink, Image } from "@react-pdf/renderer";
function SeekercvCard({ cv_data }) {
  return (
    <div className={`p-3 my-3 ${Styles.jacon}`}>
      <div className="d-flex flex-wrap justify-content-between">
        <div>
          <h1 className="ogsfonts18">Overseas Promoters</h1>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p className="m-0 me-3 ogsfonts16">Dec 30, 2021</p>
          <img src={calender} />
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-between my-3">
        <div className="d-flex ">
          {/* <img className="me-2" src={invoice} /> */}
          {/* <p className="ogsfonts16 m-1">Make Defualt</p> */}
          <p className="bold">CV no: {cv_data.cv_id}</p>
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
              <PDFDownloadLink
                document={<BasicDocument cv_data={cv_data} />}
                fileName="somename.pdf"
              >
                {({ loading, error }) => {
                  console.log(error);
                  return loading ? "Loading document..." : "Download now!";
                }}
              </PDFDownloadLink>
            </span>
          </button>
          <div
            className="modal fade"
            id="exampleModal1"
            tabindex="-1"
            aria-labelledby="exampleModalLabel1"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-content">
                  <div className="modal-body p-4">
                    <div className="d-flex justify-content-between">
                      <h1 className="ogsfonts18">Create Alert</h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <p className="ogsfonts14">
                      Please fill the form to create job alert for
                    </p>
                    <div className="my-3">
                      <Inputfield title={"Keywords *"} />
                      <h1 className="ogsfonts14 mt-3">Additional Conditions</h1>
                      <div className="d-flex flex-wrap">
                        <div className="form-check me-3  my-3">
                          <input
                            className={`form-check-input ${Styles.radioer}`}
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label ogsfonts12"
                            for="flexCheckDefault"
                          >
                            Job Title
                          </label>
                        </div>
>>>>>>> Stashed changes

                        <div className="form-check me-3   my-3">
                          <input
                            className={`form-check-input ${Styles.radioer}`}
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label ogsfonts12"
                            for="flexCheckDefault"
                          >
                            Skills
                          </label>
                        </div>
                        <div className="form-check   my-3">
                          <input
                            className={`form-check-input ${Styles.radioer}`}
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label ogsfonts12"
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
                        className={`me-3 ${Styles.modalbtnc} `}
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className={`py-2 px-3 ${Styles.modalbtns} `}
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
  );
}

export default SeekercvCard;
