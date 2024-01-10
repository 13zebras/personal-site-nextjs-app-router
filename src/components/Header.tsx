'use client'

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion"

type Props = {};

export default function Header({ }: Props) {
  return (
    <header className="fixed top-0 px-5 pt-2 flex flex-row items-start justify-between max-w-7xl mx-auto z-0 w-full bg-transparent">
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
        className="flex flex-row justify-start items-center min-w-[50%]"
      >
        {/* <SocialIcon url="https://twitter.com/tom13zebras" fgColor="gray" bgColor="transparent" style={{ width: 40 }} />
        <SocialIcon url="https://www.youtube.com/channel/UCxWCdQKfcMqFLNzO0_wN3Bw" fgColor="gray" bgColor="transparent" style={{ width: 40 }} /> */}
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

        className="flex flex-row justify-end items-center min-w-[50%] text-gray-300 cursor-pointer pr-2"
      >
        <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" style={{ width: 40 }} />
        <p className="text-sm uppercase hidden sm:inline-flex text-gray-400 ">Get in touch!</p>

      </motion.div>
    </header>
  );
}
