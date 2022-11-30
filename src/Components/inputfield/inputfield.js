import Styles from "./inputfield.module.css";
const InputField = (props) => {
  return (
    <div className="my-3">
      <div className="d-flex justify-content-between">
        <p className="ogsfonts16">{props.title}</p>
        <p className={`ogsfonts16 ${Styles.InputFieldRe}`}>{props.requre}</p>
      </div>

      <input
        className={`${Styles.InputField}`}
        onChange={(e) => props.onChange(e)}
      />
    </div>
  );
};
export default InputField;
