import Styles from "./Jobpreferences.module.css";
import Seekersidebar from "../../../Components/seekersidebar/seekersidebar";
import InputField from "../../../Components/inputfield/inputfield";
import InputSelect from "../../../Components/inputselect/inputfselect";
import jwtCheck from "../../../system/jwtChecker";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Jobpreferences = () => {
  const [data, Setdata] = useState("");
  const navigate = useNavigate();
  if (jwtCheck(1) === false) {
    navigate("/seekerlogin");
  }
  const display = (d) => {
    console.log("value");
    console.log(d);
    Setdata(d);
  };
  return (
    <div className="asdesaser">
      <Seekersidebar side={display} />
      <div
        className={`pt-5 ${Styles.Jobpreferencesmain} ${
          data ? "sidebarmarginmin" : "sidebarmarginmax"
        }`}
      >
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6">
              <div className={`p-4 ${Styles.Jobpreferencesfrom}`}>
                <h1 className="ogsfonts18">Job Preferences</h1>
                <div className="mt-5">
                  <InputField title={"Desired Job Title*"} />
                  <InputField title={"Desired Salary (PKR)*"} />
                  <InputField title={"Skills"} />
                </div>
                <div>
                  <h1 className="ogsfonts16">Relocation</h1>
                  <div className="form-check me-3   my-3">
                    <input
                      className={`form-check-input ${Styles.radioer}`}
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label ogsfonts12"
                      for="flexCheckDefault"
                    >
                      i m willing to relocate
                    </label>
                  </div>
                  <div className="d-flex">
                    <div className="form-check me-3   my-3">
                      <input
                        className={`form-check-input ${Styles.radioer}`}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label ogsfonts12"
                        for="flexCheckDefault"
                      >
                        anywheree
                      </label>
                    </div>{" "}
                    <div className="form-check me-3   my-3">
                      <input
                        className={`form-check-input ${Styles.radioer}`}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label ogsfonts12"
                        for="flexCheckDefault"
                      >
                        Onlynear
                      </label>
                    </div>
                  </div>
                  <div>
                    <InputField
                      title={
                        "Enter up to 3 locations you'd be willing to relocate to"
                      }
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    {" "}
                    <button
                      type="button"
                      className={`me-3 ${Styles.modalbtnc} `}
                      data-bs-dismiss="modal"
                    >
                      Draft
                    </button>
                    <button
                      type="button"
                      className={`py-2 px-3 ${Styles.modalbtns} `}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jobpreferences;
