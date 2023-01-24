import { useState } from "react";
import styles from "./seekersidebar.module.css";
import dashbordicon from "./../../Assets/Images/menu-home.png";
import dashbordicon1 from "./../../Assets/Images/menu-home.svg";
import dashbordiconb2 from "./../../Assets/Images/briefcase.png";
import dashbordiconw2 from "./../../Assets/Images/briefcase 01.png";
import dashbordiconb3 from "./../../Assets/Images/archive.svg";
import dashbordiconw3 from "./../../Assets/Images/archive.png";
import dashbordiconb4 from "./../../Assets/Images/folder.png";
import dashbordiconw4 from "./../../Assets/Images/folderw.png";
import dashbordiconb5 from "./../../Assets/Images/filter.png";
import dashbordiconw5 from "./../../Assets/Images/filter 01.png";
import dashbordiconw6 from "./../../Assets/Images/open book.svg";
import dashbordiconb6 from "./../../Assets/Images/open bookw.png";
import toggle from "./../../Assets/Images/indent-decrease.png";
import Searchicon from "../../Assets/Images/search 03.svg";
import notifilogo from "../../Assets/Images/notification 01.svg";
import userlogo from "../../Assets/Images/user-circle.svg";
import mobilelogo from "../../Assets/Images/mobilelogo.jpg";
import desktologo from "../../Assets/Images/desktoplogo.jpg";
import logout from "../../Assets/Images/logout.svg";
import logoutw from "../../Assets/Images/logoutwhite.svg";

import { useNavigate } from "react-router-dom";

const Seekersidebar = (props) => {
  const [displayside, setdisplay] = useState(true);
  const [icon1, seticon] = useState(dashbordicon);
  const [icon2, seticon2] = useState(dashbordiconb2);
  const [icon3, seticon3] = useState(dashbordiconb3);
  const [icon4, seticon4] = useState(dashbordiconb4);
  const [icon5, seticon5] = useState(dashbordiconb5);
  const [icon6, seticon6] = useState(dashbordiconw6);
  const [icon7, seticon7] = useState(logout);

  const navigate = useNavigate();

  const handeler = (props) => {
    setdisplay(!displayside);
  };
  props.side(displayside);
  return (
    <div className={` ${styles.DashboardNavbarmain}`}>
      <div
        className={`d-flex align-item-center ${styles.sidebar} ${
          displayside ? " sidebarwidthmin" : " sidebarwidthmax"
        }`}
      >
        <div
          className={`d-flex flex-column 
            ${displayside ? " px-0" : "px-2 "}`}
        >
          <a
            className={`btn btn-primary   ogsfonts16   ${styles.sidedasbtn}`}
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            onMouseEnter={() => {
              seticon(dashbordicon1);
            }}
            onMouseLeave={() => {
              seticon(dashbordicon);
            }}
            onClick={() => {
              navigate("/jobssearch");
            }}
          >
            <span>
              <img className={`me-2 ${styles.dashbordimg}`} src={icon1} />
            </span>
            {displayside ? "" : "Jobs"}
          </a>
          <a
            className={`btn btn-primary ogsfonts16   py-3  ${styles.sidedasbtn}`}
            data-bs-toggle="collapse"
            href="#collapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample1"
            onMouseEnter={() => {
              seticon2(dashbordiconw2);
            }}
            onMouseLeave={() => {
              seticon2(dashbordiconb2);
            }}
            onClick={() => {
              navigate("/manageyourcvs");
            }}
          >
            <span>
              <img className={` me-2 ${styles.dashbordimg}`} src={icon2} />
            </span>
            {displayside ? "" : "Manage  CV"}
          </a>
          <a
            className={`btn btn-primary ogsfonts16   py-3  ${styles.sidedasbtn}`}
            data-bs-toggle="collapse"
            href="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample2"
            onMouseEnter={() => {
              seticon3(dashbordiconw3);
            }}
            onMouseLeave={() => {
              seticon3(dashbordiconb3);
            }}
            onClick={() => {
              navigate("/myjobs");
            }}
          >
            <span>
              <img className={`me-2 ${styles.dashbordimg}`} src={icon3} />
            </span>
            {displayside ? "" : "My Jobs"}
          </a>

          <a
            className={`btn btn-primary ogsfonts16  py-3   ${styles.sidedasbtn}`}
            data-bs-toggle="collapse"
            href="#collapseExample5"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample5"
            onMouseEnter={() => {
              seticon6(dashbordiconb6);
            }}
            onMouseLeave={() => {
              seticon6(dashbordiconw6);
            }}
            onClick={() => {
              navigate("/createcv");
            }}
          >
            <span>
              <img className={`me-2 ${styles.dashbordimg}`} src={icon6} />
            </span>

            {displayside ? "" : "Create Cv"}
          </a>
          <a
            className={`btn btn-primary ogsfonts16  p-3   ${styles.sidedasbtn}`}
            role="button"
            aria-expanded="false"
            onMouseEnter={() => {
              seticon7(logoutw);
            }}
            onMouseLeave={() => {
              seticon7(logout);
            }}
            onClick={() => {
              localStorage.setItem("accessToken", "");
              navigate("/");
            }}
          >
            <span>
              <img className={`me-2 ${styles.dashbordimg}`} src={icon7} />
            </span>

            {displayside ? "" : "Logout"}
          </a>
        </div>
      </div>
      <div
        className={`px-2 d-flex justify-content-between align-items-center ${styles.navbar}`}
        style={{
          marginLeft: displayside ? "0%" : "0%",
          width: displayside ? "100%" : "100%",
        }}
      >
        <div className="d-flex ">
          <img className={`me-2 p-2  ${styles.mobilelogo}`} src={mobilelogo} />
          <img className={`me-2 p-2 ${styles.desktologo}`} src={desktologo} />
          <button
            className={` ${styles.togglebtn}`}
            onClick={() => {
              setdisplay(!displayside);
              handeler();
            }}
          >
            <span>
              <img src={toggle} />
            </span>
          </button>
        </div>
        <div className=" d-flex align-items-center ">
          <button className={`px-2 ${styles.navbarprofbtn}`}>
            <span>
              <img style={{ width: "43px" }} src={userlogo} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seekersidebar;
