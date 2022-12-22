import React from "react";
import Styles from "./Footer.module.css";
import Instagram from "../../Assets/Images/instagram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={`container py-3 ${Styles.Footermain}`}>
      <div>
        <h1 className="footerfontcolor ogsfonts24">About Us</h1>
        <p className="footerfontcolor ogsfonts16 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
      <div>
        <h1 className="footerfontcolor ogsfonts24">Browse Jobs</h1>{" "}
        <div id="accordionPanelsStayOpenExample" className={`accordion  `}>
          <div className={` accordion-item my-3 accordion234  `}>
            {" "}
            <h2 className={`accordion-header `} id="panelsStayOpen-headingTwo">
              <button
                className={`accordion-button collapsed ${Styles.acodin} `}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                By Country
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body accordion234"> dsdfw</div>{" "}
            </div>
          </div>
          <div className={` accordion-item my-3 accordion234  `}>
            {" "}
            <h2
              className={`accordion-header `}
              id="panelsStayOpen-headingthree"
            >
              <button
                className={`accordion-button collapsed ${Styles.acodin} `}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapsethree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapsethree"
              >
                By City
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapsethree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingthree"
            >
              <div className="accordion-body accordion234"> dsdfw</div>{" "}
            </div>
          </div>
          <div className={` accordion-item my-3 accordion234  `}>
            {" "}
            <h2 className={`accordion-header `} id="panelsStayOpen-headingFour">
              <button
                className={`accordion-button collapsed ${Styles.acodin} `}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                By Jobs Title Category
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <div className="accordion-body accordion234"> dsdfw</div>{" "}
            </div>
          </div>
          <div className={` accordion-item my-3 accordion234  `}>
            {" "}
            <h2 className={`accordion-header `} id="panelsStayOpen-headingFour">
              <button
                className={`accordion-button collapsed ${Styles.acodin} `}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapsefive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapsefive"
              >
                By Industry
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapsefive"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingfive"
            >
              <div className="accordion-body accordion234"> dsdfw</div>{" "}
            </div>
          </div>
        </div>{" "}
      </div>
      <div>
        <a>Faq</a>
        <a>Privacy</a>
        <a>Downloads</a>
        <a>Gallery</a>
        <a>Contact Us</a>
      </div>
    </div>
  );
};
export default Footer;
