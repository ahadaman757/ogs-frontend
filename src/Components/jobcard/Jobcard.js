import Styles from "./jobcard.module.css";
import viewicon from "../../Assets/Images/eye.png";
import filtericon from "../../Assets/Images/Vector 309.png";
import copyicon from "../../Assets/Images/files.png";
import shareicon from "../../Assets/Images/share.png";
import deleticon from "../../Assets/Images/Trash.png";
const Jobcard = (props) => {
  return (
    <div className={`p-3 my-2 ${Styles.Jobcardmain}`}>
      <div className=" d-flex align-items-center">
        <div className="d-flex">
          <p className="ogsfonts14 m-1">May 26, 2022</p>
          <p className="m-1 ogsfonts14"> Posted date</p>
        </div>
        <p className={` mx-2 ogsfonts14 m-0 ${Styles.Jobcardheading}`}>
          {props.staus}
        </p>
      </div>
      <div className={`d-flex justify-content-between align-items-center`}>
        <div className={`d-flex`}>
          <h1 className="ogsfonts24 m-0">
            1269898 / Receptionist - Rawalpindi{" "}
          </h1>
          <button className={`mx-2 ${Styles.filaneyebtn}`}>
            <span>
              <img src={viewicon} />
            </span>
          </button>
        </div>
      </div>

      <div className="d-flex flex-wrap">
        <p>Offered salary: 25K - 30K</p>
        <p className="mx-sm-5">Posted by: Basit Malik</p>
      </div>
      <div
        className={`d-flex flex-wrap justify-content-evenly my-4 ${Styles.jobcardinfo}`}
      >
        <div>
          <div className={`${Styles.jobcarddetailsl}`}>
            <p className="ogsfonts24 text-center p-4">18</p>
          </div>
          <p className="ogsfonts14 text-center">Applied</p>
        </div>
        <div>
          <div className={`${Styles.jobcarddetails}`}>
            {" "}
            <p className="ogsfonts24 text-center p-4">18</p>
          </div>
          <p className="ogsfonts14 text-center"> Reviewed</p>
        </div>
        <div>
          <div className={`${Styles.jobcarddetailsb}`}>
            {" "}
            <p className="ogsfonts24 text-center p-4">18</p>
          </div>
          <p className="ogsfonts14 text-center">shortlisted</p>
        </div>
        <div>
          <div className={`${Styles.jobcarddetailsbl}`}>
            {" "}
            <p className="ogsfonts24 text-center p-4">18</p>
          </div>
          <p className="ogsfonts14 text-center">Interviews</p>
        </div>
      </div>
      <div className="d-flex flex-wrap m-0 ">
        <h1 className="ogsfonts18 mx-1">PKR 27K - 46K </h1>
        <p className="ogsfonts14">Average salary based on similar jobs</p>
      </div>
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <div className="d-flex flex-wrap">
          <p className="my-0 ogsfonts14">63 Similar jobs</p>
          <p className="my-0 mx-sm-3 ogsfonts14">96 Total visits</p>
          <p className="my-0 mx-sm-3 ogsfonts14">Expiry Date: Jun 26, 2022</p>
        </div>
        <div>
          <button className={`mx-2 ${Styles.csdbtn}`}>
            <span className="mx-2">
              <img src={copyicon} />
            </span>
            Copy
          </button>
          <button className={`mx-2 ${Styles.csdbtn}`}>
            <span className="mx-2">
              <img src={shareicon} />
            </span>
            Share
          </button>
          <button className={`mx-2 ${Styles.csdbtn}`}>
            <span className="mx-2">
              <img src={deleticon} />
            </span>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default Jobcard;
