'use client'

import { AdvancedImage, placeholder } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { createPortal } from 'react-dom'
import { scale } from '@cloudinary/url-gen/actions/resize'
import { quality } from '@cloudinary/url-gen/actions/delivery'

import { useState, useEffect } from 'react'
import type { Project } from '@/types/allTypes'
import dynamic from 'next/dynamic'

const Modal = dynamic(() => import('./Modal'), { ssr: false })

export default function FlipCard({ index, ...project }: Project) {
	const [showModal, setShowModal] = useState(false)
	const [showButton, setShowButton] = useState(true)
	const [viewportWidth, setViewportWidth] = useState(0)

	useEffect(() => {
		const updateWidth = () => {
			const windowInnerWidth = window.innerWidth
			setViewportWidth(windowInnerWidth)
		}
		updateWidth()
		if (project.description === '') setShowButton(false)
		window.addEventListener('resize', updateWidth)
		return () => window.removeEventListener('resize', updateWidth)
	}, [project.description])

	if (index === undefined) return

	const handleOpenClick = () => {
		setShowModal(true)
		document.body.style.overflow = 'hidden'
		document.body.ontouchstart = (e) => {
			e.preventDefault()
		}
	}

	const imageWidth = viewportWidth < 520 ? 260 : 190

	const cld = new Cloudinary({ cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY } })
	const frontImage = cld.image(project.cldPublicId)
	frontImage.resize(scale().width(imageWidth)).delivery(quality(80))

	const duration = 1500
	const delayTime = Math.trunc(Math.random() * 2700 + 300)

	const randomStyle = {
		animationName: 'movingDiv',
		animationDuration: `${duration}ms`,
		animationFillMode: 'both',
		animationTimingFunction: 'cubic-bezier(0, 0, 0.4, 1)',
		animationDelay: `${delayTime}ms`,
	}

	return (
		<div id={`flipCard-${index}`} style={randomStyle} className='relative w-[--widthL] h-[--heightL] xsP:w-[--widthS] xsP:h-[--heightS]'>
			<div id={`flipContainer-${index}`} className='group z-20 [perspective:1200px] w-full h-full'>
				<div id='flipContent' className='w-full h-full transition-transform duration-500 ease-out delay-100 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
					<div id='flipFront' className='absolute w-full h-full [backface-visibility:hidden] border-2 border-neutral-700 rounded-lg bg-zinc-920'>
						<div className='relative w-full h-full p-4 xsP:p-3 flex flex-col items-center justify-start gap-y-2 xsP:gap-y-3'>
							<AdvancedImage id='flipImage' cldImg={frontImage} plugins={[placeholder({ mode: 'blur' })]} className='border border-zinc-850 rounded-md' />
							<div className='w-full h-20 px-8 xsP:px-1 flex justify-center items-center text-center text-lg xsP:text-base leading-snug font-semibold text-zinc-200'>{project.name}</div>
						</div>
					</div>
					<div id='flipBack' className='absolute w-full h-full bg-slate-920 border-2 border-slate-600 rounded-lg p-4 flex flex-col items-center justify-start text-left text-sm text-zinc-300 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
						<p className='m-0 py-0'>{project.summary}</p>
						{showButton && (
							<button type='button' onClick={handleOpenClick} className='fixed bottom-2 w-40 h-6  buttonMain border-gray-600 text-[13px] tracking-wide0'>
								Learn More...
							</button>
						)}
						{showModal && createPortal(<Modal project={project} onClose={() => setShowModal(false)} />, document.body)}
					</div>
				</div>
			</div>
		</div>
	)
}
