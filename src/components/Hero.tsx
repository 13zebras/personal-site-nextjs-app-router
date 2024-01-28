'use client'

import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'
// import { Cursor, useTypewriter } from "react-simple-typewriter"
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import tomPicture from '/public/tom-chill-center-400.webp'

export default function Hero() {
  // const [text] = useTypewriter({
  //   words: ["Hi! I'm Tom Stine", "<React Next.js TypeScript />", "{Problem solver, life-long Learner}"],
  //   loop: true,
  //   typeSpeed: 100,
  //   deleteSpeed: 30,
  //   delaySpeed: 1800,
  // });
  const typeWriterWords = ['Hi! I\'m Tom Stine', '<React Next.js TS Node.js />', '{Constantly learning - next is Rust!}']

  return (
    // <section id="hero" className="flex items-center min-h-[100vh] w-full md:px-9 z-0 m-0 border border-red-700">
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="w-full flex flex-col items-center justify-start text-center overflow-visible"
    >
      <BackgroundCircles />
      <div className="relative w-44 sm:w-72 h-44 sm:h-72 border border-gray-700 rounded-full overflow-hidden mb-8">
        <Image
          src={tomPicture}
          alt="Tom Stine"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="z-20">
        <h2 className="text-md sm:text-lg md:text-2xl font-mono uppercase text-zinc-500 pb-4 sm:pb-6 md:pb-7 tracking-[6px] sm:tracking-[10px]">Full Stack Developer</h2>
        <h3 className="text-[1.73rem] sm:text-2xl lg:text-3xl h-12 font-sans sm:font-mono sm:font-semibold w-[95vw] text-gray-200">
          <Typewriter
            words={typeWriterWords}
            loop={false}
            cursor
            cursorStyle="_"
            cursorBlinking={true}
            typeSpeed={100}
            deleteSpeed={30}
            delaySpeed={1800}
          />
          {/* <span className="mr-1">{text}</span>
          <Cursor cursorColor="#FF0022" /> */}
        </h3>
        <div className="pt-8 sm:pt-7 flex flex-row flex-wrap justify-center items-center gap-x-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <Link href="#skills">
              <button className="heroButton">Skills</button>
            </Link> */}
            <Link href="#portfolio">
              <button className="heroButton">Portfolio</button>
            </Link>
          </div>
          <div className="flex flex-col-reverse sm:flex-row gap-4 justify-center items-center ">
            <Link href="#workExperience">
              <button className="heroButton">Experience</button>
            </Link>
            <Link href="#about">
              <button className="heroButton">About</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
    // </section >
  )
}
