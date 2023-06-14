import React from "react";
import sequenceVideo from "../../assets/Asset2.mp4";
import { motion } from "framer-motion";
import { navVariants } from "../../utils/motion";
const Banner = () => {
  return (
    <motion.div variants={navVariants} initial="hidden" whileInView="show">
      <section class="relative flex items-center w-full ">
        <div class="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div class="relative flex-col items-start m-auto align-middle">
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
              <div class="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                <div class="max-w-xl text-center lg:text-left">
                  <div>
                    <p class="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                      I am a short heading
                    </p>
                    <p class="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                      Use this paragraph to share information about your company
                      or products. Make it engaging and interesting, and
                      showcase your brand's personality. Thanks for visiting our
                      website!
                    </p>
                  </div>
                  <div class="flex justify-center gap-3 mt-10 lg:justify-start">
                    <a
                      class="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                      href="#"
                    >
                      <span>Read more</span>
                      <ion-icon
                        class="flex-none w-3 h-3 ml-3 fill-blue-600 group-active:fill-current md hydrated"
                        name="arrow-forward-outline"
                        role="img"
                        aria-label="arrow forward outline"
                      ></ion-icon>
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div class="order-first block w-full mt-12 aspect-square lg:mt-0 ">
                <video
                  class="object-cover object-center w-full mx-auto bg-gray-300 lg:ml-auto rounded-3xl "
                  alt="hero"
                  src={sequenceVideo}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Banner;
