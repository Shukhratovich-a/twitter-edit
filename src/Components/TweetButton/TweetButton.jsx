import useLanguage from "../../Hooks/useLanguage";
import "./TweetButton.scss";

const TweetButton = () => {
  const [lang] = useLanguage();
  return <button className="tweet-button">{lang.buttons.tweetButton}</button>;
};

export default TweetButton;
