import "./Options.scss";
import { useState } from "react";
import CharacterLength from "./options/CharacterLength";
import InclusionToggles, { stateT } from "./options/InclusionToggles";
import Strength from "./options/Strength";
import GenerateButton from "./options/GenerateButton";

interface passCondT {
  charLen: number;
  upper: boolean;
  lower: boolean;
  numbers: boolean;
  symbols: boolean;
}

const passCondInitial: passCondT = {
  charLen: 10,
  upper: false,
  lower: false,
  numbers: false,
  symbols: false,
};

const Options = function () {
  const [levelScore, setLevelScore] = useState<number>(2);
  const [passCond, setPassCond] = useState<passCondT>(passCondInitial);
  console.log("-> passCond", passCond);

  const scoreCalculate = function (cond: passCondT) {
    if (cond.charLen <= 4) setLevelScore(1);
    else if (cond.charLen > 4) setLevelScore(2);

    if (cond.upper) setLevelScore(5);
  };

  const handleReturnLength = function (obj: number | stateT) {
    if (typeof obj === "number") {
      setPassCond((prev) => {
        const newCond = { ...prev, charLen: obj };
        scoreCalculate(newCond);
        return newCond;
      });
    } else {
      setPassCond((prev) => {
        const newCond = { ...prev, ...obj };
        scoreCalculate(newCond);
        return newCond;
      });
    }
  };

  return (
    <div className="options">
      <CharacterLength returnLength={handleReturnLength} />
      <InclusionToggles returnConditions={handleReturnLength} />
      <Strength levelNumber={levelScore} />
      <GenerateButton />
    </div>
  );
};

export default Options;
