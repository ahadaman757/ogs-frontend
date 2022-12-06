import Styles from "./editseekerregistration.module.css";
import { useEffect, useState } from "react";
import Adminsidebar from "../../../Components/adminsidebar/adminsidebar";
import InputField from "../../../Components/inputfield/inputfield";
const Editseekerregistration = () => {
  const [data, setData] = useState();

  const display = (d) => {
    console.log("value");
    console.log(d);
    setData(d);
  };
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
              <h1 className="ogsfonts20">Edit New Seeker Registration Email</h1>
              <p className="ogsfonts16">Edit Employer Registration Email</p>

              <div className="row">
                <div className="col-md-6 me-3">
                  <InputField title={"From Name"} />
                  <InputField title={"Subject"} />
                  <div className="my-3">
                    <div className="d-flex justify-content-between">
                      <p className="ogsfonts16">Body</p>
                    </div>
                    <textarea className={` ${Styles.InputField}`}></textarea>
                  </div>

                  <div className="d-flex justify-content-between">
                    <button className={`ogsfonts14 ${Styles.btnt}`}>
                      Back
                    </button>
                    <div>
                      <button className={`me-3 ogsfonts14 ${Styles.btnt}`}>
                        Cancel
                      </button>
                      <button
                        className={`px-4 py-3 ogsfonts14  ${Styles.btnc}`}
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
    </div>
  );
};
export default Editseekerregistration;
