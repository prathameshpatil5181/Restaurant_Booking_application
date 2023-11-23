import React from "react";
import classes from "./HotelCard.module.css";
import Location from "./Location";
const HotelCard = () => {
  return (
    <div style={{ display: "flex", color: "white" }}>
      <div className={classes.mainImage}>
        <img src="/hotels/hotel1.jpg" className={classes.image} />
      </div>
      <div classes={classes.images}></div>
      <div className={classes.description}>
        <div className={classes.name}>
          <h1>THE TAJ</h1>
        </div>
        <span>
          <div>
            <Location />
          </div>
          <div>Mumbai, Apollo Bandar, Colaba</div>
        </span>
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

        <div className={classes.bill}>
            <div>₹ 5000</div>
            <button>Book</button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
