import React from "react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import PreviousMap from "postcss/lib/previous-map";
import { useScroll, useInView } from "framer-motion";

const TestComp = () => {
  const [bigImage, setBigImage] = useState(false);
  const HOTEL_PICS = [
    "hotel1.jpg",
    "hotel2.jpg",
    "hotel3.jpg",
    "hotel4.jpg",
    "hotel5.jpg",
  ];

  const scorllRef = useRef();
  const imageRef = useRef();

  const { scrollX, scrollXProgress } = useScroll({
    container: scorllRef,
  });

  const isInView = useInView(imageRef, { root: scorllRef });
  console.log("rerendered");
  useEffect(() => {
    // Change the animation properties accordingly
    console.log("isinview");
  }, [isInView]);

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "110%", scale: 1, zIndex: 5 },
    left1: { x: "70%", scale: 0.7, zIndex: 3 },
    left: { x: "30%", scale: 0.5, zIndex: 2 },
    right: { x: "190%", scale: 0.5, zIndex: 1 },
    right1: { x: "150%", scale: 0.7, zIndex: 3 },
  };

  const [imagePostion, setImagePosition] = useState([0, 1, 2, 3, 4]);

  const setNewRightPosition = (value) => {
    if (value === HOTEL_PICS.length - 1) {
      return 0;
    } else {
      return value + 1;
    }
  };
  const setNewLeftPosition = (value) => {
    if (value === 0) {
      return HOTEL_PICS.length - 1;
    } else {
      return value - 1;
    }
  };

  const imageOnLeftclickHandler = () => {
    setImagePosition(() => {
      return [
        setNewLeftPosition(imagePostion[0]),
        setNewLeftPosition(imagePostion[1]),
        setNewLeftPosition(imagePostion[2]),
      ];
    });
  };
  const imageOnRightclickHandler = () => {
    setImagePosition(() => {
      return [
        setNewRightPosition(imagePostion[0]),
        setNewRightPosition(imagePostion[1]),
        setNewRightPosition(imagePostion[2]),
      ];
    });
  };

  const handleNext = () => {
    setImagePosition((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setImagePosition((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  return (
    <div className="relative">
      <div className="absolute  z-10 grid grid-cols-2 top-1/2 w-full cursor-pointer">
        <div
          className="bg-white self-center text-xl text-black z-10  h-10 w-10 rounded-lg p-2 text-center ml-5 shadow-[1px_1px_25px_2px_rgba(0,0,0,0.46)]"
          onClick={handleNext}
        >
          &lt;
        </div>
        <div
          className="bg-white z-10 justify-self-end text-xl text-black  h-10 w-10 rounded-lg p-2 text-center mr-5 shadow-[1px_1px_25px_2px_rgba(0,0,0,0.46)] cursor-pointer"
          onClick={handleBack}
        >
          &gt;
        </div>
      </div>
      <div
        className=" flex flex-col items-center justify-center overflow-hidden m-5 no-scrollbar h-[30vw] w-[10vw]"
        ref={scorllRef}
      >
        {HOTEL_PICS.map((pic, index) => {
          return (
            <motion.img
              key={index}
              ref={imageRef}
              variants={imageVariants}
              initial="center"
              animate={positions[imagePostion[index]]}
              transition={{ duration: 0.5 }}
              src={"/hotels/" + HOTEL_PICS[index]}
              className=" h-[20vw] w-[30vw] absolute rounded-md"
            />
          );
        })}
      </div>
    </div>
  );
};

export default TestComp;
