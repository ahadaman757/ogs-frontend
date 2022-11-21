import Styles from "./setting.module.css";
import Accountsetting from "../../Components/Account Setting/accountsetting";
import { useState } from "react";
import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import Company from "../../Components/company/company";
import Personalinfo from "../../Components/mypersonalinfo/mypersonalinfo";
const Setting = () => {
  const [currntstac, setcurrntstac] = useState("Company");
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
        style={{ marginLeft: data ? "55px" : "200px" }}
        className={`pt-5 ${Styles.settingmain}`}
      >
        <div className="container ">
          <div className={`mt-5 row   ${Styles.settheader}`}>
            <h1 className="ogsfonts20 p-3">Setting</h1>
          </div>
          <div className={`row my-3 justify-content-between`}>
            <div
              className={`col-md-2 py-4 px-3 mb-3   d-flex flex-column  ${Styles.settingsider}`}
            >
              <a className="my-3 " onClick={() => setcurrntstac("Company")}>
                Company
              </a>
              <a className="my-3">Departments</a>
              <a className="my-3">Team Memebers</a>
              <a
                className="my-3"
                onClick={() => setcurrntstac("Accountsetting")}
              >
                Account Setting
              </a>
              <a className="my-3" onClick={() => setcurrntstac("Personal")}>
                Personal Info
              </a>
              <a className="my-3">Auto Emails</a>
              <a className="my-3">Purchase history</a>
            </div>
            <div className="col-md-9">
              {currntstac == "Personal" ? (
                <Personalinfo />
              ) : currntstac == "Accountsetting" ? (
                <Accountsetting />
              ) : (
                <Company />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Setting;