import React from "react";
import { motion } from "framer-motion";
import {
  textContainer,
  textVariant2,
  staggerContainer,
  navVariants,
} from "../utils/motion";
const card = () => {
  return (
    <section class="flex items-center w-full bg-black z-60">
      <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <div class=" mx-auto text-center lg:p-10">
          <motion.h2
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
          >
            <p class=" font-Orbitron mt-8 text-4xl font-medium  text-white">
              EXPLORE • DISCOVER • INVEST
            </p>
          </motion.h2>
        </div>
        <motion.div
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className={` relative`}
        >
          <div class="grid grid-cols-1 gap-16  py-12 md:grid-cols-3 lg:grid-cols-3 ">
            <motion.div
              whileHover={{ scale: 1.03 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <figure>
                <img
                  class="w-full "
                  src="https://d33wubrfki0l68.cloudfront.net/7c2dda6eab52a4b95dc6c3503d5a09c4e314f756/4d7a5/images/placeholders/square1.svg"
                  alt=""
                  width="1310"
                  height="873"
                />

                <p class=" font-Orbitron mt-5 text-lg font-medium leading-6 text-white">
                  EXPLORE
                </p>
                <p class=" mt-3 text-base text-gray-500">
                Explore the Tokenauts universe, unravel the complexities of crypto and web3, and expand your knowledge with educational resources and insights.                </p>
              </figure>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <figure>
                <img
                  class="w-full  "
                  src="https://d33wubrfki0l68.cloudfront.net/ded521c426f480d4e473a11836c6ab8e7e948c84/95877/images/placeholders/square3.svg"
                  alt=""
                  width="1310"
                  height="873"
                />

                <p class=" font-Orbitron mt-5 text-lg font-medium leading-6 text-white">
                  DISCOVER
                </p>
                <p class="  mt-3 text-base text-gray-500">
                Discover hidden gems within the crypto universe as our team analyzes projects, evaluates tokenomics, and curates transformative innovations for potential investment opportunities.
                </p>
              </figure>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <figure>
                <img
                  class="w-full  "
                  src="https://d33wubrfki0l68.cloudfront.net/6163c5a4083dab2763aa0f2aa9e6bded23630eb7/935d6/images/placeholders/square2.svg"
                  alt=""
                  width="1310"
                  height="873"
                />

                <p class=" font-Orbitron mt-5 text-lg font-medium leading-6 text-white">
                  INVEST
                </p>
                <p class="  mt-3 text-base text-gray-500">
                Empower yourself to make informed investment decisions with real-time market data, personalized recommendations, and tools to maximize potential returns in the dynamic crypto landscape
                </p>
              </figure>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default card;
