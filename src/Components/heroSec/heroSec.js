import React, { useState } from "react";
import "./hero.css";
import axios from "axios";
import Hri from "../../Assets/Images/Vector 177.png";
import Styles from "./hero.module.css";
const HeroSec = (props) => {
  const [title, setTitle] = useState('');

  function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
  return (
    <div className="">
      <div className=" heroSec py-5 d-flex align-items-center justify-content-center">
        <div className="container ">
          <div className="text-center ">
            <h1 className="ogsfonts48 my-2">Find Your Next Dream Job</h1>
            <p className="ogsfonts16 my-2">Easiest way to find a perfect job</p>
          </div>
          <div className="row m-0 justify-content-center">
            <div className="col-md-4 my-2">
              <div className="input-group d-flex row m-0  ">
                <div className={`d-flex  my-2 ${Styles.inputcon}`}>
                  <div
                    className={`d-flex align-items-center ps-3 ${Styles.inputixon}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </div>
                  <input
                    placeholder="Enter Job Title "
                    className={`p-2 ${Styles.inputixont}`}
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="input-group d-flex row  m-0  ">
                <div className={`d-flex  my-2 ${Styles.inputcon}`}>
                  <div
                    className={`d-flex align-items-center ps-3 ${Styles.inputixon}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-geo-alt-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                  </div>
                  <input
                    placeholder="All Countries"
                    className={`p-2 ${Styles.inputixont}`}
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2 my-2 d-flex align-items-center">
              <div className="input-group align-items-center  ">
                <button className={` me-2 ${Styles.btnsearchtxt}`}
                  onClick={() => {
                    let titleToSearch = escapeHtml(title);
                    if(title != "") {
                      axios.post(`https://3.14.27.53:3003/jobs/getJobByTitle`, {
                        title: titleToSearch
                      }).then(res => console.log(res))
                    } else {
                      alert("Please enter a title");
                    }
                  }}
                >
                  Search by Title
                </button>
              </div>
            </div>
            <div className="col-md-2 my-2 d-flex align-items-center">
              <div className="input-group align-items-center  ">
                <button className={` me-2 ${Styles.btnsearchtxt}`}>
                  Search by CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSec;
