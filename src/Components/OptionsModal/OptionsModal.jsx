import useTheme from "../../Hooks/useTheme";
import useLanguage from "../../Hooks/useLanguage";

import "./OptionsModal.scss";
import SparksIconBig from "../Lib/Icons/SparcksBigIcon";

const OptionsModal = ({ isOpen }) => {
  const [theme, setTheme] = useTheme();
  const [lang, setLanguage] = useLanguage();

  return (
    <div className={`options ${isOpen ? "options--open" : ""}`}>
      <div className="options-modal">
        <div className="options-modal__top">
          <SparksIconBig />

          <h2 className="options-modal__heading">{lang.optionsModal.modalHeading}</h2>
        </div>

        <button
          className="theme"
          onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
        >
          theme
        </button>

        <select onChange={(evt) => setLanguage(evt.target.value)}>
          <option value="en">En</option>
          <option value="ru">Ru</option>
          <option value="uz">Uz</option>
        </select>
      </div>
    </div>
  );
};

export default OptionsModal;
