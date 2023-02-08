import { useEffect, useState } from "react";
import { map } from "jquery";
import Tick from "../../Assets/Images/tick.svg";
import removered from "../../Assets/Images/removered.svg";
import Styles from "./table.module.css";
import axios from "axios";

const ManageAdditionalFilesTable = (props) => {
  const [catEditing, setCatEditing] = useState(0);
  const [catData, setCatData] = useState();
  const [catName, setCatName] = useState();
  const [subCategoryName, setSubCategoryName] = useState();
  const [subCategories, setSubCategories] = useState();
  const [subCategoryLoading, setSubCategoryLoading] = useState(true);
  const changeStatus = (id, status) => {
    axios.post(`https://3.14.27.53:3003/admin/additionalChangeStatus`, {
        id: id,
        status: status
    }, {
                  headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
    }).then(res => {
        if (res.data.code == 1) {
            alert("Status updated!");
        } else {
            alert("An error occured!");
        }
    })
  }
  useEffect(() => {
    axios
      .post(
        `https://3.14.27.53:3003/admin/manageCategories`,
        {
          action: "getcatbyid",
          jobId: catEditing,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => setCatName(response.data.code[0].name));
    axios
      .post(
        `https://3.14.27.53:3003/admin/manageCategories`,
        {
          action: "getsubcategories",
          jobId: catEditing,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        setSubCategories(response.data.code);
        setSubCategoryLoading(false);
      });
  }, [catEditing]);
  return (
    <div className="container py-4" style={{ overflowX: "auto" }}>
      <table className="table srolll">
        <thead>
          <tr>
            <th className="ogsfonts14">Sr No.</th>
            <th className="ogsfonts14">Additional Filename</th>
            <th className="ogsfonts14">Visibility</th>
            <th className="ogsfonts14">Delete Category</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => (
            <tr key={item.id}>
              <td className="ogsfonts14">{item.id}</td>
              <td className="ogsfonts14">{item.label}</td>
              <td className="ogsfonts14">
                {" "}
                {
                    item.display == 1 ?                 <button
                  className={` ogsfonts16`}
                //   data-bs-toggle="modal"
                //   data-bs-target="#AddSubCategory"
                  style={{ background: "none", color: "black", border: "none" }}
                  onClick={() => changeStatus(item.id, 0)}
                >
                  Hide
                </button> :                 <button
                  className={` ogsfonts16`}
                //   data-bs-toggle="modal"
                //   data-bs-target="#AddSubCategory"
                  style={{ background: "none", color: "black", border: "none" }}
                  onClick={() => changeStatus(item.id, 1)}
                >
                  Show
                </button>
                }
              </td>
              <td className="ogsfonts14">
                <button
                  className={`${Styles.btn}`}
                  onClick={() => {
                    axios
                      .post(
                        `https://3.14.27.53:3003/admin/deleteAdditional`,
                        {
                            id: item.id,
                            column_name: item.column_name
                        },
                        {
                          headers: {
                            accessToken: localStorage.getItem("accessToken"),
                          },
                        }
                      )
                      .then((response) => props.handleTableLoading());
                  }}
                >
                  <span>
                    <img src={removered} />
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className="modal fade"
        id="EditCategory"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="d-flex justify-content-between">
                <h1 className="ogsfonts18">Edit a category</h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div
                className={`p-2 container-fluid justify-content-between  ${Styles.modalapply}`}
              >
                <input
                  className="form-control"
                  value={catName}
                  onChange={(e) => setCatName(e.target.value)}
                />
                <br />
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{ width: "100%" }}
                  onClick={() => {
                    axios
                      .post(
                        `https://3.14.27.53:3003/admin/manageCategories`,
                        {
                          action: "updatecatname",
                          jobId: catEditing,
                          newName: catName,
                        },
                        {
                          headers: {
                            accessToken: localStorage.getItem("accessToken"),
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.code == 1) {
                          alert(
                            "Category Name Updated... Refresh to see changes"
                          );
                        }
                      });
                  }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ADD SUB CATEGORY */}
      <div
        className="modal fade"
        id="AddSubCategory"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="d-flex justify-content-between">
                <h1 className="ogsfonts18">Edit a category</h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div
                className={`p-2 container-fluid justify-content-between  ${Styles.modalapply}`}
              >
                <input
                  className="form-control"
                  value={subCategoryName}
                  onChange={(e) => setSubCategoryName(e.target.value)}
                />
                <br />
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{ width: "100%" }}
                  onClick={() => {
                    axios
                      .post(
                        `https://3.14.27.53:3003/admin/manageCategories`,
                        {
                          action: "addSubCategory",
                          jobId: catEditing,
                          catName: subCategoryName,
                        },
                        {
                          headers: {
                            accessToken: localStorage.getItem("accessToken"),
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.code == 1) {
                          alert(
                            "Sub Category Added ... Refresh to see changes"
                          );
                          setSubCategoryName("");
                        }
                      });
                  }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Remove SUB CATEGORY */}
      <div
        className="modal fade"
        id="removeSubCategory"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="d-flex justify-content-between">
                <h1 className="ogsfonts18">Edit a category</h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div
                className={`p-2 container-fluid justify-content-between  ${Styles.modalapply}`}
              >
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {subCategories.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>Delete</td>
                      </tr>
                    ))} */}
                  </tbody>
                </table>
                <br />
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{ width: "100%" }}
                  onClick={() => {
                    axios
                      .post(
                        `https://3.14.27.53:3003/admin/manageCategories`,
                        {
                          action: "addSubCategory",
                          jobId: catEditing,
                          catName: subCategoryName,
                        },
                        {
                          headers: {
                            accessToken: localStorage.getItem("accessToken"),
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.code == 1) {
                          alert(
                            "Sub Category Added ... Refresh to see changes"
                          );
                          setSubCategoryName("");
                        }
                      });
                  }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAdditionalFilesTable;
