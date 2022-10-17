import React, { useEffect, useState } from "react";
import styles from "./BrowseJobs.module.css";

const JobCards = ({ active }) => {
  let posts = [
    {
      key: 1,
      id: 1,
      logo: "https://clovine.com/images/icon/main_logo.png",
      heading: "Caing Technician, OGS Manpower",
      description:
        "We are looking for 3 or 4 personnel who have experience in running, dressing and maintaining a Volant CRTi casing running tool.",
      location: "Abu Dhabi",
      type: "Contract",
    },
    {
      key: 2,
      id: 1,
      logo: "https://clovine.com/images/icon/main_logo.png",
      heading: "Caing Technician, OGS Manpower",
      description:
        "We are looking for 3 or 4 personnel who have experience in running, dressing and maintaining a Volant CRTi casing running tool.",
      location: "Abu Dhabi",
      type: "Contract",
    },
    {
      key: 3,
      id: 1,
      logo: "https://clovine.com/images/icon/main_logo.png",
      heading: "Caing Technician, OGS Manpower",
      description:
        "We are looking for 3 or 4 personnel who have experience in running, dressing and maintaining a Volant CRTi casing running tool.",
      location: "Abu Dhabi",
      type: "Contract",
    },
    {
      key: 4,
      id: 2,
      logo: "https://clovine.com/images/icon/main_logo.png",
      heading: "Caing Technician, OGS Manpower",
      description:
        "We are looking for 3 or 4 personnel who have experience in running, dressing and maintaining a Volant CRTi casing running tool.",
      location: "Middle East",
      type: "Contract",
    },
    {
      key: 5,
      id: 2,
      logo: "https://clovine.com/images/icon/main_logo.png",
      heading: "Caing Technician, OGS Manpower",
      description:
        "We are looking for 3 or 4 personnel who have experience in running, dressing and maintaining a Volant CRTi casing running tool.",
      location: "Middle East",
      type: "Contract",
    },
    {
      key: 6,
      id: 2,
      logo: "https://clovine.com/images/icon/main_logo.png",
      heading: "Caing Technician, OGS Manpower",
      description:
        "We are looking for 3 or 4 personnel who have experience in running, dressing and maintaining a Volant CRTi casing running tool.",
      location: "Middle East",
      type: "Contract",
    },
    {
      key: 7,
      id: 2,
      logo: "https://clovine.com/images/icon/main_logo.png",
      heading: "Caing Technician, OGS Manpower",
      description:
        "We are looking for 3 or 4 personnel who have experience in running, dressing and maintaining a Volant CRTi casing running tool.",
      location: "Middle East",
      type: "Contract",
    },
  ];

  const [jobs, setJobs] = useState(posts);
  const [showJobs, setShowJobs] = useState([]);

  useEffect(() => {
    const filtered = posts.filter((post) => post.id == active);
    setShowJobs([...filtered]);
  }, [active]);

  return (
    <>
      <h1>You Selected {active}</h1>
      {showJobs.map((inner, index, arr) => {
        console.log(arr);
        return (
          <div key={inner.key} className={`${styles.JobCards__Container}`}>
            <div className={`${styles.JobCards__logo}`}>
              <img src="https://clovine.com/images/icon/main_logo.png" />
            </div>
            <div className={``}>
              <h2>
                <br />
                <b className="ogsfonts">Caing Technician, OGS Manpower</b>
              </h2>
              <p>
                We are looking for 3 or 4 personnel who have experience in
                running, dressing and maintaining a Volant CRTi casing running
                tool.
              </p>
              <p className="ogsfonts">
                <b>Job Location:</b> {inner.location}
              </p>
            </div>
            <div className={`${styles.applyDiv}`}>
              <p className="ogsfonts">
                <b>Job Location:</b> Abu Dhabi
              </p>
              <button className={`${styles.aboutBtn}`}>Apply Now</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

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
      <br />
      <JobCards active={active} />
      <br />
    </div>
  );
};

export default BrowseJobs;
