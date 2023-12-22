import React from "react";
import { motion } from "framer-motion";
import { useState, useRef,useEffect } from "react";
import PreviousMap from "postcss/lib/previous-map";
import { useScroll,useInView } from "framer-motion";

const TestComp = () => {
  const [bigImage, setBigImage] = useState(false);
  const HOTEL_PICS = [
    "hotel1.jpg",
    "hotel2.jpg",
    "hotel3.jpg",
    "hotel4.jpg",
    "hotel5.jpg",
    "hotel6.jpg",
  ];

  const scorllRef = useRef();
  const imageRef = useRef();

  const { scrollX, scrollXProgress } = useScroll({
    container: scorllRef,
  });

  const isInView = useInView(imageRef,{root:scorllRef});
console.log('rerendered');
  useEffect(() => {
   // Change the animation properties accordingly
   console.log('isinview');
  }, [isInView]);

  const cardVariants = {
    offscreen: {
      opacity: 0,
      x: 300,
    },
    onscreen: {
      opacity: 1,
      x: 0,
    },
  };

  const [imagePostion, setImagePosition] = useState([
    HOTEL_PICS.length - 1,
    0,
    1,
  ]);

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

  return (
    <div className="relative">
      <div className="absolute  z-10 grid grid-cols-2 top-1/2 w-full">
        <div
          className="bg-white self-center text-xl text-black z-10  h-10 w-10 rounded-lg p-2 text-center ml-5 shadow-[1px_1px_25px_2px_rgba(0,0,0,0.46)]"
          onClick={imageOnLeftclickHandler}
        >
          &lt;
        </div>
        <div
          className="bg-white z-10 justify-self-end text-xl text-black  h-10 w-10 rounded-lg p-2 text-center mr-5 shadow-[1px_1px_25px_2px_rgba(0,0,0,0.46)]"
          onClick={imageOnRightclickHandler}
        >
          &gt;
        </div>
      </div>
      <div
        initial="offscreen"
        animate="onscreen"
        variants={cardVariants}
        className="flex flex-row  overflow-scroll p-5 no-scrollbar gap-4 px-[18vw]"
        ref={scorllRef}
      >
        {HOTEL_PICS.map((pic, index) => {
          return (
            <motion.img
              key={index}
              ref={imageRef}
              initial={{ height: 100, width:100 }}
              whileInView={{height: 500, width:500}}
              // onViewportEnter={{scale: 1}}
              // onViewportLeave={{ scale: 0.5 }}
              end={{scale:0.5}}
              viewport={{ root: scorllRef, once:false,amount:1 }}
              src={"/hotels/" + HOTEL_PICS[index]}
              className=" h-[25vw] w-[50vw]"
            />
          );
        })}
      </div>
      <motion.div
        style={{
          scaleX: scrollXProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "10px",
          background: "red",
          transformOrigin: "0%",
          zIndex:'50'
        }}
      />
    </div>
  );
};

export default TestComp;
