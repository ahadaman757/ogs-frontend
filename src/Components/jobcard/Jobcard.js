import Styles from './jobcard.module.css';
import viewicon from '../../Assets/Images/eye.png';
import filtericon from '../../Assets/Images/Vector 309.png';
import copyicon from '../../Assets/Images/files.png';
import shareicon from '../../Assets/Images/share.png';
import deleticon from '../../Assets/Images/Trash.png';
import { useNavigate } from 'react-router-dom';
import ShareLink from 'react-facebook-share-link';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon } from 'react-share';

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num);
}
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const Jobcard = (props) => {
  const navigate = useNavigate();
  console.log(props);
  let date = new Date(props.data?.createdAt);
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  return (
    <div
      className={`p-3 my-2 ${Styles.Jobcardmain}`}
      onClick={() =>
        navigate('/newapplicant', { state: { id: props.data.id } })
      }
      style={{ cursor: 'pointer' }}
    >
      <div className=" d-flex align-items-center">
        <div className="d-flex">
          <p className="m-1 ogsfonts14"> Posted date</p>
          <p className="ogsfonts14 m-1">{props.data.posted_at}</p>
        </div>
        <p className={` mx-2 ogsfonts14 m-0 ${Styles.Jobcardheading}`}>
          {props.staus}
        </p>
      </div>
      <div className={`d-flex justify-content-between align-items-center`}>
        <div className={`d-flex`}>
          <h1 className="ogsfonts24 m-0">
            {props.data.id} / {props.data.job_title} - {props.data.city},{' '}
            {props.data.country}
          </h1>
          <button className={`mx-2 ${Styles.filaneyebtn}`}>
            <span>
              <img src={viewicon} />
            </span>
          </button>
        </div>
      </div>

      <div className="d-flex">
        <p>
          Offered salary: {kFormatter(props.data.min_salary)} -{' '}
          {kFormatter(props.data.max_salary)}
        </p>
      </div>
      <div
        className={`d-flex flex-wrap justify-content-evenly my-4 ${Styles.jobcardinfo}`}
      >
        <div
          key={props.data.id}
          onClick={() =>
            navigate('/newapplicant', { state: { id: props.data.id } })
          }
        >
          <div className={`${Styles.jobcarddetailsl}`}>
            <p className="ogsfonts24 text-center p-4">
              {props.data.applicants}
            </p>
          </div>
          <p className="ogsfonts14 text-center">Applied</p>
        </div>
        {/* <div>
          <div className={`${Styles.jobcarddetails}`}>
            {' '}
            <p className="ogsfonts24 text-center p-4">18</p>
          </div>
          <p className="ogsfonts14 text-center"> Reviewed</p>
        </div>
        <div>
          <div className={`${Styles.jobcarddetailsb}`}>
            {' '}
            <p className="ogsfonts24 text-center p-4">18</p>
          </div>
          <p className="ogsfonts14 text-center">shortlisted</p>
        </div> */}
      </div>
      {/* <div className="d-flex flex-wrap m-0 ">
        <h1 className="ogsfonts18 mx-1">PKR 27K - 46K </h1>
        <p className="ogsfonts14">Average salary based on similar jobs</p>
      </div> */}
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        {/* <div className="d-flex flex-wrap">
          <p className="my-0 ogsfonts14">63 Similar jobs</p>
          <p className="my-0 mx-sm-3 ogsfonts14">96 Total visits</p>
        </div> */}
        <div className="d-flex">
          <div>
            <p className="my-0 mx-sm-3 ogsfonts14">
              Expiry Date: {props.data.last_date_apply}
            </p>
          </div>
          <FacebookShareButton
            url={'https://3.14.27.53:3002'}
            className={`mx-2 Demo__some-network__share-button ${Styles.csdbtn}`}
          >
            <span className="mx-2">
              <img src={shareicon} />
            </span>
            Share
          </FacebookShareButton>

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
