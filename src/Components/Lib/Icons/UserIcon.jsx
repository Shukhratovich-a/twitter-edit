import "./Icons.scss";

const UserIcon = () => {
  return (
    <svg
      className="user-icon"
      width="40"
      height="40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 40a20 20 0 1 0 0-40 20 20 0 0 0 0 40Z" fill="#E3E8EA" />
      <mask
        id="user-icon"
        maskUnits="userSpaceOnUse"
        x="1"
        y="1"
        width="38"
        height="38"
      >
        <path d="M20 38a18 18 0 1 0 0-36 18 18 0 0 0 0 36Z" fill="#E2E8EA" stroke="#000" />
      </mask>
      <g mask="url(#user-icon)">
        <path
          d="M27.75 17.04a7.71 7.71 0 1 1-15.42 0 7.71 7.71 0 0 1 15.42 0Zm9.63 27.62a17.35 17.35 0 0 0-34.69 0h34.68Z"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

export default UserIcon;
