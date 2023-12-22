import React from "react";
import classes from "./HotelHeaderImages.module.css";
import { motion } from "framer-motion";
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

  const [imagePostion, setImagePosition] = useState([
    HOTEL_PICS.length - 1,
    0,
    1,
  ]);

  const setNewRightPosition = (value) => {
    if (value === (HOTEL_PICS.length - 1)) {
      return 0;
    }
    else {
      return (value + 1);
    }
  };
  const setNewLeftPosition = (value) => {
    if (value === 0) {
      return HOTEL_PICS.length - 1;
    }
    else {
      return (value - 1);
    }
  };

  const imageOnLeftclickHandler = () => {

    setImagePosition(() => {
      return ([
        setNewLeftPosition(imagePostion[0]),
        setNewLeftPosition(imagePostion[1]),
        setNewLeftPosition(imagePostion[2]),
      ]);
    });
  };
  const imageOnRightclickHandler = () => {

    setImagePosition(() => {
      return ([
        setNewRightPosition(imagePostion[0]),
        setNewRightPosition(imagePostion[1]),
        setNewRightPosition(imagePostion[2]),
      ]);
    });
  };

  return (
    <div className={classes.main} style={{ border: "1px solid green" }}>
      <div className="absolute  z-10 grid grid-cols-2 top-1/2 w-full">
        <div
          className="bg-white self-center text-xl text-black z-10  h-10 w-10 rounded-lg p-2 text-center ml-5 shadow-[1px_1px_25px_2px_rgba(0,0,0,0.46)]"
          onClick={imageOnLeftclickHandler}
        >
          &lt;
        </div>
        <div className="bg-white z-10 justify-self-end text-xl text-black  h-10 w-10 rounded-lg p-2 text-center mr-5 shadow-[1px_1px_25px_2px_rgba(0,0,0,0.46)]"  onClick={imageOnRightclickHandler}>
          &gt;
        </div>
      </div>
      <div className={classes.innerClass}>
        <img
          src={`/hotels/${HOTEL_PICS[imagePostion[0]]}`}
          className={classes.imageClass}
        ></img>
        <img
          src={`/hotels/${HOTEL_PICS[imagePostion[1]]}`}
          className={classes.bigImageClass}
          alt="image"
        ></img>
        <img
          src={`/hotels/${HOTEL_PICS[imagePostion[2]]}`}
          className={classes.imageClass}
          alt="image"
        ></img>
      </div>
    </div>
  );
};

export default HotelHeaderImages;
