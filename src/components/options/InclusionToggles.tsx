import "./InclusionToggles.scss";
import { useState } from "react";

type stateT = {
  upper: boolean;
  lower: boolean;
  numbers: boolean;
  symbols: boolean;
};

const stateInitial = {
  upper: false,
  lower: false,
  numbers: false,
  symbols: false,
};

const checkboxes: { name: string; label: string }[] = [
  { name: "upper", label: "Include Uppercase Letters" },
  { name: "lower", label: "Include Lowercase Letters" },
  { name: "numbers", label: "Include Numbers" },
  { name: "symbols", label: "Include Symbols" },
];

const InclusionToggles = function () {
  const [checkState, setCheckState] = useState<stateT>(stateInitial);

  const handleCheck = function (e: string) {
    setCheckState((prev) => {
      console.log(checkState);
      return { ...prev, [e]: !checkState[e] };
    });
  };

  const checkJSX = checkboxes.map((v, i) => {
    return (
      <div
        key={i}
        className="checkbox-container"
        onClick={() => handleCheck(v.name)}
      >
        <span className={`checkbox ${checkState[v.name]}`} />
        <h3 className="label">{v.label}</h3>
      </div>
    );
  });

  return <div className="inclusion-toggles">{checkJSX}</div>;
};

export default InclusionToggles;
