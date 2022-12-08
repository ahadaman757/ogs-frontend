import React from "react";
import styles from "./Footer.module.css";
import Instagram from "../../Assets/Images/instagram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <div>
        <h2>
          <b className="ogsfonts">OGS Man Power</b>
        </h2>
      </div>
      <div className="row">
        <div className="col-12 col-md-3 col-lg-3 ml-5">
          <p className="ogsfonts14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <span>
            <img src={Instagram} style={{ marginRight: "10px" }} />
            <img src={Instagram} style={{ marginRight: "10px" }} />
            <img src={Instagram} style={{ marginRight: "10px" }} />
            <img src={Instagram} style={{ marginRight: "10px" }} />
          </span>
          <br />
          <br />
          <Link to="/employerlogin" className="primaryButtonOutline">
            Post a job
          </Link>
        </div>
        <div className="col-12 col-md-3 col-lg-3" id={`${styles.footerCol}`}>
          <h3 className="ogsfonts20">Quick Links</h3>
          <div className="d-flex flex-column">
            <Link to="/" className="ogsfonts14">
              Home
            </Link>
            <Link to="/aboutus" className="ogsfonts14">
              About Us
            </Link>
            <Link to="/aboutus" className="ogsfonts14">
              Contact
            </Link>
            <Link to="/ogscourses" className="ogsfonts14">
              Courses
            </Link>
          </div>
        </div>
        <div className="col-12 d-flex flex-column col-md-3 col-lg-3">
          <h3 className="ogsfonts20">Sign Up</h3>
          <Link to="/register" className="ogsfonts14">
            Employer Sign Up
          </Link>
          <Link to="/seeker" className="ogsfonts14">
            Seeker Sign Up
          </Link>
        </div>
        <div className="col-12 d-flex flex-column col-md-3 col-lg-3">
          <h3 className="ogsfonts20">Sign In</h3>
          <Link to="/employerlogin" className="ogsfonts14">
            Employer Sign In
          </Link>
          <Link to="/seekerlogin" className="ogsfonts14">
            Seeker Sign In
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <hr />
      <p className="ogsfonts14">
        Copyright ©2022 All rights reserved | This template is made with by
        Jataq
      </p>
    </div>
  );
};
export default Footer;
