'use client'

import { AdvancedImage, placeholder } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { createPortal } from 'react-dom'
import { scale } from '@cloudinary/url-gen/actions/resize'
import { quality } from '@cloudinary/url-gen/actions/delivery'

import Button from './Button'

import { useState } from 'react'
import type { Project } from '@/types/allTypes'
import dynamic from 'next/dynamic'

const Modal = dynamic(() => import('./Modal'), { ssr: false })

export default function FlipCard({ index, sequence, ...project }: Project) {
  const [showModal, setShowModal] = useState(false)

  if (index === undefined) return

  const handleOpenClick = () => {
    setShowModal(true)
    document.body.style.overflow = 'hidden'
    document.body.ontouchstart = (e) => {
      e.preventDefault()
    }
  }

  const cld = new Cloudinary({ cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY } })
  const frontImage = cld.image(project.cldPublicId)
  frontImage.resize(scale().width(260)).delivery(quality(80))

  const duration = 1400
  const delayTime = sequence ? sequence * 210 : Math.trunc(Math.random() * 3500 + 300)

  const randomStyle = {
    animationName: 'movingDiv',
    animationDuration: `${duration}ms`,
    animationFillMode: 'both',
    animationTimingFunction: 'cubic-bezier(0, 0, 0.6, 1)',
    animationDelay: `${delayTime}ms`,
  }

  return (
    <div id={`flipCard-${index}`} style={randomStyle} className='relative w-[260px] h-[210px]'>
      <div id={`flipContainer-${index}`} className='group z-20 [perspective:1200px] w-full h-full'>
        <div id='flipContent' className='w-full h-full transition-transform duration-500 ease-out delay-100 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
          <div id='flipFront' className='absolute w-full h-full [backface-visibility:hidden] border-2 border-neutral-600 rounded-lg bg-zinc-920'>
            <div className='relative w-full h-full p-[10px] md:px-3 flex flex-col items-center justify-start gap-y-[8px]'>
              <AdvancedImage id='flipImage' cldImg={frontImage} plugins={[placeholder({ mode: 'blur' })]} className='border border-zinc-800 rounded-md' />
              <div className='w-full h-[50px] min-h-[50px] px-6 flex justify-center items-center text-center text-base leading-snug font-semibold text-zinc-200'>{project.name}</div>
            </div>
          </div>
          <div id='flipBack' className='absolute w-full h-full bg-slate-920 border-2 border-slate-600 rounded-lg px-6 py-4 md:px-5 md:py-4 flex flex-col items-center justify-start text-left text-sm leading-snug tracking-wide0 text-zinc-300 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
            <p className='m-0 py-0'>{project.summary}</p>

            <Button type='button' onClick={handleOpenClick} className='fixed bottom-[10px] w-40 h-6 border-zinc-600 text-zinc-350 text-[12px] tracking-wide0'>
              Learn More...
            </Button>

            {showModal && createPortal(<Modal project={project} onClose={() => setShowModal(false)} />, document.body)}
          </div>
        </div>
      </div>
    </div>
  )
}
