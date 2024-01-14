import React, { useState,useRef } from "react";

const GuestModel = (props) => {
  const roomRef = useRef();
  const guestRef = useRef();

  const handleGuest = (action) => {
    if (action === "increase") {
      if (props.guest < 11)
        props.setGuest((prevState) => {
          if (prevState % 3 === 0) {
            props.setRoom(prevState / 3 + 1);
          }
          return prevState + 1;
        });
      return;
    }
    if (action === "decrease") {
      if (props.guest > 1)
        props.setGuest((prevState) => {
          prevState -= 1;
          if ((prevState) % 3 === 0) {
            props.setRoom((prevRoom) =>{
              return prevRoom-1;
            });
          }
          return prevState ;
        });
      return;
    }
  };

  const handleRoom = (action) => {
    if (action === "increase") {
      props.setRoom((prevState) => {
        if (prevState < 11) {
          //dummy limit
          return prevState + 1;
        } else return prevState;
      });
    }
    if (action === "decrease") {
      props.setRoom((prevState) => {
        if (prevState > 1) {
          //dummy limit
          return prevState - 1;
        } else return prevState;
      });
    }
  };

  const handleInputChange = ({feild,value})=>{
    if(feild==='guest'){
      if(value>33){//dummy limit for guest
        alert('enter value less than 33');
      } 
      else{
        if(props.room<(value%3)+1){
          props.setRoom(value%3+1);
        }
        props.setGuest(value);
      }
    }
    if(feild==='room'){
      if(value>11){//dummy limit for guest
        alert('enter value less than 1');
      } 
      else{
        
        props.setRoom(value);
      }
    }
  }
  //need to complete

  return (
    <div className="absolute translate-y-24 translate-x-[-0.2vw] bg-white flex flex-col w-[10vw] h-[9vw] items-center justify-center rounded-md ">
      <div>Room</div>
      <div className="flex flex-row gap-3">
        <button className="p-1 text-xl " onClick={() => handleRoom("increase")}>
          +
        </button>
        <input
          type="number"
          className="w-[3vw] noIncrement focus:outline-none text-center"
          defaultValue={props.room}
          ref={roomRef}
          onChange ={ ()=> handleInputChange({feild:'room',value:roomRef.current.value})}
        ></input>
        <button
          className="p-1 text-2xl border-black"
          onClick={() => handleRoom("decrease")}
        >
          -
        </button>
      </div>

      <div>Guest</div>
      <div className="flex flex-row gap-3">
        <button
          onClick={() => handleGuest("increase")}
          className="cursor-pointer p-1 text-xl border-black"
        >
          +
        </button>
        <input
          type="number"
          className="w-[3vw] noIncrement focus:outline-none text-center"
          defaultValue={props.guest}
          ref = {guestRef}
          onChange ={ ()=> handleInputChange({feild:'guest',value:guestRef.current.value})}
        ></input>
        <button
          className="cursor-pointer p-1 text-2xl border-black"
          onClick={() => handleGuest("decrease")}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default GuestModel;
