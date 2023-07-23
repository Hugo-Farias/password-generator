import "./CharacterLength.scss";
import { CSSProperties, useRef, useState } from "react";

interface propT {
  returnLength: (len: number) => void;
}

// Ajust the range of the slider and initial value
const min = 4;
const max = min ** 2;
const initial = (min + max) / 2;

const CharacterLength = function (prop: propT) {
  const [currentLen, setCurrentLen] = useState<number>(initial);
  const sliderRef = useRef<HTMLInputElement | null>(null);
  const percentage = ((currentLen - min) / (max - min)) * 100;
  const colorPrimary = "#a4ffaf";
  const colorNull = "#18171F";

  const inputStyle: CSSProperties = {
    background: `linear-gradient(to right,${colorPrimary} 0,${colorPrimary} ${percentage}%, ${colorNull} ${percentage}%, ${colorNull} 100%)`,
  };

  const handleInputChange = function () {
    const newCurrent = +sliderRef.current!.value;
    setCurrentLen(newCurrent);
    prop.returnLength(newCurrent);
  };

  return (
    <div className="character-length">
      <div className="length-option">
        <h3 className="name">Character Length</h3>
        <span className="length-number">{currentLen}</span>
      </div>
      <input
        ref={sliderRef}
        value={currentLen}
        onChange={handleInputChange}
        className="slider"
        type="range"
        id="slider"
        min={min}
        max={max}
        step="1"
        style={inputStyle}
      />
    </div>
  );
};

export default CharacterLength;
