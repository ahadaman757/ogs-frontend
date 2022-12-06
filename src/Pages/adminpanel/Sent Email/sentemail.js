import Styles from "./sentemail.module.css";
import { useEffect, useState } from "react";
import Adminsidebar from "../../../Components/adminsidebar/adminsidebar";
import InputField from "../../../Components/inputfield/inputfield";
import Table from "../../../Components/table/table";
import check from "../../../Assets/Images/New folder (3)/check mark-rectangle.svg";

const detail = [
  {
    Code: "ewe",
    Title: "qw",
  },
];
const Sentemail = () => {
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
          data ? "adminsider" : "sidebarmarginmax"
        }`}
      >
        <div className="container">
          <div className="mt-5">
            <h1 className="ogsfonts38">Welcome</h1>
            <h1 className="ogsfonts20">to OGS manpower Administration Panel</h1>
            <div className={`p-4 my-5 ${Styles.maincontainer}`}>
              <h1 className="ogsfonts20">NewsLetter Management Section</h1>
              <p className="ogsfonts16">Sent Email</p>

              <Table array={detail} Sr={"as"} Code={"asda"} Option={"werer"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sentemail;
