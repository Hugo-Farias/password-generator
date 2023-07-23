import "./ResultField.scss";
import copySvg from "../assets/images/icon-copy.svg";
import { useState } from "react";

type propT = {
  password: string | null;
};

function ResultField({ password }: propT) {
  const [buttonAnim, setButtonAnim] = useState<boolean>(false);
  let timeout: number;

  const handleCopyClick = function () {
    if (password === null) return;

    setButtonAnim(true);

    navigator.clipboard.writeText(password);

    clearTimeout(timeout);

    timeout = setTimeout(() => setButtonAnim(false), 1800);
  };

  return (
    <div className="result-field">
      <h1 className="title">Password Generator</h1>
      <div className="result">
        <h2 className={`password ${password}`}>{password}</h2>
        <button
          className={`button-copy ${buttonAnim}`}
          onClick={handleCopyClick}
        >
          <img alt="Copy Icon" src={copySvg} />
        </button>
      </div>
    </div>
  );
}

export default ResultField;
