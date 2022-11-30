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
        <div className=" coursesogs">
          <h1 className="text-center py-5">OGS INSTITUTE OF TECHNOLOGIES</h1>
          <div className=" row justify-content-center m-0">
            <div className="row col-md-8 ogscorfis">
              <div className="col-md-6 py-5 px-5 ">
                <div>
                  <h1 className="ogsfonts28 ">Courses</h1>
                  <p className="ogscoup ogsfonts14 pt-2">
                    Please fill up this form and we will get back to you
                    <br />
                    shortly..
                  </p>
                  <p className="ogscoup ogsfonts14">
                    {" "}
                    OGS (PVT) Limited, ISo certified 9001:2008{" "}
                  </p>
                </div>
                <h1 className="ogsfonts28 py-4">Register</h1>
                <div>
                  <h1 className="ogsfonts14 pt-2">Email</h1>
                  <input className="ogscouinput " />
                  <h1 className="ogsfonts14 pt-2">First Name</h1>
                  <input className="ogscouinput" />
                  <h1 className="ogsfonts14 pt-2">Last Name</h1>
                  <input className="ogscouinput" />
                  <h1 className="ogsfonts14 pt-2">Address</h1>
                  <textarea className="ogscouinputext" />
                  <button className="ogscoubtn mt-2">
                    Continue
                    <span>
                      <img className="btnlogo" src={btnlogo} />
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-md-6 fromcons2">
                {/* <img className="bulidimg" src={bulid} /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="ogsas">
          <div className=" my-5 py-5 container">
            <h1 className="text-center py-5 my-5">
              OGS Skill Development and Trade Testing
            </h1>
            <p className="text-center my-5 ogsfonts16 sdweqw">
              Our CEO has Good relations with different Oil and Gas
              companies’Human Resources Managers and Ownersr, he also knows
              un-employment factor in Pakistan. He knows that a lot of
              Engineers, Geologists, MBAs, Diploma holders and specially
              petroleum engineers of 1 year, 2 years, and 3 years diploma
              holders in the field of petroleum are un employed because there
              are rarer opportunities in the field of petroleum, but a lot of
              vacancies are being offered in the field DRILLING (Oil and Gas
              Sectors) you can search in Google as jobs drilling in Iraq, UAE
              Dubai Abu Dhabi, Saudi Arabia, Libya, Oman, Qatar, Nigeria, Sudan,
              Canada, UK and USA. “Who are Paying Highest Salaries in the World
              and further attraction 28 work 28 leave with ticket and other o
              lot of benefits
            </p>
            <p className="text-center my-5 ogsfonts16 sdweqw">
              So our short courses in the field drilling and safety may more
              benefited then 1 year’s petroleum engineering or long study and
              further our professional courses on International Level are
              designed for few days classes only. We are offering different
              courses for the industry of Oil and gas. For further detail:
            </p>
          </div>
        </div>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-6 bulid2img34">
              {/* <img className=" bulid2img" src={bulid2} /> */}
            </div>
            <div className="col-md-6 ">
              <h1 className="ogsfonts32 pt-5 mt-5">
                OGS Skill Development and Trade Testing
              </h1>
              <p className="ogsfonts16 sdweqw">
                OGS Skill Development and Trade Testing is a subsidiary training
                institute of OGS (Pvt) Limited, which is registered under the
                Government of Pakistan Act 1984, having Corporate Universal
                Identification No.0072054 and Registered from United Kingdom
                accreditation system ISO 9001:2008 and Quality international
                study aboard network UK Ref No. QPK 2011010. We are facilitating
                our youth to make their prosperous future through technical
                education in the following sectors/fields for the last four
                years with the spirit of patriotism:
              </p>
              <p className="ogsfonts16 sdweqw">
                Address: Office No. 5, 2nd Floor Noor Plaza, Chandni chowk,
                Rawalpindi, Pakistan.
              </p>
              <p className="ogsfonts16 sdweqw">
                (PAK)+92-300-9122368 Tel:+92-51-4418472 , Fax: +92-51-4906120{" "}
              </p>
              <p className="ogsfonts16 sdweqw">Email: hr@ogsmanpower.com</p>
              <p className="ogsfonts16 sdweqw">
                Join on Twitter: http://www.twitter.com/ogsmanpower
              </p>
              <p className="ogsfonts16 sdweqw">
                Join on Facebook: http://www.facebook.com/ogs.official
              </p>
              <p className="ogsfonts16 sdweqw">Website: www.ogsmanpower.com</p>
            </div>
          </div>
        </div>
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
