import React from "react";
import { motion } from "framer-motion";
import {
  textContainer,
  textVariant2,
  staggerContainer,
  navVariants,
} from "../../utils/motion";
import { invest, explore, discover } from "../../assets";
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
                  src={explore}
                  alt=""
                  width="1310"
                  height="873"
                />

                <p class=" text-blue font-Orbitron mt-5 text-lg font-medium leading-6">
                  EXPLORE
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 200 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.75 }}
                >
                  <p class="  font-Raleway mt-3 text-base text-gray-500">
                    Explore the Tokenauts universe, unravel the complexities of
                    crypto and web3, and expand your knowledge with educational
                    resources and insights.{" "}
                  </p>
                </motion.div>
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
                  src={discover}
                  alt=""
                  width="1310"
                  height="873"
                />

                <p class=" font-Orbitron mt-5 text-lg font-medium leading-6 text-purple">
                  DISCOVER
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 200 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.75 }}
                >
                  <p class="font-Raleway  mt-3 text-base text-gray-500">
                    Discover hidden gems within the crypto universe as our team
                    analyzes projects, evaluates tokenomics, and curates
                    transformative innovations for potential investment
                    opportunities.
                  </p>
                </motion.div>
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
                  src={invest}
                  alt=""
                  width="1310"
                  height="873"
                />

                <p class=" font-Orbitron mt-5 text-lg font-medium leading-6 text-green">
                  INVEST
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 200 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.75 }}
                >
                  <p class="font-Raleway  mt-3 text-base text-gray-500">
                    Invest with confidence using real-time market data,
                    personalized recommendations, and powerful tools to maximize
                    your potential returns in the dynamic crypto landscape.{" "}
                  </p>
                </motion.div>
              </figure>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default card;
