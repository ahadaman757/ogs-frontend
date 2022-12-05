import { useState, useEffect } from "react";
import styles from "./adminsidebar.module.css";
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
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Adminsidebar = (props) => {
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
  const handeler = (props) => {
    setdisplay(!displayside);
  };
  props.side(displayside);
  // props.side(displayside);
  return (
    <div className={`p-2 ${styles.DashboardNavbarmain}`}>
      <div
        // style={{ width: displayside ? "5%" : "200px" }}
        className={`d-flex align-item-center ${styles.sidebar} ${
          displayside ? " sidebarwidthminadmin" : " sidebarwidthmax"
        }`}
      >
        <button
          className={` ${styles.togglebtn}`}
          onClick={() => {
            setdisplay(!displayside);
            handeler();
          }}
          style={{ display: displayside ? "none" : " block" }}
        >
          <span>
            <img src={toggle} />
          </span>
        </button>
        <h2>
          <b>{displayside ? "" : "OGS"}</b>
          {displayside ? "" : "Power"}
        </h2>
        <div
          className={`d-flex flex-column align-items-start ${
            displayside ? " align-items-center" : " align-items-start"
          } ${displayside ? " px-0" : "px-2 "}`}
        >
          <a
            className={`btn btn-primary ogsfonts16   py-3  ${styles.sidedasbtn}`}
            data-bs-toggle="collapse"
            href="#collapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample3"
            onMouseEnter={() => {
              seticon4(dashbordiconw4);
            }}
            onMouseLeave={() => {
              seticon4(dashbordiconb4);
            }}
          >
            Content Management Section
          </a>
          <div class="collapse" id="collapseExample3">
            <div className={`card card-body ${styles.dasgbordopssas}`}>
              <ul className={`${styles.dasgbordops}`}>
                <li className="d-flex my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/ogsinstitute" className="tere ogsfonts14">
                    OGS Institute
                  </Link>
                </li>
                <li className="d-flex  my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/privacypolicy" className="tere ogsfonts14">
                    Privacy Policy
                  </Link>
                </li>
                <li className="d-flex  my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/employment" className="tere ogsfonts14">
                    Employment
                  </Link>
                </li>
                <li className="d-flex  my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/searchjobs" className="tere ogsfonts14">
                    Search Jobs
                  </Link>
                </li>
                <li className="d-flex  my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/contactussec" className="tere ogsfonts14">
                    Contact Us
                  </Link>
                </li>
                <li className="d-flex  my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/internship" className="tere ogsfonts14">
                    Internship
                  </Link>
                </li>
                <li className="d-flex  my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/aboutussec" className="tere ogsfonts14">
                    About Us
                  </Link>
                </li>
                <li className="d-flex  my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/faqs" className="tere ogsfonts14">
                    Faq's
                  </Link>
                </li>
              </ul>
            </div>
          </div>{" "}
          <a
            className={`btn btn-primary ogsfonts16   py-3  ${styles.sidedasbtn}`}
            data-bs-toggle="collapse"
            href="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample2"
            onMouseEnter={() => {
              seticon4(dashbordiconw4);
            }}
            onMouseLeave={() => {
              seticon4(dashbordiconb4);
            }}
          >
            User Management Section
          </a>
          <div class="collapse" id="collapseExample2">
            <div className={`card card-body ${styles.dasgbordopssas}`}>
              <ul className={`${styles.dasgbordops}`}>
                <li className="d-flex my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/manageseeker" className="tere ogsfonts14">
                    {" "}
                    Manage Seeker
                  </Link>
                </li>
                <li className="d-flex my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/manageemployer" className="tere ogsfonts14">
                    {" "}
                    Manage Employer
                  </Link>
                </li>
                <li className="d-flex my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/managealljobs" className="tere ogsfonts14">
                    {" "}
                    Manage all Jobs
                  </Link>
                </li>
                <li className="d-flex my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/managejobsdispaly" className="tere ogsfonts14">
                    {" "}
                    Manage Jobs Display Limits
                  </Link>
                </li>
                <li className="d-flex my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/managerestricted" className="tere ogsfonts14">
                    {" "}
                    ManageRestricted Cvs
                  </Link>
                </li>
              </ul>
            </div>
          </div>{" "}
          <a
            className={`btn btn-primary ogsfonts16   py-3  ${styles.sidedasbtn}`}
            data-bs-toggle="collapse"
            href="#collapseExample4"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample4"
            onMouseEnter={() => {
              seticon4(dashbordiconw4);
            }}
            onMouseLeave={() => {
              seticon4(dashbordiconb4);
            }}
          >
            Category Management Section
          </a>
          <div class="collapse" id="collapseExample4">
            <div className={`card card-body ${styles.dasgbordopssas}`}>
              <ul className={`${styles.dasgbordops}`}>
                <li className="d-flex my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/managecategory" className="tere ogsfonts14">
                    {" "}
                    Manage Category
                  </Link>
                </li>
              </ul>
            </div>
          </div>{" "}
          <a
            className={`btn btn-primary ogsfonts16   py-3  ${styles.sidedasbtn}`}
            data-bs-toggle="collapse"
            href="#collapseExample5"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample5"
            onMouseEnter={() => {
              seticon4(dashbordiconw4);
            }}
            onMouseLeave={() => {
              seticon4(dashbordiconb4);
            }}
          >
            Cources Management Section
          </a>
          <div class="collapse" id="collapseExample5">
            <div className={`card card-body ${styles.dasgbordopssas}`}>
              <ul className={`${styles.dasgbordops}`}>
                <li className="d-flex my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/managecources" className="tere ogsfonts14">
                    {" "}
                    Manage Cources
                  </Link>
                </li>
              </ul>
            </div>
          </div>{" "}
          <a
            className={`btn btn-primary ogsfonts16   py-3  ${styles.sidedasbtn}`}
            data-bs-toggle="collapse"
            href="#collapseExample6"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample6"
            onMouseEnter={() => {
              seticon4(dashbordiconw4);
            }}
            onMouseLeave={() => {
              seticon4(dashbordiconb4);
            }}
          >
            NewsLetter Management Section
          </a>
          <div class="collapse" id="collapseExample6">
            <div className={`card card-body ${styles.dasgbordopssas}`}>
              <ul className={`${styles.dasgbordops}`}>
                <li className="d-flex my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/managenewslettersub" className="tere ogsfonts14">
                    {" "}
                    Manage Newsletter Subscriber
                  </Link>
                </li>
                <li className="d-flex my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/sentemail" className="tere ogsfonts14">
                    {" "}
                    Sent Email
                  </Link>
                </li>
                <li className="d-flex my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/sendnewslettergen" className="tere ogsfonts14">
                    {" "}
                    Send Newsletter (General)
                  </Link>
                </li>
                <li className="d-flex my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/sendnewsletterseekers" className="tere ogsfonts14">
                    {" "}
                    Send Newsletter (Seekers Only)
                  </Link>
                </li>
                <li className="d-flex my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link
                    to="/sendnewsletteremployers"
                    className="tere ogsfonts14"
                  >
                    {" "}
                    Send Newsletter (Employers Only)
                  </Link>
                </li>
              </ul>
            </div>
          </div>{" "}
          <a
            className={`btn btn-primary ogsfonts16   py-3  ${styles.sidedasbtn}`}
            data-bs-toggle="collapse"
            href="#collapseExample7"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample7"
            onMouseEnter={() => {
              seticon4(dashbordiconw4);
            }}
            onMouseLeave={() => {
              seticon4(dashbordiconb4);
            }}
          >
            Email Management Section
          </a>
          <div class="collapse" id="collapseExample7">
            <div className={`card card-body ${styles.dasgbordopssas}`}>
              <ul className={`${styles.dasgbordops}`}>
                <li className="d-flex my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link
                    to="/editemployerregistration"
                    className="tere ogsfonts14"
                  >
                    {" "}
                    Edit Employer Registration Email
                  </Link>
                </li>
                <li className="d-flex my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link
                    to="/editemployerregistration"
                    className="tere ogsfonts14"
                  >
                    {" "}
                    Edit Employer Registration Email
                  </Link>
                </li>
                <li className="d-flex my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/editforgotpassword" className="tere ogsfonts14">
                    {" "}
                    Edit Forgot Password Email
                  </Link>
                </li>
              </ul>
            </div>
          </div>{" "}
          <a
            className={`btn btn-primary ogsfonts16   py-3  ${styles.sidedasbtn}`}
            data-bs-toggle="collapse"
            href="#collapseExample8"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample8"
            onMouseEnter={() => {
              seticon4(dashbordiconw4);
            }}
            onMouseLeave={() => {
              seticon4(dashbordiconb4);
            }}
          >
            FAQ's Management Section
          </a>
          <div class="collapse" id="collapseExample8">
            <div className={`card card-body ${styles.dasgbordopssas}`}>
              <ul className={`${styles.dasgbordops}`}>
                <li className="d-flex my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/addfaq" className="tere ogsfonts14">
                    {" "}
                    Manage FAQ's
                  </Link>
                </li>
                <li className="d-flex my-2 align-items-center asdesas">
                  <div className={` me-3 ${styles.dot}`}></div>
                  <Link to="/managefaqs" className="tere ogsfonts14">
                    {" "}
                    Add FAQ's
                  </Link>
                </li>
              </ul>
            </div>
          </div>{" "}
        </div>
      </div>
      <div
        className={`ps-md-5 d-flex justify-content-between align-items-center ${styles.navbar}`}
        style={{
          // marginLeft: displayside ? "0%" : "14%",
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
            style={{ display: displayside ? "block" : " none" }}
          >
            <span>
              <img src={toggle} />
            </span>
          </button>
        </div>
        <div className="mx-5 d-flex align-items-center ">
          <button className={`px-2 ${styles.navbarnotibtn}`}>
            <span>
              <img src={notifilogo} />
            </span>
          </button>
          <button className={`px-2 ${styles.navbarprofbtn}`}>
            <span>
              <img style={{ width: "43px" }} src={userlogo} />
            </span>
          </button>
          <div className="dropdown">
            <button
              className={`px-2 dropdown-toggle ${styles.navbartogglebtn}`}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>
                <img />
              </span>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminsidebar;
