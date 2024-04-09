import '@/styles/modal.css'

import { useEffect, useRef, useState } from 'react'

import { Cloudinary } from '@cloudinary/url-gen'
import { scale } from '@cloudinary/url-gen/actions/resize'
import { quality } from '@cloudinary/url-gen/actions/delivery'
import { AdvancedImage, placeholder } from '@cloudinary/react'
import { CloseIcon, CloseThickIcon } from '@/utils/svgs'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '@/types/allTypes'

interface ModalType {
	project: Project
	onClose: () => void
}

export default function Modal(props: ModalType) {
	const [fadeModal, setFadeModal] = useState(false)
	const [imageHeight, setImageHeight] = useState(0)
	const imageRef = useRef<HTMLDivElement>(null)
	const imgAspectRatio = 1.788 // 1788 / 1000
	const fadeTime = 500
	// console.log('>>> %cmodal props', "color:red", props)
	const project = props.project

	const handleCloseClick = () => {
		setFadeModal(true)
		document.body.style.removeProperty('overflow')
		// console.log('>>> %chandleCloseClick', 'color:red')
		setTimeout(() => {
			props.onClose()
			// console.log('>>> %c SET TIMEOUT', 'color: #fb0')
		}, fadeTime + 100)
	}

	useEffect(() => {
		const updateHeight = () => {
			const viewportHeight = window.innerHeight

			if (imageRef.current) {
				const imageWidth = imageRef.current.clientWidth
				console.log('%c>>> imageWidth', 'color:#f80', imageWidth)
				// console.log('%c>>> imageWidth', 'color:#5f0', imageWidth)
				let newHeight = Math.floor(imageWidth / imgAspectRatio)
				const maxHeight = Math.floor(viewportHeight * 0.45)
				if (newHeight > maxHeight) newHeight = maxHeight
				setImageHeight(newHeight)
				console.log('%c>>> newHeight', 'color:#5f0', newHeight)
			}
		}
		updateHeight()
		window.addEventListener('resize', updateHeight)
		return () => window.removeEventListener('resize', updateHeight)
	}, [])

	const publicId = project.cldPublicId

	const cloudinary = new Cloudinary({ cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY } })
	const fullImage = cloudinary.image(publicId)
	fullImage.resize(scale().height(imageHeight)).delivery(quality(80))

	console.log('%c>>> imageHeight', 'color:magenta', imageHeight)

	const fadeModalStyle = {
		animationName: 'fadeOut',
		animationDuration: `${fadeTime - 200}ms`,
		animationFillMode: 'both',
		animationTimingFunction: 'ease-in',
		animationDelay: '0ms',
	}

	return (
		<div id='portfolioModal' style={fadeModal ? fadeModalStyle : {}}>
			<div onClick={handleCloseClick} onKeyDown={handleCloseClick} id='modalClickBg' />
			<motion.div
				initial={{
					y: -200,
					opacity: 0.1,
					scale: 0.3,
				}}
				transition={{
					delay: 0,
					duration: 0.5,
				}}
				animate={{
					y: 0,
					opacity: 1,
					scale: 1,
				}}
				id='modalOuter'
			>
				<div className='closeIcon' onClick={handleCloseClick} onKeyDown={handleCloseClick}>
					<CloseThickIcon className='closeIconLink' />
				</div>
				<div className='overflow-y-auto overflow-x-hidden h-full'>
					<section id='modalTop' className=''>
						<div id='cloudinaryImage' ref={imageRef} className=''>
							<div className='absolute py-[3px] px-[5px]' style={{ height: imageHeight, aspectRatio: imgAspectRatio }}>
								<div className='animate-pulse bg-gray-700 w-full h-full rounded-md md:rounded-lg' />
							</div>
							<AdvancedImage cldImg={fullImage} style={{ height: imageHeight }} className='z-0 border-2 border-gray-800 rounded-md md:rounded-lg z-10' plugins={[placeholder({ mode: 'blur' })]} />
						</div>
						{/* <div id='modalProjectName' className='text-zinc-400'>
						{project.name}
					</div> */}
					</section>
					<section id='modalBottom'>
						<div id='modalProjectName' className='text-zinc-400'>
							{project.name}
						</div>
						<div id='modalProjectDetails' className='text-zinc-300'>
							<div className=''>
								<p className='pb-2'>{project.summary}</p>
								<p>{project.description}</p>
							</div>
							<div id='divider' className='border-b-2 border-gray-700' />
							{project.url && (
								<div className='detailsWrap'>
									<span className='mr-3'>Site Link:</span>
									<Link href={project.url} className='modalLinks'>
										{project.url.split('//').slice(-1)}
									</Link>
									<div className='mt-[2px] w-full italic font-normal text-xs text-zinc-450'>Note: 3rd party websites may no longer be active</div>
								</div>
							)}

							<div className='detailsWrap'>
								<span className='mr-3'>Tech Stack:</span>
								<span className='text-zinc-300 italic'>{project.stack}</span>
							</div>

							{project.githubUrl && (
								<div className='detailsWrap'>
									<span className='mr-3'>Github:</span>
									<Link href={project.githubUrl} className='modalLinks'>
										{project.githubUrl.split('/').slice(-1)}
									</Link>
								</div>
							)}
						</div>
					</section>
				</div>
			</motion.div>
		</div>
	)
}
