'use client'

import { AdvancedImage, placeholder, responsive } from '@cloudinary/react';
import { useEffect, useState } from "react";

import { Cloudinary } from "@cloudinary/url-gen";
// import Link from "next/link"
import { motion } from 'framer-motion'

export default function AboutMotion() {
  // const [showMore, setShowMore] = useState(false)
  const [viewportWidth, setViewportWidth] = useState(0)
  // const [viewportHeight, setViewportHeight] = useState(0)
  const publicIdTom = 'portfolio/tom-chill-center' //publicIdCld
  const cld = new Cloudinary({ cloud: { cloudName: 'do82ekomg' } });
  const fullImage = cld.image(publicIdTom)

  useEffect(() => {
    const updateWindowDimensions = () => {
      setViewportWidth(window.innerWidth)
      // setViewportHeight(window.innerHeight)
    }
    updateWindowDimensions()
    window.addEventListener('resize', updateWindowDimensions)
    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, [])

  let imageSize = 320
  if (viewportWidth >= 768) {
    const viewportScaled = viewportWidth * 0.35
    if (viewportScaled < imageSize) {
      imageSize = viewportScaled
    }
  } else if (viewportWidth > 500) {
    imageSize = 340
  } else if (viewportWidth > 450) {
    imageSize = viewportWidth * 0.75
  } else if (viewportWidth > 400) {
    imageSize = viewportWidth * 0.75
  } else {
    imageSize = viewportWidth * 0.80
  }


  return (
    <motion.div
      initial={{
        scale: 0.5,
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }} id="aboutMotion" className="flex flex-col md:block justify-start lg:justify-center items-center px-2 sm:px-4 md:px-4" >
      <div style={{ width: imageSize }} className="aspect-square border-2 border-neutral-400 rounded-full md:rounded-lg overflow-hidden mb-6 md:float-right md:ml-8 md:mb-4 md:mr-2">
        <AdvancedImage cldImg={fullImage} plugins={[placeholder({ mode: 'blur' })]} />
      </div>

      <div className="text-left text-base sm:text-base text-zinc-200">
        <p className="pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p className="pb-4">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. His an amet petentium voluptatibus, modo malis error nec no. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te.
        </p>
        <p className="pb-4">
          Lacus vestibulum sed arcu non odio. Enim sed faucibus turpis in. Consequat id porta nibh venenatis cras. Orci ac auctor augue mauris augue neque gravida in. Turpis massa tincidunt dui ut ornare lectus sit. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Nisi porta lorem mollis aliquam. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Turpis egestas pretium aenean pharetra.
        </p>
      </div>
    </motion.div>
  );
}
