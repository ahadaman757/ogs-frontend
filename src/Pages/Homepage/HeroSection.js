import React from "react";
import { useState } from "react";
import styles from "./homepage.module.css";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const [options, setOptions] = useState(1);
  const navigate = useNavigate();
  return (
    <div className={`${styles.heroSection__container}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <h2 className={`${styles.heroSection__heading}`}>
              Find Your Next Dream Job
            </h2>
            <p>Easiest way to find a perfect job</p>
          </div>
          <div className="col-md-6 col-12">
            <div className={`${styles.heroRightSide__container}`}>
              <div className={`${styles.heroButtons}`}>
                <button
                  className={`${
                    options == 1
                      ? styles.optionSelected
                      : styles.optionNotSelected
                  }`}
                  onClick={() => {
                    navigate("/seekerlogin");
                  }}
                >
                  Search
                </button>
              </div>
              <div className={`${styles.heroRightSide__contentContainer}`}>
                <div>
                  <input
                    placeholder="Job Title"
                    className={`${styles.searchJobInput}`}
                  />
                  <button className={`${styles.heroCTABtn}`}> Search </button>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className=" col-md-4">
                    <button
                      onClick={() => {
                        navigate("/aboutus");
                      }}
                      className={`${styles.heroCTABtn}`}
                    >
                      {" "}
                      About Us{" "}
                    </button>
                  </div>
                  <div className="col-md-4">
                    <button
                      onClick={() => {
                        navigate("/ogscourses");
                      }}
                      className={`${styles.heroCTABtn}`}
                    >
                      {" "}
                      OGS Courses{" "}
                    </button>
                  </div>
                  <div className=" col-md-4">
                    <button
                      onClick={() => {
                        navigate("/employerlogin");
                      }}
                      className={`${styles.heroCTABtn}`}
                    >
                      {" "}
                      Post A Job{" "}
                    </button>
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
export default HeroSection;
