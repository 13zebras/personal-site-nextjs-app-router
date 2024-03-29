'use client'

import { AdvancedImage, placeholder } from '@cloudinary/react'
import { useEffect, useRef, useState } from 'react'

import { Cloudinary } from '@cloudinary/url-gen'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'
import { easeOut, motion } from 'framer-motion'
import BackgroundCircles from './BackgroundCircles'

export default function Hero() {
	const heroTextRef = useRef<HTMLDivElement>(null)
	const heroLinksRef = useRef<HTMLDivElement>(null)
	const [viewportWidth, setViewportWidth] = useState(0)
	const [viewportHeight, setViewportHeight] = useState(0)

	const typeWriterWords = ['<React, Next.js />', '{TypeScript, Node.js}', 'style: exceptional;']
	// const typeWriterWords = ['<React, Next.js />', '{TypeScript, Node.js}', 'style: exceptional;', '() => performant']

	const publicIdTom = 'portfolio/tom-chill-center' // publicIdCld
	const cld = new Cloudinary({ cloud: { cloudName: 'do82ekomg' } })
	const fullImage = cld.image(publicIdTom)

	useEffect(() => {
		const updateWindowDimensions = () => {
			setViewportWidth(window.innerWidth)
			setViewportHeight(window.innerHeight)
		}
		updateWindowDimensions()
		window.addEventListener('resize', updateWindowDimensions)
		return () => window.removeEventListener('resize', updateWindowDimensions)
	}, [])

	let imageSize = 200
	if (viewportWidth <= viewportHeight) {
		if (viewportWidth >= 640) imageSize = 320
		else imageSize = Math.max(Math.round(viewportWidth * 0.5), 200)
	}
	if (viewportWidth > viewportHeight) {
		if (viewportHeight >= 750) imageSize = Math.min(Math.round(viewportHeight * 0.37), 320)
		else imageSize = Math.max(Math.round(viewportHeight * 0.33), 200)
	}

	const vhBreakPoint = 800
	let heroMainTextHeight = 235
	if (
		(viewportWidth >= 1280 && viewportHeight < vhBreakPoint) ||
		(viewportWidth < 1280 && viewportHeight >= vhBreakPoint)
	)
		heroMainTextHeight = 196

	if (viewportWidth < 1280 && viewportHeight < vhBreakPoint) heroMainTextHeight = 176

	let heroLinksHeight = 100
	if (viewportWidth < 480)
		viewportHeight < vhBreakPoint ? (heroLinksHeight = 170) : (heroLinksHeight = 187)

	const totalHeroHeight = imageSize + heroMainTextHeight + heroLinksHeight

	// **********************************************************
	// ***  RING CALCS  *****************************************
	// **********************************************************

	let ringOuterPadding = 0

	const smallestViewport = Math.min(viewportWidth, viewportHeight)

	if (smallestViewport > 800) ringOuterPadding = 30
	else if (smallestViewport > 480) ringOuterPadding = Math.round((smallestViewport - 480) / 10)

	let maxRingGap = 100
	if (viewportHeight < 710) maxRingGap = 60
	else if (viewportHeight < 850) maxRingGap = 80

	let ringGap = Math.round((smallestViewport - ringOuterPadding - imageSize) / 3)

	if (ringGap > maxRingGap) ringGap = maxRingGap

	const ringSizes: Array<number> = []

	const ring0pinScale = 4.0
	const maxRing0 = imageSize + ringGap * 3

	if (smallestViewport - ringOuterPadding > maxRing0)
		ringSizes[0] = Math.round(maxRing0 / ring0pinScale)
	else ringSizes[0] = Math.round((smallestViewport - ringOuterPadding) / ring0pinScale)

	for (let i = 1; i < 3; i++) ringSizes[i] = Math.round(imageSize + ringGap * i)

	const ringTops: Array<number> = ringSizes.map((y) => {
		return (imageSize - y) / 2
	})

	if (!ringTops[0]) ringTops[0] = 0

	// **********************************************************
	// ***  SPACING  ********************************************
	// **********************************************************

	let heroImageTop = Math.round((viewportHeight - totalHeroHeight) / 2)
	heroImageTop = Math.max(ringGap / 2 + ringTops[0], heroImageTop)

	// console.log('>>> maxRing0', maxRing0)
	// console.log('>>> ringGap', ringGap)
	// console.log('>>> ringSizes', ringSizes)
	// console.log('>>> ringTops', ringTops)
	// console.log('>>> ringOuterPadding', ringOuterPadding)
	// console.log('>>> viewportWidth', viewportWidth)

	// console.log('>>> imageSize', imageSize)
	// console.log('>>> heroMainTextHeight', heroMainTextHeight)
	// console.log('>>> heroLinksHeight', heroLinksHeight)
	// console.log('>>> totalHeroHeight', totalHeroHeight)
	// console.log('>>> smallestViewport', smallestViewport)
	// console.log('>>> ')
	// console.log('>>> viewportHeight', viewportHeight)
	// console.log('>>> heroImageTop', heroImageTop)
	// console.log('>>> ***** ***** ***** ***** *****\n\n\n')

	return (
		<main
			style={{ paddingTop: heroImageTop }}
			className='overflow-hidden w-screen flex flex-col items-center justify-start text-center h-screen px-8 pb-6'
		>
			{/** * HERO IMAGE SECTION */}
			<motion.section
				initial={{
					scale: 0.1,
					opacity: 0,
				}}
				animate={{
					scale: 1,
					opacity: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				id='heroImage'
				className='relative w-full flex flex-col items-center justify-center'
			>
				<BackgroundCircles ringTops={ringTops} ringSizes={ringSizes} />
				<div
					style={{ width: imageSize }}
					className='relative aspect-square border-2 border-neutral-600 rounded-full overflow-hidden'
				>
					<AdvancedImage cldImg={fullImage} plugins={[placeholder({ mode: 'blur' })]} />
				</div>
			</motion.section>
			{/** * HERO TEXT SECTION */}
			<motion.section
				initial={{
					y: 900,
				}}
				animate={{
					y: 0,
				}}
				transition={{
					duration: 2,
					delay: 0.5,
					ease: easeOut,
				}}
				id='heroMainText'
				style={{ height: heroMainTextHeight, minHeight: heroMainTextHeight }}
				ref={heroTextRef}
				className='pb-0 xs:pb-4 xl:pt-6 xl:pb-12 z-20 flex flex-col items-center justify-center w-full'
			>
				<h1 className='mb-[8px] text-[1.55rem] sm:text-[1.65rem] md:text-[2rem] lg:text-[2.25rem] font-mono font-bold uppercase text-zinc-300 tracking-wide4'>
					Tom Stine
				</h1>
				<h2 className='mb-[16px] text-base sm:text-[1.15rem] md:text-[1.25rem] font-mono uppercase text-zinc-450 tracking-wide1 md:tracking-wide15'>
					Full Stack Developer
				</h2>
				<h3 className='text-[1.15rem] sm:text-[1.25rem] md:text-[1.3rem] lg:text-[1.5rem] tracking-wide0 xs:tracking-wide1 font-mono sm:font-mono text-zinc-350'>
					<Typewriter
						words={typeWriterWords}
						loop={false}
						cursor
						cursorStyle='_'
						cursorBlinking={true}
						typeSpeed={120}
						deleteSpeed={35}
						delaySpeed={1500}
					/>
				</h3>
			</motion.section>
			{/** * HERO LINKS SECTION */}
			<motion.section
				initial={{
					y: 900,
				}}
				animate={{
					y: 0,
				}}
				transition={{
					duration: 1.5,
					delay: 1.5,
					ease: easeOut,
				}}
				id='heroLinks'
				style={{ height: heroLinksHeight, minHeight: heroLinksHeight }}
				ref={heroLinksRef}
				className='flex flex-col justify-between items-center text-xl text-zinc-450 tracking-wide2'
			>
				<div
					id='textLinks'
					className='flex flex-col xs:flex-row justify-center items-center gap-x-8 sm:gap-x-12 gap-y-3 sm:gap-y-2'
				>
					<Link href='/portfolio' className='hover:text-zinc-300 hover:underline'>
						portfolio
					</Link>
					<Link href='/about' className='hover:text-zinc-300 hover:underline'>
						about
					</Link>
					<Link href='/experience' className='hover:text-zinc-300 hover:underline'>
						experience
					</Link>
				</div>
				<div id='iconLinks' className='flex justify-center gap-x-14 text-[36px] tracking-wide2'>
					<Link
						href='https://www.linkedin.com/in/tom-stine-13-zebras/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Icon icon='mdi:linkedin' className='hover:text-zinc-300 pt-[2px]' />
					</Link>
					<Link href='https://github.com/13zebras' target='_blank' rel='noopener noreferrer'>
						<Icon icon='mdi:github' className='hover:text-zinc-300 pt-[2px]' />
					</Link>
					<Link href='/contact'>
						<Icon icon='mdi:envelope-outline' className='hover:text-zinc-300' />
					</Link>
				</div>
			</motion.section>
		</main>
	)
}
