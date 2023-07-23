import "./Options.scss";
import { useState } from "react";
import InclusionToggles from "./options/InclusionToggles";
import CharacterLength from "./options/CharacterLength";
import Strength from "./options/Strength";
import GenerateButton from "./options/GenerateButton";
import { passwordGenerator } from "../helper";
import passwordEntropy from "fast-password-entropy/es5";

type propT = {
  returnPassword: (pass: string) => void;
};

export type passCondT = {
  charLen: number;
  upper: boolean;
  lower: boolean;
  numbers: boolean;
  symbols: boolean;
};

let passCondInitial: passCondT = {
  charLen: 10,
  upper: false,
  lower: false,
  numbers: false,
  symbols: false,
};

const Options = function (props: propT) {
  const [levelScore, setLevelScore] = useState<number>(0);
  const [buttonOn, setButtonOn] = useState<boolean>(false);

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
  };

  const handleGenerate = function () {
    const password = passwordGenerator(passCondInitial);
    const score = passwordEntropy(password);

    if (score < 50) setLevelScore(1);
    if (score > 50) setLevelScore(2);
    if (score > 70) setLevelScore(3);
    if (score > 90) setLevelScore(4);

    props.returnPassword(password);
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
