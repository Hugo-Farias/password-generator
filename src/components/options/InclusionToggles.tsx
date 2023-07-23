import "./InclusionToggles.scss";
import { useEffect, useState } from "react";

export interface stateT {
  upper: boolean;
  lower: boolean;
  numbers: boolean;
  symbols: boolean;
}

interface propT {
  returnConditions: (v: stateT) => void;
  stateInitial: stateT;
}

const checkboxes: { name: string; label: string }[] = [
  { name: "upper", label: "Include Uppercase Letters" },
  { name: "lower", label: "Include Lowercase Letters" },
  { name: "numbers", label: "Include Numbers" },
  { name: "symbols", label: "Include Symbols" },
];

const InclusionToggles = function (props: propT) {
  const [checkState, setCheckState] = useState<stateT>(props.stateInitial);

  const handleCheck = function (e: string) {
    setCheckState((prev) => ({ ...prev, [e]: !checkState[e] }));
  };

  useEffect(() => {
    props.returnConditions(checkState);
  }, [checkState]);

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
