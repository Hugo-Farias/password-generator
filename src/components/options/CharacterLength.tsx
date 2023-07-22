import "./CharacterLength.scss";
import { CSSProperties, useRef, useState } from "react";

const CharacterLength = function () {
  const sliderRef = useRef<HTMLInputElement | null>(null);
  const [currentLen, setCurrentLen] = useState<number>(10);
  const maxLength = +sliderRef.current?.max || currentLen * 2;
  const percentage = (currentLen / maxLength) * 100 - 2;
  const colorPrimary = "#a4ffaf";
  const colorNull = "#18171F";

  const inputStyle: CSSProperties = {
    background: `linear-gradient(to right,${colorPrimary} 0,${colorPrimary} ${percentage}%, ${colorNull} ${percentage}%, ${colorNull} 100%)`,
  };

  const handleInputChange = function () {
    setCurrentLen(+sliderRef.current!.value);
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
        min="1"
        max="20"
        step="1"
        style={inputStyle}
      />
    </div>
  );
};

export default CharacterLength;