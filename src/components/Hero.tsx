'use client'

import { AdvancedImage, placeholder, responsive } from '@cloudinary/react';
import { useEffect, useState } from 'react';

import BackgroundCircles from './BackgroundCircles'
import { Cloudinary } from "@cloudinary/url-gen";
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

export default function Hero() {
  const [viewportWidth, setViewportWidth] = useState(0)

  const typeWriterWords = ['<React, Next.js />', '[TypeScript, Node.js]', 'style: exquisite', '() => superior']
  // const typeWriterWords = ['Hi! I\'m Tom Stine', '<React Next.js TS Node.js />', '{Coding and drinking tea!}']

  const publicIdTom = 'portfolio/tom-chill-center' //publicIdCld
  const cld = new Cloudinary({ cloud: { cloudName: 'do82ekomg' } });
  const fullImage = cld.image(publicIdTom)

  useEffect(() => {
    const updateWidth = () => {
      setViewportWidth(window.innerWidth)
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  })

  // console.log('>>>> viewportWidth', viewportWidth)

  let imageSize = 220
  if (viewportWidth >= 768) {
    imageSize = 320
  } else if (viewportWidth >= 420) {
    imageSize = Math.round(viewportWidth * 0.2778 + 106.67)
  }

  return (

    <motion.div
      initial={{
        scale: 0.2,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 0.9,
      }}
      className="w-full flex flex-col items-center justify-center text-center relative mt-28">
      <BackgroundCircles imageSize={imageSize} viewportWidth={viewportWidth} />
      <div style={{ width: imageSize, height: imageSize }} className="relative border border-gray-700 rounded-full overflow-hidden">
        <AdvancedImage cldImg={fullImage} plugins={[placeholder({ mode: 'blur' })]} />
      </div>

      <div className="z-20 flex flex-col items-center mt-10 md:mt-12 w-full">
        <h1 className="mb-6 lg:mb-8 text-[1.4rem] sm:text-[1.65rem] md:text-[2rem] lg:text-[2.25rem] font-mono uppercase text-zinc-200 tracking-[6px] sm:tracking-wide3">Tom Stine</h1>
        <h2 className="mb-6 md:mb-8 lg:mb-12 text-base sm:text-[1.15rem] md:text-[1.25rem] font-mono uppercase text-zinc-500 tracking-wide1 md:tracking-wide2">Full Stack Developer</h2>
        <h3 className="w-11/12 h-16 text-[1.15rem] sm:text-[1.25rem] md:text-[1.4rem] lg:text-[1.88rem] tracking-wide1 font-sans sm:font-mono text-zinc-400">
          <Typewriter
            words={typeWriterWords}
            loop={false}
            cursor
            cursorStyle="_"
            cursorBlinking={true}
            typeSpeed={100}
            deleteSpeed={25}
            delaySpeed={1500}
          />
        </h3>

      </div>
    </motion.div>
  )
}


