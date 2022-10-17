import "./hero.css";
import Hri from "../../Assets/Images/Vector 177.png";
const HeroSec = () => {
  return (
    <div className="heroSec d-flex align-items-center justify-content-center">
      <div className="container ">
        <div className="text-center text-white">
          <h1 className="ogsfonts48 my-5">Find Your Next Dream Job</h1>
          <p className="ogsfonts16 my-5">Easiest way to find a perfect job</p>
        </div>
        <div className="row justify-content-center">
          <div class="col-md-4">
            <div className="input-group flex-row align-items-center inp">
              <input
                type="text"
                class="form-control inp1"
                aria-label="Text input with dropdown button"
              />
              <div className="hrwe"></div>
              <button
                class="btn btn-outline-secondary dropdown-toggle btmxo"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
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
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-2  btn-group" role="group">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
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
          <button className="col-2">Search</button>
        </div>
        <div>
          <a>Advance Search</a>
        </div>
        <div>
          <ul>
            <li>
              <p>Populer Search:</p>
            </li>
            <li>
              <a> Register Onlice CV</a>
            </li>
            <li>
              <a>Register Empoyer</a>
            </li>
            <li>
              <a>Post Job</a>
            </li>
            <li>
              <a>Post Ad</a>
            </li>
            <li>
              <a>OGS institue</a>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default HeroSec;
