import { map } from 'jquery';
import React, { useState } from 'react';
import Tick from '../../Assets/Images/tick.svg';
import removered from '../../Assets/Images/removered.svg';
import Styles from './table.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ManageJobsTable = (props) => {
  const [approve_status, setapprove_status] = useState();

  const changeApproveStatus = (current_status, id) => {
    axios
      .put(
        'https://3.14.27.53:3003/admin/update_job_column',
        {
          status: current_status,
          column: 'is_approved',
          job_id: id,
        },
        {
          headers: {
            accesstoken: localStorage.getItem('accessToken'),
          },
        }
      )
      .then((res) => {
        console.log();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigate = useNavigate();
  const deleteJob = (e) => {
    axios
      .post('https://3.110.201.21:3003/jobs/admindeletejob', {
        jobId: e,
        headers: {
          accesstoken: localStorage.getItem('accessToken'),
        },
      })
      .then((response) => {
        if (response.data.code == 1) {
          props.reloadTable();
        }
      });
  };
  return (
    <div className="container py-4">
      <table className="table srolll">
        <thead>
          <tr>
            {props.columns.map((col) => {
              return (
                <th key={col.id} className="ogsfonts14">
                  {' '}
                  {col.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.rows.map((item) => {
            return (
              <tr key={item.id}>
                <th className="ogsfonts14" scope="row">
                  {item.id}
                </th>
                <td className="ogsfonts14">
                  {item.first_name + ' ' + item.last_name}
                </td>
                <td className="ogsfonts14">{item.job_title}</td>
                {/* 
                <td className="ogsfonts14">
                  {new Date(item?.createdAt).getDay() +
                    '/' +
                    new Date(item?.createdAt).getMonth() +
                    '/' +
                    new Date(item?.createdAt).getFullYear()}
                </td> */}
                <td onClick={() => changeApproveStatus(1, item.id)}>
                  {item.is_approved ? 'Approved' : 'Pending Approval'}
                </td>
                {/* <td className="ogsfonts14">{item.Address}</td> */}
                <td className="ogsfonts14">
                  {item.is_approved ? (
                    <button className={`${Styles.btn}`}>
                      <span>
                        <img
                          src={removered}
                          title="Deactivate"
                          onClick={() => changeApproveStatus(0, item.id)}
                        />
                      </span>
                    </button>
                  ) : (
                    <button className={`${Styles.btn}`}>
                      <span>
                        <img
                          src={Tick}
                          title="Approve"
                          onClick={() => {
                            changeApproveStatus(1, item.id);
                          }}
                        />
                      </span>
                    </button>
                  )}
                  <button className={`${Styles.btn}`}>
                    <span>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/481/481874.png"
                        onClick={() => navigate(`/admineditjob/${item.id}`)}
                        style={{ width: '13px' }}
                      />
                    </span>
                  </button>

                  <button className={`${Styles.btn}`}>
                    <span>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/484/484611.png"
                        title="Delete Job"
                        style={{ width: '13px' }}
                        onClick={() => {
                          deleteJob(item.id);
                        }}
                      />
                    </span>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageJobsTable;
