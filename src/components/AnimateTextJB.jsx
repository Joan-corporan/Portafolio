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
export const AnimateTextJB = ({  text, className = "" }) => {
    
    
    
  return (
    <div className=" items-start  mx-auto py-2 flex xl:items-center md:items-center justify-center   text-center ">
         <motion.p variants={quote} initial='initial' animate='animate' className={`  text-center p-[10px] max-wsm xl:max-w-xl  text-gray-400 xl:mx-0 rounded  xl:mb-4 ${className} `}>
      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, natus
      eaque ipsa sit ea soluta in. Saepe suscipit nihil expedita voluptatibus
      rerum nisi necessitatibus eveniet, sint cupiditate ex praesentium quo? */}
      {text.split(" ").map((word, index) => (
            <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
            >
            {" "}
            {word}&nbsp;{" "}
          </motion.span>
        ))}
    </motion.p>
    </div>
   
  );
};
