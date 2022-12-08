import Styles from '../privacypolicy/privacypolicy.module.css';
import { useEffect, useState } from 'react';
import Adminsidebar from '../../../Components/adminsidebar/adminsidebar';
import InputField from '../../../Components/inputfield/inputfield';
import TextEditer from '../../../Components/textediter/textediter';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { Markup } from 'interweave';

const GeneralSettings = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [ageLoading, setAgeLoading] = useState(true);
  const [minAge, setMinAge] = useState();
  const [maxAge, setMaxAge] = useState();
  const [logoSelected, setLogoSelected] = useState();
  const [oldData, setOldData] = useState('');
  const display = (d) => {
    console.log('value');
    console.log(d);
    setData(d);
  };
  const [editorData, setEditorData] = useState();

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
              <h1 className="ogsfonts20">Content Management Section</h1>
              <p className="ogsfonts16">Edit General Settings</p>
              <div className="row">
                <div className="col-md-5 me-3">
                  <div className="d-flex flex-column">
                    <br />
                    <h3>Logo</h3>
                    <br />
                    <input
                      type="file"
                      onChange={(e) => setLogoSelected(e.target.files[0])}
                    />
                  </div>
                  <div className="d-flex justify-content-start">
                    <br />
                    <button
                      className={`px-4 py-3 ogsfonts14 mt-5  ${Styles.btnc}`}
                      onClick={() => {
                        const image = new FormData();
                        image.append('file', logoSelected);
                        axios
                          .post(
                            'http://3.110.201.21:3002/admin/uploadLogo',
                            image,
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GeneralSettings;
