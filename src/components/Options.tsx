import "./Options.scss";
import { useState } from "react";
import InclusionToggles from "./options/InclusionToggles";
import CharacterLength from "./options/CharacterLength";
import Strength from "./options/Strength";
import GenerateButton from "./options/GenerateButton";
import { passwordGenerator } from "../helper";
import passwordEntropy from "fast-password-entropy/es5";

export interface passCondT {
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
  const [buttonOn, setButtonOn] = useState<boolean>(false);

  const scoreCalculate = function (cond: passCondT) {
    const { charLen, upper, lower, numbers, symbols } = cond;

    let score = charLen / 10;
    // if (charLen <= 4) score -= 2;

    if (upper) score += 0.5;
    if (lower) score += 0.5;
    if (numbers) score += 0.8;
    if (symbols) score += 0.8;

    setLevelScore(score);
  };

  const handleReturnLength = function (obj: number | passCondT) {
    let newCond: passCondT;

    if (typeof obj === "number") {
      newCond = { ...passCondInitial, charLen: obj };
    } else {
      newCond = { ...obj, charLen: passCondInitial.charLen };
    }

    passCondInitial = newCond;

    const { charLen, upper, lower, numbers, symbols } = passCondInitial;
    if (charLen === 0 || (!upper && !lower && !numbers && !symbols)) {
      setButtonOn(false);
      return null;
    }

    setButtonOn(true);
    scoreCalculate(passCondInitial);
  };

  const handleGenerate = function () {
    const password = passwordGenerator(passCondInitial);
    console.log(password);
    console.log(passwordEntropy(password));
  };

  return (
    <div className="options">
      <CharacterLength returnLength={handleReturnLength} />
      <InclusionToggles
        stateInitial={passCondInitial}
        returnConditions={handleReturnLength}
      />
      <Strength levelNumber={levelScore} />
      <GenerateButton onClick={handleGenerate} buttonDisable={!buttonOn} />
    </div>
  );
};

export default Options;
