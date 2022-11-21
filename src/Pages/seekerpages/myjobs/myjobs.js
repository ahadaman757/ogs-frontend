import Styles from "./myjobs.module.css";
import Seekersidebar from "../../../Components/seekersidebar/seekersidebar";
import { useState } from "react";
import Jobcard from "../../../Components/jobcard/Jobcard";
const Myjobs = () => {
  const [data, Setdata] = useState("");
  const display = (d) => {
    console.log("value");
    console.log(d);
    Setdata(d);
  };
  return (
    <div>
      <Seekersidebar side={display} />
      <div
        style={{ marginLeft: data ? "55px" : "200px" }}
        className={`pt-5 ${Styles.Myjobsmain}`}
      >
        <div className="container">
          <div className="mt-5">
            <h1 className="ogsfonts24 ms-3">My Jobs</h1>
            <div className={`p-3 my-3  ${Styles.Myjobshead}`}>
              <button className={`ogsfonts16 me-3 py-2 px-4 ${Styles.asbtn}`}>
                Applied
              </button>
              <button className={`ogsfonts16 py-2 px-4 ${Styles.asbtn}`}>
                Saved
              </button>
            </div>
            <div>{/* <Jobcard /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Myjobs;