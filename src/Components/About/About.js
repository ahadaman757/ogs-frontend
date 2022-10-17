import React from "react";
import AboutImage from '../../Assets/Images/about_image.png'
const About = () => {
    return (
        <div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
                <img src={AboutImage} width="500px" />
            </div>
            <div className="col-12 col-md-6 d-flex flex-column" style={{background: 'orange'}}>
              <h2>
                We Build Lasting Relationships Between Candidates & Businesses
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
                nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                tellus elit sed risus. Maecenas eget condimentum velit, sit amet
                feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
};

export default About;