import SettingsIcon from "../Lib/Icons/SettingsIcon";
import MoreSmallIcon from "../Lib/Icons/MoreSmallIcon";

import "./FooterTrends.scss";

const FooterTrends = () => {
  return (
    <section className="trends">
      <div className="trends__top">
        <h2 className="trends__heading">Trends for you</h2>
        <button className="trends__top__button">
          <SettingsIcon />
        </button>
      </div>

      <ul className="trends__list">
        <li className="trend">
          <div className="trend__top">
            <span className="trend__top__text">Trending in Nigeria</span>

            <button className="trend__top__button" name="more">
              <MoreSmallIcon />
            </button>
          </div>

          <h3 className="trend__title">What's trending</h3>

          <span className="trend__tweets-count">4,238 Tweets</span>
        </li>
        <li className="trend">
          <div className="trend__top">
            <span className="trend__top__text">Trending in Nigeria</span>

            <button className="trend__top__button" name="more">
              <MoreSmallIcon />
            </button>
          </div>

          <h3 className="trend__title">What's trending</h3>

          <span className="trend__tweets-count">4,238 Tweets</span>
        </li>
        <li className="trend">
          <div className="trend__top">
            <span className="trend__top__text">Trending in Nigeria</span>

            <button className="trend__top__button" name="more">
              <MoreSmallIcon />
            </button>
          </div>

          <h3 className="trend__title">What's trending</h3>

          <span className="trend__tweets-count">4,238 Tweets</span>
        </li>
      </ul>

      <div className="trends__bottom">
        <a className="trends__link" href="#link">Show more replies</a>
      </div>
    </section>
  );
};

export default FooterTrends;
