import Styles from "./inputselect.module.css";
import dropsvg from "../../Assets/Images/dropdown_arrow-512.webp";
const InputSelect = (props) => {
  return (
    <div className="my-2 " style={{ width: "100%" }}>
      <div className="d-flex justify-content-between">
        <p className="ogsfonts16">{props.title}</p>
        <p className={`ogsfonts16 ${Styles.InputFieldRe}`}>{props.requre}</p>
      </div>

      <select
        className={`form-select ${Styles.InputField}`}
        id="validationTooltip04"
        required
      >
        <option selected disabled value="">
          Choose...
        </option>
        <option>...</option>
        <option>1</option>
      </select>
      <div id="validationServer04Feedback" class="invalid-feedback">
        Please select a valid state.
      </div>
    </div>
  );
};
export default InputSelect;
