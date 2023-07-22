import "./ResultField.scss";
import copySvg from "../assets/images/icon-copy.svg";

function ResultField() {
  return (
    <div className="result-field">
      <h1 className="title">Password Generator</h1>
      <div className="result">
        <h2 className="password" placeholder="P4$5W0rD!">
          PTx1f5DaFX
        </h2>
        <button className="button-copy">
          <img alt="Copy Icon" src={copySvg} />
        </button>
      </div>
    </div>
  );
}

export default ResultField;
