import React from "react";
import classes from "./Dots.module.css";
const Dots = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
      {props.length &&
        [...Array(props.length).keys()].map((item) => (
          <button key={item}
            className={`${
              props.pointerPlace === item ? classes.glow : ""
            } ${classes.dot}`}
            onClick={() => props.onClick(item)}
          ></button>
        ))}
    </div>
  );
};

export default Dots;
