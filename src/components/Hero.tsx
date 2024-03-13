'use client'

import { AdvancedImage, placeholder, responsive } from '@cloudinary/react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import BackgroundCircles from './BackgroundCircles3'
import { Cloudinary } from "@cloudinary/url-gen";
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

// import { usePathname } from 'next/navigation';

export default function Hero() {
  const heroTextRef = useRef<HTMLDivElement>(null)
  const heroLinksRef = useRef<HTMLDivElement>(null)
  const [viewportWidth, setViewportWidth] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)
  const [heroTextHeight, setHeroTextHeight] = useState(0)
  const [heroLinksHeight, setHeroLinksHeight] = useState(0)

  // let routePath = usePathname()
  // const allPaths = ["portfolio", "experience", "about", "contact"]

  const typeWriterWords = ['<React, Next.js />', '[TypeScript, Node.js]', 'style: exquisite', '() => superior']
  // const typeWriterWords = ['Hi! I\'m Tom Stine', '<React Next.js TS Node.js />', '{Coding and drinking tea!}']

  const publicIdTom = 'portfolio/tom-chill-center' //publicIdCld
  const cld = new Cloudinary({ cloud: { cloudName: 'do82ekomg' } });
  const fullImage = cld.image(publicIdTom)

  useEffect(() => {

    const updateWindowDimensions = () => {
      setViewportWidth(window.innerWidth)
      setViewportHeight(window.innerHeight)
    }
    updateWindowDimensions()
    window.addEventListener('resize', updateWindowDimensions)
    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, [])

  useLayoutEffect(() => {
    if (heroTextRef.current) {
      setHeroTextHeight(heroTextRef.current.clientHeight);
    }
    if (heroLinksRef.current) {
      setHeroLinksHeight(heroLinksRef.current.clientHeight);
    }
  }, [heroTextRef, heroLinksRef])

  // const heroOffset = 0
  // const effectiveHeroHeight = Math.round(heroHeight * (1 - 2 * heroOffset))

  const smallestViewport = Math.min(viewportWidth, viewportHeight)
  // const smallestViewport = Math.min(viewportWidth, effectiveHeroHeight)

  let imageSize = 200
  if (viewportWidth <= viewportHeight) {
    if (viewportWidth >= 640) {
      imageSize = 320
    } else {
      imageSize = Math.max(Math.round(viewportWidth * 0.5), 200)
    }
  }
  if (viewportWidth > viewportHeight) {
    if (viewportHeight >= 750) {
      imageSize = Math.min(Math.round(viewportHeight * 0.37), 320)
    } else {
      imageSize = Math.max(Math.round(viewportHeight * 0.33), 200)
    }
  }

  // heroTextHeight = 235px above 1280vw AND above 710vh
  // heroTextHeight = 204px above 1280vw AND below 710vh
  // heroTextHeight = 199px above 640vw AND above 710vh
  // heroTextHeight = 191px below 640vw AND above 710vh
  // heroTextHeight = 181px above 640vw AND below 710vh
  // heroTextHeight = 173px below 640vw AND below 710vh

  // heroLinksHeight = 83px above 640vw AND above 710vh
  // heroLinksHeight = 83px above 640vw AND below 710vh
  // heroLinksHeight = 187px below 640vw AND above 710vh
  // heroLinksHeight = 150px below 640vw AND below 710vh

  const totalHeroHeight = imageSize + heroTextHeight + heroLinksHeight




  // **********************************************************
  // ***  RING CALCS  *****************************************
  // **********************************************************

  let ringOuterPadding = 0

  if (smallestViewport > 800) {
    ringOuterPadding = 30
  } else if (smallestViewport > 480) {
    ringOuterPadding = Math.round((smallestViewport - 480) / 10)
  }


  let maxRingGap = 100
  if (viewportHeight < 710) {
    maxRingGap = 60
  } else if (viewportHeight < 800) {
    maxRingGap = 80
  }

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

  // **********************************************************
  // ***  SPACING  ********************************************
  // **********************************************************

  let heroImageTop = Math.round((viewportHeight - totalHeroHeight) / 2)
  heroImageTop = Math.max((ringTops[0]), heroImageTop)
  // heroImageTop = Math.max((20 - ringTops[2]), heroImageTop)

  let overflowY = 'overflow-y-hidden'
  let mainPadding = 'pb-1'
  let heroTextPadding = 'pt-5 pb-10 xl:pt-6 xl:pb-12'
  let heroTextLinksSpacing = 'gap-y-4 sm:gap-y-2 mb-8'
  if (viewportHeight < 710) {
    overflowY = 'overflow-y-auto'
    mainPadding = 'pb-8'
    heroTextPadding = 'pt-5 pb-6'
    heroTextLinksSpacing = 'gap-y-2 sm:gap-y-2 mb-4 sm:mb-5'
  } else if (viewportHeight < 800) {
    heroTextLinksSpacing = 'gap-y-4 sm:gap-y-2 mb-8 sm:mb-5'
  }


  // console.log('>>> maxRing0', maxRing0)
  // console.log('>>> ringGap', ringGap)
  // console.log('>>> ringSizes', ringSizes)
  console.log('>>> ringTops', ringTops)
  // console.log('>>> ringOuterPadding', ringOuterPadding)

  // console.log('>>> viewportWidth', viewportWidth)

  console.log('>>> imageSize', imageSize)
  console.log('>>> heroTextHeight', heroTextHeight)
  console.log('>>> heroLinksHeight', heroLinksHeight)
  console.log('>>> totalHeroHeight', totalHeroHeight)
  // console.log('>>> smallestViewport', smallestViewport)
  console.log('>>> ')
  console.log('>>> viewportHeight', viewportHeight)
  console.log('>>> heroImageTop', heroImageTop)
  console.log('>>> ***** ***** ***** ***** *****\n\n\n')

  // style={{ marginTop: heroTextMarginTop, height: heroTextHeight }}
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
      }} style={{ paddingTop: heroImageTop }}
      className={`${overflowY} ${mainPadding} overflow-x-hidden w-full flex flex-col items-center justify-start text-center h-full max-w-7xl px-8`}>
      {/*** HERO IMAGE SECTION **********************************/}
      <section id="heroImage" className="relative w-full flex flex-col items-center justify-center">
        <BackgroundCircles ringTops={ringTops} ringSizes={ringSizes} />
        {/* <BackgroundCircles imageSize={imageSize} viewportWidth={viewportWidth} viewportHeight={viewportHeight} /> */}
        <div style={{ width: imageSize }} className="relative aspect-square border-2 border-neutral-500 rounded-full overflow-hidden">
          <AdvancedImage cldImg={fullImage} plugins={[placeholder({ mode: 'blur' })]} />
        </div>
      </section>
      {/*** HERO TEXT SECTION **********************************/}
      <section id="heroText" ref={heroTextRef} className={`${heroTextPadding} z-20 flex flex-col items-center justify-center w-full border border-purple-800`}>
        <h1 className="mb-[8px] text-[1.45rem] sm:text-[1.65rem] md:text-[2rem] lg:text-[2.25rem] font-mono font-bold uppercase text-zinc-200 tracking-wide3 sm:tracking-wide3">Tom Stine</h1>
        <h2 className="mb-[16px] text-base sm:text-[1.15rem] md:text-[1.25rem] font-mono uppercase text-zinc-500 tracking-wide1 md:tracking-wide15">Full Stack Developer</h2>
        <h3 className="text-[1.15rem] sm:text-[1.25rem] md:text-[1.3rem] lg:text-[1.5rem] tracking-wide1 font-sans sm:font-mono text-zinc-400">
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
      </section>
      {/*** HERO LINKS SECTION **********************************/}
      <section id="heroLinks" ref={heroLinksRef} className={`flex flex-col justify-start items-center text-base text-zinc-450 tracking-wide2`}>
        <div id="textLinks" className={`${heroTextLinksSpacing} flex flex-col sm:flex-row justify-center items-center gap-x-8`}>
          <Link href="/portfolio" className="hover:text-zinc-200 hover:underline">portfolio</Link>
          <Link href="/about" className="hover:text-zinc-200 hover:underline">about</Link>
          <Link href="/experience" className="hover:text-zinc-200 hover:underline">experience</Link>
        </div>
        <div id="iconLinks" className="flex justify-center gap-x-10 text-[1.7rem] tracking-wide2">
          <Link href="https://github.com/13zebras" className="hover:text-zinc-200" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:github" />
          </Link>
          <Link href="https://www.linkedin.com/in/tom-stine-13-zebras/" className="hover:text-zinc-200" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:linkedin" />
          </Link>
          <Link href="/contact" className="text-[1.85rem] hover:text-zinc-200">
            <Icon icon="mdi:envelope-outline" />
          </Link>
        </div>
      </section>

    </motion.div>
  )
}


