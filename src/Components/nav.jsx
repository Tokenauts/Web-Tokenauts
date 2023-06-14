import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import logoVideo from "../assets/logo.mp4";

const Nav = () => {
  const videoRef = useRef(); // Create a reference to the video element

  useEffect(() => {
    // This function will be called when the video ends
    const handleVideoEnd = () => {
      setTimeout(() => {
        videoRef.current.play();
      }, 5000); // Wait for 5 seconds before playing the video again
    };

    // Add an event listener for the 'ended' event
    const videoEl = videoRef.current;
    videoEl.addEventListener("ended", handleVideoEnd);

    // Cleanup function to remove the event listener
    return () => {
      videoEl.removeEventListener("ended", handleVideoEnd);
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 3 }}
    >
      <nav>
        <div class=" relative first-line:placeholder:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 max-w-5xl z-50	 order-2 ">
          <video autoPlay muted playsInline className="h-24" ref={videoRef}>
            // <source src={logoVideo} type="video/mp4" />
            //{" "}
          </video>

          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 1 },
            }}
          >
            <a
              href="https://3kw0tru8iwz.typeform.com/to/XxsmEeO0"
              class="font-Raleway  items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-white rounded-full nline-flex hover:bg-blue hover:text-white hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-white text-sm focus-visible:ring-white"
            >
              Join Waitlist
            </a>
          </motion.div>

          {/* <div class="flex md:order-2"> */}

          {/* <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button> */}
          {/* </div> */}
          {/* <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white rounded hover:bg-#99EDCC md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-#99EDCC dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </motion.div>
  );
};

export default Nav;
