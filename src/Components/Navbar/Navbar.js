import ogsLogo from "../../Assets/Images/ogs_logo 1.svg";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav class="navbar nabaasss navbar-expand-lg ">
        <div class="container">
          <img className="navbar-brand logoOgs" src={ogsLogo} />

          <div>
            <ul className="navbar-nav align-items-center sdweqw">
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
          <div>
            <ul class="navbar-nav align-items-center">
              <li className="nav-item dropdown mx-4">
                <button
                  className="Loginbtn ogsfonts18"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login
                </button>
                <ul class="dropdown-menu ">
                  <li>
                    <a
                      onClick={() => {
                        navigate("/employerlogin");
                      }}
                      class="dropdown-item ogsfonts18"
                      href="#"
                    >
                      Employer login
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        navigate("/instituteLogin");
                      }}
                      class="dropdown-item ogsfonts18"
                      href="#"
                    >
                      Institute Login
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        navigate("/agentLogin");
                      }}
                      class="dropdown-item ogsfonts18"
                      href="#"
                    >
                      Agent login
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        navigate("/seekerlogin");
                      }}
                      class="dropdown-item ogsfonts18"
                      href="#"
                    >
                      Seeker login
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <button
                  class="Registerbtn px-3 py-2 ogsfonts18"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Register
                </button>
                <ul class="dropdown-menu ">
                  <li>
                    <a
                      onClick={() => {
                        navigate("/register");
                      }}
                      class="dropdown-item ogsfonts18"
                      href="#"
                    >
                      Register as Employer
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        navigate("/agentregister");
                      }}
                      class="dropdown-item ogsfonts18"
                      href="#"
                    >
                      Register as Agent
                    </a>
                  </li>

                  <li>
                    <a
                      onClick={() => {
                        navigate("/instituteregister");
                      }}
                      class="dropdown-item ogsfonts18"
                      href="#"
                    >
                      Register as Institute
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        navigate("/cv");
                      }}
                      class="dropdown-item ogsfonts18"
                      href="#"
                    >
                      Register as Seeker
                    </a>
                  </li>
                </ul>
                <button
                  onClick={() => {
                    navigate("/register");
                  }}
                  className="postbtn px-3 py-2 ogsfonts18"
                >
                  Post a Job
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
