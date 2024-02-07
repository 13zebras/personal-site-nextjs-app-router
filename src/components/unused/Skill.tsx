'use client'

import { motion } from "framer-motion"
// import simpleIcons from "simple-icons";

type Props = {};
// type Props = {directionLeft?: boolean};

function Skill({ }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          opacity: 0,
          x: 400,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://www.schemecolor.com/wp-content/uploads/javascript-logo.png"
        className="w-20 h-20 xs:w-24 xs:h-24 xl:w-32 xl:h-32 rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute w-20 h-20 xs:w-24 xs:h-24 xl:w-32 xl:h-32 opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-black rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl xl:text-3xl font-bold text-white opacity-100">9/10</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
