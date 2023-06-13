import React from "react";
import { navVariants } from "../utils/motion";
import { motion } from "framer-motion";
import { Asset_10, Asset_11, Asset_12, Asset_9 } from "../assets";
const Grid = () => {
  return (
    <section className="mt:6">
      <motion.div variants={navVariants} initial="hidden" whileInView="show">
        <div class="items-center px-8 py-12 mx-auto max-w-7xl lg:px-16 md:px-12 lg:py-24">
          <div class=" mx-auto text-center lg:p-10">
            <div>
              <p class=" font-Orbitron mt-8 text-5xl font-medium  text-white">
                Explore the cosmos of WEB 3.0
              </p>
              <p class="   mx-auto mt-4 text-lg tracking-tight text-gray-600">
                Venture into the cosmic realm of Web 3.0 and unlock a world of
                decentralized innovation and limitless possibilities. Join us on
                an extraordinary journey through blockchain technology,
                decentralized applications, and transformative crypto
                ecosystems.
              </p>
            </div>
            <div class="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 1 },
                }}
              >
                <a
                  href="#"
                  class="  items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-white rounded-full nline-flex hover:bg-[#99EDCC] hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-white text-sm focus-visible:ring-white"
                >
                  Join Waitlist
                </a>
              </motion.div>
              {/* <a
                href="#"
                class="inline-flex items-center justify-center text-sm font-semibold text-white duration-200 hover:text-[#99EDCC] focus:outline-none focus-visible:outline-gray-600"
              >
                Learn more
                <span aria-hidden="true"> → </span>
              </a> */}
            </div>
          </div>

          <div>
            <div>
              <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
                <div class="mt-6 grid grid-cols-2  md:grid-cols-4 lg:mt-8 gap-5">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                  >
                    <div class="flex justify-center col-span-1 px-8">
                      <img class="" src={Asset_10} alt=" logo" />
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                  >
                    <div class="flex justify-center col-span-1 px-8">
                      <img src={Asset_9} alt="logo" />
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                  >
                    <div class="flex justify-center col-span-1 px-8">
                      <img src={Asset_11} alt="logo" />
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                  >
                    <div class="flex justify-center col-span-1 px-8">
                      <img src={Asset_12} alt="logo" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Grid;
