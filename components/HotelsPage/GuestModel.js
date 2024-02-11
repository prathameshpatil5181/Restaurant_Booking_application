import React, {useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import { BookActions } from "@/Store/BookingSlice";




const GuestModel = (props) => {
  const roomRef = useRef();
  const guestRef = useRef();
  const rooms = useSelector(state=>state.book.Rooms);
  const guests = useSelector(state=>state.book.guest)
  const dispatch = useDispatch();


  return (
    <div className="absolute translate-y-24 translate-x-[-0.2vw] bg-white flex flex-col w-[10vw] h-[9vw] items-center justify-center rounded-md ">
      <div>Room</div>
      <div className="flex flex-row gap-3">
        <button className="p-1 text-xl " onClick={() => dispatch(BookActions.setRooms({type:"increment",value:'1'}))}>
          +
        </button>
        <input
          type="text"
          className="w-[3vw] noIncrement focus:outline-none text-center"
          ref={roomRef}
          value={rooms}
        />
        <button
          className="p-1 text-2xl border-black"
          onClick={() => dispatch(BookActions.setRooms({type:"decrement",value:'1'}))}
        >
          -
        </button>
      </div>


{/* guest model*/ }
      <div>Guest</div>
      <div className="flex flex-row gap-3">
        <button
          onClick={() => dispatch(BookActions.setGuest({type:"increment",value:'1'}))}
          className="cursor-pointer p-1 text-xl border-black"
        >
          +
        </button>
        <input
          type="number"
          className="w-[3vw] noIncrement focus:outline-none text-center"
          value={guests}
          ref = {guestRef}
        ></input>
        <button
          className="cursor-pointer p-1 text-2xl border-black"
          onClick={() => dispatch(BookActions.setGuest({type:"decrement",value:'1'}))}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default GuestModel;
