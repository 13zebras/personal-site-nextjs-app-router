import { AdvancedImage, placeholder } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { quality } from '@cloudinary/url-gen/actions/delivery'
import { scale } from '@cloudinary/url-gen/actions/resize'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import type { Project } from '@/types/allTypes'
import { CloseThickIcon,ExternalLinkIcon, GithubIcon } from '@/utils/svgs'

import Button from './Button'

interface ModalType {
  project: Project
  onClose: () => void
}

export default function Modal(props: ModalType) {
  const [fadeModal, setFadeModal] = useState(false)
  const [imageHeight, setImageHeight] = useState(0)
  const imageRef = useRef<HTMLDivElement>(null)
  const imgAspectRatio = 1.788 // aspect ration = 1788 / 1000
  const fadeTime = 500
  const project = props.project

  const handleCloseClick = () => {
    setFadeModal(true)
    document.body.style.removeProperty('overflow')
    setTimeout(() => {
      props.onClose()
    }, fadeTime + 100)
  }

  useEffect(() => {
    const updateHeight = () => {
      const viewportHeight = window.innerHeight

      if (imageRef.current) {
        const imageWidth = imageRef.current.clientWidth

        let newHeight = Math.floor(imageWidth / imgAspectRatio)
        const maxHeight = Math.floor(viewportHeight * 0.5)
        if (newHeight > maxHeight) newHeight = maxHeight
        setImageHeight(newHeight)
      }
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  const publicId = project.cldPublicId

  const cloudinary = new Cloudinary({
    cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY },
  })
  const fullImage = cloudinary.image(publicId)
  fullImage.resize(scale().height(imageHeight)).delivery(quality(80))

  const fadeModalStyle = {
    animationName: 'fadeOut',
    animationDuration: `${fadeTime - 200}ms`,
    animationFillMode: 'both',
    animationTimingFunction: 'ease-in',
    animationDelay: '0ms',
  }

  return (
    <div
      id='modal'
      className='fixed z-40 flex h-screen w-screen items-center justify-center overscroll-none bg-black/90 backdrop-blur-sm'
      style={fadeModal ? fadeModalStyle : {}}
    >
      <div
        onClick={handleCloseClick}
        onKeyDown={handleCloseClick}
        id='modalClickBg'
        className='absolute inset-0 hidden h-screen w-screen md:block'
      />
      <div
        id='modalOuter'
        className='flex h-full w-full animate-fade-scale-slide items-center justify-center p-0 md:p-10'
      >
        <div
          id='modalInner'
          className='relative z-50 flex h-full w-full flex-col items-center justify-center border-gray-700 bg-gray-920 pb-7 md:max-h-[800px] md:max-w-[620px] md:justify-start md:rounded-lg md:border-2 h800:md:aspect-[4/5] md:h800:max-w-[720px]'
        >
          <div
            className='absolute right-[5px] top-[3px] z-50 xs:right-[8px] sm:right-[10px] sm:top-[8px] md:top-[6px]'
            onClick={handleCloseClick}
            onKeyDown={handleCloseClick}
          >
            <CloseThickIcon className='inline text-lg leading-none text-zinc-400 hover:text-zinc-200 active:text-sky-400 sm:text-xl' />
          </div>
          <div className='h-fit overflow-y-auto overflow-x-hidden md:h-full'>
            {/*
             ************* MODAL TOP  **************
             */}
            <section
              id='modalTop'
              className='relative flex h-fit w-full flex-col items-center justify-start p-4 pt-7 xs:p-6 sm:p-8 md:p-10'
            >
              <div ref={imageRef} className='relative flex w-full items-start justify-center'>
                <div
                  className='absolute px-[5px] py-[3px]'
                  style={{ height: imageHeight, aspectRatio: imgAspectRatio }}
                >
                  <div className='h-full w-full animate-pulse rounded-md bg-gray-700 md:rounded-lg' />
                </div>
                <AdvancedImage
                  cldImg={fullImage}
                  style={{ height: imageHeight }}
                  className='z-10 rounded-md border-2 border-gray-800 md:rounded-lg'
                  plugins={[placeholder({ mode: 'blur' })]}
                />
              </div>
            </section>
            {/*
             ************* MODAL BOTTOM  **************
             */}
            <section
              id='modalBottom'
              className='flex w-full flex-col items-center justify-start px-6 xs:px-10 sm:px-24 h600:sm:px-16 h700:sm:px-12'
            >
              <div
                id='modalName'
                className='flex h-auto items-center justify-center pb-7 text-center font-mono text-2xl uppercase tracking-wide1 text-zinc-400 md:tracking-wide15'
              >
                {project.url && (
                  <div className='flex gap-[6px]'>
                    <Link
                      href={project.url}
                      className='font-semibold text-sky-400 hover:text-sky-300 hover:underline active:text-sky-500'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {project.name}
                    </Link>
                    <ExternalLinkIcon className='mt-1 inline text-sm text-zinc-400' />
                  </div>
                )}
                {!project.url && project.name}
              </div>
              {/***  Modal Details  ***/}
              <div
                id='modalDetails'
                className='flex w-full flex-col items-start justify-start gap-y-[2vh] pb-0 text-[0.96rem] leading-snug text-zinc-400'
              >
                {/***  Tech Stack  ***/}
                <div className='flex gap-3'>
                  <span className='text-nowrap italic'>Tech Stack:</span>
                  <span className='italic'>{project.stack}</span>
                </div>

                {/***  Description  ***/}
                <div className=''>
                  <p>{project.description}</p>
                </div>

                {project.githubUrl && (
                  <div className='flex gap-2'>
                    <Link
                      href={project.githubUrl}
                      className='font-semibold text-sky-400 hover:text-sky-300 hover:underline active:text-sky-500'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Github Repo
                    </Link>
                    <GithubIcon className='mt-[1px] text-2xl text-zinc-400' />
                    <ExternalLinkIcon className='mt-1 inline text-sm text-zinc-400' />
                  </div>
                )}

                {project.company && project.companyUrl && (
                  <div className='flex gap-2'>
                    <span className='pr-1 italic text-zinc-400'>Developed for:</span>
                    <Link
                      href={project.companyUrl}
                      className='font-semibold text-sky-400 hover:text-sky-300 hover:underline active:text-sky-500'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {project.company}
                    </Link>
                    <ExternalLinkIcon className='mt-1 inline text-sm text-zinc-400' />
                  </div>
                )}

                {project.company && !project.companyUrl && (
                  <div className='flex gap-3'>
                    <span className='italic text-zinc-400'>Developed for:</span>
                    <span className='font-semibold text-zinc-300'>{project.company}</span>
                  </div>
                )}
              </div>

              {/* <div className="fixed bottom-0 flex justify-center items-center h-12 w-[99%] mb-1 bg-zinc-950 sm:hidden">
              <Button
                type="button"
                onClick={handleCloseClick}
                onKeyDown={handleCloseClick}
                className="py-[2px] w-[150px] text-xs tracking-wide1"
              >
                Close
              </Button>
            </div> */}
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
