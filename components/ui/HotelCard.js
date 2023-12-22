import { useState } from "react";
import classes from "./HotelCard.module.css";
import { uiActions } from "@/Store/uiSlice";
import { compareActions } from "@/Store/CompareSlice";
import { useDispatch } from "react-redux";
import Location from "./Location";
import StarRating from "./StarRating";
import { useRouter } from "next/navigation";
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
  const isVisible = useSelector(state=>state.ui.isVisible)
  const router = useRouter();
  const [mainImage,setMainImage] = useState(HOTEL_PICS[0])
  const imageClick=(imageString)=>{
    setMainImage(imageString)
  }
  return (
    <div className={classes.main}>
      <div className={classes.mainImage}>
        <img src={`/hotels/${mainImage}`} className={classes.image} />
      </div>
      <div className={classes.images}>
        {[...Array(6)].map((pic, index) => (
          <img
            src={`/hotels/${HOTEL_PICS[index]}`}
            alt="image"
            onClick={()=>{imageClick(HOTEL_PICS[index])}}
          ></img>
        ))}
      </div>
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
              <li>AC</li>
              <li>TV</li>
              <li>Parking</li>
              <li>Free WIFI</li>
            </ul>
          </div>
        </div>

        <div className={classes.bill}>
          <div>₹ 5000</div>
          {isVisible?<button onClick={()=>{dispatch(compareActions.removeHotels(1))}}>Remove</button>:<button onClick={()=>{dispatch(compareActions.addHotels(1))}}>Add</button>}
          
          <button onClick={()=>{router.push('/Hotels/1')}}>Book</button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
