import React, { useState, useEffect } from "react";
import { Home } from "../assets";
import { motion } from "framer-motion";
const HeroVideo = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [loading]);

  return (
    <div
      className="flex justify-center items-center h-screen -mt-16 z-0"
      style={{
        pointerEvents: loading ? "none" : "auto",
      }}
    >
      <video className="absolute z-0 w-auto " src={Home} autoPlay muted eager />

      <div className="flex flex-col items-center z-10 text-white ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 8 }}
        >
          <div className=" font-Orbitron font-bold text-center text-4xl ">
            Navigate the Cosmos
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 8 }}
        >
          <div className=" font-Orbitron font-bold text-center mt-2 text-4xl">
            of Investment Opportunities
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 9 }}
        >
          <div className="  font-Raleway  text-center mt-20 lg:text-base	">
            Scroll Down{" "}
          </div>
        </motion.div>
      </div>
      {/* Content goes here */}
    </div>
  );
};

export default HeroVideo;
