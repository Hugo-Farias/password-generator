import "./Strength.scss";
import { ReactNode } from "react";

interface propT {
  levelNumber: number;
}

const levelStyle: { [n: string]: { color: string; name: string } } = {
  1: { color: "#F64A4A", name: "Too Weak!" },
  2: { color: "#FB7C58", name: "Weak" },
  3: { color: "#F8CD65", name: "Medium" },
  4: { color: "#A4FFAF", name: "Strong" },
};

const Strength = function (props: propT) {
  let level = Math.floor(props.levelNumber);

  if (level > 4) level = 4;
  else if (level < 1) level = 1;

  const pipsJSX: ReactNode[] = [];

  for (let i = 1; i <= level; i++) {
    pipsJSX.push(
      <span
        key={i}
        className="pip filled"
        style={{ backgroundColor: levelStyle[level].color }}
      />
    );
  }

  while (pipsJSX.length < 4) {
    pipsJSX.push(<span key={pipsJSX.length + 1} className="pip" />);
  }

  return (
    <div className="strength">
      <h4 className="label">STRENGTH</h4>
      <div className="level">
        <h3 className="level-name">{levelStyle[level].name}</h3>
        <div className="pips-container">{pipsJSX}</div>
      </div>
    </div>
  );
};

export default Strength;
