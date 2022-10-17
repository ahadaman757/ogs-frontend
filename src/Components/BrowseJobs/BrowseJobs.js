import React, { useState } from "react";
import styles from "./BrowseJobs.module.css";
const BrowseJobs = () => {
  let f = [
    {
      id: 1,
      name: "Featured Jobs",
    },
    {
      id: 2,
      name: "Middle East Jobs",
    },
    {
      id: 3,
      name: "Pakistan Jobs",
    },
    {
      id: 4,
      name: "International Jobs",
    },
    {
      id: 5,
      name: "Recent Jobs",
    },
  ];
  const [filters, setFilters] = useState(f);
  const [active, setActive] = useState(1);
  return (
    <div className="container">
      <center>
        <h2 className={`ogsfonts ${styles.BrowseJobsHeading}`}>
          <span style={{ color: "#5200FF" }}>
            <b>Browse</b>
          </span>{" "}
          <b>Job</b>
        </h2>
      </center>
      <center>
        <p className={`ogsfonts ${styles.introPara}`}>
          The automated process starts as soon as your clothes go into the
          machine. The outcome is gleaming clothes. Placeholder text commonly
          used.
        </p>
      </center>
      <div className={`${styles.JobsFilters}`}>
        {filters.map(({ id, name }) => {
          return (
            <>
              <span
                key={id}
                className={`ogsfonts`}
                style={{ color: active == id ? "#5200FF" : "#9F9F9F" }}
                onClick={() => setActive(id)}
              >
                {name}
              </span>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default BrowseJobs;
