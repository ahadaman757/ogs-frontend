import Styles from "./textarea.module.css";
const Textarea = () => {
  return (
    <div className="my-3">
      <div className="d-flex justify-content-between">
        <p className="ogsfonts16">Meta Description</p>
      </div>
      <textarea className={` ${Styles.InputField}`}></textarea>
    </div>
  );
};
export default Textarea;
