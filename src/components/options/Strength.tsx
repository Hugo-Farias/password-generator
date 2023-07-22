import "./Strength.scss";

const Strength = function () {
  return (
    <div className="strength">
      <h4 className="label">STRENGTH</h4>
      <div className="level">
        <h3 className="level-name">MEDIUM</h3>
        <div className="pips-container">
          <span className="pip filled" />
          <span className="pip filled" />
          <span className="pip filled" />
          <span className="pip" />
        </div>
      </div>
    </div>
  );
};

export default Strength;
