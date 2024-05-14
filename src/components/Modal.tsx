import { useEffect, useRef, useState } from "react"

import { Cloudinary } from "@cloudinary/url-gen"
import { scale } from "@cloudinary/url-gen/actions/resize"
import { quality } from "@cloudinary/url-gen/actions/delivery"
import { AdvancedImage, placeholder } from "@cloudinary/react"
import { GithubIcon, ExternalLinkIcon, CloseThickIcon } from "@/utils/svgs"
import Link from "next/link"
import type { Project } from "@/types/allTypes"
import Button from "./Button"

interface ModalType {
  project: Project;
  onClose: () => void;
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
    document.body.style.removeProperty("overflow")
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
        const maxHeight = Math.floor(viewportHeight * 0.45)
        if (newHeight > maxHeight) newHeight = maxHeight
        setImageHeight(newHeight)
      }
    };
    updateHeight()
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [])

  const publicId = project.cldPublicId

  const cloudinary = new Cloudinary({
    cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY },
  })
  const fullImage = cloudinary.image(publicId)
  fullImage.resize(scale().height(imageHeight)).delivery(quality(80))

  const fadeModalStyle = {
    animationName: "fadeOut",
    animationDuration: `${fadeTime - 200}ms`,
    animationFillMode: "both",
    animationTimingFunction: "ease-in",
    animationDelay: "0ms",
  };

  return (
    <div
      id="modal"
      className="w-screen h-screen flex justify-center items-center fixed z-40 bg-black/90 backdrop-blur-sm overscroll-none"
      style={fadeModal ? fadeModalStyle : {}}
    >
      <div
        onClick={handleCloseClick}
        onKeyDown={handleCloseClick}
        id="modalClickBg"
        className="hidden sm:block w-screen h-screen absolute inset-0"
      />
      <div
        id="modalOuter"
        className="animate-fade-scale-slide w-full h-full sm:h-[90%] sm:max-h-[800px] sm:w-[90%] max-w-[720px] bg-zinc-950 sm:rounded-lg flex flex-col justify-center sm:justify-start items-center relative sm:border-2 border-zinc-700 z-50 pb-7 sm:pb-8"
      >
        <div
          className="absolute top-[3px] sm:top-[6px] right-[5px] xs:right-[8px] z-50"
          onClick={handleCloseClick}
          onKeyDown={handleCloseClick}
        >
          <CloseThickIcon className="inline leading-none text-lg sm:text-xl text-zinc-400 hover:text-zinc-200 active:text-sky-400" />
        </div>
        <div className="overflow-y-auto overflow-x-hidden h-fit sm:h-full">

          {/************** MODAL TOP  ***************/}

          <section
            id="modalTop"
            className="w-full p-4 pt-7 xs:p-6 sm:p-8 flex flex-col justify-start items-center relative h-fit"
          >
            <div
              ref={imageRef}
              className="relative w-full flex justify-center items-start"
            >
              <div
                className="absolute py-[3px] px-[5px]"
                style={{ height: imageHeight, aspectRatio: imgAspectRatio }}
              >
                <div className="animate-pulse bg-gray-700 w-full h-full rounded-md md:rounded-lg" />
              </div>
              <AdvancedImage
                cldImg={fullImage}
                style={{ height: imageHeight }}
                className="border-2 border-gray-800 rounded-md md:rounded-lg z-10"
                plugins={[placeholder({ mode: "blur" })]}
              />
            </div>
          </section>

          {/************** MODAL BOTTOM  ***************/}

          <section
            id="modalBottom"
            className="w-full flex flex-col justify-start items-center px-6 xs:px-10 sm:px-12"
          >
            <div
              id="modalName"
              className="flex justify-center items-center text-center pb-6 h-auto uppercase font-mono text-2xl tracking-wide1 md:tracking-wide15 text-zinc-400"
            >
              {project.url && (
                <div className='flex gap-[6px]'>
                  <Link
                    href={project.url}
                    className="text-sky-400 font-semibold hover:text-sky-300 hover:underline active:text-sky-500" target='_blank' rel='noopener noreferrer'
                  >
                    {project.name}
                  </Link>
                  <ExternalLinkIcon className="text-zinc-400 text-sm inline mt-1" />
                </div>
              )}
              {!project.url && (
                project.name
              )}
            </div>
            <div
              id="modalDetails"
              className="w-full flex flex-col justify-start items-start text-[0.96rem] text-zinc-300 pb-0 leading-snug gap-y-[2vh]"
            >
              <div className="">
                <p>{project.description}</p>
              </div>

              <div className="flex gap-3">
                <span className="text-zinc-400 italic text-nowrap">Tech Stack:</span>
                <span className="text-zinc-300">{project.stack}</span>
              </div>

              {project.githubUrl && (
                <div className='flex gap-2'>
                  <Link
                    href={project.githubUrl}
                    className="text-sky-400 font-semibold hover:text-sky-300 hover:underline active:text-sky-500" target='_blank' rel='noopener noreferrer'
                  >
                    Github Repo
                  </Link>
                  <GithubIcon className="text-zinc-400 text-2xl mt-[1px]" />
                  <ExternalLinkIcon className="text-zinc-400 text-sm inline mt-1" />
                </div>
              )}

              {project.company && project.companyUrl && (
                <div className="flex gap-2">
                  <span className="text-zinc-400 italic pr-1">Developed for:</span>
                  <Link
                    href={project.companyUrl}
                    className="text-sky-400 font-semibold hover:text-sky-300 hover:underline active:text-sky-500" target='_blank' rel='noopener noreferrer'
                  >
                    {project.company}
                  </Link>
                  <ExternalLinkIcon className="text-zinc-400 text-sm inline mt-1" />
                </div>
              )}

              {project.company && !project.companyUrl && (
                <div className="flex gap-3">
                  <span className="text-zinc-400 italic">Developed for:</span>
                  <span className="text-zinc-300 font-semibold">
                    {project.company}
                  </span>
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
  );
}
