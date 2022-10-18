import React from "react";
import AboutImage from '../../Assets/Images/about_image.png'
import styles from './About.module.css'
const About = () => {
    return (
        <div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6 d-sm-flex align-items-sm-center justify-content-sm-center">
                <img src={AboutImage} width="550px" className={`${styles.aboutImg}`} />
            </div>
            <div className="col-12 col-md-12 col-lg-6  d-flex flex-column justify-content-around">
              <h2 className={`ogsfonts ${styles.aboutHeading}`}>
                <b>We Build Lasting Relationships Between Candidates & Businesses</b>
              </h2>
              <p className={`ogsfonts ${styles.aboutPara}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
                nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                tellus elit sed risus. Maecenas eget condimentum velit, sit amet
                feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos.
              </p>
              <div className={`${styles.aboutBtnContainer}`}>
                <button className={`${styles.aboutBtn}`}>Find more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};

export default About;