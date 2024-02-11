import React, { useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { AuthActions } from "@/Store/AuthSlice";

const OptionModel = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const listVarients = {
    initial: { x: "-50%", opacity: 0 },
    animate: {
      x: "0",
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
    exit: {
     x:'50%',
     opacity:0,
     transition: {
        staggerChildren: -0.1,
      },
    },
  };

  const modalRef = useRef();
  useEffect(() => {
    // Event listener to handle clicks outside the modal
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Clicked outside the modal, so close it
        setShowModal(false);
      }
    };

    // Attach the event listener when the modal is open
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove the event listener when the modal is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal,setShowModal]);

  return (
    <div
      className="absolute translate-y-[4.5vw] translate-x-[-4vw] drop-shadow-md  w-[13vw] flex justify-center align-middle text-lg"
      style={{ fontFamily: "Nunito, sans-serif" }}
    >
      <motion.ul
        className="flex flex-col align-middle justify-center"
        variants={listVarients}
        initial="initial"
        animate="animate"
        exit="exit"
        ref={modalRef}
      >
          <motion.li
            className="cursor-pointer  bg-[#ffffffba] rounded-md text-center m-1 h-[2.95vw] w-[12vw] p-1"
            variants={listVarients}
          >
            My Bookings
          </motion.li>
          <motion.li
            className="cursor-pointer  bg-[#ffffffba]  rounded-md text-center m-1 h-[2.95vw] w-[12vw] p-1"
            variants={listVarients}
          >
            My Profile
          </motion.li>
          <motion.li
            className="cursor-pointer bg-[#ffffffba]  rounded-md text-center m-1 h-[2.95vw] w-[12vw] p-1"
            variants={listVarients}
            onClick={() => {
              setShowModal(false);
              localStorage.removeItem('userId');
              dispatch(AuthActions.setLogOut());
            }}
          >
            Logout
          </motion.li>
      </motion.ul>
    </div>
  );
};

export default OptionModel;
