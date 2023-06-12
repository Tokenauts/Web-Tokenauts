import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-black ">
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
          <div class="flex flex-col items-start justify-between pt-16 pb-6 gap-y-12 lg:flex-row lg:items-center lg:py-16">
            <div>
              <div class="flex items-center text-white">
                <div>
                  <p class=" font-Orbitron font-semibold leading-6 text-white uppercase">
                    Tokenauts
                  </p>
                  <p class="mt-1  font-Orbitron text-sm">
                    EXPLORE • DISCOVER • INVEST
                  </p>
                </div>
              </div>
              <nav class="  flex gap-8 mt-11">
                <a
                  class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]"
                  href="#"
                >
                  <span class="relative z-10">Alpine</span>
                </a>
                <a
                  class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]"
                  href="#"
                >
                  <span class="relative z-10">Nextjs</span>
                </a>
                <a
                  class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]"
                  href="#"
                >
                  <span class="relative z-10">Tailwind</span>
                </a>
                <a
                  class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]"
                  href="#"
                >
                  <span class="relative z-10">FAQs</span>
                </a>
              </nav>
            </div>
            <div class="relative flex items-center self-stretch p-4 -mx-4 transition-colors group sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
              <div class="relative flex items-center justify-center flex-none w-24 h-24 bg-white rounded-xl">
                <svg
                  class="w-5 h-5"
                  viewBox="0 0 232 232"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M166.524 51.4683L116.367 101.625L65.5235 51.4683L116.367 0.62434L166.524 51.4683ZM231.11 116.054L180.953 166.898L130.796 116.054L180.953 65.8969L231.11 116.054ZM101.939 116.054L51.0948 166.898L0.250934 116.054L51.0948 65.8969L101.939 116.054ZM166.524 181.326L116.367 231.483L65.5235 181.326L116.367 130.482L166.524 181.326Z"
                    fill="#0c0c0c"
                  ></path>
                </svg>{" "}
              </div>
              <div class="ml-8 lg:w-64">
                <p class="text-base font-semibold text-white">
                  <a href="#">
                    <span class="absolute inset-0 sm:rounded-2xl"></span>Stay
                    updated
                  </a>
                </p>
                <p class="mt-1 text-sm text-gray-500 hover:text-blue-600">
                  Follow us for social media for news and updates
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
