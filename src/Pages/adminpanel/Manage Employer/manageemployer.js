import Styles from "./manageemployer.module.css";
import { useEffect, useState } from "react";
import Adminsidebar from "../../../Components/adminsidebar/adminsidebar";
import InputField from "../../../Components/inputfield/inputfield";
import Table from "./Table";
import axios from "axios";
import jwtCheck from "../../../system/jwtChecker";
import { useNavigate } from "react-router-dom";

const Manageemployer = () => {
  const [Employers, setEmployers] = useState([]);
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
  useEffect(() => {
    axios
      .get("https://3.14.27.53:3003/admin/employers", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setEmployers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(Employers, "sasas");
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
              <p className="ogsfonts16">Manage Employers</p>
              <div style={{ overflowX: "auto" }}>
                <Table employer_data={Employers} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Manageemployer;
