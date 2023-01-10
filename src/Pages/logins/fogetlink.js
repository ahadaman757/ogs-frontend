import Styles from "./login.module.css";
import logo from "../../Assets/Images/mobilelogo.jpg";
const Frogetlink = () => {
  return (
    <>
      <div className={`${Styles.Frogetpassmain}`}>
        <div className="d-flex align-items-md-center mt-md-5 pt-md-5 df">
          <div className="d-flex p-2 ">
            <img src={logo} />
          </div>
          <div className={`d-flex  ${Styles.Frogetpassmain}`}>
            <div
              className={`d-flex p-2 p-md-5 flex-colum ${Styles.Frogetpassins}`}
            >
              <h1 className="ogsfonts30 mt-4">Forgotten password?</h1>
              <p className={`ogsfonts16 mt-3 ${Styles.fontcol}`}>
                Fill in your email address to reset your password
              </p>
              <div className="d-flex df">
                {" "}
                <label className={`mt-4 ogsfonts16`}>New Password</label>
                <input
                  type="password"
                  placeholder="Enter your New Password"
                  className={`mt-2 ps-4 ${Styles.fogetinput}`}
                />
              </div>
              <div className="d-flex df">
                <label className={`mt-4 ogsfonts16`}>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Enter your Confirm Password"
                  className={`mt-2 ps-4 ${Styles.fogetinput}`}
                />
              </div>
              <div className="mt-3 d-flex justify-content-end align-items-center mt-4">
                <button
                  className={`py-3 ogsfonts16 px-5 ${Styles.linksendbbtn}`}
                >
                  Save Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Frogetlink;
