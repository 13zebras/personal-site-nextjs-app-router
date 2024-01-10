'use client'

import { motion } from "framer-motion"

function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        // opacity: 0,
      }}
      animate={{
        // opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        // scale: [1, 2, 2, 3, 1],
        // borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 5,
      }}
      className="relative flex justify-center items-center z-10"
    >
      <div className="circles absolute border border-stone-800 rounded-full h-[200px] w-[200px] animate-ping-40" />
      <div className="circles absolute border border-stone-800/90 rounded-full h-[430px] w-[430px] animate-pulse" />
      <div className="circles absolute border border-cyan-950/50 rounded-full h-[540px] w-[540px]" />
      <div className="circles absolute border border-red-950/50 rounded-full h-[650px] w-[650px] animate-pulse" />
      {/* <div className="circles absolute border border-stone-900 rounded-full h-[850px] w-[850px]" /> */}
      {/* <div className="absolute border border-neutral-800 rounded-full h-[800px] w-[800px] mt-52 animate-ping" /> */}
    </motion.div>
  );
}

export default BackgroundCircles;
