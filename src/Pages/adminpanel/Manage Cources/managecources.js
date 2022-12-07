import Styles from './managecources.module.css';
import { useEffect, useState } from 'react';
import Adminsidebar from '../../../Components/adminsidebar/adminsidebar';
import InputField from '../../../Components/inputfield/inputfield';
import Table from '../../../Components/table/table';
import check from '../../../Assets/Images/New folder (3)/check mark-rectangle.svg';
import { Formik, useFormik } from 'formik';
import axios from 'axios';

const detail = [
  {
    Code: 'ewe',
    Title: 'qw',
  },
];
const Managecources = () => {
  const [data, setData] = useState();
  const [addCourseThumbnail, setAddCourseThumbnail] = useState();
  const [loading, setLoading] = useState(false);
  const [returnMessage, setReturnMessage] = useState();
  const [uploadStatus, setUploadStatus] = useState('');
  const display = (d) => {
    console.log('value');
    console.log(d);
    setData(d);
  };

  const addCourseFormik = useFormik({
    initialValues: {
      course_name: '',
      course_description: '',
      institute_name: '',
    },
    onSubmit: (values) => {
      setLoading(true);
      setUploadStatus('Adding information to database');
      axios
        .post(
          'http://localhost:3002/admin/addCourse',
          {
            course_name: values.course_name,
            course_description: values.course_description,
            institute_name: values.institute_name,
          },
          {
            headers: {
              accessToken: localStorage.getItem('accessToken'),
            },
          }
        )
        .then((res) => {
          // console.log(res.data);
          uploadThumbnail(res.data.lastId, res.data.offset);
        });
    },
  });

  const uploadThumbnail = (id, offset) => {
    const image = new FormData();
    image.append('file', addCourseThumbnail);
    image.append('id', id);
    image.append('fileName', addCourseThumbnail.name);
    image.append('offset', offset);
    let cid = id;
    setUploadStatus('Uploading Image');
    axios
      .post('http://localhost:3002/admin/addCourseThumbnail', image, {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
        },
      })
      .then((res) => updateCourse(cid, addCourseThumbnail.name));
  };

  const updateCourse = (cid, fName) => {
    axios
      .post(
        'http://localhost:3002/admin/updateCourse',
        {
          offset: cid,
          fName: fName,
        },
        {
          headers: {
            accessToken: localStorage.getItem('accessToken'),
          },
        }
      )
      .then((res) => {
        setReturnMessage('Uploaded');
        setTimeout(() => {
          setReturnMessage('');
        }, 3000);
        setUploadStatus('');
      });
  };

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
              <h1 className="ogsfonts20">Cources Management Section</h1>
              <p className="ogsfonts16">Manage Cources</p>
              <div className="d-flex flex-wrap justify-content-between">
                <div className="d-flex align-items-center"></div>
                <div className="d-flex align-items-center">
                  {' '}
                  <p className="ogsfonts16 m-0 me-3 ">
                    Total Courses Found: 50
                  </p>{' '}
                  <button
                    className={` ogsfonts16 px-4 py-3 ${Styles.btnplode}`}
                    data-bs-toggle="modal"
                    data-bs-target="#addCourses"
                  >
                    Add Course
                  </button>
                </div>
              </div>

              <Table array={detail} Sr={'as'} Code={'asda'} Option={'werer'} />
            </div>
          </div>
        </div>
      </div>
      {/* ADD COURSE POPUP */}
      <div
        className="modal fade"
        id="addCourses"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="d-flex justify-content-between">
                <h1 className="ogsfonts18">Add a course</h1>
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
                <form onSubmit={addCourseFormik.handleSubmit}>
                  {returnMessage == '' ? '' : returnMessage}
                  <label>Course Name</label>
                  <input
                    id="course_name"
                    name="course_name"
                    type="text"
                    onChange={addCourseFormik.handleChange}
                    value={addCourseFormik.values.course_name}
                    required
                  />
                  <br />
                  <br />
                  <label>Course Description</label>
                  <input
                    id="course_description"
                    name="course_description"
                    type="text"
                    onChange={addCourseFormik.handleChange}
                    value={addCourseFormik.values.course_description}
                    required
                  />
                  <br />
                  <br />
                  <label>Institute Name</label>
                  <input
                    id="institute_name"
                    name="institute_name"
                    type="text"
                    onChange={addCourseFormik.handleChange}
                    value={addCourseFormik.values.institute_name}
                    required
                  />
                  <br />
                  <br />

                  <input
                    type="file"
                    required
                    onChange={(e) => {
                      let fileExt = e.target.files[0].name.split('.').pop();
                      if (
                        fileExt == 'png' ||
                        fileExt == 'jpg' ||
                        fileExt == 'jpeg'
                      ) {
                        setAddCourseThumbnail(e.target.files[0]);
                      } else {
                        console.log(fileExt);
                        alert('Only images are supported');
                      }
                    }}
                  />
                  <br />
                  <br />
                  <button type="submit">
                    {uploadStatus == '' ? 'Add Course' : uploadStatus}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Managecources;
