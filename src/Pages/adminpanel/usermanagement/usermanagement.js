import Styles from "./usermanagement.module.css";
import { useEffect, useState } from "react";
import Adminsidebar from "../../../Components/adminsidebar/adminsidebar";
import InputField from "../../../Components/inputfield/inputfield";
import Table from "../../../Components/table/table";
import jwtCheck from "../../../system/jwtChecker";
import { useNavigate } from "react-router-dom";

const detail = [
  {
    Code: "ewe",
    Title: "qw",
  },
];
const Usermanagement = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  if (jwtCheck(3) === false) {
    navigate("/adminlogin");
  }
  const display = (d) => {
    console.log("value");
    console.log(d);
    setData(d);
  };
  return (
    <div className={`${Styles.back}`}>
      <Adminsidebar side={display} />
      <div
        className={`${Styles.Managejobsmain} ${
          data ? "adminsider" : "sidebarmarginmax"
        }`}
      >
        <div className="container">
          <div className="mt-5">
            <h1 className="ogsfonts38">Welcome</h1>
            <h1 className="ogsfonts20">to OGS manpower Administration Panel</h1>
            <div className={`p-4 my-5 ${Styles.maincontainer}`}>
              <h1 className="ogsfonts20">Content Managment Section</h1>
              <p className="ogsfonts16">Institute Contents</p>
              <p className="ogsfonts16">
                This pane provides an overview of your account settings, allows
                you to change your password.
              </p>
              <div className="row">
                <div className="col-md-5 me-3">
                  <InputField title={"Page Title"} />
                  <InputField title={"Meta Title"} />
                  <div className="d-flex justify-content-between">
                    <InputField title={"Meta Title"} />
                    <InputField title={"Meta Title"} />
                  </div>
                  <InputField title={"Meta Title"} />
                  <InputField title={"Meta Title"} />
                  <div className="d-flex justify-content-between">
                    <InputField title={"Meta Title"} />
                    <InputField title={"Meta Title"} />
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className={`me-3 ogsfonts14 ${Styles.btnt}`}>
                      Cancel
                    </button>
                    <button className={`px-4 py-3 ogsfonts14  ${Styles.btnc}`}>
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <Table array={detail} Sr={"as"} Code={"asda"} Option={"werer"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Usermanagement;
