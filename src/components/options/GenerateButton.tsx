import "./GenerateButton.scss";
import arrowSVG from "../../assets/images/icon-arrow-right.svg";

const GenerateButton = function () {
  return (
    <button className="generate-button">
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
