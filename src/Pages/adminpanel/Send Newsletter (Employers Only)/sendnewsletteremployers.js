import Styles from "./sendnewsletteremployers.module.css";
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
const Sendnewsletteremployers = () => {
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
              <h1 className="ogsfonts20">NewsLetter Management Section</h1>
              <p className="ogsfonts16">Send Newsletter (Employers Only)</p>
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
                      send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sendnewsletteremployers;
