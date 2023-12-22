import React from "react";
import HotelHeaderImages from "./HotelHeaderImages";
import classes from "./HotelDetail.module.css";
import GradientCard from "../ui/GradientCard";
import Location from "../ui/Location";
import StarRating from "../ui/StarRating";
import Comment from "../ui/Comment";
import Button from "../ui/Button";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { uiActions } from "@/Store/uiSlice";
import { AnimatePresence } from "framer-motion"; 
import TestComp from "./testComp";
const HotelDetail = () => {
  const FormatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "2-digit" };

    const formatter = new Intl.DateTimeFormat("en-US", options);
    const formattedDate = formatter.format(date);

    return formattedDate;
  };

  const dispatch = useDispatch();
  return (
    <div className={classes.main}>
      <div>
        <AnimatePresence><TestComp /></AnimatePresence>
        
      </div>
      <div>
        <GradientCard
          height={"50vh"}
          width={"100%"}
          padding={"50px"}
          margin={"60px"}
        >
          <div className={classes.Gradientcard}>
            <h1
              style={{
                color: "white",
                fontFamily: "Abril Fatface, serif",
                fontSize: "30px",
              }}
            >
              The Taj
            </h1>
            <div className={classes.address}>
              <ul>
                <li>
                  <Location />
                </li>
                <li
                  className={classes.addText}
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Mumbai, Apollo Bandar, Colaba
                </li>
              </ul>
            </div>
            <div>
              <StarRating Fixed={3} />
            </div>
            <div style={{ fontFamily: "Montserrat, sans-serif" }}>
              "Nestled elegantly along the Arabian Sea with a commanding view of
              the Gateway of India, this distinguished hotel, established in
              1903, stands as India’s inaugural luxury accommodation. A beacon
              of timeless sophistication and prestige, it has welcomed esteemed
              guests from across the globe, embodying a seamless blend of
              historic charm and modern luxury."
            </div>
          </div>
         <Link href='/TestModel'><Button marginTop={'20px'} >Book Now</Button></Link>
        </GradientCard>
      </div>
      <div className={classes.amenities}>
        <GradientCard
          height={"fit-content"}
          width={"100%"}
          padding={"40px 50px 50px 50px"}
          margin={"60px"}
        >
          <div>Amenities</div>
          <ul>
            <li>AC</li>
            <li>Parking</li>
            <li>Free WIFI</li>
            <li>Breakfast</li>
          </ul>
        </GradientCard>
      </div>
      <div className={classes.title}>Customer Reviewes</div>
      <div className={classes.Comments}>
        <GradientCard
          height={"fit-content"}
          width={"100%"}
          padding={"50px"}
          margin={"60px"}
        >
          <Comment
            name={"New User"}
            date={FormatDate("2023-09-09T00:00:00")}
            rating={4}
            comment={
              "The historical property is a treat. everything is tasteful. The rooms are luxurious and the service is super. The view from the sea lounge is beautiful if you manage to get a window seat try and get one. The food at wasabi and gold dragon is excellent as is the service."
            }
          />
                    <Comment
            name={"New User"}
            date={FormatDate("2023-09-09T00:00:00")}
            rating={4}
            comment={
              "The historical property is a treat. everything is tasteful. The rooms are luxurious and the service is super. The view from the sea lounge is beautiful if you manage to get a window seat try and get one. The food at wasabi and gold dragon is excellent as is the service."
            }
          />
        </GradientCard>
        <Button>More Reviewes</Button>
      </div>
      
    </div>
  );
};

export default HotelDetail;
