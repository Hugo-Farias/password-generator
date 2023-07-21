import "./Options.scss";
import { useRef, useState } from "react";

const Options = function () {
  const sliderRef = useRef<HTMLInputElement | null>(null);
  const [currentLen, setCurrentLen] = useState<number>(10);

  const handleInputChange = function () {
    setCurrentLen(+sliderRef.current?.value);
  };

  return (
    <div className="options">
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
      />
    </div>
  );
};

export default Options;
