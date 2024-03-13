import { AdvancedImage, placeholder, responsive } from '@cloudinary/react';
import { useEffect, useState } from "react";

import { Cloudinary } from "@cloudinary/url-gen";
import Link from "next/link"
import { Project } from '@/types/projects-types';
import { motion } from "framer-motion"

type ModalType = {
  project: Project,
  onClose: () => void;
}

export default function Modal(props: ModalType) {
  const [calcHeight, setCalcHeight] = useState(0)
  console.log('>>> %cmodal props', "color:red", props)
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
      const cldDiv = document.getElementById('cldDiv')
      if (cldDiv) {
        const clientWidth = cldDiv.clientWidth
        const aspectRatio = 1000 / 1788
        const newHeight = Math.floor(clientWidth * aspectRatio) - 1
        setCalcHeight(newHeight)
      }
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  })

  const cldSkeletonStyle = `${calcHeight}px`

  return (

    <div onClick={handleCloseClick} className="w-[100vw] h-[100vh] fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex justify-center items-center overscroll-none">
      <motion.div
        initial={{
          // x: -300,
          y: 200,
          opacity: 0.1,
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
        }} className="w-[80%] h-[90%] p-12 bg-gray-920 rounded-lg overscroll-none flex flex-col justify-start items-center gap-y-12 relative border border-gray-800">
        <div id="cldDiv" className="aspect-[1788/1000] h-[50%] flex justify-center items-start relative" >
          <div className="animate-pulse absolute top-0 w-[99%] bg-zinc-800" style={{ height: cldSkeletonStyle }} />
          <AdvancedImage cldImg={fullImage} plugins={[responsive({ steps: 200 })]} className="max-h-[100%] z-50 border border-neutral-500" />
          {/* <AdvancedImage cldImg={fullImage} plugins={[responsive({ steps: 200 }), placeholder({ mode: 'blur' })]} className="max-h-[100%] z-50 border border-gray-800 " /> */}
        </div>
        <div className="max-w-[80%] flex flex-col justify-start items-center">
          <h1 className="pb-6 uppercase text-zinc-400 font-mono text-2xl tracking-wide4">{project.name}</h1>
          <div className="w-full flex flex-col justify-start items-start gap-y-4 text-zinc-400 text-md">
            <div className="text-zinc-300">{project.description}</div>
            <div className="font-bold">Tech Stack:<span className="ml-4 font-light font-mono text-zinc-300">{project.stack}</span></div>
            <div className="font-bold">Link:
              <Link href={project.url} className="text-zinc-300 font-light ml-3 p-1 hover:text-zinc-100 hover:bg-gray-800 rounded font-mono">{project.url}</Link>
              <div className="mt-2 block italic text-xs text-zinc-500">(3rd party websites / older links may no longer be active)</div>
            </div>
          </div>
        </div>
        <button onClick={handleCloseClick} className="w-40 h-8 bg-zinc-700 hover:bg-zinc-600 text-white text-md rounded-xl absolute bottom-8 border border-zinc-500" >Close</button>
      </motion.div>
    </div>
  )
}
