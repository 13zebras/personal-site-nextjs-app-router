'use client'

import { AdvancedImage, placeholder, responsive } from '@cloudinary/react';

import BackgroundCircles from './BackgroundCircles'
import { Cloudinary } from "@cloudinary/url-gen";
import { Icon } from '@iconify/react';
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

export default function Hero() {
  const typeWriterWords = ['Hi! I\'m Tom Stine', '<React Next.js TS Node.js />', '{Coding and drinking tea!}']

  const publicIdTom = 'portfolio/tom-chill-center' //publicIdCld
  const cld = new Cloudinary({ cloud: { cloudName: 'do82ekomg' } });
  const fullImage = cld.image(publicIdTom)

  return (

    // <motion.div
    //   initial={{
    //     scale: 0.3,
    //   }}
    //   whileInView={{
    //     scale: 1,
    //   }}
    //   transition={{
    //     duration: 2,
    //   }}
    <div className="w-full flex flex-col items-center justify-start text-center">
      <BackgroundCircles />
      <div className="relative w-44 sm:w-72 h-44 sm:h-72 border border-gray-700 rounded-full overflow-hidden mb-8">
        <AdvancedImage cldImg={fullImage} plugins={[placeholder({ mode: 'blur' })]} />
      </div>
      <div className="z-20 flex flex-col">
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
        </h3>

      </div>
      {/* <div className="absolute bottom-16 flex flex-col justify-center items-center gap-y-4">

        <Link href="#about" className="uppercase text-md tracking-wider transition-all text-zinc-500 hover:text-zinc-300 hover:underline">more about tom</Link>
        <div className="flex flex-col justify-center items-center">
          <Icon icon="mdi:chevron-down" height={48} className="text-zinc-500" />
          <Icon icon="mdi:chevron-down" height={48} className="text-zinc-500 mt-[-30px]" />
          <Icon icon="mdi:chevron-down" height={48} className="text-zinc-500 mt-[-30px]" />
        </div>
      </div> */}
    </div>
    // </motion.div>
  )
}


