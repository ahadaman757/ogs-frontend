import Navbar from "../../Components/Navbar/Navbar";
import aboutimg from "../../Assets/Images/Rectangle 1100.png";
import "./aboutus.css";
const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutusmain">{/* <img src={aboutimg} /> */}</div>
      <div className="container">
        <div row>
          <h1 className="px-5 my-5">ABOUT US</h1>
          <p className="ogsfonts18 col-md-11 my-5 aboutusp2 px-5">
            OGS MANPOWER is an authorized international Recruitment, employment
            organization having headquartered in Rawalpindi-Islamabad Pakistan.
            It is a legal Entity under the License No. MPD/2978/RWP registered
            with Ministry of Human Resources Pakistan. It is a subsidiary
            Employment organization of OGS (Pvt.) Limited, which is registered
            under the Government of Pakistan Act 1984, having Corporate
            Universal Identification No.0072054 and further Registered from
            United Kingdom accreditation system ISO 9001:2008 having
            specialization in Oil and Gas Industry, Construction, IT, Medical,
            Transport, Advertising, Hospitality, Hotel, Security and Defense
            Forces. It provides pioneering end, effective extensive services in
            Human Resource,
          </p>
          <p className="ogsfonts18 col-md-11 my-5 aboutusp2 px-5">
            {" "}
            Management services like interviewing and recruitment, training and
            development and also provide the trade testing and other facilities.
            The motive of OGS is to provide deployment of manpower within the
            boundaries and globally as well with an objective to adopt
            professional ethics nationally and internationally in a
            sophisticated environment to empower the personal skills. While
            considering the IT growth OGS also provides the world’s one of the
            best web based Jobs portal facility for the solution of Human
            Resource Management. OGS assures bright and enhanced future for its
            seekers and Employers. For bright future assurance please visit us
            once. - See more at: http://www.ogsmanpower.com
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
