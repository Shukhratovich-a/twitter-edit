import MoreSmallIcon from "../Lib/Icons/MoreSmallIcon";
import UserIcon from "../Lib/Icons/UserIcon";

import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <UserIcon className="profile__avatar" />

      <div className="profile__inner">
        <h3 className="profile__name">Shukhratovich_a</h3>
        <p className="profile__user-name">@shukhratovich_a</p>
      </div>

      <MoreSmallIcon />
    </div>
  );
};

export default Profile;
