import Styles from './aboutus.module.css';
import { useEffect, useState } from 'react';
import Adminsidebar from '../../../Components/adminsidebar/adminsidebar';
import InputField from '../../../Components/inputfield/inputfield';
import TextEditer from '../../../Components/textediter/textediter';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import jwtCheck from '../../../system/jwtChecker';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Markup } from 'interweave';
const Aboutus = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [oldData, setOldData] = useState('');
  const navigate = useNavigate();
  const display = (d) => {
    console.log('value');
    console.log(d);
    setData(d);
  };
  const [editorData, setEditorData] = useState();

  useEffect(() => {
    if (jwtCheck(3) === false) {
      navigate('/adminlogin');
    }
    axios
      .get('https://3.110.201.21:3002/general/getAboutUs')
      .then((res) => setOldData(res.data.content[0][0].content));
    setLoading(false);
  }, [loading]);

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
              <h1 className="ogsfonts20">Website Management Section</h1>
              <p className="ogsfonts16">Edit About Us Content</p>
              <div className="row">
                <div className="col-md-5 me-3">
                  <div className="d-flex justify-content-between">
                    <br />
                    <CKEditor
                      editor={ClassicEditor}
                      data={
                        loading
                          ? 'Loading previous data please wait...'
                          : oldData
                      }
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
                        axios
                          .post(
                            'https://3.110.201.21:3002/admin/changeAboutUs',
                            {
                              content: editorData,
                            },
                            {
                              headers: {
                                accessToken:
                                  localStorage.getItem('accessToken'),
                              },
                            }
                          )
                          .then((res) => alert(res.data.message));
                      }}
                    >
                      Save
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
                    width: '100%',
                    background: '#f5f5f5',
                    fontSize: '12px',
                    textAlign: 'center',
                  }}
                >
                  <h1 style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                    About Us
                  </h1>
                  <div
                    style={{
                      textAlign: 'left',
                      paddingLeft: '100px',
                      paddingRight: '100px',
                      paddingBottom: '50px',
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
    </div>
  );
};
export default Aboutus;
