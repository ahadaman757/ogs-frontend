import Styles from "./managenewslettersub.module.css";
import { useEffect, useState } from "react";
import Adminsidebar from "../../../Components/adminsidebar/adminsidebar";
import InputField from "../../../Components/inputfield/inputfield";
import Table from "../../../Components/table/table";
import check from "../../../Assets/Images/New folder (3)/check mark-rectangle.svg";
import NewsLetterTable from "./NewsLetterTable";

import axios from "axios";
import { Link } from "react-router-dom";
const Managenewslettersub = () => {
  const [data, setData] = useState();
  const [emailValue, setEmailValue] = useState("");
  const [addNewsLetterResponse, setAddNewsLetterResponse] = useState([]);
  const [emailList, setEmailList] = useState();
  const [listLoading, setListLoading] = useState(true);
  const [pager, setPager] = useState(0);

  const display = (d) => {
    setData(d);
  };

  const addNewsletterSubscriber = () => {
    if (emailValue != "") {
      axios
        .post(
          "http://3.110.201.2:3002/admin/addNewsLetterSubscriber",
          {
            value: emailValue,
          },
          {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          }
        )
        .then((res) => {
          setAddNewsLetterResponse(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Please enter a valid value");
    }
    console.log(addNewsLetterResponse);
  };

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get("page")) || 1;
    if (page !== pager.currentPage) {
      axios
        .post(
          `http://3.110.201.2:3002/admin/getNewsLetterSubscribers`,
          { page: page },
          {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          }
        )
        .then((res) => {
          setPager(res.data.page);
          setEmailList(res.data.pageOfItems);
          setListLoading(false);
        });
    }
  }, [pager]);

  return (
    <div className={`${Styles.back}`}>
      <Adminsidebar side={display} />
      <div
        className={`${Styles.Managejobsmain} ${data ? "adminsider" : "sidebarmarginmax"
          }`}
      >
        <div className="container">
          <div className="mt-5">
            <h1 className="ogsfonts38">Welcome</h1>
            <h1 className="ogsfonts20">to OGS manpower Administration Panel</h1>
            <div className={`p-4 my-5 ${Styles.maincontainer}`}>
              <h1 className="ogsfonts20">Newsletter Management Section</h1>
              <p className="ogsfonts16">
                Add or delete users to whom your emails are sent.
              </p>
              {addNewsLetterResponse.code == 0 ? (
                <div class="alert alert-danger" role="alert">
                  {addNewsLetterResponse.message}
                </div>
              ) : addNewsLetterResponse.code == 1 ? (
                <div class="alert alert-success" role="alert">
                  {addNewsLetterResponse.message}
                </div>
              ) : (
                ""
              )}
              <div className="d-flex flex-wrap justify-content-between">
                <div className="d-flex align-items-center">
                  {" "}
                  <p className="ogsfonts16 m-0 me-3 ">
                    <input
                      style={{
                        paddingTop: "12px",
                        paddingBottom: "12px",
                        paddingLeft: "10px",
                      }}
                      placeholder="Enter Email Address..."
                      onChange={(e) => setEmailValue(e.target.value)}
                    />
                  </p>{" "}
                  <button
                    className={` ogsfonts16 px-4 py-3 ${Styles.btnplode}`}
                    onClick={() => addNewsletterSubscriber()}
                  >
                    Add Email
                  </button>
                </div>
              </div>
              {listLoading === false ? (
                <NewsLetterTable emailList={emailList} />
              ) : (
                "Loading Please Wait..."
              )}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link
                  to={{ search: `?page=1` }}
                  style={{ marginRight: "10px" }}
                >
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
    </div>
  );
};
export default Managenewslettersub;
