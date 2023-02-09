import React from "react";
import Styles from "./Footer.module.css";
import Instagram from "../../Assets/Images/instagram.png";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/mobilelogo.jpg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

const Footer = () => {
  const [countries, setCountries] = useState([]);
  const [countryLoading, setCountryLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`https://3.14.27.53:3003/general/getCountries`).then((res) => {
      setCountries(res.data.countries[0]);
      setCountryLoading(false);

      console.log(res.data.countries[0]);
    });
  }, []);
  return (
    <div class="m-0">
      <footer
        class="text-center text-lg-start text-dark bg-white"
        // style="background-color: #ECEFF1"
        // style={{ backgroundColor: "#ECEFF1" }}
      >
        <section
          class="d-flex justify-content-between m-0 p-4 text-white"
          // style="background-color: #01aff3"
          style={{ backgroundColor: "#01aff3" }}
        >
          <div class="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" class="text-white me-4">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </section>

        <section class="bg-white">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-2 mx-auto mb-4">
                <img src={logo} />
                <h6 class="text-uppercase fw-bold"> OGS Man Power</h6>
                {/* <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  // style="width: 60px; background-color: #7c4dff; height: 2px"
                  style={{
                    width: "131px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                /> */}
                <p className="ogsfonts16">
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">USEFUL LINKS</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  // style="width: 60px; background-color: #7c4dff; height: 2px"
                  style={{
                    width: "107px",

                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a
                    href="#!"
                    class="text-dark ogsfonts16"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Home
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-dark ogsfonts16"
                    onClick={() => {
                      navigate("/ogscourses");
                    }}
                  >
                    OGS Courses
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-dark ogsfonts16"
                    onClick={() => {
                      navigate("/aboutus");
                    }}
                  >
                    About Us
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Useful links</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  // style="width: 60px; background-color: #7c4dff; height: 2px"
                  style={{
                    width: "107px",
                    backgroundColor: "#7c4dff",
                  }}
                />
                <p>
                  <a
                    href="#!"
                    class="text-dark ogsfonts16"
                    onClick={() => {
                      navigate("/employerlogin");
                    }}
                  >
                    Employer login
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-dark ogsfonts16"
                    onClick={() => {
                      navigate("/instituteLogin");
                    }}
                  >
                    Institute login
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-dark ogsfonts16"
                    onClick={() => {
                      navigate("/agentLogin");
                    }}
                  >
                    Agent login
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    class="text-dark ogsfonts16"
                    onClick={() => {
                      navigate("/seekerlogin");
                    }}
                  >
                    Seeker login
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-2 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold">Contact</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  // style="width: 60px; background-color: #7c4dff; height: 2px"
                  style={{
                    width: "74px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <i class="fas fa-home mr-3"></i> Noor plaza chandni chowk ,
                  Rawalpindi , Pakistan
                </p>
                <p>
                  <i class="fas fa-envelope mr-3"></i> ceoogs@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone mr-3"></i> + (051)4906572
                </p>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-2 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold">Browse Jobs</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  // style="width: 60px; background-color: #7c4dff; height: 2px"
                  style={{
                    width: "108px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <select class="form-select" aria-label="Default select example">
                  {countries.map((c) => {
                    return (
                      <option value={c.country_id}>{c.country_name}</option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </section>

        <div
          class="text-center p-3"
          // style="background-color: rgba(0, 0, 0, 0.2)"
          style={{ backgroundColor: "#eceff1" }}
        >
          Copyright © 2022 OGS MAN POWER | All Rights Reserved
        </div>
      </footer>
    </div>
  );
};
export default Footer;
