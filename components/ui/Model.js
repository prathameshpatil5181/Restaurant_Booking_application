import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ModelActions } from "@/Store/ModelSlice";
const Model = (props) => {
  const dispatch = useDispatch();
  const closeToggle = () => {
    dispatch(ModelActions.toggleModel());
  };
  //   useState(()=>{
  //     const setScrollNone = () => {
  //       console.log('setScrollNone');
  //       const body = document.getElementsByTagName("body")[0];
  //       body.style.overflow = 'hidden';
  //     };

  //     setScrollNone();

  //     // Clean up the effect if necessary
  //     return () => {
  //       const body = document.getElementsByTagName("body")[0];
  //       body.style.overflow = ''; // Reset the style when the component is unmounted
  //     };
  //   },[]);

  return (
    <div
      className="w-full h-[100vh] absolute  flex items-center justify-center clickCheck z-10"
      style={{}}
      onClick={closeToggle}
    >
      <div
        className="h-fit w-fit bg-[rgba(0,0,0,0.5)] rounded-lg text-white z-20 backdrop-blur-sm flex flex-col
      p-5  
      "
      >
        <div>
          This is Test Model
          <button>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Model;
