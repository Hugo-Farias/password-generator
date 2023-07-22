import "./GenerateButton.scss";
import arrowSVG from "../../assets/images/icon-arrow-right.svg";

interface propT {
  buttonDisable: boolean;
}

const GenerateButton = function ({ buttonDisable }: propT) {
  return (
    <button className="generate-button" disabled={buttonDisable}>
      <h3 className="button-label">Generate</h3>{" "}
      <img
        src={arrowSVG}
        alt="Generate button arrow"
        className="button-arrow"
      />
    </button>
  );
};

export default GenerateButton;
