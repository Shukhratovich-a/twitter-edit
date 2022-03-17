import { Link } from "react-router-dom";
import TwitterIcon from "../Lib/Icons/TwitterIcon";
import Nav from "../Nav/Nav";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link className={"header__link"} to="">
        <span className="header__link__inner">
          <TwitterIcon setClass={"header__logo"} />
        </span>
      </Link>

      <Nav />
    </header>
  );
};

export default Header;
