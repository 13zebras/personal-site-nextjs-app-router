import { AdvancedImage, placeholder, responsive } from '@cloudinary/react';
import { useEffect, useRef, useState } from "react";

import { Cloudinary } from "@cloudinary/url-gen";
// import { FlipCardProps } from '@/components/FlipCard';
import Link from "next/link"
import { Project } from '@/types/allTypes';
import { motion } from "framer-motion"

type ModalType = {
  project: Project,
  onClose: () => void;
}

export default function Modal(props: ModalType) {
  const [cldHeight, setCldHeight] = useState(0)
  const cldRef = useRef<HTMLDivElement>(null)

  // console.log('>>> %cmodal props', "color:red", props)
  const project = props.project
  const handleCloseClick = () => {
    props.onClose()
    document.body.style.removeProperty('overflow')
  }

  const publicIdCld = project.cldPublicId

  const cld = new Cloudinary({ cloud: { cloudName: 'do82ekomg' } });
  const fullImage = cld.image(publicIdCld)

  useEffect(() => {
    const updateHeight = () => {
      // const cldDiv = document.getElementById('cldDiv')
      if (cldRef.current) {
        const cldWidth = cldRef.current.clientWidth
        console.log('>>> %ccldDiv cldWidth', "color:red", cldWidth)
        const aspectRatio = 1000 / 1788
        const newHeight = Math.floor(cldWidth * aspectRatio) - 1
        setCldHeight(newHeight)
      }
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  const projectName = { __html: project.name }

  return (

    <div onClick={handleCloseClick} className="w-[100vw] h-[100vh] fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex justify-center items-center overscroll-none">
      <motion.div
        initial={{
          y: -200,
          opacity: 0.2,
          scale: 0.3,
        }}
        transition={{
          delay: 0,
          duration: 0.5,
        }}
        whileInView={{
          // x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
        }} className="w-[90%] max-w-3xl h-[90%] p-6 sm:p-8 md:p-12 bg-gray-920 rounded-xl overscroll-none flex flex-col justify-start items-center gap-y-8 relative border-2 border-gray-800">
        <div id="cldDiv" ref={cldRef} className="w-full aspect-[1788/1000] max-h-[50%] flex justify-center items-start relative" >
          <div className="animate-pulse absolute top-0 w-[99%] bg-zinc-800" style={{ height: cldHeight }} />
          <AdvancedImage cldImg={fullImage} className="max-h-[100%] z-50 border-2 border-gray-900  rounded-lg" />
          {/* <AdvancedImage cldImg={fullImage} plugins={[responsive({ steps: 200 }), placeholder({ mode: 'blur' })]} className="max-h-[100%] z-50 border border-gray-800 " /> */}
        </div>
        <div className="max-w-[95%] flex flex-col justify-start items-center">

          <div className="flex justify-center items-center text-center pb-6 uppercase text-zinc-400 font-mono text-2xl tracking-wide4" dangerouslySetInnerHTML={projectName} />
          <div className="w-full flex flex-col justify-start items-start gap-y-4 text-zinc-300 text-md">

            <div className="text-sm text-zinc-300 mb-[2vh]">
              <p className="pb-2">{project.summary}</p>
              <p>{project.description}</p>
            </div>

            <div className="font-normal">Tech Stack:<span className="ml-4 font-mono text-zinc-300">{project.stack}</span></div>

            {project.githubUrl && <div className="font-normal">Github:
              <Link href={project.githubUrl} className="ml-4 text-sky-300 font-mono hover:text-sky-400 hover:underline  active:text-sky-200">{project.githubUrl}</Link>
            </div>}

            {project.url && <div className="font-normal">Site Link:
              <Link href={project.url} className="ml-4 text-sky-300 font-mono hover:text-sky-400 hover:underline  active:text-sky-200">{project.url}</Link>
              <div className="mt-1 block italic text-xs text-zinc-450">Note: 3rd party websites / older links may no longer be active</div>
            </div>}

          </div>
        </div>

        <button onClick={handleCloseClick} className="w-36 h-7 bg-gray-800 hover:bg-gray-600 active:bg-slate-500 text-zinc-300 active:text-zinc-100 text-sm rounded-xl absolute bottom-6 border border-gray-500" >Close</button>
      </motion.div>
    </div>
  )
}
