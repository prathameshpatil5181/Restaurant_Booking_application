import React from "react";
import classes from "./CityCard.module.css";
import { motion } from "framer-motion";
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
      <motion.img
        src={`./${props.src}`}
        initial={{opacity:0}}
        animate={{opacity:1,transition:{duration:1,type:'spring'}}}
        transition={{duration:0.1}}
        whileHover={{ scale: 1.1, transition:{type:'spring'} } }
        style={{
          height: `${props.height}vw`,
          width: `${props.width}vw`,
          position: "relative",
          filter: `blur(${props.blur ? props.blur+'px' : "0px"})`,
          opacity:props.opacity,
          borderRadius:'20px'
        }}
      />
    </div>
  );
};

export default CityCard;
