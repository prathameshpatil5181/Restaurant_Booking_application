import React from "react";
import classes from "./HotelHeaderImages.module.css";
import { useState } from "react";
const HotelHeaderImages = () => {
  const [bigImage, setBigImage] = useState(false);
  const HOTEL_PICS = [
    "hotel1.jpg",
    "hotel2.jpg",
    "hotel3.jpg",
    "hotel4.jpg",
    "hotel5.jpg",
    "hotel6.jpg",
  ];
  console.log('hii');

  const imageOnclickHandler = (index) => {
    setBigImage(true);
  };
  

  return (
    <div className={classes.main}>
      <div className={classes.innerClass}>
        <img
          src={`/hotels/${HOTEL_PICS[0]}`}
          className={
            bigImage ?classes.bigImageClassAnime2:classes.imageClass 
          }
        ></img>
        <img
          src={`/hotels/${HOTEL_PICS[1]}`}
          className={
            bigImage ? classes.bigImageClassAnime : classes.bigImageClass
          }
          alt="image"
        ></img>
        <img
          src={`/hotels/${HOTEL_PICS[2]}`}
          className={
            bigImage ?classes.bigImageClassAnime3:classes.imageClass 
          }
          alt="image"
          onClick={imageOnclickHandler}
        ></img>
      </div>
      {/* <button onClick={imageOnclickHandler}>Activate</button> */}
    </div>
  );
};

export default HotelHeaderImages;
