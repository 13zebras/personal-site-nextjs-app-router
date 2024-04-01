import { useEffect, useRef, useState } from 'react'

import { Cloudinary } from '@cloudinary/url-gen'
import { scale } from '@cloudinary/url-gen/actions/resize'
import { quality } from '@cloudinary/url-gen/actions/delivery'
import { AdvancedImage, placeholder } from '@cloudinary/react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '@/types/allTypes'

interface ModalType {
	project: Project
	onClose: () => void
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

	useEffect(() => {
		const updateHeight = () => {
			// const cldDiv = document.getElementById('cldDiv')
			if (cldRef.current) {
				const cldWidth = cldRef.current.clientWidth
				console.log('>>> %ccldDiv cldWidth', 'color:red', cldWidth)
				const aspectRatio = 1000 / 1788
				const newHeight = Math.floor(cldWidth * aspectRatio) - 1
				setCldHeight(newHeight)
			}
		}
		updateHeight()
		window.addEventListener('resize', updateHeight)
		return () => window.removeEventListener('resize', updateHeight)
	}, [])

	const publicIdCld = project.cldPublicId

	const cld = new Cloudinary({ cloud: { cloudName: 'do82ekomg' } })
	const fullImage = cld.image(publicIdCld)
	fullImage.resize(scale().height(cldHeight)).delivery(quality(80))

	return (
		<AnimatePresence>
			<div className='w-screen h-screen flex justify-center items-center fixed z-40 bg-black/90 backdrop-blur-sm overscroll-none'>
				<div onClick={handleCloseClick} onKeyDown={handleCloseClick} className='w-screen h-screen absolute inset-0 border' />
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
					animate={{
						// x: 0,
						y: 0,
						opacity: 1,
						scale: 1,
					}}
					exit={{
						opacity: 0,
					}}
					className='z-50 w-[90%] max-w-3xl h-[90%] p-6 sm:p-8 md:p-12 bg-gray-920 rounded-xl overscroll-none flex flex-col justify-start items-center gap-y-8 relative border-2 border-gray-800'
				>
					<div id='cldDiv' ref={cldRef} className='w-full aspect-[1788/1000] max-h-[50%] flex justify-center items-start relative'>
						<div className='animate-pulse absolute top-0 w-[99%] bg-zinc-800' style={{ height: cldHeight }} />
						<AdvancedImage cldImg={fullImage} className='max-h-[100%] z-50 border-2 border-gray-900 rounded-lg' plugins={[placeholder({ mode: 'blur' })]} />
					</div>
					<div className='max-w-[95%] flex flex-col justify-start items-center'>
						<div className='flex justify-center items-center text-center pb-6 uppercase text-zinc-400 font-mono text-2xl tracking-wide4'>{project.name}</div>
						<div className='w-full flex flex-col justify-start items-start gap-y-4 text-zinc-300 text-md'>
							<div className='text-sm text-zinc-300 mb-[2vh]'>
								<p className='pb-2'>{project.summary}</p>
								<p>{project.description}</p>
							</div>

							<div className='font-normal'>
								Tech Stack:
								<span className='ml-4 font-mono text-zinc-300'>{project.stack}</span>
							</div>

							{project.githubUrl && (
								<div className='font-normal'>
									Github:
									<Link href={project.githubUrl} className='ml-4 text-sky-300 font-mono hover:text-sky-400 hover:underline  active:text-sky-200'>
										{project.githubUrl}
									</Link>
								</div>
							)}

							{project.url && (
								<div className='font-normal'>
									Site Link:
									<Link href={project.url} className='ml-4 text-sky-300 font-mono hover:text-sky-400 hover:underline  active:text-sky-200'>
										{project.url}
									</Link>
									<div className='mt-1 block italic text-xs text-zinc-450'>Note: 3rd party websites / older links may no longer be active</div>
								</div>
							)}
						</div>
					</div>

					<button type='button' onClick={handleCloseClick} onKeyDown={handleCloseClick} className='w-64 h-9 absolute bottom-6 buttonMain text-base'>
						Close
					</button>
				</motion.div>
			</div>
		</AnimatePresence>
	)
}
