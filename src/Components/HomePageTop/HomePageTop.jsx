import React from "react";
import useLanguage from "../../Hooks/useLanguage";

import SparksIcon from "../Lib/Icons/SparksIcon";
import OptionsModal from "../OptionsModal/OptionsModal";

import "./HomePageTop.scss";

const HomePageTop = () => {
  const [lang] = useLanguage();
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <div
        className={`options-modal__back ${isOpen ? "options-modal__back--open" : ""}`}
        onClick={() => setOpen(false)}
      ></div>

      <section className={`home__top ${isOpen ? "home__top--modal" : ""}`}>
        <div className="home__top__inner">
          <h2 className="home__heading">{lang.nav.navItem1}</h2>

          <button className="home__button" name="options" onClick={() => setOpen(true)}>
            <SparksIcon />
          </button>
        </div>
        
        <OptionsModal isOpen={isOpen} />
      </section>
    </>
  );
};

export default HomePageTop;
