import React from "react";
import classes from "./HotelCard.module.css";
import Location from "./Location";
const HotelCard = () => {

const HOTEL_PICS = ["hotel1.jpg","hotel2.jpg","hotel3.jpg","hotel4.jpg","hotel5.jpg","hotel6.jpg"]


  return (
    <div className={classes.main}>
      <div className={classes.mainImage}>
        <img src="/hotels/hotel1.jpg" className={classes.image} />
      </div>
      
      <div classes={classes.images}><img src='/hotels/hotel1.jpg' className={classes.other}></img></div>
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
            <h1>5</h1>
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
          <button>Book</button>
        </div>


      </div>
    </div>
  );
};

export default HotelCard;
