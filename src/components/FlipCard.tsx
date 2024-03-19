'use client'

import '@/styles/flipCard.css'

import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import Modal from "./Modal";
import { Project } from '@/types/projectTypes';
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
// import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { color } from "@cloudinary/url-gen/qualifiers/background";
import { createPortal } from 'react-dom';
import { fillPad } from "@cloudinary/url-gen/actions/resize";
import { motion } from "framer-motion"
import { useState } from "react";

export default function FlipCard({ index, ...project }: Project) {
  const [showModal, setShowModal] = useState(false)

  if (index === undefined) return

  const handleOpenClick = () => {
    setShowModal(true)
    document.body.style.overflow = 'hidden';
    document.body.ontouchstart = (e) => {
      e.preventDefault()
    }
  }

  const random1 = Math.random()
  const random2 = Math.random()
  let xSign = -1
  let ySign = -1
  if (random2 < 0.50) {
    xSign = 1
  }
  if (random1 < 0.50 && index > 3) {
    ySign = 1
  }
  const iX = Math.trunc(random1 * xSign * 600)
  const iY = Math.trunc(random2 * ySign * 500)
  const iScale = parseFloat((Math.random() * 0.4 + 0.1).toFixed(2))

  // console.log('>>> index, iX, iY, iScale', index, iX, iY, iScale)
  // console.log('>>>> motionValues', motionValues)

  const cld = new Cloudinary({ cloud: { cloudName: 'do82ekomg' } });
  const frontImage = cld.image(project.cldPublicId)
  frontImage.resize(
    fillPad()
      .width(252)
      .height(142)
      .gravity(autoGravity())
      // .gravity(compass('north'))
      .background(color('#0d0d0d'))
  )

  const projectName = { __html: project.name }

  return (
    <motion.div
      initial={{
        x: iX,
        y: iY,
        scale: iScale,
        opacity: 0,
      }}
      animate={{
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 2,
        delay: 0.1,
      }}
      className="FlipContainer w-[260px] h-[250px]">
      <div className="FlipContent w-full h-full">
        <div className="FlipFront absolute w-full h-full bg-neutral-920 border border-neutral-700 rounded-md p-3 flex flex-col items-center justify-start gap-y-2">
          <div className="w-full relative border border-neutral-900">
            <AdvancedImage cldImg={frontImage} />
          </div>

          <div className="w-full h-20 px-4 flex justify-center items-center text-center text-lg leading-snug font-semibold text-zinc-200" dangerouslySetInnerHTML={projectName} />

        </div>
        <div className="FlipBack absolute w-full h-full bg-slate-920 border border-slate-600 rounded-md p-8 flex flex-col items-center justify-start gap-4 text-left text-sm text-zinc-300">
          {project.summary}
          <button onClick={handleOpenClick} className='fixed bottom-5 w-40 min-h-7 bg-slate-800 hover:bg-slate-700 active:bg-slate-700 text-zinc-200 active:text-zinc-100 text-sm rounded-xl border border-slate-500 active:border-sky-500'>Learn More...</button>
          {showModal && createPortal(
            <Modal project={project} onClose={() => setShowModal(false)} />, document.body
          )}
        </div>
      </div>
    </motion.div >
  )
}
