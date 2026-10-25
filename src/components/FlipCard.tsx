import { useState } from 'react'
import { createPortal } from 'react-dom'

import type { Project } from '@/types/allTypes'
import { blurPlaceholder, imageSrc } from '@/utils/images'

import Button from './Button'
import Modal from './Modal'

export default function FlipCard({ index, animationDelay, ...project }: Project) {
  const [showModal, setShowModal] = useState(false)

  if (index === undefined) return

  const handleOpenClick = () => {
    setShowModal(true)
  }

  const duration = 1200

  const randomStyle = {
    animationName: 'movingDiv',
    animationDuration: `${duration}ms`,
    animationFillMode: 'both',
    animationTimingFunction: 'cubic-bezier(0, 0, 0.6, 1)',
    animationDelay: `${animationDelay ?? 0}ms`,
    // Paused on the hidden first frame until Portfolio picks the delays in the browser.
    animationPlayState: animationDelay === undefined ? 'paused' : 'running',
  }

  return (
    <div id={`flipCard-${index}`} style={randomStyle} className='relative h-[210px] w-[260px]'>
      <div id={`flipContainer-${index}`} className='group z-20 h-full w-full [perspective:1200px]'>
        <div
          id='flipContent'
          className='h-full w-full transition-transform delay-100 duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'
        >
          <div
            id='flipFront'
            className='absolute h-full w-full rounded-lg border-2 border-neutral-600 bg-zinc-920 [backface-visibility:hidden]'
          >
            <div className='relative flex h-full w-full flex-col items-center justify-start gap-y-[8px] p-[10px] md:px-3'>
              <img
                id='flipImage'
                src={imageSrc(project.imageKey, 'card')}
                width={520}
                height={291}
                style={blurPlaceholder(project.imageKey)}
                className='rounded-md border border-zinc-800'
                alt={project.name}
              />
              <div className='flex h-[50px] min-h-[50px] w-full items-center justify-center px-6 text-center text-base leading-snug font-semibold text-zinc-200'>
                {project.name}
              </div>
            </div>
          </div>
          <div
            id='flipBack'
            className='absolute flex h-full w-full [transform:rotateY(180deg)] flex-col items-center justify-start rounded-lg border-2 border-slate-600 bg-slate-920 px-6 py-4 text-left text-sm leading-snug tracking-wide0 text-zinc-300 [backface-visibility:hidden] md:px-5 md:py-4'
          >
            <p className='m-0 py-0'>{project.summary}</p>

            <Button
              type='button'
              onClick={handleOpenClick}
              className='fixed bottom-[10px] h-6 w-40 border-zinc-600 text-[0.75rem] tracking-wide0 text-zinc-350'
            >
              Learn More...
            </Button>

            {showModal && createPortal(<Modal project={project} onClose={() => setShowModal(false)} />, document.body)}
          </div>
        </div>
      </div>
    </div>
  )
}
