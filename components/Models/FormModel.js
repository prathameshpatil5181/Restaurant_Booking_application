import React from "react";
import ModelCard from "../ui/ModelCard";
import Button from "../ui/Button";
const FormModel = () => {
  return (
    <div
      style={{
        fontFamily: "Montserrat, sans-serif",
        width: "100%",
        minHeight: "100vh",
        color: "#ffffffba",
      }}
    >
      <ModelCard width={"100%"} padding={"20px 20px 20px 20px "} height={'50vh'}>
        <h1 className="mb-7">Enter Detail here</h1>
        <form className="grid grid-cols-2 gap-x-5 gap-y-7"> 
            <input placeholder="Frist Name" className="bg-transparent border-b focus:outline-none"></input>
            <input placeholder="Last Name"  className="bg-transparent border-b focus:outline-none"></input>
            <input placeholder="Mobile No "  className="bg-transparent border-b focus:outline-none"></input> 
            <button className="bg-white w-fit text-black rounded-xl px-3 py-1">Send OTP</button>
            <input placeholder="Email"  className="bg-transparent border-b focus:outline-none col-span-2"></input> 
        <button type="submit " className="col-span-2 bg-white w-fit text-black rounded-xl px-3 py-1 justify-self-center">Submit</button>
        </form>
      </ModelCard>
    </div>
  );
};

export default FormModel;
