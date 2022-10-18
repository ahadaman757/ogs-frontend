import "./BrowseOver.css";
import Googlelogo from "../../Assets/Images/google 1.png";
import MicroSoftlogo from "../../Assets/Images/microsoft 1.png";
import Facebook from "../../Assets/Images/Vector (5).png";
import Ibm from "../../Assets/Images/Vector (4).png";
import Combo from "../../Assets/Images/combo shape.png";
const jobs = [
  {
    title: "Acounting & Managment",
    info: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    title: "Acounting & Managment",
    info: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    title: "Acounting & Managment",
    info: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    title: "Acounting & Managment",
    info: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    title: "Acounting & Managment",
    info: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    title: "Acounting & Managment",
    info: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulputate libero et velit interdum, ac aliquet odio mattis.",
  },
];
const BrowseOver = () => {
  return (
    <div className="container my-5">
      <div>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-around align-items-center locont">
            <img
              className=""
              style={{ height: "44px", width: "120px" }}
              src={Googlelogo}
            />
            <img
              src={MicroSoftlogo}
              style={{ height: "26px", width: "120px" }}
            />
            <img style={{ height: "26px", width: "97px" }} src={Facebook} />
            <img style={{ height: "48px", width: "120px" }} src={Ibm} />
          </div>
        </div>
        <div className="row my-5  text-center d-flex justify-content-center">
          <h1 className="col-12 ogsfonts48">Browse From Over 2000+ Jobs</h1>
          <p className="col-md-5 ogsfonts16">
            The automated process starts as soon as your clothes go into the
            machine. The outcome is gleaming clothes. Placeholder text commonly
            used.
          </p>
        </div>
        <div className="container">
          <div className="row">
            {jobs.map(({ title, info }) => {
              return (
                <div className="col-md-4 p-2  applyingcard">
                  <div className="d-flex justify-content-between my-2">
                    <img src={Combo} />
                    <button className=" parttimebtn">Part Time</button>
                  </div>
                  <div>
                    <h1 className="ogsfonts20 my-3">{title} </h1>
                    <p className="ogsfonts14 my-3">{info}</p>
                  </div>
                  <div className="d-flex justify-content-end my-3">
                    <button className="ogsfonts14 applybtn">Apply</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrowseOver;
