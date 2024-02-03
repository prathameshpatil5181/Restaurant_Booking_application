import React, { useEffect, useState } from "react";
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
import { useParams } from "next/navigation";
import Loading from "../SVG/Loading";
const HotelDetail = () => {
  const FormatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "2-digit" };

    const formatter = new Intl.DateTimeFormat("en-US", options);
    const formattedDate = formatter.format(date);

    return formattedDate;
  };

  const [Hotel, setHotel] = useState();

  const hotelId = useParams();
  const getHotels = async () => {
    try {
      const response = await fetch(
        `https://hotelmania-7bfd0-default-rtdb.firebaseio.com/Hotel/${hotelId.hotelId}.json`,
        {
          method: "GET",
        }
      );
      const body = await response.json();
      setHotel(body);
      console.log(body);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHotels();
  }, []);

  if (!Hotel) {
    return (
      <div className="h-[100vh] w-full flex items-center justify-center  ">
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className={classes.main}>
      <div>
        <AnimatePresence>
          <TestComp Images={Hotel.imageUrls} />
        </AnimatePresence>
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
              {Hotel.name}
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
                  {Hotel.address}
                </li>
              </ul>
            </div>
            <div>
              <StarRating Fixed={3} />
            </div>
            <div style={{ fontFamily: "Montserrat, sans-serif" }}>
              {Hotel.description}
            </div>
          </div>
          <Link href="/TestModel">
            <Button marginTop={"20px"}>Book Now</Button>
          </Link>
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
              <ul>
                {Hotel.facilities.map((facility) => (
                  <li key={facility}>{facility}</li>
                ))}
              </ul>
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
