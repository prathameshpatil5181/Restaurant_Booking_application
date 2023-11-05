import React from "react";
import classes from './Dots.module.css'
const Dots = (props) => {
  return (
    <div style={{display:'flex', flexDirection:'row', gap:"5px"}}>
      <span className={`${classes.glow} ${classes.dot}`}></span>
      <span className={classes.dot}></span>
      <span className={classes.dot}></span>
      <span className={classes.dot}></span>
    </div>
  );
};

export default Dots;
