import React from "react";
import classes from "./FamousDestinations.module.css";
import Dots from "../../ui/Dots";
import FamousCard from "./FamousCard";
import { useState } from "react";
const FamousDestinations = () => {

  const FAMOUS_DESTI = [
    {
      image: "./london.jpg",
      title: "London",
      description:
        "London, the capital of the United Kingdom, is renowned for its rich history, iconic landmarks such as the Big Ben and the Tower Bridge, and its vibrant cultural scene. The city's diverse culinary offerings, ranging from traditional fish and chips to Michelin-starred restaurants, make it a haven for food enthusiasts from all around the world.",
    },
    {
      image: "./paris.jpg",
      title: "Paris",
      description:
        "Paris, the capital of France, is celebrated for its romantic ambiance, architectural marvels like the Eiffel Tower and Notre Dame Cathedral, and its world-famous art museums, including the Louvre and Musée d'Orsay. The city is also renowned for its haute cuisine, fashion boutiques, and café culture.",
    },
    {
      image: "./nyc.jpg",
      title: "New York City",
      description:
        "New York City, often referred to as NYC, is recognized for its towering skyscrapers, such as the Empire State Building and One World Trade Center, its thriving arts and theater scene, and its diverse neighborhoods, each with its own distinct character and offerings, from Central Park to the bustling streets of Times Square.",
    },
    {
      image: "./tokyo.jpg",
      title: "Tokyo",
      description:
        "Tokyo, the bustling capital of Japan, is renowned for its ultramodern cityscape, its historic temples and gardens, and its vibrant street life. The city is also known for its diverse culinary scene, ranging from traditional Japanese dishes to innovative Michelin-starred cuisine, and its technological innovations that continue to shape the future.",
    },
    {
      image: "./dubai.jpg",
      title: "Dubai",
      description:
        "Dubai, located in the United Arab Emirates, is famous for its modern architecture, including the Burj Khalifa, the world's tallest building, and its luxurious shopping malls. The city's rich cultural heritage, its desert landscapes, and its extravagant entertainment options, such as indoor skiing and desert safaris, make it a popular destination for travelers worldwide.",
    },
    {
      image: "./rio.jpg",
      title: "Rio de Janeiro",
      description:
        "Rio de Janeiro, a vibrant city in Brazil, is renowned for its stunning beaches, including Copacabana and Ipanema, its lively carnival celebrations, and its iconic landmarks such as the Christ the Redeemer statue atop Corcovado Mountain. The city's rich cultural heritage, dynamic music scene, and passion for sports make it a vibrant and lively destination.",
    },
  ];

  const [destination,setDestination] = useState(1);
  const destinationChangeHandler = (pointer)=>{
    setDestination(pointer);
  }


  return (
    <>
      <FamousCard  image = {FAMOUS_DESTI[destination].image} title={FAMOUS_DESTI[destination].title} description={FAMOUS_DESTI[destination].description} />
      <div style={{ alignSelf: "center" }}>
      <Dots length={FAMOUS_DESTI.length} pointerPlace={destination} onClick={destinationChangeHandler} />
      </div>
    </>
  );
};

export default FamousDestinations;
