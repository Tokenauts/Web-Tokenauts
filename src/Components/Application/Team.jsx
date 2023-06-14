import React from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Team = () => {
  return (
    <section>
      <motion.div variants={navVariants} initial="hidden" whileInView="show">
        <div class="items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div class="lg:pr-24 md:pr-12">
              <h2 class="text-4xl text-white">Our team</h2>
            </div>
            <div class="lg:col-span-2">
              <ul
                role="list"
                class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
              >
                <li>
                  <div class="flex items-center space-x-4 lg:space-x-6">
                    <img
                      class="object-cover w-16 h-16 rounded-full lg:h-20 lg:w-20"
                      src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
                      alt=""
                    />
                    <div class="space-y-1">
                      <h3 class="text-lg font-medium leading-6 text-white">
                        Resistance
                      </h3>
                      <p class="text-base text-gray-500">CEO</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex items-center space-x-4 lg:space-x-6">
                    <img
                      class="object-cover w-16 h-16 rounded-full lg:h-20 lg:w-20"
                      src="https://images.unsplash.com/photo-1602434228300-a645bce6891b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1639&amp;q=80"
                      alt=""
                    />
                    <div class="space-y-1">
                      <h3 class="text-lg font-medium leading-6 text-white">
                        AtihsiX
                      </h3>
                      <p class="text-base text-gray-500">Creative Head</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
