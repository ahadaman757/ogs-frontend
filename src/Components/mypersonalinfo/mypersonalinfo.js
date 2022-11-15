import Styles from "./mypersonalinfo.module.css";
import InputField from "../inputfield/inputfield";
import React, { useEffect, useState } from "react";
const Personalinfo = ({ setLogoData }) => {
  const [photoSelected, setphotoSelected] = useState();
  const handleInputChange = (event) => {
    setLogoData(event.target.files[0]);
  };
  return (
    <div className="row">
      <div className={` p-4 mb-4 ${Styles.Personalinfomain}`}>
        <h1 className="ogsfonts20 ">My Personal Info</h1>
        <div className="row">
          <div className="col-md-6">
            <InputField title={"Email"} />
            <InputField title={"First Name"} />
            <InputField title={"Last Name"} />
            <InputField title={"Password"} />
          </div>
          <div className="col-md-6">
            <div className="container d-flex align-items-center justify-content-center flex-column">
              <div className={`${Styles.inputfileh1}`}>
                <h1 className="ogsfonts16 text-start">Profile Picture</h1>
              </div>

              <div
                className={`${Styles.upload_btn_wrapper} card d-flex mx-auto align-items-center justify-content-center flex-column  px-3`}
              >
                <label htmlFor="logo" className={`${Styles.pointer}`}>
                  <img
                    className={`img-fluid ${Styles.file_upload_icon} `}
                    src={require("../../Assets/Images/file upload.png")}
                    alt=""
                  />
                </label>

                <input
                  className={`${Styles.file_upload_hide}`}
                  onChange={handleInputChange}
                  type="file"
                  name="logo"
                  id="logo"
                />
                <h4 className="text-dark ogsfonts16 mt-2">
                  Choose file to upload
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div>
              <h1 className="ogsfonts20 my-3">My Personal Info</h1>
              <InputField title={"Email"} />
              <InputField title={"First Name"} />
              <InputField title={"Last Name"} />
              <InputField title={"Address"} />
            </div>
            <div className="d-flex my-3 justify-content-end">
              <button className={`me-3 ${Styles.profcbtn}`}>Cancel</button>
              <button className={`me-2 ${Styles.profsbtn}`}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Personalinfo;
