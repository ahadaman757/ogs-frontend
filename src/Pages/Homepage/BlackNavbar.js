import React from "react";
import styles from "./homepage.module.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/image 1.png";
import menuicon from "../../Assets/Images/menu-line-horizontal.svg";
const BlackNavbar = () => {
  return (
    <nav class="navbar container navbar-expand-lg bg-light">
      <div class="d-flex container-fluid justify-content-between">
        <div>
          {" "}
          <img style={{ width: "133px" }} src={Logo} />
        </div>
        <div>
          <div class="btn-group">
            {" "}
            <button
              data-bs-toggle="dropdown"
              aria-expanded="false"
              className={`p-2 me-3 ${styles.btnmenu1}`}
            >
              ENG
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Dropdown link
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Dropdown link
                </a>
              </li>
            </ul>
          </div>

          <button
            className={`${styles.btnmenu}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              {" "}
              <img src={menuicon} />
            </span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BlackNavbar;
