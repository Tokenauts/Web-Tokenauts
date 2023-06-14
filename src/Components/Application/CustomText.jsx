import React from "react";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

const CustomText = ({ title, textStyles }) => {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
    >
      ABC
    </motion.h2>
  );
};

export default CustomText;
