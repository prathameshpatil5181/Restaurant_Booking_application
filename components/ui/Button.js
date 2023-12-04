import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        style={{
          height: "fit-content",
          width: "fit-content",
          padding: "10px 20px 10px 20px",
          color: "black",
          backgroundColor: "white",
          borderRadius: "20px",
          marginTop:`${props.marginTop?props.marginTop:'0px'}`
        }}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
