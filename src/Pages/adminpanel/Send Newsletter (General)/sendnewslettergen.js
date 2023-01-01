import Styles from './sendnewslettergen.module.css';
import { useEffect, useState } from 'react';
import Adminsidebar from '../../../Components/adminsidebar/adminsidebar';
import InputField from '../../../Components/inputfield/inputfield';
import Table from '../../../Components/table/table';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { Markup } from 'interweave';
import jwtCheck from '../../../system/jwtChecker';
import { useNavigate } from 'react-router-dom';

const detail = [
  {
    Code: 'ewe',
    Title: 'qw',
  },
];
const Sendnewslettergen = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  if (jwtCheck(3) === false) {
    navigate('/adminlogin');
  }

  const display = (d) => {
    console.log('value');
    console.log(d);
    setData(d);
  };
  const [editorData, setEditorData] = useState();
  const [emailHeading, setEmailHeading] = useState();
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
            <h1 className="ogsfonts38">Welcomes</h1>
            <h1 className="ogsfonts20">to OGS manpower Administration Panel</h1>
            <div className={`p-4 my-5 ${Styles.maincontainer}`}>
              <h1 className="ogsfonts20">Newsletter Management Section</h1>
              <p className="ogsfonts16">Send Newsletter (General)</p>
              <div className="row">
                <div className="col-md-5 me-3">
                  <div className="d-flex justify-content-start">
                    <br />
                    <input
                      className="mb-3 px-4 pt-2 pb-2"
                      placeholder="Enter Heading..."
                      onChange={(e) => setEmailHeading(e.target.value)}
                    />
                    <br />
                  </div>
                  <div className="d-flex justify-content-between">
                    <br />
                    <CKEditor
                      editor={ClassicEditor}
                      data="<p>Hello from CKEditor 5!</p>"
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setEditorData(data);
                        console.log({ event, editor, data });
                      }}
                      onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                      }}
                      onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                      }}
                    />
                  </div>
                  <div className="d-flex justify-content-start">
                    <br />
                    <button
                      className={`px-4 py-3 ogsfonts14 mt-5  ${Styles.btnc}`}
                      onClick={() => {
                        axios.post(
                          'https://3.110.201.21:3002/admin/addNewsGeneral',
                          {
                            data: editorData,
                          },
                          {
                            headers: {
                              accessToken: localStorage.getItem('accessToken'),
                            },
                          }
                        );
                      }}
                    >
                      Send & Save
                    </button>
                  </div>
                </div>
              </div>
              <br />
              <h2>Peview</h2>
              <hr />
              <div style={{}}>
                <div
                  style={{
                    width: '600px',
                    background: '#f5f5f5',
                    color: '#FE1CBD',
                    fontSize: '12px',
                    textAlign: 'center',
                  }}
                >
                  <h1 style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                    {emailHeading}
                  </h1>
                </div>
                <div
                  style={{
                    width: '600px',
                    color: 'black',
                    fontSize: '15px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    background: '#f5f5f5',
                    marginTop: '-10px',
                    paddingBottom: '20px',
                    fontFamily: 'Arial',
                  }}
                >
                  <Markup content={editorData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sendnewslettergen;
