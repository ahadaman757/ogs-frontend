import React from "react";
import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import styles from "./Dashboard.module.css";
const Dashboard = () => {
  return (
    <>
      <DashboardNavbar />
      <div className={`${styles.content}`}>Hello</div>
    </>
  );
};
export default Dashboard;
