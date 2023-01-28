import Styles from './Manageyoucvs.module.css';
import Seekersidebar from '../../../Components/seekersidebar/seekersidebar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SeekercvCard from './seekercvCard';
import { PDFDownloadLink, Image } from '@react-pdf/renderer';
import { useNavigate } from 'react-router-dom';
import jwtCheck from '../../../system/jwtChecker';

const Manageyoucvs = () => {
  const [data, Setdata] = useState('');
  const [UserCvs, setUserCvs] = useState([]);
  const navigate = useNavigate();
  if (jwtCheck(1) === false) {
    navigate('/seekerlogin');
  }
  const display = (d) => {
    Setdata(d);
  };
  useEffect(() => {
    axios
      .get('https://3.14.27.53:3003/users/my_cvs', {
        headers: {
          accesstoken: localStorage.getItem('accessToken'),
        },
      })
      .then((res) => {
        setUserCvs(res.data);
      });
  }, []);

  return (
    <div className="asdesaser">
      <Seekersidebar side={display} />
      <div
        className={`pt-5 ${Styles.Manageyoucvsmain} ${
          data ? 'sidebarmarginmin' : 'sidebarmarginmax'
        }`}
      >
        <div className="container">
          <div
            className={`p-3 my-3 d-flex justify-content-between  ${Styles.Myjobshead}`}
          >
            <h1 className="ogsfonts18 m-11">Manage Your CVs</h1>
            <div className="">
              <button
                onClick={() => {
                  navigate('/createcv');
                }}
                type="button"
                className={`btn btn-primary ogsfonts16 ${Styles.modalbtn}`}
              >
                Create New CV
              </button>
            </div>
          </div>
          {UserCvs.length &&
            UserCvs.map((cv, i) => {
              return <SeekercvCard key={i} cv_data={cv} />;
            })}
        </div>
      </div>
    </div>
  );
};
export default Manageyoucvs;
