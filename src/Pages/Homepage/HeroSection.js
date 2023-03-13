import React from "react";
import { useState, useEffect } from "react";
import styles from "./homepage.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const HeroSection = (props) => {
  const [options, setOptions] = useState(1);
  const [title, setTitle] = useState("");
  const [countries, setCountries] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [countryLoading, setCountryLoading] = useState(true);
  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  useEffect(() => {
    axios.get(`https://3.14.27.53:3003/general/getCountries`).then((res) => {
      setCountries(res.data.countries[0]);
      setCountryLoading(false);

      console.log(res.data.countries[0]);
    });
    axios.get(`https://3.14.27.53:3003/general/getIndustries`).then((res) => {
      setIndustries(res.data.industries[0]);
      setCountryLoading(false);

      console.log(res.data.industries[0]);
    });
  }, []);
  const navigate = useNavigate();
  return (
    <div className={`${styles.heroSection__container}`}>
      <div className={`p-3 ${styles.heroSection__container1}`}>
        <div className="d-flex justify-content-center">
          <div className={` dropdown ${styles.herobtn12}`}>
            <button
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              className={`ogsfonts18 ${styles.herobtn1}`}
            >
              Log In
            </button>
            <ul class="dropdown-menu">
              <li>
                <a
                  onClick={() => {
                    navigate("/employerlogin");
                  }}
                  class="dropdown-item"
                  href="#"
                >
                  Employer login
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/instituteLogin");
                  }}
                  class="dropdown-item"
                  href="#"
                >
                  Institute Login
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/agentLogin");
                  }}
                  class="dropdown-item"
                  href="#"
                >
                  Agent login
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/seekerlogin");
                  }}
                  class="dropdown-item"
                  href="#"
                >
                  Seeker login
                </a>
              </li>
            </ul>
          </div>
          <div className={` dropdown ${styles.herobtn12}`}>
            <button
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              className={`ogsfonts18 ${styles.herobtn2}`}
            >
              Register
            </button>
            <ul class="dropdown-menu">
              <li>
                <a
                  onClick={() => {
                    navigate("/register");
                  }}
                  class="dropdown-item"
                  href="#"
                >
                  Register as Employer
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/agentregister");
                  }}
                  class="dropdown-item"
                  href="#"
                >
                  Register as Agent
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/instituteregister");
                  }}
                  class="dropdown-item"
                  href="#"
                >
                  Register as Anstitute
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/cv");
                  }}
                  class="dropdown-item"
                  href="#"
                >
                  Register as Seeker
                </a>
              </li>
            </ul>
          </div>

          <button
            onClick={() => {
              navigate("/register");
            }}
            className={`ogsfonts18 ${styles.herobtn1}`}
          >
            Post a job
          </button>
        </div>
        <div className="text-center my-4">
          <h1 className="ogsfonts30">Find Your Next Dream Job</h1>
          <p className="ogsfonts16 m-0">Easiest way to find a perfect job</p>
        </div>
        <div>
          <div className="d-flex my-2">
            <div
              className={`d-flex align-items-center ps-3 ${styles.inputixon}`}
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
              placeholder="Enter Job Title"
              className={`p-2 ${styles.inputixont}`}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="d-flex">
            <div
              className={`d-flex align-items-center ps-3 ${styles.inputixon}`}
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
            <select
              className={`p-2 ${styles.inputixont}`}
              style={{ borderLeft: "none" }}
              onChange={(e) => props.countryHandler(e.target.value)}
            >
              {countries.map((c) => {
                return <option value={c.country_id}>{c.country_name}</option>;
              })}
            </select>
            <select
              className={`p-2 ${styles.inputixont}`}
              style={{ borderLeft: "none" }}
              onChange={(e) => props.countryHandler(e.target.value)}
            >
              {countries.map((c) => {
                return <option value={c.country_id}>{c.country_name}</option>;
              })}
            </select>
          </div>
          <div className="d-flex my-2">
            <button
              className={` me-3 ${styles.btnsearchtxt}`}
              onClick={() => {
                let titleToSearch = escapeHtml(title);
                if (title != "") {
                  props.userSearchTitleHandler(titleToSearch);
                  props.showCustomHandler(true);
                } else {
                  alert("Please enter a title");
                }
              }}
            >
              Search by Title
            </button>

            <button
              className={` ${styles.btnsearchtxt}`}
              onClick={() => {
                props.showCustomHandler(true);
              }}
            >
              Search By Country
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
