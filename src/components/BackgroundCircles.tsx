// 'use client'

// import { motion } from "framer-motion"

function BackgroundCircles() {
  return (
    // <motion.div
    //   initial={{
    //     opacity: 0,
    //   }}
    //   animate={{
    //     opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
    //     // scale: [1, 2, 2, 3, 1],
    //     // borderRadius: ["20%", "20%", "50%", "80%", "20%"],
    //   }}
    //   transition={{
    //     duration: 5,
    //   }}
    <div
      className="relative flex justify-center items-center z-0"
    >
      <div className="circles absolute border border-gray-800 rounded-full h-[200px] w-[200px] animate-ping-35" />
      <div className="circles absolute border border-cyan-950/90 rounded-full h-[420px] w-[420px] animate-pulse" />
      <div className="circles absolute border border-lime-950/90 rounded-full h-[520px] w-[520px] animate-pulse" />
      <div className="circles absolute border border-red-950/90 rounded-full h-[620px] w-[620px] animate-pulse" />
      {/* <div className="circles absolute border-2 border-[#ff0099] rounded-full h-[340px] w-[340px]" /> */}
      {/* <div className="absolute border border-neutral-800 rounded-full h-[800px] w-[800px] mt-52 animate-ping" /> */}
      {/* </motion.div> */}
    </div>
  );
}

export default BackgroundCircles;
