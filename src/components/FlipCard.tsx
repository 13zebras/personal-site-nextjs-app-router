'use client'

import { AdvancedImage, placeholder } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { createPortal } from 'react-dom'
import { scale } from '@cloudinary/url-gen/actions/resize'
import { quality } from '@cloudinary/url-gen/actions/delivery'

import Button from './Button'

import { useState, useEffect } from 'react'
import type { Project } from '@/types/allTypes'
import dynamic from 'next/dynamic'

const Modal = dynamic(() => import('./Modal'), { ssr: false })

export default function FlipCard({ index, ...project }: Project) {
  const [showModal, setShowModal] = useState(false)
  // const [showButton, setShowButton] = useState(true)
  const [viewportWidth, setViewportWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => {
      const windowInnerWidth = window.innerWidth
      setViewportWidth(windowInnerWidth)
    }
    updateWidth()
    // if (project.description === '') setShowButton(false)
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  if (index === undefined) return

  const handleOpenClick = () => {
    setShowModal(true)
    document.body.style.overflow = 'hidden'
    document.body.ontouchstart = (e) => {
      e.preventDefault()
    }
  }

  let imageWidth = 245

  if (viewportWidth < 640) {
    imageWidth = 260
    // } else if (viewportWidth < 768) {
    //   imageWidth = 245
  }

  const cld = new Cloudinary({ cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY } })
  const frontImage = cld.image(project.cldPublicId)
  frontImage.resize(scale().width(imageWidth)).delivery(quality(80))

  const duration = 1300
  const delayTime = Math.trunc(Math.random() * 3500 + 300)

  const randomStyle = {
    animationName: 'movingDiv',
    animationDuration: `${duration}ms`,
    animationFillMode: 'both',
    animationTimingFunction: 'cubic-bezier(0, 0, 0.4, 1)',
    animationDelay: `${delayTime}ms`,
  }

  return (
    <div id={`flipCard-${index}`} style={randomStyle} className='relative w-[300px] h-[240px] sm:w-[210px] sm:h-[200px] flipCard'>
      <div id={`flipContainer-${index}`} className='group z-20 [perspective:1200px] w-full h-full'>
        <div id='flipContent' className='w-full h-full transition-transform duration-500 ease-out delay-100 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
          <div id='flipFront' className='absolute w-full h-full [backface-visibility:hidden] border-2 border-neutral-600 rounded-lg bg-zinc-920'>
            <div className='relative w-full h-full p-4 sm:p-3 flex flex-col items-center justify-start gap-y-2 sm:gap-y-3'>
              <AdvancedImage id='flipImage' cldImg={frontImage} plugins={[placeholder({ mode: 'blur' })]} className='border border-zinc-850 rounded-md' />
              <div className='w-full h-[50px] min-h-[50px] px-8 sm:px-4 flex justify-center items-center text-center text-lg sm:text-base leading-snug font-semibold text-zinc-200'>{project.name}</div>
            </div>
          </div>
          <div id='flipBack' className='absolute w-full h-full bg-slate-920 border-2 border-slate-600 rounded-lg p-6 sm:px-[16px] sm:py-[14px] flex flex-col items-center justify-start text-left text-md sm:text-sm text-zinc-300 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
            <p className='m-0 py-0'>{project.summary}</p>
            {/* <div className='m-0 py-0'>
              <span className='mr-1'>{project.summary}</span>
              <button type='button' onClick={handleOpenClick} className='text-sky-300 hover:text-sky-400 hover:underline action:text-sky-500'>
                Learn More...
              </button>
            </div> */}

            {/* <p className='m-0 pt-3 self-start text-zinc-400'>Tech Stack:</p>
						<p className='m-0 pt-0 self-start'>{project.stack}</p> */}
            {/* <p className='m-0 pt-[10px] self-start italic'>
              <span className='mr-2'>Tech Stack:</span>
              {project.stack}
            </p> */}
            {/* {showButton && ( */}
            <Button type='button' onClick={handleOpenClick} className='fixed bottom-2 w-32 h-5 border-gray-600 text-[12px] tracking-wide0'>
              Learn More...
            </Button>
            {/* )} */}
            {showModal && createPortal(<Modal project={project} onClose={() => setShowModal(false)} />, document.body)}
          </div>
        </div>
      </div>
    </div>
  )
}
