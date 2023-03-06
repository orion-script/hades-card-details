import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.utils";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function LogOut() {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/signin");
        alert("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        alert(error.message);
      });
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
      className="bg-gray-800 text-slate-400 w-[100px] h-[40px] rounded-lg shadow-lg absolute top-10 right-5"
      onClick={handleLogout}
    >
      Logout
    </motion.button>
  );
}

export default LogOut;
