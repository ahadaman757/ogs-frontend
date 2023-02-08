import Styles from "./setting.module.css";
import Accountsetting from "../../Components/Account Setting/accountsetting";
import { useState } from "react";
import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import Company from "../../Components/company/company";
import Personalinfo from "../../Components/mypersonalinfo/mypersonalinfo";
import jwtCheck from "../../system/jwtChecker";
import { useNavigate } from "react-router-dom";
const Setting = () => {
  const [currntstac, setcurrntstac] = useState("Company");
  const [data, Setdata] = useState("");
  const navigate = useNavigate();
  if (jwtCheck(2) === false) {
    navigate("/employerlogin");
  }
  const display = (d) => {
    console.log("value");
    console.log(d);
    Setdata(d);
  };
  return (
    <div className="asdesaser">
      <DashboardNavbar side={display} />
      <div
        className={`pt-5 ${Styles.settingmain} ${
          data ? "sidebarmarginmin" : "sidebarmarginmax"
        }`}
      >
        <div className="container ">
          <div className={`mt-5 row   ${Styles.settheader}`}>
            <h1 className="ogsfonts20 p-3">Setting</h1>
          </div>
          <div className={`row my-3 justify-content-between`}>
            <div
              className={`col-md-2 py-4 px-3 mb-3   d-flex flex-column  ${Styles.settingsider}`}
            >
              <a
                className="my-3"
                onClick={() => setcurrntstac("Accountsetting")}
              >
                Account Setting
              </a>
              <a className="my-3" onClick={() => setcurrntstac("Personal")}>
                Personal Info
              </a>
            </div>
            <div className="col-md-9">
              {currntstac == "Personal" ? (
                <Personalinfo />
              ) : currntstac == "Accountsetting" ? (
                <Accountsetting />
              ) : (
                <Accountsetting />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Setting;
