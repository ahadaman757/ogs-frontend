import { map } from 'jquery';
import Tick from '../../Assets/Images/tick.svg';
import removered from '../../Assets/Images/removered.svg';
import Styles from './table.module.css';

const ManageCategoriesTable = (props) => {
  return (
    <div className="container py-4">
      <table className="table srolll">
        <thead>
          <tr>
            <th className="ogsfonts14">Sr No.</th>
            <th className="ogsfonts14">Category Name</th>
            <th className="ogsfonts14">Sub Categories</th>
            <th className="ogsfonts14">Edit Name</th>
            <th className="ogsfonts14">Add / Remove Sub Categories</th>
            <th className="ogsfonts14">Delete Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="ogsfonts14">Sr No.</td>
            <td className="ogsfonts14">Category Name</td>
            <td className="ogsfonts14">Sub Categories</td>
            <td className="ogsfonts14">Edit Name</td>
            <td className="ogsfonts14">Add / Remove Sub Categories</td>
            <td className="ogsfonts14">
              <button className={`${Styles.btn}`}>
                <span>
                  <img src={removered} />
                </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageCategoriesTable;
