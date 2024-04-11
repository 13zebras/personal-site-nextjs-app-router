import '@/styles/modal.css'

import { useEffect, useRef, useState } from 'react'

import { Cloudinary } from '@cloudinary/url-gen'
import { scale } from '@cloudinary/url-gen/actions/resize'
import { quality } from '@cloudinary/url-gen/actions/delivery'
import { AdvancedImage, placeholder } from '@cloudinary/react'
import { GithubIcon, ExternalLinkIcon, CloseThickIcon } from '@/utils/svgs'
import Link from 'next/link'
import { motion } from 'framer-motion'
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
				const maxHeight = Math.floor(viewportHeight * 0.45)
				if (newHeight > maxHeight) newHeight = maxHeight
				setImageHeight(newHeight)
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
							<AdvancedImage cldImg={fullImage} style={{ height: imageHeight }} className='border-2 border-gray-800 rounded-md md:rounded-lg z-10' plugins={[placeholder({ mode: 'blur' })]} />
						</div>
					</section>
					<section id='modalBottom'>
						<div id='modalProjectName' className='text-zinc-400'>
							{project.name}
						</div>
						<div id='modalProjectDetails' className='text-zinc-300'>
							{project.url && (
								<div className='pb-[1.8vh] self-center'>
									<Link href={project.url} className='text-sky-400 font-semibold hover:text-sky-500 hover:underline active:text-sky-300 text-sm'>
										{project.url}
									</Link>
								</div>
							)}

							<div className='pb-[2vh]'>
								<p>{project.description}</p>
							</div>

							<div className='pb-[1.6vh]'>
								<span className='mr-3 text-zinc-400 italic'>Tech Stack:</span>
								<span className='text-zinc-300'>{project.stack}</span>
							</div>

							{project.githubUrl && (
								<Link href={project.githubUrl} className='text-zinc-300 font-semibold hover:underline hover:text-sky-400 active:text-sky-400'>
									Github Repo
									<GithubIcon className='ml-2 text-2xl inline mb-[3px]' />
									<ExternalLinkIcon className='ml-2 text-sm inline mb-[1px]' />
								</Link>
							)}
						</div>
						<div className='fixed bottom-0 flex justify-center items-center h-[6vh] w-[99%] mb-1 bg-gray-920 xs:hidden'>
							<button type='button' onClick={handleCloseClick} onKeyDown={handleCloseClick} className='py-[1px] w-[120px] buttonMain text-xs tracking-wide1 '>
								Close
							</button>
						</div>
					</section>
				</div>
			</motion.div>
		</div>
	)
}
