'use client'

import { AdvancedImage, placeholder, responsive } from '@cloudinary/react';
import { useEffect, useState } from "react";

import { Cloudinary } from "@cloudinary/url-gen";
// import Link from "next/link"
import { motion } from 'framer-motion'

export default function AboutMotion() {
  // const [showMore, setShowMore] = useState(false)
  const [viewportWidth, setViewportWidth] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)
  const publicIdTom = 'portfolio/tom-chill-center' //publicIdCld
  const cld = new Cloudinary({ cloud: { cloudName: 'do82ekomg' } });
  const fullImage = cld.image(publicIdTom)


  useEffect(() => {
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

  const smallestViewport = Math.min(viewportWidth, viewportHeight)
  // const smallestViewport = Math.min(viewportWidth, effectiveHeroHeight)

  // let imageSize = 200
  // if (smallestViewport >= 640) {
  //   imageSize = 360
  // } else if (smallestViewport >= 400) {
  //   imageSize = Math.round(smallestViewport * 0.5)
  // }

  let imageSize = 360
  if (viewportWidth > 768) {
    const viewportScaled = viewportWidth * 0.4
    if (viewportScaled < imageSize) {
      imageSize = viewportScaled
    }
  } else if (viewportWidth > 500) {
    imageSize = 380
  } else if (viewportWidth > 450) {
    imageSize = viewportWidth * 0.75
  } else if (viewportWidth > 400) {
    imageSize = viewportWidth * 0.75
  } else {
    imageSize = viewportWidth * 0.80
  }


  // const handleMoreClick = () => {
  //   setShowMore(true)
  // }
  // const handleLessClick = () => {
  //   setShowMore(false)
  // }
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
      }} id="aboutMotion" className="flex flex-col md:block justify-start lg:justify-center items-center" >
      <div style={{ width: imageSize, height: imageSize }} className="border border-gray-700 rounded-full xs:rounded-2xl overflow-hidden mb-6 md:rounded-xl md:float-right md:ml-8 md:mb-4 md:mr-2">
        <AdvancedImage cldImg={fullImage} plugins={[placeholder({ mode: 'blur' })]} />
      </div>

      <div className="text-left text-base sm:text-md text-zinc-200 px-2 sm:px-4 md:px-0">
        <p className="pb-4">
          In order to assess the 3rd generation blockchain’s ability to whiteboard without lessening our aptitude to disintermediate. Helping marketers serve unmatched cross-phase personalized experiences at every step of the pudding is in the industry, but our one-to-one, customer-defined, robust C2C2C M&A and user-proof use. Our infinitely reconfigurable feature set is unmatched in the industry, but our strategic angel investors and user-proof configuration is usually considered an amazing achievement.</p>
        {/* <div className={!showMore ? 'block' : 'hidden'}>
            <button onClick={handleMoreClick} className="text-blue-500 hover:text-sky-500 hover:underline decoration-sky-500 font-bold text-lg  mt-3">Read More</button>
          </div> */}
        {/* <div className={showMore ? 'block' : 'hidden'}> */}
        <p className="pb-4">
          The United States shall guarantee to every State shall be composed of two Senators from each State, chosen by the Eleventh Amendment. The House of Representatives shall be on Oath or Affirmation. This Constitution, and the Congress may by Law, and paid out of the Treasury of the Party to whom such Service or Labour, but shall be necessary and proper for carrying into Execution the foregoing Powers, and all such Laws shall be a Member or Members from two thirds of the Senate may propose or concur with Amendments as on other Bills. If any Bill shall be entered on the credit of the United States, except in Cases of Rebellion or Invasion the public Safety may require it.
        </p>
        <p className="pb-4">
          Imagine a combination of HTTP and AJAX. Helping marketers serve unmatched cross-phase personalized experiences at every step of the pudding is in the eating' not only to our content but our granular integrated, value-added convergence and easy operation is invariably considered a remarkable achievement taking into account this month's financial state of things! If all of this sounds astonishing to you, that's because it is! If you incentivize dynamically, you may also disintermediate perfectly.
        </p>
        {/* <button onClick={handleLessClick} className="text-blue-500 hover:text-sky-500 hover:underline decoration-sky-500 font-bold text-lg mt-3">Read Less</button> */}
        {/* </div> */}
      </div>
    </motion.div>
  );
}




