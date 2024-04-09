'use client'

import '@/styles/flipCard.css'
import { motion, AnimatePresence } from 'framer-motion'
import { AdvancedImage, placeholder } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { createPortal } from 'react-dom'
import { scale } from '@cloudinary/url-gen/actions/resize'
import { quality } from '@cloudinary/url-gen/actions/delivery'

import { useState } from 'react'
import Modal from './Modal'
import type { Project } from '@/types/allTypes'

function FlipCardMotion({ index, ...project }: Project) {
	const [showModal, setShowModal] = useState(false)

	if (index === undefined) return

	const random1 = Math.random()
	const random2 = Math.random()
	const random3 = Math.random()

	// const iScale = Number.parseFloat((random3 * 0.4 + 0.1).toFixed(1))

	const iX = Math.trunc(random1 * 800 + 1000) * (random2 < 0.5 ? -1 : 1)
	const iY = Math.trunc(random2 * 700 + 700) * (random3 < 0.5 ? -1 : 1)

	const deg1 = random3 < 0.2 ? 6 * 270 : 1 * 270
	const deg2 = random1 < 0.7 ? 7 * 270 : 2 * 270
	const deg3 = random2 < 0.2 ? 4 * 270 : 1 * 270
	const rX = Math.trunc(random1 * deg1 + 180) * (random2 < 0.5 ? -1 : 1)
	const rY = Math.trunc(random2 * deg2 + 180) * (random3 < 0.5 ? -1 : 1)
	const rZ = Math.trunc(random3 * deg3 + 180) * (random1 < 0.5 ? -1 : 1)

	// const delayTime = 5
	const delayTime = Number.parseFloat(Math.random().toFixed(3))

	console.log('>>>> i: delayTime', index, delayTime)
	// const delayTime = Math.trunc(Math.random())
	const iTime = Math.trunc(Math.random() * 2 + 3)

	const handleOpenClick = () => {
		setShowModal(true)
		document.body.style.overflow = 'hidden'
		document.body.ontouchstart = (e) => {
			e.preventDefault()
		}
		console.log('>>>> %chandleOpenClick i:', 'color: #44ff00', index)
	}

	// const handleCloseClickFlip = () => {
	// 		setShowModal(false)

	// 		console.log('>>>> handleCloseClickFlip i:', index, showModal)
	// 	}

	const cld = new Cloudinary({ cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY } })
	const frontImage = cld.image(project.cldPublicId)
	frontImage.resize(scale().width(232)).delivery(quality(80))
	// console.log('>>>> i: showModal', index, showModal)

	return (
		<div id={`flipCard-${index}`} className='flipCard'>
			<div className='animate-pulse flipSkeleton border border-gray-800 rounded-lg' />
			<motion.div
				initial={{
					x: iX,
					y: iY,
					rotateX: rX,
					rotateY: rY,
					rotateZ: rZ,
				}}
				transition={{
					delay: delayTime,
					duration: iTime,
					ease: [0, 0, 0.3, 1.0],
				}}
				animate={{
					x: 0,
					y: 0,
					rotateX: 0,
					rotateY: 0,
					rotateZ: 0,
				}}
				id={`flipContainer-${index}`}
				className='flipContainer'
			>
				<div className='flipContent'>
					<div className='flipFront flipFront2'>
						<div className='flipImageContainer border border-zinc-900'>
							<AdvancedImage className='flipImage' cldImg={frontImage} plugins={[placeholder({ mode: 'blur' })]} />
						</div>

						<div className='flipFrontName'>{project.name}</div>
					</div>
					<div className='flipBack flipBack2'>
						{project.summary}
						<button type='button' onClick={handleOpenClick} className='fixed bottom-4 w-40 h-7 buttonMain border-gray-600'>
							Learn More...
						</button>
						{showModal && createPortal(<Modal project={project} onClose={() => setShowModal(false)} />, document.body)}
					</div>
				</div>
			</motion.div>
		</div>
	)
}

export default FlipCardMotion

// x: iX,
// y: iY,
// scale: iScale,
// rotateX: rX,
// rotateY: rY,
// rotateZ: rZ,
// opacity: 0.2,

// x: motionValues[0],
// y: motionValues[1],
// scale: motionValues[2],
// rotateX: motionValues[3],
// rotateY: motionValues[4],
// rotateZ: motionValues[5],
// opacity: 0.2,
// duration: motionValues[6],
