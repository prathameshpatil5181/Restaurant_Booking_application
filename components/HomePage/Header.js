import React from "react";
import classes from "./Header.module.css";
import Dots from "../ui/Dots";
import { useState, useEffect } from "react";
const Header = () => {
  const imageArray = [
    "/background1.jpg",
    "background2.jpg",
    "/background1.jpg",
    "background2.jpg",
  ];

  var pointer = 0;
  const [image, setImage] = useState(imageArray[pointer]);
  const [pointerPlace, setPointerPlace] = useState(pointer);
  const changePhotoHandler = (pointer) => {
    setImage(imageArray[pointer]);
    setPointerPlace(pointer);
    pointer=pointer;
  };

  useState(() => {
    const timer = setInterval(() => {
      if (pointer > 3) {
        pointer = 0;
      }
      setImage(imageArray[pointer]);
      setPointerPlace(pointer);
      pointer++;

    }, 7000);

    return ()=>clearInterval(timer);

  }, [imageArray,setImage,setPointerPlace]);

  return (
    <div>
      <div className={classes.mainClass}>
        <img
          src={image}
          alt="Picture of the author"
          className={classes.imageClases}
        />
      </div>
      <div className={classes.title}>Explore from Million's</div>
      <div className={classes.description}>
        “Welcome to our oasis of comfort and luxury, where every stay is a
        journey to tranquility. Explore our handpicked selection of exquisite
        accommodations, tailored to meet your every need. Indulge in
        unparalleled hospitality and create unforgettable memories in our
        elegant retreat. Discover a world of unparalleled comfort and
        convenience, where your satisfaction is our utmost priority. Reserve
        your slice of paradise today and let us weave an experience that
        transcends the ordinary."
      </div>
      <div className={classes.changeDots}>
        <Dots length={imageArray.length} pointerPlace={pointerPlace} onClick={changePhotoHandler} />
      </div>
    </div>
  );
};

export default Header;