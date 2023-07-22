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

let passCondInitial: passCondT = {
  charLen: 10,
  upper: false,
  lower: false,
  numbers: false,
  symbols: false,
};

const Options = function () {
  const [levelScore, setLevelScore] = useState<number>(0);
  // const [passCond, setPassCond] = useState<passCondT>(passCondInitial);
  console.log("-> levelScore", passCondInitial);

  const scoreCalculate = function (cond: passCondT) {
    let score = cond.charLen / 8;
    if (cond.charLen <= 3) score -= 2;
    // else if (cond.charLen > 4) setLevelScore(2);

    if (cond.upper) score += 0.5;
    if (cond.lower) score += 0.5;
    if (cond.numbers) score += 0.8;
    if (cond.symbols) score += 1;

    setLevelScore(score);
  };

  const handleReturnLength = function (obj: number | stateT) {
    let newCond: passCondT;
    if (typeof obj === "number") {
      newCond = { ...passCondInitial, charLen: obj };
    } else {
      newCond = { ...passCondInitial, ...obj };
    }
    passCondInitial = newCond;
    scoreCalculate(passCondInitial);
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
