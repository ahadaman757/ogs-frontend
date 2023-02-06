import Styles from './jobpopseeker.module.css';
import { useState, useEffect } from 'react';
import Seekersidebar from '../seekersidebar/seekersidebar';
import removeicon from '../../Assets/Images/remove.svg';
import gasco from '../../Assets/Images/gasco.png';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
const JobShow = () => {
  const { state } = useLocation();
  const { job_data, AppliedCvs } = state;
  const [skills, setskills] = useState();
  const [data, Setdata] = useState('');


  const display = (d) => {
    console.log('value');
    console.log(d);
    Setdata(d);
  };
  useEffect(() => {
    const job_id = job_data.id;
    axios
      .get(`https://3.14.27.53:3003/skills_for_job_by_id/${job_id}`)
      .then((res) => {
        setskills(res.data.skills);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(UserCvs, '344344');
  return (
    <div>
      <div
        className={`pt-4 px-1 ${Styles.jobpopmain} ${
          data ? 'sidebarmarginmin' : 'sidebarmarginmax'
        }`}
      >
        <div className={`container mt-5 p-4 ${Styles.Jobpopchild}`}>
          <div className={`d-flex  flex-md-row flex-column-reverse   `}>
            <div className="pe-5">
              <img
                src={`https://3.14.27.53:3003/images/${job_data.company_logo}`}
              />
            </div>
            <div>
              <h1 className="ogsfonts32">{job_data.job_title}</h1>
              <div className="d-flex">
                <h1 className="ogsfonts18 my-3">{job_data.company_name}</h1>
                <p className=" mx-2 ogsfonts16 color404040 my-3">
                  <span>
                    <img />
                  </span>
                  {job_data.city}, {job_data.country}
                </p>
              </div>
              <h1 className="ogsfonts18 my-3">
                {' '}
                {job_data.min_salary ? job_data.min_salary + '-' : null}{' '}
                {job_data.max_salary}{' '}
              </h1>
              <p className="ogsfonts16 color404040 my-4">
                <span>
                  <img />
                </span>
                Posted {job_data.posted_at}
              </p>
            </div>
          </div>
          <div className="my-4">
            <h1 className="ogsfonts32">Job Description</h1>
            <p className="ogsfonts16 color404040">
              {job_data.job_description
                ? job_data.job_description
                : 'No Desscription'}
            </p>
          </div>
          <div>
            <h1 className="ogsfonts32">Skills</h1>
            <div className="d-flex flex-wrap">
              {skills?.length && skills[0].skill_id
                ? skills.map((skill) => {
                    return (
                      <h2
                        className={`text-center p-3 me-4 my-3 ogsfonts16 ${Styles.skillset}`}
                      >
                        {skill.skill}
                      </h2>
                    );
                  })
                : 'No Skills'}
            </div>
          </div>
          <div className="my-5">
            <h1 className="ogsfonts32">Job Description</h1>
            <div className="d-flex">
              <div className="me-3">
                <h1 className="ogsfonts18 my-3">Job Channel:</h1>
                <h1 className="ogsfonts18 my-3">Industry: </h1>
                <h1 className="ogsfonts18 my-3">Functional Area:</h1>
                <h1 className="ogsfonts18 my-3">Total Positions:</h1>
                <h1 className="ogsfonts18 my-3">Job Type:</h1>
                <h1 className="ogsfonts18 my-3">Job Shift:</h1>
                <h1 className="ogsfonts18 my-3">Job Location:</h1>
                <h1 className="ogsfonts18 my-3">Gender:</h1>
                <h1 className="ogsfonts18 my-3">Minimum Education: </h1>
                <h1 className="ogsfonts18 my-3">Career Level: </h1>
                <h1 className="ogsfonts18 my-3">Maximum Experience: </h1>
                <h1 className="ogsfonts18 my-3">Apply Before:</h1>
                <h1 className="ogsfonts18 my-3">Posting Date:</h1>
              </div>
              <div>
                <h1 className="ogsfonts18 my-3">Women Jobs</h1>
                <h1 className="ogsfonts18 my-3">{job_data.industry}</h1>
                <h1 className="ogsfonts18 my-3">
                  Secretarial, Clerical & Front Office
                </h1>
                <h1 className="ogsfonts18 my-3">2 Posts</h1>
                <h1 className="ogsfonts18 my-3">{job_data.job_type}</h1>
                <h1 className="ogsfonts18 my-3">{job_data.job_shift}</h1>
                <h1 className="ogsfonts18 my-3">
                  {job_data.country} , {job_data.city}{' '}
                </h1>
                <h1 className="ogsfonts18 my-3">{job_data.gender_title}</h1>
                <h1 className="ogsfonts18 my-3">{job_data.qualification}</h1>
                <h1 className="ogsfonts18 my-3">{job_data.career_title}</h1>
                <h1 className="ogsfonts18 my-3">{job_data.max_experience}</h1>
                <h1 className="ogsfonts18 my-3">{job_data.last_date_apply}</h1>
                <h1 className="ogsfonts18 my-3">{job_data.posted_at}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobShow;
