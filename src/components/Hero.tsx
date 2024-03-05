'use client'

import { AdvancedImage, placeholder, responsive } from '@cloudinary/react';
import { useEffect, useRef, useState } from 'react';

import BackgroundCircles from './BackgroundCircles3'
import { Cloudinary } from "@cloudinary/url-gen";
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [viewportWidth, setViewportWidth] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)
  const [heroHeight, setHeroHeight] = useState(0)


  const typeWriterWords = ['<React, Next.js />', '[TypeScript, Node.js]', 'style: exquisite', '() => superior']
  // const typeWriterWords = ['Hi! I\'m Tom Stine', '<React Next.js TS Node.js />', '{Coding and drinking tea!}']

  const publicIdTom = 'portfolio/tom-chill-center' //publicIdCld
  const cld = new Cloudinary({ cloud: { cloudName: 'do82ekomg' } });
  const fullImage = cld.image(publicIdTom)

  useEffect(() => {
    if (heroRef.current) {
      setHeroHeight(heroRef.current.clientHeight);
    }
    const updateWindowDimensions = () => {
      // const headerFooter = 100
      setViewportWidth(window.innerWidth)
      setViewportHeight(window.innerHeight)
      // setHeroHeight(window.innerHeight - headerFooter)
    }
    updateWindowDimensions()
    window.addEventListener('resize', updateWindowDimensions)
    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, [])

  // const heroOffset = 0
  // const effectiveHeroHeight = Math.round(heroHeight * (1 - 2 * heroOffset))



  const smallestViewport = Math.min(viewportWidth, heroHeight)
  // const smallestViewport = Math.min(viewportWidth, effectiveHeroHeight)

  let imageSize = 200
  if (smallestViewport >= 640) {
    imageSize = 320
  } else if (smallestViewport >= 400) {
    imageSize = Math.round(smallestViewport * 0.5)
  }


  // let imageSize = 200
  // if (viewportWidth >= 640) {
  //   imageSize = 320
  // } else if (viewportWidth >= 400) {
  //   imageSize = Math.round(viewportWidth * 0.5)
  // }


  const heroTextMarginTop = 20
  const heroTextHeight = 160


  // const heroImageTop = Math.round((effectiveHeroHeight - imageSize) / 2)
  // const heroImageTop = Math.round((heroHeight * 0.45) - (imageSize * 0.50))


  const totalHeroElementHeight = imageSize + heroTextMarginTop + heroTextHeight
  // const totalHeroElementHeight = paddingTopOuter + imageSize + heroTextMarginTop + heroTextHeight

  let heroOffset = 0
  if (viewportHeight < 850) {
    heroOffset = 40
  } else if (viewportHeight < 900) {
    heroOffset = 25
  }


  const heroImageTop = Math.round((heroHeight - totalHeroElementHeight) / 2) + heroOffset

  // const paddingTopOuter = 0
  const paddingTopOuter = heroImageTop

  // **********************************************************
  // ***  RING CALCS  *****************************************
  // **********************************************************

  let ringOuterPadding = 0

  if (smallestViewport > 800) {
    ringOuterPadding = 30
  } else if (smallestViewport > 480) {
    ringOuterPadding = Math.round((smallestViewport - 480) / 10)
  }

  const maxRingGap = 100

  let ringGap = Math.round((smallestViewport - ringOuterPadding - imageSize) / 3)

  if (ringGap > maxRingGap) {
    ringGap = maxRingGap
  }

  let ringSizes: Array<number> = []

  const ring0pinScale = 4.0
  const maxRing0 = (imageSize + ringGap * 3)

  if (smallestViewport - ringOuterPadding > maxRing0) {
    ringSizes[0] = Math.round(maxRing0 / ring0pinScale)
  } else {
    ringSizes[0] = Math.round((smallestViewport - ringOuterPadding) / ring0pinScale)
  }

  for (let i = 1; i < 3; i++) {
    ringSizes[i] = Math.round(imageSize + ringGap * i)
  }

  const ringTops = ringSizes.map((y) => {
    return (imageSize - y) / 2
  })

  // console.log('>>> maxRing0', maxRing0)
  // console.log('>>> ringGap', ringGap)
  // console.log('>>> ringSizes', ringSizes)
  // console.log('>>> ringTops', ringTops)
  // console.log('>>> ringOuterPadding', ringOuterPadding)

  // console.log('>>> viewportWidth', viewportWidth)
  // console.log('>>> viewportHeight', viewportHeight)
  // console.log('>>> heroHeight', heroHeight)
  // console.log('>>> smallestViewport', smallestViewport)
  // console.log('>>> totalHeroElementHeight', totalHeroElementHeight)
  // console.log('>>> heroImageTop', heroImageTop)
  // console.log('>>> paddingTopOuter', paddingTopOuter)
  // console.log('>>> ***** ***** ***** ***** *****\n\n\n')

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
      }} ref={heroRef} style={{ paddingTop: paddingTopOuter }}
      className="w-full flex flex-col items-center justify-start text-center h-full">
      <div className="relative w-full flex flex-col items-center justify-center">
        <BackgroundCircles ringTops={ringTops} ringSizes={ringSizes} />
        {/* <BackgroundCircles imageSize={imageSize} viewportWidth={viewportWidth} viewportHeight={viewportHeight} /> */}
        <div style={{ width: imageSize, height: imageSize }} className="relative border border-gray-700 rounded-full overflow-hidden">
          <AdvancedImage cldImg={fullImage} plugins={[placeholder({ mode: 'blur' })]} />
        </div>
      </div>
      <div id="heroText" style={{ marginTop: heroTextMarginTop, height: heroTextHeight }} className="z-20 flex flex-col items-center justify-center w-full">
        <h1 className="mb-[8px] text-[1.65rem] md:text-[2rem] lg:text-[2.25rem] font-mono font-bold uppercase text-zinc-200 tracking-wide2 sm:tracking-wide3">Tom Stine</h1>
        <h2 className="mb-[16px] text-base sm:text-[1.15rem] md:text-[1.25rem] font-mono uppercase text-zinc-500 tracking-wide1 md:tracking-wide15">Full Stack Developer</h2>
        <h3 className="w-11/12 text-[1.15rem] sm:text-[1.25rem] md:text-[1.3rem] lg:text-[1.5rem] tracking-wide1 font-sans sm:font-mono text-zinc-400">
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


