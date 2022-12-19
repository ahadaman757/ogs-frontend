import Styles from './managecategory.module.css';
import { useEffect, useState } from 'react';
import Adminsidebar from '../../../Components/adminsidebar/adminsidebar';
import InputField from '../../../Components/inputfield/inputfield';
import Table from '../../../Components/table/table';
import check from '../../../Assets/Images/New folder (3)/check mark-rectangle.svg';
import ManageCategoriesTable from '../../../Components/table/ManageCategoriesTable';

const detail = [
  {
    Code: 'ewe',
    Title: 'qw',
  },
];
const Managecategory = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const display = (d) => {
    setData(d);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get('page')) || 1;
    if (page !== pager.currentPage) {
      axios
        .post(
          `http://3.110.201.21:3002/admin/getCategories`,
          { page: page },
          {
            headers: {
              accessToken: localStorage.getItem('accessToken'),
            },
          }
        )
        .then((res) => {
          console.log(res);
        });
    }
  }, []);

  return (
    <div className={`${Styles.back}`}>
      <Adminsidebar side={display} />
      <div
        className={`${Styles.Managejobsmain} ${
          data ? 'adminsider' : 'sidebarmarginmax'
        }`}
      >
        <div className="container">
          <div className="mt-5">
            <h1 className="ogsfonts38">Welcome</h1>
            <h1 className="ogsfonts20">to OGS manpower Administration Panel</h1>
            <div className={`p-4 my-5 ${Styles.maincontainer}`}>
              <h1 className="ogsfonts20">Category Management Section</h1>
              <p className="ogsfonts16">Manage Category</p>
              <div className="d-flex flex-wrap justify-content-between">
                <div className="d-flex align-items-center">
                  <p className="ogsfonts16 m-0 me-3 ">Select:</p>
                  <button className={`me-3 ogsfonts16 ${Styles.btntick}`}>
                    <span>
                      <img className="me-2 " src={check} />
                    </span>
                    All
                  </button>
                  <button className={` ogsfonts16 ${Styles.btntick}`}>
                    <span>
                      <img className="me-2" src={check} />
                    </span>
                    None
                  </button>
                </div>
                <div className="d-flex align-items-center">
                  {' '}
                  <p className="ogsfonts16 m-0 me-3 ">
                    Total Subscriber Found: 50
                  </p>{' '}
                  <button
                    className={` ogsfonts16 px-4 py-3 ${Styles.btnplode}`}
                  >
                    Upload Csv
                  </button>
                </div>
              </div>

              <ManageCategoriesTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Managecategory;
