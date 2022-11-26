import React from "react";
import Logo from "../../Assets/Images/image 1.png";
import styles from "./homepage.module.css";
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
          <nav class="navbar navbar-expand-lg">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav mx-auto" style={{ color: "white" }}>
                <li class="nav-item active">
                  <a class="nav-link" href="#" style={{ color: "white" }}>
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{ color: "white" }}>
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{ color: "white" }}>
                    Internships
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{ color: "white" }}>
                    Members
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{ color: "white" }}>
                    OGS Courses
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{ color: "white" }}>
                    About Us
                  </a>
                </li>
                {/* <li class="nav-item">
                  <a
                    class="nav-link disabled"
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
