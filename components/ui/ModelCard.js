import React from "react";

const ModelCard = (props) => {
  return (
    <div
      style={{
        height: `${props.height ? props.height : "fit-content"}`,
        width: `${props.width ? props.width : "fit-content"}`,
        padding:`${props.padding?props.padding:'fit-content'}`,
        borderRadius:'20px',
        backgroundColor:"#ffffff38"
      }}
    >{props.children}</div>
  );
};

export default ModelCard;
