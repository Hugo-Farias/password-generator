import "./Options.scss";
import CharacterLength from "./options/CharacterLength";
import InclusionToggles from "./options/InclusionToggles";
import Strength from "./options/Strength";

const Options = function () {
  return (
    <div className="options">
      <CharacterLength />
      <InclusionToggles />
      <Strength />
    </div>
  );
};

export default Options;
