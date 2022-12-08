import { useEffect, useState } from "react";
import styles from "./homepage.module.css";
import axios from "axios";
export const Jobs = () => {
  const [JobData, setJobData] = useState("");
  const [jobsLoading, setJobsLoading] = useState(true);
  const jobs = [
    {
      id: 1,
      title: "Casing Technician",
      company: "OGS ManPower",
      apply: "We are looking for 3 or 4 personnel who have experience",
    },
    {
      id: 2,
      title: "Casing Technician",
      company: "OGS ManPower",
      apply: "We are looking for 3 or 4 personnel who have experience",
    },
    {
      id: 3,
      title: "Casing Technician",
      company: "OGS ManPower",
      apply: "We are looking for 3 or 4 personnel who have experience",
    },
  ];
  useEffect(() => {
    // GET USER DATA
    axios.get("http://3.110.201.21:3002/general/homePageJobsPK").then((res) => {
      setJobData(res.data.response[0]);
      setJobsLoading(false);
    });
  }, []);
  console.log("asasas", JobData);
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <br />
        <br />
        <div className={`${styles.pakistanJobs__container}`}>
          <div>
            <h2>Pakistan Jobs</h2>
          </div>
          <table style={{ width: "100%", backgroundColor: "white" }}>
            <thead
              style={{
                backgroundColor: "#DAEFFC",
                borderTop: "1px solid #2089D4",
              }}
            >
              <tr style={{ paddingTop: "10px" }}>
                <th
                  style={{
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "40px",
                  }}
                >
                  Job Title
                </th>
                <th style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                  Company
                </th>
                <th style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                  Apply
                </th>
              </tr>
            </thead>
            <tbody>
              {!jobsLoading
                ? JobData.map((item) => (
                  <tr
                    key={item.id}
                    style={{ borderBottom: "1px solid #CED4DA" }}
                  >
                    <td
                      style={{
                        width: "300px",
                        paddingLeft: "40px",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                      }}
                    >
                      {item.job_title}
                    </td>
                    <td style={{ width: "400px" }}>Pakistan</td>
                    <td>{item.job_description}</td>
                  </tr>
                ))
                : "Loading... Please wait"}
            </tbody>
          </table>
        </div>
        <br />
        <br />
        <div className={`${styles.pakistanJobs__container}`}>
          <div>
            <h2>Middle East Jobs</h2>
          </div>
          <table style={{ width: "100%", backgroundColor: "white" }}>
            <thead
              style={{
                backgroundColor: "#DAEFFC",
                borderTop: "1px solid #2089D4",
              }}
            >
              <tr style={{ paddingTop: "10px" }}>
                <th
                  style={{
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "40px",
                  }}
                >
                  Job Title
                </th>
                <th style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                  Company
                </th>
                <th style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                  Apply
                </th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((item) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #CED4DA" }}>
                  <td
                    style={{
                      width: "300px",
                      paddingLeft: "40px",
                      paddingTop: "15px",
                      paddingBottom: "15px",
                    }}
                  >
                    {item.title}
                  </td>
                  <td style={{ width: "400px" }}>{item.company}</td>
                  <td>{item.apply}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <br />
        <div className={`${styles.pakistanJobs__container}`}>
          <div>
            <h2>International Jobs</h2>
          </div>
          <table style={{ width: "100%", backgroundColor: "white" }}>
            <thead
              style={{
                backgroundColor: "#DAEFFC",
                borderTop: "1px solid #2089D4",
              }}
            >
              <tr style={{ paddingTop: "10px" }}>
                <th
                  style={{
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "40px",
                  }}
                >
                  Job Title
                </th>
                <th style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                  Company
                </th>
                <th style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                  Apply
                </th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((item) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #CED4DA" }}>
                  <td
                    style={{
                      width: "300px",
                      paddingLeft: "40px",
                      paddingTop: "15px",
                      paddingBottom: "15px",
                    }}
                  >
                    {item.title}
                  </td>
                  <td style={{ width: "400px" }}>{item.company}</td>
                  <td>{item.apply}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Jobs;
