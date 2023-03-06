import React from "react";
import Card from "../assets/card-image.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 1.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

function Preview(props) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pt-10 w-full h-auto"
    >
      <div className="md:flex justify-between w-10/12 m-auto text-center">
        <motion.h1
          animate={{ color: "#424242", scale: 1.1, opacity: 1 }}
          className="w-full md:w-2/5 pb-10 md:pb-0 font-bold text-3xl md:text-6xl font-serif md:pt-14"
        >
          Welcome to card details app where you can save your card details.
        </motion.h1>

        <img src={Card} alt="Card" className="w-full md:w-2/5" />
      </div>

      <div className="flex flex-col md:flex-row justify-between w-10/12 pt-10 m-auto">
        <Link
          to="/signin"
          className="bg-gray-800 h-10 w-full md:w-1/5 rounded-lg text-center py-2 shadow-xl text-slate-200 mb-7 md:mb-0"
        >
          <button>Sign-In</button>
        </Link>
        <Link
          to="/signup"
          className="bg-gray-800 h-10 w-full md:w-1/5 rounded-lg text-center py-2 shadow-xl text-slate-200 mb-7 md:mb-0"
        >
          <button>Sign-Up</button>
        </Link>
      </div>
    </motion.div>
  );
}

export default Preview;
