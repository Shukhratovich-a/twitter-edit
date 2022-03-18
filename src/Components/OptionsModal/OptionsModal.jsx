import useTheme from "../../Hooks/useTheme";
import useLanguage from "../../Hooks/useLanguage";

import "./OptionsModal.scss";

const OptionsModal = ({ isOpen, setOpen }) => {
  const [theme, setTheme] = useTheme();
  const [, setLanguage] = useLanguage();

  return (
    <div className={`options ${isOpen ? "options--open" : ""}`}>
      <div className="options-modal__back" onClick={() => setOpen(false)}></div>
      <div className="options-modal">
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
