import Styles from "./Manageyoucvs.module.css";
import Seekersidebar from "../../../Components/seekersidebar/seekersidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import SeekercvCard from "./seekercvCard";
import { PDFDownloadLink, Image } from "@react-pdf/renderer";
const Manageyoucvs = () => {
  const [data, Setdata] = useState("");
  const [UserCvs, setUserCvs] = useState([]);
  const display = (d) => {
    console.log("value");
    console.log(d);
    Setdata(d);
  };
  useEffect(() => {
    axios
      .get("http://localhost:3002/users/my_cvs", {
        headers: {
          accesstoken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setUserCvs(res.data);
      });
  }, []);

  return (
    <div className="asdesaser">
      <Seekersidebar side={display} />
      <div
        className={`pt-5 ${Styles.Manageyoucvsmain} ${
          data ? "sidebarmarginmin" : "sidebarmarginmax"
        }`}
      >
        <div className="container">
          <div
            className={`p-3 my-3 d-flex justify-content-between  ${Styles.Myjobshead}`}
          >
            <h1 className="ogsfonts18 m-11">Manage Your CVs</h1>
            <div className="">
              <button
                type="button"
                className={`btn btn-primary ogsfonts16 ${Styles.modalbtn}`}
              >
                create new cv
              </button>
            </div>
          </div>
          {UserCvs.length &&
            UserCvs.map((cv, i) => {
              return <SeekercvCard key={i} cv_data={cv} />;
            })}
          <div className={`p-3 my-3 ${Styles.jacon}`}>
            <h1 className="ogsfonts18">A Quick Guide To Managing Your CVs:</h1>
            <div className="my-3">
              <h1 className="ogsfonts18">Default CV: </h1>{" "}
              <p className="ogsfonts16">
                This is the CV that employers will see every time they search
                for a CV. If you have multiple CVs, you can make a specific CV
                "Default" by clicking "Make Default".
              </p>
            </div>
            <div className="my-3">
              <h1 className="ogsfonts18">Private CV:</h1>{" "}
              <p className="ogsfonts16">
                {" "}
                This CV is visible only to you. You can make a CV private (and
                vice versa) by clicking the lock icon.
              </p>
            </div>
            <div className="my-3">
              <h1 className="ogsfonts18">Multiple CVs:</h1>{" "}
              <p className="ogsfonts16">
                You can have more than one CV uploaded against your profile.
                These additional CVs can be tailored to work best against
                specific job types.
              </p>
            </div>
            <div className="my-3">
              <h1 className="ogsfonts18">Profile CV:</h1>{" "}
              <p className="ogsfonts16">
                This is a system generated CV and can not be deleted. It is the
                default CV used to apply for jobs when you have not added any of
                your own.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Manageyoucvs;
