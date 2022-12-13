import { map } from "jquery";
import React, { useState } from "react";
import Tick from "../../Assets/Images/tick.svg";
import removered from "../../Assets/Images/removered.svg";
import Styles from "./table.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ManageJobsTable = (props) => {
  const [approve_status, setapprove_status] = useState();
  const changeApproveStatus = (current_status, id) => {
    axios
      .put(
        "http://3.110.201.21:3002/admin/update_job_column",
        {
          status: !current_status,
          column: "is_approved",
          job_id: id,
        },
        {
          headers: {
            accesstoken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        console.log();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigate = useNavigate();
  const deleteJob = (e) => {
    axios
      .post("http://3.110.201.21:3002/jobs/admindeletejob", {
        jobId: e,
        headers: {
          accesstoken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.code == 1) {
          props.reloadTable();
        }
      });
  };
  return (
    <div className="container py-4">
      <table className="table srolll">
        <thead>
          <tr>
            {props.columns.map((col) => {
              return (
                <th key={col.id} className="ogsfonts14">
                  {" "}
                  {col.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.rows.map((item) => {
            return (
              <tr key={item.id}>
                <th className="ogsfonts14" scope="row">
                  {item.id}
                </th>
                <td className="ogsfonts14">
                  {item.first_name + " " + item.last_name}
                </td>
                <td className="ogsfonts14">{item.job_title}</td>

                <td className="ogsfonts14">
                  {new Date(item?.createdAt).getDay() +
                    "/" +
                    new Date(item?.createdAt).getMonth() +
                    "/" +
                    new Date(item?.createdAt).getFullYear()}
                </td>
                <td onClick={() => changeApproveStatus(item.id)}>
                  {item.is_approved ? "true" : "False"}
                </td>
                <td className="ogsfonts14">{item.Address}</td>
                <td className="ogsfonts14">
                  <button className={`${Styles.btn}`}>
                    <span>
                      <img
                        src={Tick}
                        onClick={() => navigate(`/admineditjob/${item.id}`)}
                      />
                    </span>
                  </button>
                  <button className={`${Styles.btn}`}>
                    <span>
                      <img
                        src={removered}
                        title="Delete Job"
                        onClick={() => {
                          deleteJob(item.id);
                        }}
                      />
                    </span>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageJobsTable;
