import React from "react";
import { Asset_1, Asset_2, Asset_23, Asset_3, Asset_4 } from "../assets";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div>
      <footer class="bg-black ">
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
          <div class="flex flex-col items-start justify-between pt-16 pb-6 gap-y-12 lg:flex-row lg:items-center lg:py-16">
            <div>
              <div class="flex items-center text-white">
                {/* <div>
                  <p class=" font-Orbitron font-semibold leading-6 text-white uppercase">
                    Tokenauts
                  </p>
                  <p class="mt-1  font-Orbitron text-sm">
                    EXPLORE • DISCOVER • INVEST
                  </p>
                </div> */}
              </div>
              <nav class="  flex gap-8 ">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]"
                    href="https://twitter.com/Tokenauts_Defi"
                  >
                    <img src={Asset_3} className="h-8" />
                  </a>
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]"
                    href="https://discord.gg/Cp76xHrH"
                  >
                    <img src={Asset_4} className="h-8" />
                  </a>
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]"
                    href="https://www.instagram.com/tokenauts/"
                  >
                    <img src={Asset_1} className="h-8" />
                  </a>
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]"
                    href="https://www.youtube.com/channel/UCeVRoxP6kaAcj_vp3sqsLUw"
                  >
                    <img src={Asset_2} className="h-8" />
                  </a>
                </motion.button>
              </nav>
            </div>
            <div class="relative flex items-center self-stretch p-4 -mx-4 transition-colors group sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
              <div class="relative flex items-center justify-center flex-none w-24 h-24 bg-white rounded-xl">
                <img src={Asset_23} className="h-10" />
              </div>
              <div class="ml-8 lg:w-64">
                <p class="text-base font-semibold text-white">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://medium.com/@tokenauts"
                  >
                    <span class="absolute text-left inset-0 sm:rounded-2xl"></span>
                    Stay updated
                  </a>
                </p>
                <p class="mt-1 text-sm text-gray-500 text-right">
                  Follow our blog for news and updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
