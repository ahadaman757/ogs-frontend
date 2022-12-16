import "./hero.css";
import Hri from "../../Assets/Images/Vector 177.png";
import Styles from "./hero.module.css";
const HeroSec = () => {
  return (
    <div className="">
      <div className=" heroSec py-5 d-flex align-items-center justify-content-center">
        <div className="container ">
          <div className="text-center ">
            <h1 className="ogsfonts48 my-2">Find Your Next Dream Job</h1>
            <p className="ogsfonts16 my-2">Easiest way to find a perfect job</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 my-2">
              <div className="input-group d-flex row  ">
                <div className={`d-flex  my-2 ${Styles.inputcon}`}>
                  <div
                    className={`d-flex align-items-center ps-3 ${Styles.inputixon}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </div>
                  <input
                    placeholder="Enter Job Title, Skills, Company or CV "
                    className={`p-2 ${Styles.inputixont}`}
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="input-group d-flex row  ">
                <div className={`d-flex  my-2 ${Styles.inputcon}`}>
                  <div
                    className={`d-flex align-items-center ps-3 ${Styles.inputixon}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-geo-alt-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                  </div>
                  <input
                    placeholder="All Countries"
                    className={`p-2 ${Styles.inputixont}`}
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2 my-2 d-flex align-items-center">
              <div className="input-group align-items-center  ">
                <button className={` me-3 ${Styles.btnsearchtxt}`}>
                  Search by CV
                </button>
              </div>
            </div>
            <div className="col-md-2 my-2 d-flex align-items-center">
              <div className="input-group align-items-center  ">
                <button className={` me-3 ${Styles.btnsearchtxt}`}>
                  Search by CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSec;
