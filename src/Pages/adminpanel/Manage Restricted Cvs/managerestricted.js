import Styles from "./managerestricted.module.css";
import { useEffect, useState } from "react";
import Adminsidebar from "../../../Components/adminsidebar/adminsidebar";
import InputField from "../../../Components/inputfield/inputfield";
import Table from "../../../Components/table/table";

const detail = [
  {
    Code: "ewe",
    Title: "qw",
  },
];
const Managerestricted = () => {
  const [data, setData] = useState();

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
          data ? "sidebarmarginmin" : "sidebarmarginmax"
        }`}
      >
        <div className="container">
          <div className="mt-5">
            <h1 className="ogsfonts38">Welcome</h1>
            <h1 className="ogsfonts20">to OGS manpower Administration Panel</h1>
            <div className={`p-4 my-5 ${Styles.maincontainer}`}>
              <h1 className="ogsfonts20">Content Managment Section</h1>
              <p className="ogsfonts16">Manage Restricted Cvs</p>
              <p className="ogsfonts16">
                This pane provides an overview of your account settings, allows
                you to change your password.
              </p>

              <Table array={detail} Sr={"as"} Code={"asda"} Option={"werer"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Managerestricted;
