import React, { useEffect } from "react";
// import Image from 'next/image'
import classes from "./HotelPage.module.css";
import CityCard from "../ui/CityCard";
import HotelCard from "../ui/HotelCard";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Pagination from "../ui/Pagination";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loading from "../SVG/Loading";
const CITIS = [
  { image: "paris.jpg", name: "paris" },
  { image: "nyc.jpg", name: "new york" },
  { image: "rio.jpg", name: "rio" },
  { image: "tokyo.jpg", name: "tokyo" },
  { image: "dubai.jpg", name: "dubai" },
  { image: "london.jpg", name: "london" },
];

const HotelPage = () => {
 
  const [page, setPage] = useState(1);
  const [Hotels, setHotels] = useState([]);
  const [searched,setSearched] = useState([]);
  const changePageHandler = () => {
    setPage((prevState) => {
      return prevState + 1;
    });
    window.scrollTo({
      top: "550",
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  const hotelCardVarients = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
    },
    transition: {
      staggerChildren: -0.1,
    },
  };

 

  const getHotels = async () => {
    try {
      const response = await fetch(
        "https://hotelmania-7bfd0-default-rtdb.firebaseio.com/Hotel.json",
        {
          method: "GET",
        }
      );
      const body = await response.json();
      const HOTELS = [];
      for (let key in body) {
        HOTELS.push({
          key: key,
          name: body[key].name,
          address: body[key].address,
          city: body[key].city,
          country: body[key].country,
          description: body[key].description,
          facilities: body[key].facilities,
          images: body[key].imageUrls,
          price:body[key].price,
          starRating:body[key].starRating,
        });
      }
      setHotels(HOTELS);
      setSearched(HOTELS);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHotels();
  }, []);

  const handleSearch = (search) => {
    const filterdValue = Hotels.filter((hotel) => {
      search = search.toLowerCase();
      return (
        hotel.city.toLowerCase().includes(search) ||
        hotel.name.toLowerCase().includes(search)
      );
    });
    if(filterdValue){
      setSearched(filterdValue);
    }
      else{
        setSearched([]);
      }
  };
if(!searched){
  return <Loading/>
}
  return (
    <div className={classes.main}>
      <div className={classes.grid}>
        {CITIS.map((item, index) => (
          <CityCard
            key={index}
            src={item.image}
            height={15}
            width={500}
            name={item.name}
            blur="1.5"
            fontsize="2vw"
            opacity="0.95"
          />
        ))}
      </div>
      <div>
        <SearchBar onChange={handleSearch} />
      </div>
      <AnimatePresence>
        <motion.div
          variants={hotelCardVarients}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {searched &&
            searched.map((hotel) => (
              <motion.div key={hotel.key} variants={hotelCardVarients}>
                <HotelCard hotel={hotel} />
              </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>
      {/* <div className="m-2">
        <Pagination pages={5} active={page} onClick={changePageHandler} />
      </div> */}
    </div>
  );
};

export default HotelPage;
