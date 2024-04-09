'use client'

import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity'
import { color } from '@cloudinary/url-gen/qualifiers/background'
import { createPortal } from 'react-dom'
import { fillPad } from '@cloudinary/url-gen/actions/resize'
import { useState } from 'react'
import Modal from '../components/Modal'
import type { Project } from '@/types/allTypes'

function FlipCard({ index, ...project }: Project) {
	const [showModal, setShowModal] = useState(false)

	if (index === undefined) return

	const handleOpenClick = () => {
		setShowModal(true)
		document.body.style.overflow = 'hidden'
		document.body.ontouchstart = (e) => {
			e.preventDefault()
		}
	}

	const cld = new Cloudinary({ cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY } })
	const frontImage = cld.image(project.cldPublicId)
	frontImage.resize(fillPad().width(252).height(142).gravity(autoGravity()).background(color('#0d0d0d')))

	return (
		<DynamicFlipAnimation key={project.name} index={index}>
			<div className='FlipContent w-full h-full'>
				<div className='FlipFront absolute w-full h-full bg-zinc-920 border-2 border-neutral-700 rounded-lg p-3 flex flex-col items-center justify-start gap-y-3'>
					<div className='w-full relative border border-zinc-900'>
						<AdvancedImage cldImg={frontImage} />
					</div>

					<div className='w-full h-20 px-8 xs:px-1 flex justify-center items-center text-center text-lg xs:text-base leading-snug font-semibold text-zinc-200'>{project.name}</div>
				</div>
				<div className='FlipBack absolute w-full h-full bg-slate-920 border-2 border-slate-600 rounded-lg p-5 flex flex-col items-center justify-start gap-4 text-left text-sm text-zinc-300'>
					{project.summary}
					<button type='button' onClick={handleOpenClick} className='fixed bottom-4 w-40 h-7 buttonMain border-gray-600'>
						Learn More...
					</button>
					{showModal && createPortal(<Modal project={project} onClose={() => setShowModal(false)} />, document.body)}
				</div>
			</div>
		</DynamicFlipAnimation>
	)
}

export default FlipCard
