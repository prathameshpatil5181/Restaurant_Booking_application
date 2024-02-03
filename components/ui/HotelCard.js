import { useState } from "react";
import classes from "./HotelCard.module.css";
import { uiActions } from "@/Store/uiSlice";
import { compareActions } from "@/Store/CompareSlice";
import { useDispatch } from "react-redux";
import Location from "./Location";
import StarRating from "./StarRating";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
const HotelCard = (props) => {
  const HOTEL_PICS = [
    "hotel1.jpg",
    "hotel2.jpg",
    "hotel3.jpg",
    "hotel4.jpg",
    "hotel5.jpg",
    "hotel6.jpg",
  ];
  const router = useRouter();
  const [mainImage, setMainImage] = useState(HOTEL_PICS[0]);
  const imageClick = (imageString) => {
    setMainImage(imageString);
  };

  const Variants = {
    initial: {
      y: -100,
      opacity: 0,
      // scale: 0.5,
    },
    animate: {
      y: 0,
      opacity: 1,
      // scale: 1,
      // transition: 'ease-in',
      transition: {
        x: { type: "ease-in" },
        opacity: { duration: 0.2 },
      },
    },
    exit: {
      y: 100,
      opacity: 0,
      // scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: "ease-in", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
  };

  return (
    <div className={classes.main}>
      <div className={classes.mainImage}>
        <AnimatePresence>
          <motion.img
            key={mainImage}
            variants={Variants}
            initial="initial"
            animate="animate"
            exit="exit"
            src={`${props.hotel.images[0]}`}
            className={classes.image}
          />
        </AnimatePresence>
      </div>
      <motion.div
        className={classes.images}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2, // Adjust the stagger interval here
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {props.hotel.images.map((pic, index) => (
          <motion.img
            key={pic}
            src={pic}
            alt="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            onClick={() => {
              imageClick(HOTEL_PICS[index]);
            }}
          ></motion.img>
        ))}
      </motion.div>

      <div className={classes.moveBottom}>
        <div className={classes.description}>
          <div className={classes.name}>
            <h1>{props.hotel.name}</h1>
          </div>

          <div className={classes.address}>
            <ul>
              <li>
                <Location />
              </li>
              <li className={classes.addText} >{props.hotel.address}</li>
            </ul>
          </div>

          <div className={classes.rating}>
            <StarRating Fixed={5} />
          </div>

          <div className={classes.Services}>
            <ul>
              {
              props.hotel.facilities.map(facility=>
                <li key={facility}>{facility}</li>
               )
              }
            </ul>
          </div>
        </div>

        <div className='grid grid-flow-col items-end h-full'>
          <div className="self-end text-[2vw]">₹ 25000</div>
          
            <button
             className="justify-self-center text-[2vw] bg-white text-black rounded-2xl w-fit h-fit px-5"
            >
              Add
            </button>

          <button
         className="justify-self-center text-[2vw] bg-white text-black rounded-2xl w-fit h-fit px-5"
            onClick={() => {
              router.push(`/Hotels/${props.hotel.key}`);
            }}
          > 
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
