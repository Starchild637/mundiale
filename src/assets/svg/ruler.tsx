import React from "react";

const SvgComponent: React.FC<{}> = (props) => {
  return (
    <svg width={334} height={5.5} {...props}>
      <g data-name="Group 130">
        <path data-name="Rectangle 4" fill="#8ac543" d="M0 0h193.255v5.5H0z" />
        <path
          data-name="Rectangle 5"
          fill="#00a3d3"
          d="M193.255 0h70.372v5.5h-70.372z"
        />
        <path
          data-name="Rectangle 6"
          fill="#fff"
          d="M263.627 0h70.372v5.5h-70.372z"
        />
      </g>
    </svg>
  );
};

export default SvgComponent;
