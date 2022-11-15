import Styles from "./jobcard.module.css";
import viewicon from "../../Assets/Images/eye.png";
import filtericon from "../../Assets/Images/Vector 309.png";
import copyicon from "../../Assets/Images/files.png";
import shareicon from "../../Assets/Images/share.png";
import deleticon from "../../Assets/Images/Trash.png";
function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
}
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const Jobcard = (props) => {
  console.log(props)
  let date = new Date(props.data?.createdAt);
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  return (
    <div className={`p-3 my-2 ${Styles.Jobcardmain}`} key={props.data.id}>
      <div className=" d-flex align-items-center">
        <div className="d-flex">
          <p className="ogsfonts14 m-1">
            {monthNames[month] + " " + day + "," + year}
          </p>
          <p className="m-1 ogsfonts14"> Posted date</p>
        </div>
        <p className={` mx-2 ogsfonts14 m-0 ${Styles.Jobcardheading}`}>
          {props.staus}
        </p>
      </div>
      <div className={`d-flex justify-content-between align-items-center`}>
        <div className={`d-flex`}>
          <h1 className="ogsfonts24 m-0">
            {props.data.id} / {props.data.job_title} -{" "}
            {props.data.location == null ? "Not defined" : props.data.location}{" "}
          </h1>
          <button className={`mx-2 ${Styles.filaneyebtn}`}>
            <span>
              <img src={viewicon} />
            </span>
          </button>
          <button className={`mx-2 ${Styles.filaneyebtn}`}>
            <span>
              <img src={filtericon} />
            </span>
          </button>
        </div>
      </div>

      <div className="d-flex">
        <p>
          Offered salary: {kFormatter(props.data.start_salary)} -{" "}
          {kFormatter(props.data.end_salary)}
        </p>
      </div>
      <div
        className={`d-flex justify-content-evenly my-4 ${Styles.jobcardinfo}`}
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
      <div className="d-flex m-0 ">
        <h1 className="ogsfonts18 mx-1">PKR 27K - 46K </h1>
        <p className="ogsfonts14">Average salary based on similar jobs</p>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <p className="my-0 ogsfonts14">63 Similar jobs</p>
          <p className="my-0 mx-3 ogsfonts14">96 Total visits</p>
          <p className="my-0 mx-3 ogsfonts14">Expiry Date: Jun 26, 2022</p>
        </div>
        <div>
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
