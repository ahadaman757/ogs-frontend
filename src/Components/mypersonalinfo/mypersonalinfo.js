import Styles from "./mypersonalinfo.module.css";
import InputField from "../inputfield/inputfield";
import React, { useEffect, useState } from "react";
import { TextInput, List } from "../../Pages/Forms/InputFields";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { UploadImageSide } from "../../Pages/authpages/Registeration";


const Personalinfo = ({ }) => {
  const [LogoData, setLogoData] = useState()
  const [photoSelected, setphotoSelected] = useState();
  const [userData, setUserData] = useState();
  const handleInputChange = (event) => {
    setLogoData(event.target.files[0]);
  };
  const [employerRegsiterOptions, setemployerRegsiterOptions] = useState()
  console.log(userData)
  useEffect(() => {
    axios
      .get("http://3.110.201.21:3002/users/me", {
        headers: {
          accesstoken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log(res.data)
        setUserData(res.data);
        const data = res.data
        ResetProfileFormik.values.first_name = data.first_name
        ResetProfileFormik.values.last_name = data.last_name
        ResetProfileFormik.values.position = data.position_id
        ResetProfileFormik.values.country = data.country_id
        ResetProfileFormik.values.city = data.city_id
        ResetProfileFormik.values.contact_number = data.business_mobile_number
        ResetProfileFormik.values.address = data.business_address
      }).catch(error => {
        console.log(error)
      });
    axios.get('http://3.110.201.21:3002/employer_register_options').then(res => {
      setemployerRegsiterOptions(res.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])
  const ResetProfileFormik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      position: "",
      country: "",
      city: "",
      contact_number: "",
      address: ""
    },

    validationSchema: Yup.object({
      first_name: Yup.string().required('Required'),
      last_name: Yup.string().required('Required'),
      position: Yup.string().required('Required'),
      country: Yup.string().required('Required'),
      city: Yup.string().required('city is Required'),
      contact_number: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
    }),
    onSubmit: (values => {
      console.log("submitted")
      const fullFormData = values
      const formdata = new FormData();
      formdata.append('image', LogoData)
      for (var key in fullFormData) {
        formdata.append(key, fullFormData[key]);
      }
      console.log("accesstoken")
      const accesstoken = localStorage.getItem("accessToken")
      console.log("accesstoken")
      console.log(accesstoken)
      axios.post('http://3.110.201.21:3002/users/employer_update_profile', formdata, {
        headers: {
          accesstoken: localStorage.getItem("accessToken"),
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        }

      }).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    })
  })
  const [cities, setcities] = useState()
  useEffect(() => {
    axios.post('http://3.110.201.21:3002/get_city_by_country_id', {
      country_id: ResetProfileFormik.values.country || 1
    }).then(res => {

      console.log(res)
      setcities(res.data)
    }).catch(error => {
      console.log(error)
    })
  }, [ResetProfileFormik.values.country])

  return (
    <div className="row">
      <form onSubmit={ResetProfileFormik.handleSubmit} className={` p-4 mb-4 ${Styles.Personalinfomain}`}>
        <h1 className="ogsfonts20 ">My Personal Info</h1>
        <div className="row">
          <div className="col-md-6">
            <TextInput id="first_name" label="First Name" formik={ResetProfileFormik} />
            <TextInput id="last_name" label="Last Name" formik={ResetProfileFormik} />
            <List id="position" options={employerRegsiterOptions?.positions} label="Position" formik={ResetProfileFormik} />
            <List options={employerRegsiterOptions?.countries} id="country" label="Country" formik={ResetProfileFormik} />
            <List options={cities} id="city" label="City" formik={ResetProfileFormik} />
            <TextInput id="contact_number" label="Contact Number" formik={ResetProfileFormik} />
            <TextInput type='textarea' id="address" label="Address" formik={ResetProfileFormik} />

          </div>
          <div className="col-md-6">
            <div className="container d-flex align-items-center justify-content-center flex-column">
              <div className={`${Styles.inputfileh1}`}>
                <h1 className="ogsfonts16 text-start">Company Logo</h1>
              </div>
              <UploadImageSide title="update company logo" setLogoData={setLogoData} />
              {/* logo image */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex my-3 justify-content-end">
              <button onClick={ResetProfileFormik.resetForm} className={`me-3 ${Styles.profcbtn}`}>Cancel</button>
              <button type="submit" className={`me-2 ${Styles.profsbtn}`}>Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Personalinfo;
