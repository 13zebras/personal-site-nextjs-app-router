'use client'

import Link from 'next/link';
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion"

export default function Header() {
  return (
    <header className="allMaxWidth fixed top-0 px-5 pt-2 flex flex-row items-start justify-between mx-auto z-50 bg-zinc-950">
      <motion.div
        initial={{
          x: '80%',
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2.0,
        }}
        className="flex flex-row justify-start items-center min-w-[20%]"
      >
        <SocialIcon url="https://github.com/13zebras" fgColor="gray" bgColor="transparent" style={{ width: 40 }} />
        <SocialIcon url="https://www.linkedin.com/in/tom-stine-13-zebras/" fgColor="gray" bgColor="transparent" style={{ width: 40 }} />
      </motion.div>

      <motion.div
        initial={{
          x: '-80%',
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2.0,
        }}

        className="flex flex-row justify-end items-center min-w-[20%] text-gray-300 cursor-pointer pr-2"
      >
        <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" style={{ width: 40 }} />
        <p className="text-sm uppercase hidden sm:inline-flex text-gray-400 ">Get in touch!</p>

      </motion.div>
    </header>
  );
}
