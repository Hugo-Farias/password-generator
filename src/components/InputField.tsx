import "./InputField.scss";
import copySvg from "../assets/images/icon-copy.svg";

function InputField() {
  return (
    <div className="input-field">
      <h1 className="title">Password Generator</h1>
      <div className="result">
        <h2 className="password">PTx1f5DaFX</h2>
        <img alt="Copy Icon" src={copySvg} />
      </div>
    </div>
  );
}

export default InputField;
