import TwitterLogo from "../../Assets/Images/TwitterLogo.svg";
import UserIcon from "../../Assets/Images/UserIcon.svg";

import "./ProfileIntro.scss";

const ProfileIntro = ({ user }) => {
  return (
    <section className="profile__intro">
      <img
        className="profile__banner"
        src={user.banner || TwitterLogo}
        alt={user.first_name + " " + user.last_name + " profile banner"}
        width={695}
        height={210}
      />
      
      <img
        className="profile__user-avatar"
        src={user.avatar || UserIcon}
        alt={user.first_name + " " + user.last_name + " 's avatar"}
        width={120}
        height={120}
      />
    </section>
  );
};

export default ProfileIntro;
