import React, { useRef, useState } from "react";
import GuestModel from "./GuestModel";
import { debounce } from "@/utils/util";
import { useSelector } from "react-redux";
import { Calendar } from "primereact/calendar";
import { useDispatch } from "react-redux";
import { BookActions } from "@/Store/BookingSlice";
const SearchBar = (props) => {
  const guests = useSelector((state) => state.book.guest);

const dispatch = useDispatch();
const Dates = useSelector(state=>state.book.dates);
  const [model, showModel] = useState(false);

  const room = useSelector((state) => state.book.Rooms);

  const SearchBarRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onChange(SearchBarRef.current.value);
  };

  const handleChange = debounce(() => {
    props.onChange(SearchBarRef.current.value);
  }, 1000);

  const handleDate = (e) => {
    dispatch(BookActions.setDate(e.value));
  };

  return (
    <div
      className="w-full flex flex-row text-black justify-center bg-white p-3 rounded-2xl self-center"
      style={{ fontFamily: "Nunito, sans-serif" }}
    >
      <div className="grow">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search by Hotel or City"
            className="bg-white  w-full outline-none"
            ref={SearchBarRef}
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="grow flex justify-center">
        <Calendar
          value={Dates}
          onChange={handleDate}
          selectionMode="range"
          readOnlyInput
          minDate={new Date()}
        />
      </div>
      <div className="grow bg-white flex justify-center flex-col">
        <div
          className="flex flex-row first-letter gap-1 cursor-pointer"
          onClick={() => showModel(!model)}
        >
          <div>Room: {room}</div>
          <div> Guest: {guests}</div>
        </div>
        {model ? <GuestModel /> : ""}
      </div>
    </div>
  );
};

export default SearchBar;
