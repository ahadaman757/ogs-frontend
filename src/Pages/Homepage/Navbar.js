import React from "react";
import Logo from "../../Assets/Images/image 1.png";
import styles from "./homepage.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className={`${styles.Navbar__logoContainer}`}>
        <div className="container">
          <img src={Logo} />
        </div>
      </div>
      <div className={`${styles.Navbar__container}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto" style={{ color: "white" }}>
                <li className="nav-item active">
                  <Link
                    to="/"
                    className="nav-link"
                    href="#"
                    style={{ color: "white" }}
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/ogscourses"
                    className="nav-link"
                    href="#"
                    style={{ color: "white" }}
                  >
                    OGS Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/aboutus"
                    className="nav-link"
                    href="#"
                    style={{ color: "white" }}
                  >
                    About Us
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    style={{ color: "white" }}
                  >
                    Disabled
                  </a>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
