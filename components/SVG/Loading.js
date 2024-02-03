import React from "react";

const Loading = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ margin: "auto", background: "none", display: "block", shapeRendering: "auto" }}
        width="10vw"
        height="10vh"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#ffffff" stroke="none">
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="0.48309178743961356s"
            repeatCount="indefinite"
            keyTimes="0;1"
            values="0 50 51;360 50 51"
          />
        </path>
      </svg>
    </div>
  );
};

export default Loading;
