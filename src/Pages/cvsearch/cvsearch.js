import Styles from "./cvsearch.module.css";
import { useState } from "react";
import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import InputField from "../../Components/inputfield/inputfield";
const Cvsearch = () => {
  const [data, Setdata] = useState("");
  const display = (d) => {
    console.log("value");
    console.log(d);
    Setdata(d);
  };
  return (
    <div>
      <DashboardNavbar side={display} />
      <div
        className={` pt-5 ${Styles.Cvsearchmain} ${
          data ? "sidebarmarginmin" : "sidebarmarginmax"
        }`}
      >
        <div className={`container `}>
          <div className={` mt-5 p-4  ${Styles.Cvsearchchild}`}>
            <h1 className={`ogsfonts20`}>CV Search</h1>
            <p>
              Please enter one or more keywords that will help us fetch relevant
              CVs.
            </p>
            <div className={`row`}>
              <div className="col-6">
                <input className={` ${Styles.InputField}`} />
              </div>
              <div className="col-6">
                <div
                  className={` input-group flex-row align-items-center  ${Styles.Cvsearchstin}`}
                >
                  <input
                    type="text"
                    class="form-control inp1"
                    aria-label="Text input with dropdown button"
                  />

                  <button
                    class="btn btn-outline-secondary dropdown-toggle btmxo ogsfonts15"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></button>
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
            </div>
            <div>
              <p>Get 8,082,046 Registered Professional CVs</p>
              <p>Not in Pakistan?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cvsearch;
