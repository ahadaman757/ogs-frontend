import Styles from "./managefaqs.module.css";
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
const Managefaqs = () => {
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
              <h1 className="ogsfonts20">FAQ's Management Section</h1>
              <p className="ogsfonts16">Manage FAQ's</p>
              <div className="d-flex flex-wrap justify-content-between">
                <div className="d-flex align-items-center">
                  <p className="ogsfonts16 m-0 me-3 ">Select:</p>
                  <button className={`me-3 ogsfonts16 ${Styles.btntick}`}>
                    <span>
                      <img className="me-2 " src={check} />
                    </span>
                    All
                  </button>
                  <button className={` ogsfonts16 ${Styles.btntick}`}>
                    <span>
                      <img className="me-2" src={check} />
                    </span>
                    None
                  </button>
                </div>
                <div className="d-flex align-items-center">
                  {" "}
                  <p className="ogsfonts16 m-0 me-3 ">
                    Total Subscriber Found: 50
                  </p>{" "}
                  <button
                    className={` ogsfonts16 px-4 py-3 ${Styles.btnplode}`}
                  >
                    Upload Csv
                  </button>
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
export default Managefaqs;
