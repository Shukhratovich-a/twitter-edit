import React from "react";
import useLanguage from "../../Hooks/useLanguage";

import SparksIcon from "../Lib/Icons/SparksIcon";
import OptionsModal from "../OptionsModal/OptionsModal";

import "./HomePageTop.scss";

const HomePageTop = () => {
  const [lang] = useLanguage();
  const [isOpen, setOpen] = React.useState(false);

  return (
    <section className="home__top">
      <div className="home__top__inner">
        <h2 className="home__heading">{lang.nav.navItem1}</h2>

        <button className="home__button" name="options" onClick={() => setOpen(true)}>
          <SparksIcon />
        </button>
      </div>

      <OptionsModal isOpen={isOpen} setOpen={setOpen} />
    </section>
  );
};

export default HomePageTop;
