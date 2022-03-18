import "./LoadingIcon.scss";

const LoadingIcon = () => {
  return (
    <svg className="oading" height="26" viewBox="0 0 32 32" width="26">
      <circle id="circle-1" cx="16" cy="16" fill="none" r="14" strokeWidth={4} />
      <circle id="circle-2" cx="16" cy="16" fill="none" r="14" strokeWidth={4} />
    </svg>
  );
};

export default LoadingIcon;
