import React from "react";
import { Join } from "../assets";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
const Joinus = () => {
  return (
    <motion.div variants={navVariants} initial="hidden" whileInView="show">
      <div
        className="h-screen  bg-no-repeat items-center px-8 py-12 mx-auto max-w-7xl lg:px-16 md:px-12 lg:py-24 bg-cointain  "
        style={{
          backgroundImage: `url(${Join})`,
        }}
      >
        <div class=" mx-auto text-left lg:p-10 mt-6">
          <p class="  font-Orbitron mt-8 text-5xl font-medium  text-white ">
            Stay Light years ahead
          </p>
          <p class="  font-Raleway mt-4 text-lg tracking-tight text-gray-400 text-left max-w-xl 	">
            Equip yourself with insightful data and news to traverse the crypto
            landscape with confidence. Access real-time market analysis, track
            token performance, and receive personalized recommendations that
            propel you to warp speed in your investment journey.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Joinus;
