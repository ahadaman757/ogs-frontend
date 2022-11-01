import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import { useState } from "react";
import Styles from "./Managejobs.module.css";
import Searchicon from "../../Assets/Images/search.png";
import proimg from "../../Assets/Images/Rectangle 1143.png";
import Jobcard from "../../Components/jobcard/Jobcard";
import Active from "../../Components/Active/Active";
import Deactivated from "../../Components/Deactived/Deactived";
import Draft from "../../Components/Draft/Draft";
const Managejobs = () => {
  const [data, Setdata] = useState("");
  const [currntstac, setcurrntstac] = useState("");
  const display = (d) => {
    console.log("value");
    console.log(d);
    Setdata(d);
  };
  return (
    <div>
      <DashboardNavbar side={display} />
      <div
        className={`${Styles.Managejobsmain}`}
        style={{ marginLeft: data ? "55px" : "200px" }}
      >
        <div className="row p-4 mt-5">
          <div className="col-9">
            <div className={` p-3 ${Styles.Managejobschild1}`}>
              <h1 className={`ogsfonts25`}>
                Manage Jobs - OGS (PVt) Limited (89)
              </h1>
              <p>to find talent</p>
              <div className="d-flex">
                <div
                  className={`input-group flex-row align-items-center inp ${Styles.inputmj} `}
                >
                  <input
                    type="text"
                    class={`form-control inp1  `}
                    aria-label="Text input with dropdown button"
                  />
                  <div className="hrwe"></div>
                  <button
                    class="btn btn-outline-secondary dropdown-toggle btmxo ogsfonts15"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    All Departments
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
                <button className={` mx-2 ${Styles.btnsearch}`}>
                  <span>
                    <img src={Searchicon} />
                  </span>
                </button>
              </div>
            </div>
            <div className={`d-flex p-3  my-3 ${Styles.tabsadd}`}>
              <div className={`mx-5 p-2 ogsfonts16  ${Styles.tablinks}`}>
                <a onClick={() => setcurrntstac("active")}>Active</a>
              </div>
              <div className={`mx-5 p-2 ogsfonts16  ${Styles.tablinks}`}>
                <a onClick={() => setcurrntstac("draft")}>Draft</a>
              </div>
              <div className={`mx-5 p-2 ogsfonts16  ${Styles.tablinks}`}>
                <a onClick={() => setcurrntstac("deactive")}>Deavtivated</a>
              </div>
            </div>
            <div>
              {currntstac == "active" ? (
                <Active />
              ) : currntstac == "draft" ? (
                <Draft />
              ) : (
                <Deactivated />
              )}
            </div>
          </div>
          <div className="col-3">
            <div
              className={`d-flex p-4 text-center flex-column justify-content-center align-items-center ${Styles.profcard}`}
            >
              <img className={`${Styles.profimg}`} src={proimg} />
              <h1 className="ogsfonts24">Jasmine</h1>
              <p className="ogsfonts16">CEO</p>
              <p className="ogsfonts14">ceoogs@gmail.com</p>
              <p className="ogsfonts14">+92.300.5352636</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Managejobs;