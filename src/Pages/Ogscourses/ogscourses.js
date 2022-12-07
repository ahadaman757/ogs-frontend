import Navbar from "../../Components/Navbar/Navbar";
import "./Ogscourses.css";
import bulid from "../../Assets/Images/Rectangle 1078.png";
import bulid2 from "../../Assets/Images/Rectangle 1102.png";
import btnlogo from "../../Assets/Images/Vector 190.png";
import Footer from "../../Components/Footer/Footer";
const data = [
  {
    title: "Well Control Course",
    info: "This course program explains drilling technical terms including well control procedures and technique. The purpose of the core curriculum is to identify a body of knowledge and a set of job skills, which can be used to provide well control skills for drilling operations.",
    eligibility: "Matric/Fsc/DAE/Graduate",
    duration: "03 weeks",
    location: "Rawalpindi",
    fee: "20,000",
  },
  {
    title: "Well Control Course",
    info: "This course program explains drilling technical terms including well control procedures and technique. The purpose of the core curriculum is to identify a body of knowledge and a set of job skills, which can be used to provide well control skills for drilling operations.",
    eligibility: "Matric/Fsc/DAE/Graduate",
    duration: "03 weeks",
    location: "Rawalpindi",
    fee: "20,000",
  },
  {
    title: "Well Control Course",
    info: "This course program explains drilling technical terms including well control procedures and technique. The purpose of the core curriculum is to identify a body of knowledge and a set of job skills, which can be used to provide well control skills for drilling operations.",
    eligibility: "Matric/Fsc/DAE/Graduate",
    duration: "03 weeks",
    location: "Rawalpindi",
    fee: "20,000",
  },
  {
    title: "Well Control Course",
    info: "This course program explains drilling technical terms including well control procedures and technique. The purpose of the core curriculum is to identify a body of knowledge and a set of job skills, which can be used to provide well control skills for drilling operations.",
    eligibility: "Matric/Fsc/DAE/Graduate",
    duration: "03 weeks",
    location: "Rawalpindi",
    fee: "20,000",
  },
];

const Ogscourses = () => {
  return (
    <div>
      <Navbar />
      <div className=" ogsas">
        <div className="py-5 ogscardcon">
          <div className="container my-5">
            <h1 className="text-center py-5">COURSES</h1>
            <div className="row justify-content-center">
              {data.map(
                ({ title, info, eligibility, duration, location, fee }) => {
                  return (
                    <div className="col-md-10 my-4 p-3 cardconoogs">
                      <div>
                        <h1 className="ogsfonts24">{title}</h1>
                        <p className="ogsfonts16">{info}</p>
                      </div>
                      <div className="d-flex flex-wrap justify-content-between">
                        <div>
                          <p className="m-0 py-1 ogsfonts16">
                            Eligibility: {eligibility}
                          </p>
                          <p className="m-0 py-1 ogsfonts16">
                            Duration: {duration}
                          </p>
                          <p className="m-0 py-1 ogsfonts16">
                            Location: {location}
                          </p>
                        </div>
                        <div className="d-flex align-items-end justify-content-between">
                          <p className="ogsfonts16 px-2">Fee: {fee}</p>
                          <button className="applyogsbtn">Apply Now</button>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Ogscourses;
