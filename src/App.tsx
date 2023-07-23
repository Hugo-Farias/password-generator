import "./App.scss";
import ResultField from "./components/ResultField";
import Options from "./components/Options";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState<string | null>(null);

  return (
    <div className="app">
      <ResultField password={password} />
      <Options returnPassword={setPassword} />
    </div>
  );
}

export default App;
