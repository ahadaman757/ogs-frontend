import Styles from "./managealljobs.module.css";
import { useEffect, useState } from "react";
import Adminsidebar from "../../../Components/adminsidebar/adminsidebar";
import InputField from "../../../Components/inputfield/inputfield";
import Table from "../../../Components/table/table";
import ManageJobsTable from "../../../Components/table/ManageJobsTable";
import jwtCheck from "../../../system/jwtChecker";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const columns = [
  {
    id: 1,
    title: "Sr No.",
  },
  {
    id: 2,
    title: "Created By",
  },
  {
    id: 3,
    title: "Job Title",
  },
  {
    id: 4,
    title: "Posted Date (dd-mm-yyyy)",
  },
  {
    id: 5,
    title: "Approved Status",
  },
  {
    id: 6,
    title: "Actions",
  },
];

const Managealljobs = () => {
  const [data, setData] = useState();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const display = (d) => {
    setData(d);
  };
  useEffect(() => {
    if (jwtCheck() === false) {
      navigate("/adminlogin");
    }
    axios
      .get(`http://localhost:3002/jobs/admingetjobs`, {
        headers: {
          accesstoken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setJobs(response.data[0]);
        setLoading(false);
      });
  }, [loading]);

  const reloadTable = () => {
    setLoading(true);
  };
  return (
    <div className={`${Styles.back}`}>
      <Adminsidebar side={display} />
      <div
        className={`${Styles.Managejobsmain} ${data ? "sidebarmarginmin" : "sidebarmarginmax"
          }`}
      >
        <div className="container">
          <div className="mt-5">
            <h1 className="ogsfonts38">Welcome</h1>
            <h1 className="ogsfonts20">to OGS manpower Administration Panel</h1>
            <div className={`p-4 my-5 ${Styles.maincontainer}`}>
              <h1 className="ogsfonts20">Content Managment Section</h1>
              <p className="ogsfonts16">Manage All Jobs</p>
              <p className="ogsfonts16">
                Here you can manage all the jobs currently operating in your
                portal system
              </p>

              {loading ? (
                "Loading Please Wait..."
              ) : (
                <ManageJobsTable
                  columns={columns}
                  rows={jobs}
                  reloadTable={reloadTable}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Managealljobs;
