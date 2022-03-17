import { NavLink } from "react-router-dom";

import BookmarkIcon from "../Lib/Icons/BookmarkIcon";
import ExploreIcon from "../Lib/Icons/ExploreIcon";
import HomeIcon from "../Lib/Icons/HomeIcon";
import ListIcon from "../Lib/Icons/ListIcon";
import MessageIcon from "../Lib/Icons/MessageIcon";
import MoreIcon from "../Lib/Icons/MoreIcon";
import NotificationsIcon from "../Lib/Icons/NotificationsIcon";
import ProfileIcon from "../Lib/Icons/ProfileIcon";

import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            to=""
          >
            <span className="nav__link__inner">
              <HomeIcon />
              Home
            </span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            to="/explore"
          >
            <span className="nav__link__inner">
              <ExploreIcon />
              Explore
            </span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            to="/notifications"
          >
            <span className="nav__link__inner">
              <NotificationsIcon />
              Notifications
            </span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            to="/messages"
          >
            <span className="nav__link__inner">
              <MessageIcon />
              Messages
            </span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            to="/bookmarks"
          >
            <span className="nav__link__inner">
              <BookmarkIcon />
              Bookmarks
            </span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            to="/lists"
          >
            <span className="nav__link__inner">
              <ListIcon />
              Lists
            </span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            to="/profile"
          >
            <span className="nav__link__inner">
              <ProfileIcon />
              Profile
            </span>
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
            to="/more"
          >
            <span className="nav__link__inner">
              <MoreIcon />
              More
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
