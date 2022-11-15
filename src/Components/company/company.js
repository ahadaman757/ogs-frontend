import img1 from "../../Assets/Images/Subtract.svg";
import img2 from "../../Assets/Images/Sub2.svg";
import img3 from "../../Assets/Images/Vector.svg";
import img4 from "../../Assets/Images/edit-rectangle.svg";
import Styles from "./company.module.css";
const Company = () => {
  return (
    <div className={` mb-5 my-2 ms-md-2 p-3 ${Styles.Companymain}`}>
      <div>
        <h1 class=" ogsfonts20 ">Company</h1>
      </div>

      <table class="table">
        <thead class="heading">
          <tr>
            {/* <!-- <th scope="col">#</th> --> */}
            <th scope="col">Company Name</th>
            <th scope="col">Created By</th>
            <th scope="col">Team Members</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody class="inner-section">
          <tr>
            {/* <!-- <th scope="row">1</th> --> */}
            <td>OGS Manpower</td>
            <td>Basit Malik</td>
            <td>1</td>
            <td>
              <img className="me-2" src={img4} />
              <img className="me-2" src={img1} />
              <img className="me-2" src={img2} />
              <img className="me-2" src={img3} />
            </td>
          </tr>
          <tr>
            {/* <!-- <th scope="row">2</th> --> */}
            <td>OGS Manpower</td>
            <td>Basit Malik</td>
            <td>1</td>
            <td>
              <img className="me-2" src={img4} />
              <img className="me-2" src={img1} />
              <img className="me-2" src={img2} />
              <img className="me-2" src={img3} />
            </td>
          </tr>
          {/* <!-- <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr> --> */}
        </tbody>
      </table>
    </div>
  );
};
export default Company;
