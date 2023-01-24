import Styles from "./myjobs.module.css";
import Seekersidebar from "../../../Components/seekersidebar/seekersidebar";
import { useState } from "react";
import Jobcard from "../../../Components/jobcard/Jobcard";
import { useNavigate } from "react-router-dom";
import jwtCheck from "../../../system/jwtChecker";
const Myjobs = () => {
  const [data, Setdata] = useState("");
  const navigate = useNavigate();
  if (jwtCheck(1) === false) {
    navigate("/seekerlogin");
  }
  const display = (d) => {
    Setdata(d);
  };
  return (
    <div className="asdesaser">
      <Seekersidebar side={display} />
      <div
        className={`pt-5 ${Styles.Myjobsmain} ${
          data ? "sidebarmarginmin" : "sidebarmarginmax"
        }`}
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
