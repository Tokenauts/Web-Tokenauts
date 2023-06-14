import React from "react";
// import Tokenauts from "../assets/Tokenauts.mp4";
import { motion } from "framer-motion";
const Loading = () => {
  return (
    <header className="relative flex items-center justify-center h-screen overflow-hidden">
      <div className="relative z-30 p-5 text-2xl text-white  rounded-xl top-1/4 xl:top-1/3">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: -100 }}
          transition={{ duration: 1.5, delay: 4 }}
        >
          <a
            href="/home"
            className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-gray-200 mx-4 px-12 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
          >
            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
            Enter
          </a>
        </motion.div>
      </div>

      {/* <video
        autoPlay
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none "
        style={{ zIndex: 1 }} // Add filter here
      >
        <source src={Tokenauts} type="video/mp4" />
      </video> */}
    </header>
  );
};

export default Loading;
