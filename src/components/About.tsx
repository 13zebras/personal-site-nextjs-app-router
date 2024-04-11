'use client'

import { Cloudinary } from '@cloudinary/url-gen'
import { fill, scale } from '@cloudinary/url-gen/actions/resize'
import { quality } from '@cloudinary/url-gen/actions/delivery'
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity'
import { AdvancedImage, placeholder } from '@cloudinary/react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function About() {
	const [viewportWidth, setViewportWidth] = useState(0)

	useEffect(() => {
		const updateWidth = () => {
			const windowInnerWidth = window.innerWidth
			setViewportWidth(windowInnerWidth)
		}
		updateWidth()
		window.addEventListener('resize', updateWidth)
		return () => window.removeEventListener('resize', updateWidth)
	}, [])

	const publicIdTom = 'portfolio/tom-chill-center' // publicIdCld
	const cld = new Cloudinary({ cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY } })
	const fullImage = cld.image(publicIdTom)

	if (viewportWidth >= 768) {
		fullImage.resize(fill().height(300).width(250).gravity(autoGravity())).delivery(quality(80))
	} else {
		fullImage.resize(scale().width(300)).delivery(quality(80))
	}

	return (
		<main className='w-screen h-full flex flex-col justify-start items-center pt-14 md:pt-[max(5rem,12vh)] pb-10 overflow-y-auto'>
			<h1 className='animate-fade-in-075 pb-6 sm:pb-10 md:pb-12 uppercase text-zinc-400 font-mono text-[1.35rem] xs:text-2xl tracking-wide2 xs:tracking-wide4 sm:tracking-wide6 z-10'>about tom stine</h1>
			<div id='about' className='w-full h-full px-8 2xs:px-10 xs:px-12 flex flex-col justify-start items-center md:flex-row-reverse md:justify-center md:items-start overflow-x-hidden overflow-y-hidden gap-6 md:gap-8'>
				<motion.div
					initial={{
						scale: 0.6,
						x: 700,
						opacity: 0,
					}}
					animate={{
						scale: 1,
						x: 0,
						opacity: 1,
					}}
					transition={{
						duration: 2.5,
						delay: 0.5,
						ease: [0, 0.4, 0.6, 1.3],
					}}
					className='w-[65vw] max-w-[270px] xs:max-w-[280px] aspect-square md:aspect-auto	  md:max-w-[250px] md:w-[250px] border-2 border-neutral-600 rounded-full md:rounded-xl overflow-clip relative z-20'
				>
					<AdvancedImage cldImg={fullImage} plugins={[placeholder({ mode: 'blur' })]} className='w-[100%] h-[100%]' />
				</motion.div>

				<div className='max-w-[520px] w-full md:w-[60%] animate-fade-in-075 text-left text-base sm:text-base text-zinc-200'>
					<p className='pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<p className='pb-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<p className='pb-4'>Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. His an amet petentium voluptatibus, modo malis error nec no. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te.</p>
					<p className='pb-4'>Lacus vestibulum sed arcu non odio. Enim sed faucibus turpis in. Consequat id porta nibh venenatis cras. Orci ac auctor augue mauris augue neque gravida in. Turpis massa tincidunt dui ut ornare lectus sit. Scelerisque mauris pellentesque pulvinar pellentesque habitant.</p>
					<p className='pb-4'>Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Nisi porta lorem mollis aliquam. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus.</p>
				</div>
			</div>
		</main>
	)
}
