import "./GenerateButton.scss";
import arrowSVG from "../../assets/images/icon-arrow-right.svg";

interface propT {
  onClick: () => void;
  buttonDisable: boolean;
}

const GenerateButton = function ({ buttonDisable, onClick }: propT) {
  return (
    <button
      className="generate-button"
      disabled={buttonDisable}
      onClick={onClick}
    >
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
