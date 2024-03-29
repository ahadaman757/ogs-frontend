import { useState } from "react";
import styles from "../authpages/main.module.css";
import eye from "../../Assets/Images/eye.svg";
import eyedes from "../../Assets/Images/eye-disable.svg";

const List = (props) => {
  const { id, label, list_id, formik, options, onChangeValue } = props;

  const initialvalue = formik.values[id]; //17
  return (
    <div>
      <label htmlFor={id} className={`${styles.form_input__lable}`}>
        {label}
      </label>
      <br />

      <select
        onChange={(e) => onChangeValue(e)}
        value={formik.values[id]}
        {...formik.getFieldProps(`'${id}'`)}
        className={`${styles.form_input}`}
        name={id}
        id={list_id}
      >
        <option value="" disabled selected hidden>
          Select One
        </option>
        {options &&
          options.map((option, index) => {
            const keys = Object.keys(option);
            const value = option[keys[0]];
            const lable = option[keys[1]];
            return (
              <option
                id={option.id}
                selected={value == initialvalue ? true : false}
                value={value}
              >
                {" "}
                {lable}
              </option>
            );
          })}
      </select>
      {formik.touched[id] && formik.errors[id] ? (
        <div className="text__note">{formik.errors[id]}</div>
      ) : null}
    </div>
  );
};
const ListSecond = (props) => {
  const { id, label, list_id, formik, options, onChangeValue } = props;

  const initialvalue = formik.values[id]; //17
  return (
    <div>
      <label htmlFor={id} className={`${styles.form_input__lable}`}>
        {label}
      </label>
      <br />

      <select
        onChange={(e) => onChangeValue(e)}
        value={formik.values[id]}
        {...formik.getFieldProps(`'${id}'`)}
        className={`${styles.form_input}`}
        name={id}
        id={list_id}
      >
        <option value="" disabled selected hidden>
          Select One
        </option>
        {options &&
          options.map((option, index) => {
            const keys = Object.keys(option);
            const value = option[keys[1]];
            const lable = option[keys[1]];
            return (
              <option
                id={option.id}
                selected={value == initialvalue ? true : false}
                value={value}
              >
                {" "}
                {lable}
              </option>
            );
          })}
      </select>
      {formik.touched[id] && formik.errors[id] ? (
        <div className="text__note">{formik.errors[id]}</div>
      ) : null}
    </div>
  );
};
const ListUpdate = (props) => {
  const { id, label, list_id, formik, options, onChangeValue } = props;
  console.log(id);
  const initialvalue = formik.values[id]; //17

  // loop through all the options and get lable for this id

  // const dlabel = options && options.filter(i => {

  //     const KEYS = Object.keys(i);
  //     const VALUE = i[KEYS[0]]
  //     const LABLE = i[KEYS[1]]
  //     return VALUE == initialvalue
  // })

  return (
    <div>
      <label htmlFor={id} className={`${styles.form_input__lable}`}>
        {label}
      </label>
      <br />

      <select
        onChange={(e) => onChangeValue(e)}
        value={formik.values[id]}
        {...formik.getFieldProps(`'${id}'`)}
        className={`${styles.form_input}`}
        name={id}
        id={list_id}
      >
        {options &&
          options.map((option, index) => {
            const keys = Object.keys(option);
            const value = option[keys[0]];
            const lable = option[keys[1]];
            return (
              <option
                id={option.id}
                selected={value == initialvalue ? true : false}
                value={value}
              >
                {" "}
                {lable}
              </option>
            );
          })}
      </select>
      {formik.touched[id] && formik.errors[id] ? (
        <div className="text__note">{formik.errors[id]}</div>
      ) : null}
    </div>
  );
};
const TextInput = (props) => {
  const { id, label, formik, type = "text", onChangeValue } = props;

  return (
    <>
      <label htmlFor={id} className={`${styles.form_input__lable}`}>
        {label}
      </label>
      <input
        onChange={(e) => onChangeValue(e)}
        {...formik.getFieldProps(`'${id}'`)}
        type={type}
        value={formik.values[id]}
        className={`${styles.form_input}`}
        name={id}
        id={id}
        aria-label={label}
      />
      {formik.touched[id] && formik.errors[id] ? (
        <div className="text__note">{formik.errors[id]}</div>
      ) : null}
    </>
  );
};
const WhatsAppInput = (props) => {
  const { id, label, formik, type = "text", onChangeValue } = props;

  return (
    <>
      <label htmlFor={id} className={`${styles.form_input__lable}`}>
        {label}
      </label>
      <input
        onChange={(e) => {
          onChangeValue(e);
          localStorage.setItem("phone", e.target.value);
        }}
        {...formik.getFieldProps(`'${id}'`)}
        type={type}
        value={formik.values[id]}
        className={`${styles.form_input}`}
        name={id}
        id={id}
        aria-label={label}
      />
      {formik.touched[id] && formik.errors[id] ? (
        <div className="text__note">{formik.errors[id]}</div>
      ) : null}
    </>
  );
};
const SecondTextInput = (props) => {
  const { id, label, formik, type = "text", onChangeValue } = props;

  return (
    <>
      <label htmlFor={id} className={`${styles.form_input__lable}`}>
        {label}
      </label>
      <input
        onChange={(e) => {
          onChangeValue(e);
          localStorage.setItem("uMail", e.target.value);
        }}
        {...formik.getFieldProps(`'${id}'`)}
        type={type}
        value={formik.values[id]}
        className={`${styles.form_input}`}
        name={id}
        id={id}
        aria-label={label}
      />
      {formik.touched[id] && formik.errors[id] ? (
        <div className="text__note">{formik.errors[id]}</div>
      ) : null}
    </>
  );
};
const PassInput = (props) => {
  const {
    id,
    label,
    formik,
    logov,
    togglePassword,
    passwordType,
    onChangeValue,
  } = props;

  return (
    <>
      <div className="my-3">
        <div className="d-flex justify-content-between">
          <label
            htmlFor={id}
            className={`ogsfonts16 ${styles.form_input__lable}`}
          >
            {label}
          </label>
        </div>
        <div class="input-group d-flex mb-3">
          <input
            onChange={(e) => onChangeValue(e)}
            {...formik.getFieldProps(`'${id}'`)}
            type={passwordType}
            value={formik.values[id]}
            className={`form-control p-2 ${styles.InputField2}`}
            name={id}
            id={id}
            aria-label={label}
            aria-describedby="button-addon2"
          />

          <a
            className={`p-2 ${styles.passinput}`}
            type="button"
            id="button-addon2"
            onClick={togglePassword}
          >
            <span>
              <img src={logov} />
            </span>
          </a>
        </div>
      </div>
      {formik.touched[id] && formik.errors[id] ? (
        <div className="text__note">{formik.errors[id]}</div>
      ) : null}
    </>
  );
};
const FileUpload = ({ title, name, id, label, setImage, formik }) => {
  const handleInputChange = (event) => {
    formik && formik.setFieldValue(id, event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <>
      <label htmlFor={id} className={`${styles.form_input__lable}`}>
        {label}
      </label>
      <input
        required
        className={`${styles.form_input}`}
        onChange={handleInputChange}
        type="file"
        name={name}
        id={id}
      />
    </>
  );
};
const FileUpload2 = ({ title, name, id, label, setFileData, formik }) => {
  const handleInputChange = (event) => {
    formik && formik.setFieldValue(id, event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      setFileData(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <>
      <label htmlFor={id} className={`${styles.form_input__lable}`}>
        {label}
      </label>
      <input
        required
        className={`${styles.form_input}`}
        onChange={handleInputChange}
        type="file"
        name={name}
        id={id}
      />
    </>
  );
};
// const FixedList = (props) => {
//     const { id, label, list_id, formik, options, onChangeValue } = props

//     return (
//         <div>
//             <label htmlFor={id} className={`${styles.form_input__lable}`}>{label}</label>
//             <br />

//             <select onChange={(e) => onChangeValue(e)} value={formik.values[id]} {...formik.getFieldProps(`'${id}'`)} className={`${styles.form_input}`} name={id} id={list_id}>
//                 {
//                     options && options.map(option => {
//                         const keys = Object.keys(option);
//                         return <option id={option.id} value={value} > {lable}</option>
//                     })
//                 }
//             </select>
//             {formik.touched[id] && formik.errors[id] ? (
//                 <div className='text__note'>{formik.errors[id]}</div>
//             ) : null}
//         </div>

//     )
// }
export {
  PassInput,
  List,
  TextInput,
  FileUpload,
  ListUpdate,
  FileUpload2,
  SecondTextInput,
  ListSecond,
  WhatsAppInput,
};
