import React from 'react';
import Styles from './Manageyoucvs.module.css';

import calender from '../../../Assets/Images/New folder (3)/calendar 01.svg';
import trash from '../../../Assets/Images/New folder (3)/trash 3.svg';
import { useNavigate } from 'react-router-dom';
import check from '../../../Assets/Images/New folder (3)/check mark-rectangle.svg';
import Inputfield from '../../../Components/inputfield/inputfield';
import InputSelect from '../../../Components/inputselect/inputfselect';
import { BasicDocument } from '../../../Components/pdfDownload.js';
import { PDFDownloadLink, Image } from '@react-pdf/renderer';

function SeekercvCard({ cv_data }) {
  const navigate = useNavigate();
  function navigateEditCv() {
    navigate('/editcv', { state: { cv_data: cv_data } });
  }
  return (
    <div className={`p-3 my-3 ${Styles.jacon}`}>
      <div className="d-flex flex-wrap justify-content-between">
        <div>
          <h1 className="ogsfonts18">Your Cvs</h1>
        </div>
        <div className="d-flex justify-content-between align-items-center"></div>
      </div>
      <div className="row">
        <div className="col-md-4 col-12">
          <div
            style={{
              width: '200px',
              height: '200px',
              backgroundImage: `url(https://3.14.27.53:3003/${cv_data.cv_image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          ></div>
        </div>
        <div className="col-md-4 col-12">
          <div>
            <b>Name: {cv_data.first_name + ' ' + cv_data.last_name}</b>
            <br />
            <b>Mobile Number: {cv_data.mobile_number}</b>
            <br />
            <b>Email Address: {cv_data.email}</b>
            <br />
            <b>Passport Number: {cv_data.passport_number}</b>
            <br />
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div>
            <b>Degree Title: {cv_data.degree_title}</b>
            <br />
            <b>Institution: {cv_data.institution}</b>
            <br />
            <b>Skin Color: {cv_data.skin_color}</b>
            <br />
            <b>Weight: {cv_data.weight + ' KG'}</b>
            <br />
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-between my-3">
        <div className="d-flex ">
          {/* <img className="me-2" src={invoice} /> */}
          {/* <p className="ogsfonts16 m-1">Make Defualt</p> */}
          <p className="bold">CV no: {cv_data.cv_id}</p>
        </div>
        <div>
          <button className={`me-3 ${Styles.ctebtn}`}>
            <span>
              <img src={trash} />
            </span>
          </button>
          <button className={`${Styles.ctebtn}`}>
            <span>
              <PDFDownloadLink
                document={<BasicDocument cv_data={cv_data} />}
                fileName="somename.pdf"
              >
                {({ loading, error }) => {
                  console.log(error);
                  return loading ? 'Loading document...' : 'Download now!';
                }}
              </PDFDownloadLink>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SeekercvCard;
