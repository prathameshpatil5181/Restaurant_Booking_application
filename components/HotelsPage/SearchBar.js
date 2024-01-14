import React, { useRef, useState } from "react";
import GuestModel from "./GuestModel";

const SearchBar = () => {
  const [room, setRoom] = useState(1);
  const [guest, setGuest] = useState(1);
  const [model,showModel] = useState(false);
  const SearchBarRef = useRef();
    const handleSubmit= (e)=>{
      e.preventDefault();
      console.log(SearchBarRef.current.value);
    }


  return (
    <div
      className="w-full flex flex-row text-black justify-center bg-slate-100 p-3 rounded-2xl self-center"
      style={{ fontFamily: "Nunito, sans-serif" }}
    >
      <div className="grow">
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by Hotel or City"
          className="bg-slate-100 w-full outline-none"
          ref={SearchBarRef}
        />
      </form>
      </div>
      <div className="grow flex justify-center">
        <input type="date" className=" bg-slate-100 outline-none" />
      </div>
      <div className="grow bg-slate-100 flex justify-center flex-col">
        <div className="flex flex-row first-letter gap-1 cursor-pointer" onClick={()=>showModel(!model)}>
          <div>Room: {room}</div>
          <div> Guest: {guest}</div>
        </div>
        {model?<GuestModel room={room} guest={guest} setRoom={setRoom} setGuest={setGuest}/>:''}
        
      </div>
    </div>
  );
};

export default SearchBar;
