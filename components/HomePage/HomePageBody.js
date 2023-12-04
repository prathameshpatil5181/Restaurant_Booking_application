import React from "react";
import classes from "./HomePageBody.module.css";
import FamousDestinations from "./FamousDestinaition/FamousDestinations";
import CommentComp from "../ui/CommentComp";
import Header from "./Header";
const HomePageBody = () => {
  return (
    <main>
      <Header/>
      <div className={classes.main}>
        <div className={classes.destHeader}>Popular Destination</div>
        <FamousDestinations />
        <div className={classes.numbers}>
          <div className={classes.cont}>
            <div className={classes.value}>1,20,000</div>
            <div className={classes.heading}>Total Bookings</div>
          </div>
          <div className={classes.cont}>
            <div className={classes.value}>50,000</div>
            <div className={classes.heading}>Happy Families</div>
          </div>
        </div>
      </div>
      <div className={classes.comment}>
        <CommentComp />
        <CommentComp />
      </div>
    </main>
  );
};

export default HomePageBody;
