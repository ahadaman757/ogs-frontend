import Styles from './cv.module.css';
import useradd from '../../Assets/Images/New folder (3)/user-add.svg';
import userremove from '../../Assets/Images/New folder (3)/user-remove 01.svg';
import check from '../../Assets/Images/New folder (3)/check mark-rectangle.svg';
import eyeicon from '../../Assets/Images/New folder (3)/eye.svg';
import downicon from '../../Assets/Images/New folder (3)/download.svg';
import selecticon from '../../Assets/Images/check mark-rectangle.svg';
import profimg from '../../Assets/Images/Rectangle 1246.png';
import likeicon from '../../Assets/Images/New folder (3)/like.svg';
import dislikeicon from '../../Assets/Images/New folder (3)/dislike.svg';
import { useState } from 'react';
import axios from 'axios';
import { BasicDocument } from '../pdfDownload';
import { PDFDownloadLink, Image } from '@react-pdf/renderer';
const Cv = ({ applicant, job_id }) => {
  const cv = {
    contact_number: '03458914711',
  };
  const [shortlisted, setShortlisted] = useState(applicant.is_shortlisted);
  const [rejected, setRejected] = useState(applicant.is_rejected);
  const [download, setdownload] = useState(false);
  console.log(applicant.cv_id);
  console.log(applicant.is_shortlisted);
  const updateCvView = (currentStatus) => {
    axios
      .post('https://3.110.201.21:3002/jobs/job_applicants_status_update', {
        status: !shortlisted,
        column: 'is_shortlisted',
        cv_id: applicant.cv_id,
        job_id: job_id,
      })
      .then((res) => {
        setShortlisted(!shortlisted);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const rejectCv = (currentStatus) => {
    axios
      .post('https://3.110.201.21:3002/jobs/job_applicants_status_update', {
        status: !rejected,
        cv_id: applicant.cv_id,
        job_id: job_id,
        column: 'is_rejected',
      })
      .then((res) => {
        setRejected(!rejected);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className={` p-4 my-4 ${Styles.Cvmainds}`}>
        <div className="d-flex  justify-content-between">
          <p className="m-0 my-2 ogsfonts14 ">Viewed</p>
          <button className={` my-2 ogsfonts14 ${Styles.cvheadicon}`}>
            <span>
              <img className="me-1" src={eyeicon} />
            </span>
            Preview CV
          </button>
          <button
            onClick={() => setdownload(true)}
            className={`my-2 ogsfonts14 ${Styles.cvheadicon}`}
          >
            <span>
              <img className="me-1" src={downicon} />
            </span>
            <PDFDownloadLink
              className="my-2"
              document={<BasicDocument cv_data={applicant} />}
              fileName="somename.pdf"
            >
              {({ loading, error }) => {
                console.log(error);
                return loading ? 'Loading document...' : 'Download now!';
              }}
            </PDFDownloadLink>
          </button>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-3">
            <img
              style={{ width: '124px', height: '140px' }}
              className="img-fluid"
              src={`https://3.110.201.21:3002/${applicant?.cv_image?.replace(
                'images',
                'images/'
              )}`}
            />
          </div>
          <div className="col-md-9">
            <div className="d-flex flex-wrap">
              <p className="me-3 ogsfonts20">
                {applicant.first_name + ' ' + applicant.last_name}
              </p>
              <p className="ogsfonts14">
                {`(${applicant.gender_title}, ${applicant.age}, ${applicant.country} ${applicant.city})`}{' '}
              </p>
            </div>
            <div className="d-flex flex-wrap">
              {' '}
              <p className="me-3 ogsfonts16">CV Number:</p>
              <p className="ogsfonts14">
                {' '}
                {`${applicant.cv_id}, Apply Date: ${applicant.applied_at}`}
              </p>
            </div>
            <div className="d-flex flex-wrap">
              {' '}
              <p className="me-3 ogsfonts16">Experience:</p>
              <p className="ogsfonts14">
                Content analyst at S&P Global Market Intelligence (Aug 2016 -
                Dec 2018)
              </p>
            </div>
            <div className="d-flex flex-wrap">
              {' '}
              <p className="me-3 ogsfonts16">Education:</p>
              <p className="ogsfonts14">{`${applicant.qualification}`}</p>
            </div>
            <div className="d-flex">
              <p className="me-3 ogsfonts16">Career Level:</p>
              <p className="ogsfonts14">{applicant.career_title}</p>
            </div>
            <div className="d-flex flex-wrap">
              {' '}
              <p className="me-3 ogsfonts16">Industry:</p>
              <p className="ogsfonts14">{applicant.business_type_name}</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="me-3 ogsfonts16">Skills:</p>
              <div className="d-flex flex-wrap">
                <p className={`p-2 me-3 ${Styles.skills}`}>Skills</p>
                <p className={`p-2 me-3 ${Styles.skills}`}>Skills</p>
                <p className={`p-2 me-3 ${Styles.skills}`}>Skills</p>
                <p className={`p-2 me-3 ${Styles.skills}`}>Skills</p>
                <p className={`p-2 me-3 ${Styles.skills}`}>Skills</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-wrap justify-content-between">
          <div>
            <p className="text-center ogsfonts14">Years of Experience</p>
            <p className="text-center ogsfonts18 m-0">
              {applicant.max_experience}
            </p>
          </div>
          <div>
            <p className="text-center ogsfonts14">Current Salary</p>
            <p className="text-center ogsfonts18 m-0">
              {applicant.current_salary} /Month
            </p>
          </div>
          <div>
            <p className="text-center ogsfonts14">Expected Salary</p>
            <p className="text-center ogsfonts18 m-0">
              {applicant.expected_salary} /Month
            </p>
          </div>
        </div>
      </div>

      <div className={` p-4 my-4 ${Styles.Cvmainmb}`}>
        <div className="d-flex  justify-content-between">
          <p className="m-0 my-2 ogsfonts14 ">Viewed</p>
          <button className={` my-2 ogsfonts14 ${Styles.cvheadicon}`}>
            <span>
              <img className="me-1" src={eyeicon} />
            </span>
            Preview CV
          </button>
          <button
            onClick={() => setdownload(true)}
            className={`my-2 ogsfonts14 ${Styles.cvheadicon}`}
          >
            <span>
              <img className="me-1" src={downicon} />
            </span>
            <PDFDownloadLink
              className="my-2"
              document={<BasicDocument cv_data={applicant} />}
              fileName="somename.pdf"
            >
              {({ loading, error }) => {
                console.log(error);
                return loading ? 'Loading document...' : 'Download now!';
              }}
            </PDFDownloadLink>
          </button>
        </div>
        <hr />
        <div className="">
          <div className=" row">
            <div className="col-6">
              <img
                style={{ width: '124px', height: '140px' }}
                className="img-fluid"
                src={`https://3.110.201.21:3002/${applicant?.cv_image?.replace(
                  'images',
                  'images/'
                )}`}
              />
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap">
                <p className="me-3 ogsfonts20">
                  {applicant.first_name + ' ' + applicant.last_name}
                </p>
                <p className="ogsfonts14">
                  {`(${applicant.gender_title}, ${applicant.age}, ${applicant.country} ${applicant.city})`}{' '}
                </p>
              </div>
              <div className="d-flex flex-wrap">
                {' '}
                <p className="me-3 ogsfonts16">CV Number:</p>
                <p className="ogsfonts14"> {`${applicant.cv_id} `}</p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="row">
              <div className="col-6">
                <p className="ogsfonts14"> Apply Date:</p>
              </div>
              <div className="col-6">
                <p className="ogsfonts14">{applicant.applied_at}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                {' '}
                <p className="me-3 ogsfonts16">Experience:</p>
              </div>
              <div className="col-6">
                <p className="ogsfonts14">
                  Content analyst at S&P Global Market Intelligence (Aug 2016 -
                  Dec 2018)
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                {' '}
                <p className="me-3 ogsfonts16">Education:</p>
              </div>
              <div className="col-6">
                {' '}
                <p className="ogsfonts14">{`${applicant.qualification}`}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6"></div>
            </div>
            <div className="row">
              <div className="col-6">
                <p className="me-3 ogsfonts16">Career Level:</p>
              </div>
              <div className="col-6">
                {' '}
                <p className="ogsfonts14">{applicant.career_title}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p className="me-3 ogsfonts16">Industry:</p>
              </div>
              <div className="col-6">
                {' '}
                <p className="ogsfonts14">{applicant.business_type_name}</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-wrap justify-content-between">
          <div>
            <p className="text-center ogsfonts14">Years of Experience</p>
            <p className="text-center ogsfonts18 m-0">
              {applicant.max_experience}
            </p>
          </div>
          <div>
            <p className="text-center ogsfonts14">Current Salary</p>
            <p className="text-center ogsfonts18 m-0">
              {applicant.current_salary} /Month
            </p>
          </div>
          <div>
            <p className="text-center ogsfonts14">Expected Salary</p>
            <p className="text-center ogsfonts18 m-0">
              {applicant.expected_salary} /Month
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cv;
