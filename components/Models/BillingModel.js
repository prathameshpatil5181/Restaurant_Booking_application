import React, { useEffect, useState } from "react";
import classes from "./BillingModel.module.css";
import ModelCard from "../ui/ModelCard";
import Location from "../ui/Location";
import StarRating from "../ui/StarRating";
import { FormatDate } from "@/utils/util";
import Loading from "../SVG/Loading";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { BookActions } from "@/Store/BookingSlice";
import { Calendar } from "primereact/calendar";
const BillingModel = () => {
  const [Hotel, setHotel] = useState();
  const Dates = useSelector((state) => state.book.dates);
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

  const handleDate = (e) => {
    dispatch(BookActions.setDate(e.value));
  };

  useEffect(() => {
    getHotels();
  }, []);

  const rooms = useSelector((state) => state.book.Rooms);
  const guests = useSelector((state) => state.book.guest);
  const dispatch = useDispatch();

  if (!Hotel) {
    return (
      <div className="h-full m-full items-center justify-center">
        <Loading />
      </div>
    );
  }

  const nightcalculations = () => {
    const checkInDate = Dates[0]?Dates[0]:new Date(); // replace with your actual check-in date
    const checkOutDate = Dates[1]?Dates[1]:new Date(new Date().getTime() + 48 * 60 * 60 * 1000);; // replace with your actual check-out date

    // Calculate the difference in milliseconds
    const timeDifference = checkOutDate.getTime() - checkInDate.getTime();

    // Convert the difference to days
    const nights = Math.ceil(timeDifference / (24 * 60 * 60 * 1000));

    return nights;
  };

  return (
    <div className={classes.main}>
      <ModelCard
        width={"100%"}
        padding={"20px 20px 20px 20px "}
        height={"50vh"}
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
                className="text-md"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {Hotel.address}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <StarRating Fixed={3} />
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="grow flex justify-center text-black p-3">
            <Calendar
              value={Dates}
              onChange={handleDate}
              selectionMode="range"
              readOnlyInput
              minDate={new Date()}
            />
          </div>
          <div className="flex flex-row gap-2">
            <div className={classes.room}>
              <button
                onClick={() =>
                  dispatch(
                    BookActions.setGuest({ type: "increment", value: "1" })
                  )
                }
              >
                +
              </button>
              <span>
                <input
                  type="number"
                  value={guests}
                  className="w-4 text-m bg-transparent focus:cursor-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none m-1 "
                />
                <label>Guest</label>
              </span>
              <button
                onClick={() =>
                  dispatch(
                    BookActions.setGuest({ type: "decrement", value: "1" })
                  )
                }
              >
                -
              </button>
            </div>
            <div className={classes.room}>
              <button
                onClick={() =>
                  dispatch(
                    BookActions.setRooms({ type: "increment", value: "1" })
                  )
                }
              >
                +
              </button>
              <span>
                <input
                  type="number"
                  value={rooms}
                  className="w-4 text-m bg-transparent focus:cursor-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none mr-1 "
                />
                <span className="text-m"> Room</span>
              </span>
              <button
                onClick={() =>
                  dispatch(
                    BookActions.setRooms({ type: "decrement", value: "1" })
                  )
                }
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-5 mb-5 ">
          <div className={`col-span-2 ${classes.lineClass}`}></div>
          <div>Room Price -</div>
          <div className="justify-self-center">{Hotel.price*nightcalculations()}</div>
          <div>Instant discount -</div>
          <div className="justify-self-center">1000</div>
          <div>Coupon discount - </div>
          <div className="justify-self-center">200</div>
          <div className={`col-span-2 ${classes.lineClass}`}></div>
          <div>Total</div>
          <div className="justify-self-center">{Hotel.price - 1000 - 200}</div>
        </div>
      </ModelCard>
    </div>
  );
};

export default BillingModel;
