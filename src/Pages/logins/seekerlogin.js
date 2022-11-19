import Styles from "./login.module.css";
import bggside from "../../Assets/Images/sign-in-right.png";
import InputField from "../../Components/inputfield/inputfield";
const SeekerLogin = () => {
  return (
    <div
      className={`${Styles.auth_page} py-5   container-fluid px-5 primary-bg`}
    >
      <div className="container">
        <div className={`  row `}>
          <div className={`col-md-6 p-4 ${Styles.auth_page__model}`}>
            <div className="container-fluid">
              <h1>Logo</h1>
              <h3 className={`${Styles.form_heading_1}`}>Seeker Login</h3>
              <p className={`${Styles.form_description}`}>
                Registration with OGS (Pvt) Ltd is 100% free <br />
                Please fill up this form to register free at OGS
              </p>
              <div className={`pt-5 ${Styles.from}`}>
                <InputField title={"Email"} />
                <InputField title={"password"} />
                <button
                  className="unset_button w-100 text-white py-2 form_action_button  submit"
                  type="submit"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>

          <div className={`col-md-6 p-0  ${Styles.auth_img} `}>
            <img src={bggside} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SeekerLogin;
