import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import $, { data } from "jquery";
import axios from "axios";
import API from "../../config";
function TestForm() {
  const [logo, setlogo] = useState();
  const handleLogoUpload = (e) => {
    setlogo(e.target.files[0]);
  };

  const formik = useFormik({
    initialValues: {
      imageFile: "",
      email: "",
      firstName: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const formdata = new FormData();
      formdata.append("image", logo);
      for (var key in values) {
        formdata.append(key, values[key]);
      }
      console.log(logo);
      console.log(formdata);
      axios
        .post(`http://3.110.201.21:3002/users`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  return (
    <div>
      <div className="container">
        <div className="row">
          <form onSubmit={formik.handleSubmit}>
            <div>
              Image
              <input
                onChange={handleLogoUpload}
                type="file"
                name="image"
                id="logo"
              />
            </div>
            <div>
              Email
              <input type="text" {...formik.getFieldProps("email")} />
            </div>
            <div>
              firstname
              <input type="text" {...formik.getFieldProps("firstName")} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default TestForm;
