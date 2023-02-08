import Styles from "./managecategory.module.css";
import { useEffect, useState } from "react";
import Adminsidebar from "../../../Components/adminsidebar/adminsidebar";
import InputField from "../../../Components/inputfield/inputfield";
import Table from "../../../Components/table/table";
import check from "../../../Assets/Images/New folder (3)/check mark-rectangle.svg";
import ManageCategoriesTable from "../../../Components/table/ManageCategoriesTable";
import axios from "axios";
import { Link } from "react-router-dom";
import jwtCheck from "../../../system/jwtChecker";
import { useNavigate } from "react-router-dom";
import ManageAdditionalFilesTable from "../../../Components/table/ManageAdditionalFilesTable";

const detail = [
  {
    Code: "ewe",
    Title: "qw",
  },
];
const AdditionalFiles = () => {
  const [data, setData] = useState();
  const [pager, setPager] = useState(0);
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  if (jwtCheck(3) === false) {
    navigate("/adminlogin");
  }
  const display = (d) => {
    setData(d);
  };
  const handleTableLoading = (e) => {
    setLoading(!loading);
  };
  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get("page")) || 1;
    if (page !== pager.currentPage) {
      axios
        .post(
          `https://3.14.27.53:3003/admin/getAdditionalOptions`,
          { page: page },
          {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          }
        )
        .then((res) => {
          console.log("respones", res)
          setCategories(res.data.pageOfItems);
          setLoading(false);
        });
    }
  }, [loading, pager]);

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
            <h1 className="ogsfonts20">
              to OGS Man Power Administration Panel
            </h1>
            <div className={`p-4 my-5 ${Styles.maincontainer}`}>
              <h1 className="ogsfonts20">Category Management Section</h1>
              <p className="ogsfonts16">Manage Category</p>

              {loading ? (
                "Loading... Please wait..."
              ) : (
                <ManageAdditionalFilesTable
                  items={categories}
                  handleTableLoading={handleTableLoading}
                />
              )}
              <Link to={{ search: `?page=1` }} style={{ marginRight: "10px" }}>
                First
              </Link>

              <Link
                to={{ search: `?page=${pager + 1}` }}
                onClick={() => setPager(pager + 1)}
                style={{ marginRight: "10px" }}
              >
                Next
              </Link>
              <Link
                to={{ search: `?page=${pager != 1 ? pager - 1 : ""}` }}
                onClick={() => setPager(pager - 1)}
                style={{ marginRight: "10px" }}
              >
                Previous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdditionalFiles;
