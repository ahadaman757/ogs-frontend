import React from "react";
import { useState } from "react";
import styles from "./homepage.module.css";

export const HeroSection = () => {
  const [options, setOptions] = useState(1);
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
                >
                  Search
                </button>
                <button
                  className={`${
                    options == 2
                      ? styles.optionSelected
                      : styles.optionNotSelected
                  }`}
                >
                  Search
                </button>
                <button
                  className={`${
                    options == 3
                      ? styles.optionSelected
                      : styles.optionNotSelected
                  }`}
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
                  <div className="col-4 col-md-3">
                    <button className={`${styles.heroCTABtn}`}> Search </button>
                  </div>
                  <div className="col-4 col-md-3">
                    <button className={`${styles.heroCTABtn}`}> Search </button>
                  </div>
                  <div className="col-4 col-md-3">
                    <button className={`${styles.heroCTABtn}`}> Search </button>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-4 col-md-3">
                    <button className={`${styles.heroCTABtn}`}> Search </button>
                  </div>
                  <div className="col-4 col-md-3">
                    <button className={`${styles.heroCTABtn}`}> Search </button>
                  </div>
                  <div className="col-4 col-md-3">
                    <button className={`${styles.heroCTABtn}`}> Search </button>
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
