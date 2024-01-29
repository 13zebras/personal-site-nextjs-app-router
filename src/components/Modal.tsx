import { AdvancedImage, placeholder, responsive } from '@cloudinary/react';

import { Cloudinary } from "@cloudinary/url-gen";
import { Project } from '@/types/projects-types';
import { motion } from "framer-motion"

type ModalType = {
  project: Project,
  onClose: () => void;
}

export default function Modal(props: ModalType) {
  console.log('>>> modal props', props)
  const project = props.project
  const handleCloseClick = () => {
    props.onClose()
    document.body.style.removeProperty('overflow')
  }

  const publicIdCld = project.cldPublicId

  const cld = new Cloudinary({ cloud: { cloudName: 'do82ekomg' } });
  const fullImage = cld.image(publicIdCld)

  return (

    <div onClick={handleCloseClick} className="w-[100vw] h-[100vh] fixed top-0 left-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center overscroll-none">
      <motion.div
        initial={{
          // x: -300,
          y: -300,
          scale: 0.4,
          opacity: 0.2,
        }}
        transition={{
          delay: 0,
          duration: 0.5,
        }}
        whileInView={{
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
        }} className="w-[90%] h-[90%] p-16 bg-zinc-900 rounded-xl overscroll-none flex flex-col justify-start items-center gap-y-16 relative">
        <div className="w-[100%] h-[70%] flex justify-center items-start">
          <AdvancedImage cldImg={fullImage} plugins={[responsive({ steps: 200 }), placeholder({ mode: 'blur' })]} className="max-h-[100%]" />
        </div>
        <div className="max-w-[70%] flex flex-col justify-start items-start gap-y-8">
          <div className="text-xl">{project.description}</div>
          <div className="text-xl">Tech Stack: {project.stack}</div>
        </div>
        <button onClick={handleCloseClick} className="w-56 h-12 bg-zinc-700 hover:bg-zinc-600 text-white text-lg rounded-2xl absolute bottom-10 border border-zinc-500" >Close</button>
      </motion.div>
    </div>
  )
}
