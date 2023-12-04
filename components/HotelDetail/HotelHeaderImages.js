import React from "react";
import classes from "./HotelHeaderImages.module.css";
import { useState } from "react";
const HotelHeaderImages = () => {
  const [bigImage, setBigImage] = useState(3);
  const HOTEL_PICS = [
    "hotel1.jpg",
    "hotel2.jpg",
    "hotel3.jpg",
    "hotel4.jpg",
    "hotel5.jpg",
    "hotel6.jpg",
  ];
  const imageOnclickHandler = (index) => {
    setBigImage(index);

  };
  return (
    <div className={classes.main}>
      <div className={classes.innerClass}>
        {HOTEL_PICS.map((pic, index) => (
          <img
            key={index}
            className={
              index === bigImage ? classes.bigImageClass : classes.imageClass
            }
            src={`/hotels/${pic}`}
            alt={`Hotel ${index + 1}`}
            onClick={() => imageOnclickHandler(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelHeaderImages;
