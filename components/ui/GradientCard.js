import React from "react";

const GradientCard = (props) => {
  return (
    <div
      style={{
        width: `${props.width?props.width:"50%"}`,
        height: `${props.height?props.height:"20vh"}`,
        background: "rgb(255,255,255)",
        padding: `${props.padding?props.padding:"20px"}`,
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.20441118341867992) 0%, rgba(255,255,255,0) 100%)",
          borderRadius:'20px',
          marginBottom:`${props.margin?props.margin:"20px"}`
      }}
    >
      {props.children}
    </div>
  );
};

export default GradientCard;
