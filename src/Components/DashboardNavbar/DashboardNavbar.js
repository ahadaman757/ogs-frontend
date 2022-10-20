import React from "react";
import styles from "./DashboardNavbar.module.css";
const DashboardNavbar = () => {
  return (
    <>
      <div className={`${styles.sidebar}`}>
        <h2>
          <b>OGS</b>Power
        </h2>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <div className={`${styles.navbar}`}>
        <a className={`${styles.navbar}`} href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </>
  );
};

export default DashboardNavbar;
