import { useState, useEffect } from "react";
import styles from "./DashboardNavbar.module.css";
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
import Posticon from "../../Assets/Images/postajob.svg";

import { useNavigate } from "react-router-dom";

const DashboardNavbar = (props) => {
  const [displayside, setdisplay] = useState(true);
  const [icon1, seticon] = useState(dashbordicon);
  const [icon2, seticon2] = useState(dashbordiconb2);
  const [icon3, seticon3] = useState(dashbordiconb3);
  const [icon4, seticon4] = useState(dashbordiconb4);
  const [icon5, seticon5] = useState(dashbordiconb5);
  const [icon6, seticon6] = useState(dashbordiconw6);
  const [mobileActive, setMobileActive] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 450) {
        setMobileActive(true);
      } else {
        setMobileActive(false);
      }
    });
  }, []);

  console.log(displayside);
  const handeler = (props) => {
    setdisplay(!displayside);
  };
  props.side(displayside);
  return (
    <div className={`p-2 ${styles.DashboardNavbarmain}`}>
      <div
        className={` d-flex justify-content-between align-items-center ${styles.navbar}`}
        style={{
          width: displayside ? "100%" : "100%",
        }}
      >
        <div>
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
        <div className="mx-5 d-flex ogsfonts14 align-items-center ">
          <button
            onClick={() => {
              navigate("/postajob");
            }}
            className={`px-2 ${styles.navbarnotibtn}`}
          >
            <span>
              <img src={Posticon} />
            </span>
            Post a Job
          </button>
          <button className={`px-1 ${styles.navbarprofbtn}`}>
            <span>
              <img style={{ width: "43px" }} src={userlogo} />
            </span>
          </button>
          <div className="dropdown">
            <button
              className={`px-1 m-0 dropdown-toggle ${styles.navbartogglebtn}`}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>
                <img />
              </span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  onClick={() => {
                    localStorage.setItem("accessToken", "");
                    navigate("/");
                  }}
                  className="dropdown-item"
                  href="#"
                >
                  logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        // style={{ width: displayside ? "5%" : "200px" }}
        className={`d-flex align-item-center ${styles.sidebar} ${
          displayside ? " sidebarwidthminn" : " sidebarwidthmax"
        }`}
      >
        <h2>
          <b>{displayside ? "" : "OGS"}</b>
          {displayside ? "" : "Power"}
        </h2>
        <div
          className={`d-flex flex-column 
          ${displayside ? " align-items-center" : " "}
             ${displayside ? " px-0" : "px-2 "}`}
        >
          <a
            className={`btn btn-primary  p-3 ogsfonts16   ${styles.sidedasbtn}`}
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
              navigate("/dashboard");
            }}
          >
            <span>
              <img className={`me-2 ${styles.dashbordimg}`} src={icon1} />
            </span>
            {displayside ? "" : "Dashboard"}
          </a>
          <a
            className={`btn btn-primary ogsfonts16   p-3  ${styles.sidedasbtn}`}
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
              navigate("/managejobs");
            }}
          >
            <span>
              <img className={` me-2 ${styles.dashbordimg}`} src={icon2} />
            </span>
            {displayside ? "" : "Manage Jobs"}
          </a>

          <a
            className={`btn btn-primary ogsfonts16   p-3  ${styles.sidedasbtn}`}
            data-bs-toggle="collapse"
            href="#collapseExample4"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample4"
            onMouseEnter={() => {
              seticon5(dashbordiconw5);
            }}
            onMouseLeave={() => {
              seticon5(dashbordiconb5);
            }}
            onClick={() => {
              navigate("/setting");
            }}
          >
            <span>
              <img className={`me-2 ${styles.dashbordimg}`} src={icon5} />
            </span>
            {displayside ? "" : " Setting"}
          </a>

          <a
            className={`btn btn-primary ogsfonts16  p-3   ${styles.sidedasbtn}`}
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
              navigate("/cvsearch");
            }}
          >
            <span>
              <img className={`me-2 ${styles.dashbordimg}`} src={icon6} />
            </span>

            {displayside ? "" : "CV Search"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
