import React from "react";
import styles from "./homepage.module.css";
import { Link } from "react-router-dom";
const BlackNavbar = () => {
  return (
    <div className={`${styles.topNavbar__container}`}>
      <div className={`${styles.topNavar__inContainer} container`}>
        <div className={`${styles.loginDropdown}`}>
          <button className={`${styles.dropBtn}`}>Log In</button>
          <div className={`${styles.dropdownContent}`}>
            <Link to="/employerlogin">Employer login</Link>
            <Link to="/seekerlogin">Employer login</Link>
          </div>
        </div>
        <div className={`${styles.registerDropdown}`}>
          <button className={`${styles.dropBtn}`}>Register</button>
          <div className={`${styles.dropdownContent}`}>
            <Link to="/register">Employer Register</Link>
            <Link to="/seeker">Seeker Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackNavbar;
