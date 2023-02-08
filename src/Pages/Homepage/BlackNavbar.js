import React from "react";
import styles from "./homepage.module.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/image 1.png";
import menuicon from "../../Assets/Images/menu-line-horizontal.svg";
import flag from "../../Assets/Images/flagpack_gb-ukm.svg";
import arrow from "../../Assets/Images/aroow.svg";
const BlackNavbar = () => {
  return (
    <nav
      class={`navbar container navbar-expand-lg bg-light ${styles.BlackNavbar}`}
    >
      <div class="d-flex container-fluid justify-content-between">
        <div>
          {" "}
          <img style={{ width: "133px" }} src={Logo} />
        </div>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li className="nav-item mx-xxl-4">
              <Link to="/" className=" ogsfonts16Nav">
                Home
              </Link>
            </li>

            <li className="nav-item mx-xxl-4">
              <Link className=" ogsfonts16Nav" to="/privacy">
                privacy
              </Link>
            </li>
            <li className="nav-item mx-xxl-4">
              <Link to="/aboutus" className=" ogsfonts16Nav">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BlackNavbar;
