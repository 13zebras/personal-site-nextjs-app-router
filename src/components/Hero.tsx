'use client'

import { AdvancedImage, placeholder, responsive } from '@cloudinary/react';

import BackgroundCircles from './BackgroundCircles'
import { Cloudinary } from "@cloudinary/url-gen";
import { Icon } from '@iconify/react';
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

export default function Hero() {
  const typeWriterWords = ['<React, Next.js, TypeScript />', '[Tailwind, Svelte, Node.js]', '{Exquisite style, superior functionality}']
  // const typeWriterWords = ['Hi! I\'m Tom Stine', '<React Next.js TS Node.js />', '{Coding and drinking tea!}']

  const publicIdTom = 'portfolio/tom-chill-center' //publicIdCld
  const cld = new Cloudinary({ cloud: { cloudName: 'do82ekomg' } });
  const fullImage = cld.image(publicIdTom)
  const viewportWidth = window.innerWidth

  // console.log('>>>> viewportWidth', viewportWidth)

  let imageSize = 320
  if (viewportWidth < 1024) imageSize = 280

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
      <BackgroundCircles imageSize={imageSize} />
      <div style={{ width: imageSize, height: imageSize }} className="relative border border-gray-700 rounded-full overflow-hidden">
        <AdvancedImage cldImg={fullImage} plugins={[placeholder({ mode: 'blur' })]} />
      </div>

      <div className="z-20 flex flex-col items-center mt-12 w-full">
        <h1 className="mb-6 lg:mb-8 text-xl sm:text-2xl md:text-4xl font-mono uppercase text-zinc-200 tracking-[6px] sm:tracking-wide3">Tom Stine</h1>
        <h2 className="mb-8 lg:mb-12 text-base sm:text-lg md:text-xl font-mono uppercase text-zinc-500 tracking-[6px] sm:tracking-wide2">Full Stack Developer</h2>
        <h3 className="w-9/12 lg:w-11/12 h-32 text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide1 font-sans sm:font-mono text-zinc-400">
          <Typewriter
            words={typeWriterWords}
            loop={false}
            cursor
            cursorStyle="_"
            cursorBlinking={true}
            typeSpeed={130}
            deleteSpeed={30}
            delaySpeed={1800}
          />
        </h3>

      </div>
      {/* <span className="fixed bottom-0 text-base text-zinc-500 font-mono">{`viewportWidth: ${viewportWidth}`}</span> */}
    </motion.div>
  )
}


