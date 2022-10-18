import React from "react";
import styles from "./Footer.module.css";
import Instagram from "../../Assets/Images/instagram.png";

const Footer = () => {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <div>
        <h2>
          <b className="ogsfonts">LOGO HERE</b>
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
          <button className="primaryButtonOutline">Post a job</button>
        </div>
        <div className="col-12 col-md-3 col-lg-3" id={`${styles.footerCol}`}>
          <h3 className="ogsfonts20">Quick Links</h3>
          <p className="ogsfonts14">Work</p>
          <p className="ogsfonts14">Services</p>
          <p className="ogsfonts14">Products</p>
          <p className="ogsfonts14">Tips & Tricks</p>
        </div>
        <div className="col-12 col-md-3 col-lg-3">
          <h3 className="ogsfonts20">Quick Links</h3>
          <p className="ogsfonts14">Work</p>
          <p className="ogsfonts14">Services</p>
          <p className="ogsfonts14">Products</p>
          <p className="ogsfonts14">Tips & Tricks</p>
        </div>
        <div className="col-12 col-md-3 col-lg-3">
          <h3 className="ogsfonts20">Quick Links</h3>
          <p className="ogsfonts14">Work</p>
          <p className="ogsfonts14">Services</p>
          <p className="ogsfonts14">Products</p>
          <p className="ogsfonts14">Tips & Tricks</p>
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
