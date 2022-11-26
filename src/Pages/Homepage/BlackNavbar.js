import React from "react";
import styles from "./homepage.module.css";
const BlackNavbar = () => {
  return (
    <div className={`${styles.topNavbar__container}`}>
      <div className={`${styles.topNavar__inContainer} container`}>
        <div className={`${styles.loginDropdown}`}>
          <button className={`${styles.dropBtn}`}>Log In</button>
          <div className={`${styles.dropdownContent}`}>
            <a href="#">Employer Login</a>
            <a href="#">Seeker Login</a>
          </div>
        </div>
        <div className={`${styles.registerDropdown}`}>
          <button className={`${styles.dropBtn}`}>Register</button>
          <div className={`${styles.dropdownContent}`}>
            <a href="#">Employer Register</a>
            <a href="#">Seeker Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackNavbar;
