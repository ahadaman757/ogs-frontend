import Styles from "./inputfield.module.css";
const InputField = (props) => {
  return (
    <div className="my-2">
      <div className="d-flex justify-content-between">
        <p className="ogsfonts16">{props.title}</p>
        <p className={`ogsfonts16 ${Styles.InputFieldRe}`}>{props.requre}</p>
      </div>

      <input className={` ${Styles.InputField}`} />
    </div>
  );
};
export default InputField;
