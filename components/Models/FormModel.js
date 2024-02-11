import React, { useState, useRef } from "react";
import ModelCard from "../ui/ModelCard";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "next/navigation";
const FormModel = () => {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const hotelId = useParams();
  const optRef = useRef();
  const room = useSelector(state=>state.book.Rooms);
  const guest = useSelector(state=>state.book.guest)
  const [sendOtp, setSendOtp] = useState(false);
  const Dates = useSelector((state) => state.book.dates);

  const nightcalculations = () => {
    const checkInDate = Dates[0] ? Dates[0] : new Date();
    const checkOutDate = Dates[1]
      ? Dates[1]
      : new Date(new Date().getTime() + 48 * 60 * 60 * 1000);
    const timeDifference = checkOutDate.getTime() - checkInDate.getTime();

    const nights = Math.ceil(timeDifference / (24 * 60 * 60 * 1000));
    return nights;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!sendOtp) {
      console.log("please enter otp");
      return;
    }
    // Retrieve values from refs
    const firstName = fnameRef.current.value;
    const lastName = lnameRef.current.value;
    const email = emailRef.current.value;
    const mobile = mobileRef.current.value;
    const otp = optRef.current.value;

    if (!firstName || !lastName || !email || !mobile || otp !== "123456") {
      console.log("Please fill in all fields.");
      return;
    }

    console.log("Form submitted successfully!");

    try {
      const hotel = await fetch(
        `https://hotelmania-7bfd0-default-rtdb.firebaseio.com/Hotel/${hotelId.hotelId}.json`,
        {
          method: "GET",
        }
      );
      const hotelbody = await hotel.json();
      const userId = localStorage.getItem("userId");
      const response = await fetch(
        `https://hotelmania-7bfd0-default-rtdb.firebaseio.com/user/${userId}/bookings.json`,
        {
          method: "PATCH",
          body: JSON.stringify({
            hotel: hotelbody,
            price: hotelbody.price * nightcalculations(),
            from:Dates[0].toISOString(),
            to:Dates[1].toISOString(),
            room,
            guest,
            firstName,
            lastName,
            email,
            mobile
          })
        }
      );
      if (response.status === 200) {
        console.log("done");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Montserrat, sans-serif",
        width: "100%",
        color: "#ffffffba",
      }}
    >
      <ModelCard
        width={"100%"}
        padding={"20px 20px 20px 20px "}
        height={"50vh"}
      >
        <h1 className="mb-7">Enter Detail here</h1>
        <AnimatePresence>
          <form
            className="grid grid-cols-2 gap-x-5 gap-y-7"
            onSubmit={handleSubmit}
          >
            <input
              placeholder="Frist Name"
              className="bg-transparent border-b focus:outline-none"
              ref={fnameRef}
            ></input>

            <input
              placeholder="Last Name"
              className="bg-transparent border-b focus:outline-none"
              ref={lnameRef}
            ></input>

            <input
              placeholder="Mobile No "
              className="bg-transparent border-b focus:outline-none"
              ref={mobileRef}
            ></input>

            {sendOtp ? (
              <motion.input
                placeholder="OTP"
                className="bg-transparent border-b focus:outline-none"
                ref={optRef}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
              ></motion.input>
            ) : null}
            <button
              className="bg-white w-fit text-black rounded-xl px-3 py-1"
              onClick={(e) => {
                e.preventDefault();
                setSendOtp(true);
              }}
            >
              {sendOtp ? "Resend" : "Send OTP"}
            </button>
            <input
              placeholder="Email"
              className="bg-transparent border-b focus:outline-none col-span-2"
              ref={emailRef}
            ></input>
            <button
              type="submit "
              className="col-span-2 bg-white w-fit text-black rounded-xl px-3 py-1 justify-self-center"
            >
              Submit
            </button>
          </form>
        </AnimatePresence>
      </ModelCard>
    </div>
  );
};

export default FormModel;
