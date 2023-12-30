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
const HotelCard = () => {
  const HOTEL_PICS = [
    "hotel1.jpg",
    "hotel2.jpg",
    "hotel3.jpg",
    "hotel4.jpg",
    "hotel5.jpg",
    "hotel6.jpg",
  ];
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.ui.isVisible);
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
            src={`/hotels/${mainImage}`}
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
        {[...Array(6)].map((pic, index) => (
          <motion.img
            key={pic}
            src={`/hotels/${HOTEL_PICS[index]}`}
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
            <h1>THE TAJ</h1>
          </div>

          <div className={classes.address}>
            <ul>
              <li>
                <Location />
              </li>
              <li className={classes.addText}>Mumbai, Apollo Bandar, Colaba</li>
            </ul>
          </div>

          <div className={classes.rating}>
            <StarRating Fixed={5} />
          </div>

          <div className={classes.Services}>
            <ul>
              <li key='ac'>AC</li>
              <li key='tv'>TV</li>
              <li key='park'>Parking</li>
              <li key='wifi'>Free WIFI</li>
            </ul>
          </div>
        </div>

        <div className={classes.bill}>
          <div>₹ 5000</div>
          {isVisible ? (
            <button
              onClick={() => {
                dispatch(compareActions.removeHotels(1));
              }}
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(compareActions.addHotels(1));
              }}
            >
              Add
            </button>
          )}

          <button
            onClick={() => {
              router.push("/Hotels/1");
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
