import React from "react";
import classes from "./CityCard.module.css";
const CityCard = (props) => {
  return (
    <div
      style={{
        height: "fit-content",
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className={classes.text}
        style={{
          position: "absolute",
          zIndex: 1,
          color: props.fontcolor ? props.fontcolor : "white",
          fontSize:`${props.fontsize}`
        }}
      >
        {props.name.toUpperCase()}
      </div>
      <img
        src={`./${props.src}`}
        style={{
          height: `${props.height}vw`,
          width: `${props.width}vw`,
          position: "relative",
          filter: `blur(${props.blur ? props.blur+'px' : "0px"})`,
          opacity:props.opacity,
          borderRadius:'20px'
        }}
      ></img>
    </div>
  );
};

export default CityCard;
