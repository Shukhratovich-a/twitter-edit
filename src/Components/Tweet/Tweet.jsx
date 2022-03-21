import MoreSmallIcon from "../Lib/Icons/MoreSmallIcon";
import UserIcon from "../Lib/Icons/UserIcon";
import "./Tweet.scss";

const Tweet = ({ user }) => {
  return (
    <li className="tweet">
      <div className="tweet__inner">
        {user.avatar ? (
          <img className="tweet__user-avatar" src={user.avatar} alt="" width={50} height={50} />
        ) : (
          <UserIcon type="big" />
        )}

        <div className="tweet__content">
          <div className="tweet__top">
            <div className="tweet__top__left">
              <h3 className="tweet__name">{user.first_name}</h3>
              <span className="tweet__user-name">@inner</span>
              <span className="tweet__activity">25m</span>
            </div>

            <button className="tweet__top__button">
              <MoreSmallIcon />
            </button>
          </div>

          <p className="tweet__description">
            YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba
            va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.
          </p>
        </div>
      </div>
    </li>
  );
};

export default Tweet;
