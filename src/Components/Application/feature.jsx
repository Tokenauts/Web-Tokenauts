import React from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const feature = () => {
  return (
    <section
      aria-labelledby="feature-five"
      id="feature-five"
      class="overflow-y-auto bg-black lg:h-screen"
    >
      <motion.div variants={navVariants} initial="hidden" whileInView="show">
        <div class="px-8 py-24 mx-auto lg:px-16 max-w-7xl md:px-12 xl:px-36 lg:flex">
          <div class="lg:w-1/2">
            <div class="top-0 pt-8 pb-16 lg:sticky">
              <div>
                <div class="lg:pr-24 md:pr-12">
                  <div>
                    <p class="text-2xl font-medium tracking-tight text-white sm:text-4xl">
                      Your Path to the Future of Finance
                    </p>
                    <p class="max-w-xl mt-4 text-lg tracking-tight text-gray-600">
                      At Crowd Source, we believe in the power of collective
                      decision-making. Our platform leverages the technology of
                      blockchain to revolutionize the way we invest and finance.
                      We're not just a platform, we're a community.
                    </p>
                  </div>
                  <div class="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                    <a
                      href="#"
                      class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-white rounded-full nline-flex hover:bg-[#99EDCC] hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-white text-sm focus-visible:ring-white"
                    >
                      Get started
                    </a>
                    <a
                      href="#"
                      class="inline-flex items-center justify-center text-sm font-semibold text-white duration-200 hover:text-[#99EDCC] focus:outline-none focus-visible:outline-gray-600"
                    >
                      Learn more
                      <span aria-hidden="true"> → </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2">
            <div class="flex-shrink-0">
              <div>
                <ul
                  class="grid grid-cols-1 gap-12 mt-6 list-none lg:mt-0 lg:gap-24"
                  role="list"
                >
                  <li>
                    <div>
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="mt-5 text-lg font-medium leading-6 text-gray-300">
                        Discover Opportunities
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Our platform showcases a plethora of Initial Coin
                      Offerings (ICOs), allowing you to explore and discover the
                      projects that resonate with you.
                    </div>
                  </li>
                  <li>
                    <div>
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="mt-5 text-lg font-medium leading-6 text-gray-300">
                        Due Diligence
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      We conduct thorough background checks and audits on every
                      ICO that we feature to ensure the authenticity and
                      potential of the project.
                    </div>
                  </li>
                  <li>
                    <div>
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="mt-5 text-lg font-medium leading-6 text-gray-300">
                        Invest Freely
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      With Crowd Source, you have the freedom to invest in any
                      ICO you choose, as much or as little as you want.
                    </div>
                  </li>
                  <li>
                    <div>
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="mt-5 text-lg font-medium leading-6 text-gray-300">
                        Transparent Processes
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      We provide complete transparency about each ICO, including
                      their whitepapers, team, and roadmap. You always know
                      where your money is going.
                    </div>
                  </li>
                  <li>
                    <div>
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="mt-5 text-lg font-medium leading-6 text-gray-300">
                        Community Voting
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Be a part of the decision-making process. Our platform
                      allows the community to vote on which ICOs should be
                      featured.
                    </div>
                  </li>
                  <li>
                    <div>
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="mt-5 text-lg font-medium leading-6 text-gray-300">
                        Safe and Secure
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Your security is our priority. Our platform employs
                      top-notch security measures to protect your investments.
                    </div>
                  </li>
                  <li>
                    <div>
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="mt-5 text-lg font-medium leading-6 text-gray-300">
                        24/7 Support
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Our dedicated team is always here to help. Whether you
                      have a query or need assistance, we've got you covered.
                    </div>
                  </li>
                  <li>
                    <div>
                      <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p class="mt-5 text-lg font-medium leading-6 text-gray-300">
                        Ongoing Development
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      We continually improve and evolve our platform to deliver
                      the best possible experience for our users. Join us in
                      this journey towards disrupting the world of finance.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default feature;
