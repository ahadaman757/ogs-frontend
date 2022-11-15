import Styles from "./accountsetting.module.css";
import InputField from "../inputfield/inputfield";
const Accountsetting = () => {
  return (
    <div className={`row p-4 ${Styles.Accountsettingmain}`}>
      <div>
        <h1 className=" mb-4 ogsfonts25">Account Setting</h1>
        <h1 className="mb-3 ogsfonts18">My Account Settings</h1>
        <p className=" mb-3 ogsfonts16">
          This pane provides an overview of your account settings, allows you to
          change your password.
        </p>
        <div className="row">
          <div className="col-md-6">
            <InputField title={"Email"} />
            <InputField title={"Old Password"} />
            <InputField title={"Enter a new Password"} />
            <InputField title={"Re enter a new password"} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-end my-3">
            <button className={` ${Styles.profsbtn}`}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Accountsetting;
