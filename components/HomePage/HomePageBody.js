import React from "react";
import classes from "./HomePageBody.module.css";
import Image from "next/image";
import Dots from "../ui/Dots";
import FamousDestinations from "./FamousDestinations";
import Footer from "./Footer";
import CommentComp from "../ui/CommentComp";
const HomePageBody = () => {
  return (
    <main>
      <div className={classes.mainClass}>
        <img
          src="./background1.jpg"
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
        <Dots />
      </div>
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
      <div>
        <Footer />
      </div>
    </main>
  );
};

export default HomePageBody;
