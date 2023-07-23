import "./InclusionToggles.scss";
import { useEffect, useState } from "react";
import { passCondT } from "../Options";

type propT = {
  returnConditions: (v: passCondT) => void;
  stateInitial: passCondT;
};

type conditionsTypes = "upper" | "lower" | "numbers" | "symbols";

const checkboxes: { name: conditionsTypes; label: string }[] = [
  { name: "upper", label: "Include Uppercase Letters" },
  { name: "lower", label: "Include Lowercase Letters" },
  { name: "numbers", label: "Include Numbers" },
  { name: "symbols", label: "Include Symbols" },
];

const InclusionToggles = function (props: propT) {
  const [checkState, setCheckState] = useState<passCondT>(props.stateInitial);

  const handleCheck = function (e: conditionsTypes) {
    setCheckState((prev) => ({ ...prev, [e]: !prev[e] }));
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
