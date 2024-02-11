import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModelActions } from "@/Store/ModelSlice";
import Loading from "../SVG/Loading";
import { AnimatePresence, motion } from "framer-motion";
const Model = (props) => {
  const dispatch = useDispatch();
  const closeToggle = () => {
    dispatch(ModelActions.toggleModel({ message: " " }));
  };
  const message = useSelector((state) => state.model.message);

  return (
    <div
      className="w-full h-[100vh] absolute  flex items-center justify-center clickCheck z-10"
      style={{}}
      onClick={closeToggle}
    >
      <AnimatePresence> 
        <motion.div
          initial={{
            y: "-500%",
            opacity: 0,
          }}
          animate={{
            y: "0%",
            opacity: 1,
          }}
          exit={{
            y: "-500%",
            opacity: 0,
          }}
          className="h-fit w-fit bg-[rgba(0,0,0,0.5)] rounded-lg text-white z-20 backdrop-blur-sm flex flex-col
      p-5  
      "
        >
          <div>
            {message === "Loading" ? <Loading /> : "This is Test Model"}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Model;
