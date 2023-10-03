"use client";
import { motion } from "framer-motion";
const quote = {
  initial: { opacity: 1 },
  animate: { opacity: 1, transition: { delay: 0.4, staggerChildren: 0.1 } },
};
const singleWord = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};
export const TextHome = ({ text, className = "" }) => {
  return (
    <div className="w-full  py-2 flex items-center justify-center   text-center ">
      <motion.h1
        className={`className="bg-slate-100/5 xl:max-w-xl p-[10px] rounded xl:text-5xl md:text-3xl text-2xl text-white ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {" "}
        {text.split(" ").map((word, index) => (
            <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
            >
            {" "}
            {word}&nbsp;{" "}
          </motion.span>
        ))}{" "}
        <span className="text-amber-400">Realidad Digital</span>
      </motion.h1>{" "}
    </div>
  );
};
