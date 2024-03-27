'use client'

import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity'
import { color } from '@cloudinary/url-gen/qualifiers/background'
import { createPortal } from 'react-dom'
import { fillPad } from '@cloudinary/url-gen/actions/resize'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import Modal from './Modal'
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

	const random1 = Math.random()
	const random2 = Math.random()
	const random3 = Math.random()

	const iX = Math.trunc(random1 * 500 + 500) * (random2 < 0.5 ? -1 : 1)
	const iY = Math.trunc(random2 * 500 + 400) * (random3 < 0.5 ? -1 : 1)

	const iScale = Number.parseFloat((random3 * 0.4 + 0.3).toFixed(1))

	const rX = Math.trunc(random1 * 270 + 180) * (random3 < 0.5 ? -1 : 1)
	const rY = Math.trunc(random2 * 270 + 180) * (random1 < 0.5 ? -1 : 1)
	const rZ = Math.trunc(random3 * 270 + 180) * (random2 < 0.5 ? -1 : 1)

	const iTime = Number.parseFloat((random1 * 2 + 2.0).toFixed(2))

	// const motionValues: Array<number> = [iX, iY, iScale, rX, rY, rZ, iTime]

	// console.log('>>>motionValues:', index, motionValues)

	const cld = new Cloudinary({ cloud: { cloudName: 'do82ekomg' } })
	const frontImage = cld.image(project.cldPublicId)
	frontImage.resize(
		fillPad()
			.width(252)
			.height(142)
			.gravity(autoGravity())
			// .gravity(compass('north'))
			.background(color('#0d0d0d')),
	)

	// const projectName = { __html: project.name }

	return (
		<motion.div
			initial={{
				x: iX,
				y: iY,
				scale: iScale,
				rotateX: rX,
				rotateY: rY,
				rotateZ: rZ,
				opacity: 0,
			}}
			animate={{
				x: 0,
				y: 0,
				scale: 1,
				rotateX: 0,
				rotateY: 0,
				rotateZ: 0,
				opacity: 1,
			}}
			transition={{
				duration: iTime,
				delay: 0.1,
			}}
			className='FlipContainer w-[280px] h-[230px] xs:w-[200px] xs:h-[220px]'
		>
			<div className='FlipContent w-full h-full'>
				<div className='FlipFront absolute w-full h-full bg-zinc-920 border-2 border-neutral-700 rounded-lg p-3 flex flex-col items-center justify-start gap-y-3'>
					<div className='w-full relative border border-zinc-900'>
						<AdvancedImage cldImg={frontImage} />
					</div>

					<div className='w-full h-20 px-8 xs:px-1 flex justify-center items-center text-center text-lg xs:text-base leading-snug font-semibold text-zinc-200'>
						{project.name}
					</div>
				</div>
				<div className='FlipBack absolute w-full h-full bg-slate-920 border-2 border-slate-600 rounded-lg p-5 flex flex-col items-center justify-start gap-4 text-left text-sm text-zinc-300'>
					{project.summary}
					<button
						type='button'
						onClick={handleOpenClick}
						className='fixed bottom-4 w-40 h-7 buttonMain border-gray-600'
					>
						Learn More...
					</button>
					{showModal &&
						createPortal(
							<Modal project={project} onClose={() => setShowModal(false)} />,
							document.body,
						)}
				</div>
			</div>
		</motion.div>
	)
}

export default FlipCard

// bg-slate-800 hover:bg-slate-700 active:bg-slate-700 text-zinc-200 active:text-zinc-100 text-sm rounded-xl border border-slate-500 active:border-sky-500
