"use client"
import { motion } from "framer-motion";
import React from "react";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"]
  },
};

export const Transition = () => {
  return (
    <>
      <motion.div className="fixed top-0 bottom-0 right-full h-screen z-30 bg-[#DDCA7E]" variants={transitionVariants} initial='initial' animate="animate" exit="exit" transition={{delay: 0.2, duration:0.6, ease:'easeInOut'}}>1</motion.div>
      <div>2</div>
      <div>3</div>
    </>
  );
};
