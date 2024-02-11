import React from "react";
import HotelCard from "../ui/HotelCard";
import { useSelector } from "react-redux";
import { uiActions } from "@/Store/uiSlice";
import { useDispatch } from "react-redux";
import Button from "../ui/Button";
const HotelModel = () => {
  const count = useSelector((state) => state.compare.count);
  const dispatch = useDispatch(uiActions);
  return (
    <div
      className="p-20 z-0 w-full h-screen bg-[#0000006b] "
      // onClick={() => dispatch(uiActions.toggle())}
    >
      <div className="z-20">
        {[...Array(count)].map((x) => (
            <HotelCard key={x} />
        ))}
      </div>
      <Button onClick={() => dispatch(uiActions.toggle())}>Close</Button>
    </div>
  );
};

export default HotelModel;
