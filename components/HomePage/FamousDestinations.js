import React from "react";
import classes from "./FamousDestinations.module.css";
import Dots from "../ui/Dots";
const FamousDestinations = () => {
  return (
    <>
      <div className={classes.destination}>
        <div>
          <img src="./london.jpg" className={classes.image}></img>
        </div>
        <div className={classes.information}>
          <div className={classes.title}>London</div>
          <div style={{ color: "white" }} className={classes.description}>
            London, the capital of the United Kingdom, is renowned for its rich
            history, iconic landmarks such as the Big Ben and the Tower Bridge,
            and its vibrant cultural scene. The city's diverse culinary
            offerings, ranging from traditional fish and chips to
            Michelin-starred restaurants, make it a haven for food enthusiasts
            from all around the world.
          </div>
        </div>
      </div>
      <div style={{alignSelf:"center"}}>
        <Dots />
      </div>
    </>
  );
};

export default FamousDestinations;
