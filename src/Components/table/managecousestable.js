import { map } from 'jquery';
import Tick from '../../Assets/Images/tick.svg';
import removered from '../../Assets/Images/removered.svg';
import Styles from './table.module.css';
import axios from 'axios';
import { useState } from 'react';

const Table = (props) => {
  const [update, setupdate] = useState(false);
  return (
    <div className="container py-4">
      <table className="table srolll">
        <thead>
          <tr>
            <th className="ogsfonts14"> {props.Sr}</th>
            <th className="ogsfonts14">{props.title}</th>
            <th className="ogsfonts14">{props.description}</th>
            <th className="ogsfonts14">{props.institute_name}</th>
            <th className="ogsfonts14">{props.action}</th>
          </tr>
        </thead>
        <tbody>
          {props.array.map((item) => {
            return (
              <tr>
                <th className="ogsfonts14" scope="row">
                  {props.array.indexOf(item)}
                </th>

                <td className="ogsfonts14">{item.title}</td>
                <td className="ogsfonts14">{item.description}</td>
                <td className="ogsfonts14">{item.institute_name}</td>
                <td className="ogsfonts14">
                  <img
                    src={`http://3.110.201.21:3002/public/` + item.thumbnail}
                  />
                </td>

                <td className="ogsfonts14">
                  <button
                    onClick={() => {
                      axios
                        .post(
                          'http://3.110.201.21:3002/admin/deleteCourse',
                          {
                            id: item.id,
                          },
                          {
                            headers: {
                              accessToken: localStorage.getItem('accessToken'),
                            },
                          }
                        )
                        .then((res) => setupdate(!update));
                      props.updateHandler(update);
                    }}
                    className={`${Styles.btn}`}
                  >
                    <span>
                      <img src={removered} />
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

export default Table;
