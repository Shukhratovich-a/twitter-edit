import { Link } from "react-router-dom";

import TwitterIcon from "../Lib/Icons/TwitterIcon";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";
import TweetButton from "../TweetButton/TweetButton";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <Link className={"header__link"} to="">
          <span className="header__link__inner">
            <TwitterIcon setClass={"header__logo"} />
          </span>
        </Link>

        <Nav />

        <TweetButton />
      </div>

      <Profile />
    </header>
  );
};

export default Header;
