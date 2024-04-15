'use client'

import { Cloudinary } from '@cloudinary/url-gen'
import { fill, scale } from '@cloudinary/url-gen/actions/resize'
import { quality } from '@cloudinary/url-gen/actions/delivery'
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity'
import { AdvancedImage, placeholder } from '@cloudinary/react'
import { useEffect, useState } from 'react'
import MovingDiv from './MovingDiv'

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
		<main id='about' className='flex h-full w-screen flex-col items-center justify-start overflow-y-auto pb-12 pt-14 md:pt-24 lg:pt-[max(6rem,10vh)]'>
			<h1 className='animate-fade-in-075 pb-6 sm:pb-10 md:pb-12 uppercase text-zinc-400 font-mono text-[1.35rem] xs:text-2xl tracking-wide2 xs:tracking-wide4 sm:tracking-wide6 z-10'>about tom stine</h1>
			<div id='about' className='flex h-full w-full flex-col items-center justify-start gap-6 overflow-x-hidden overflow-y-hidden px-8 xxs:px-10 xs:px-12 md:flex-row-reverse md:items-start md:justify-center md:gap-8'>
				<MovingDiv duration={1200} delay={500} idVar={'about'}>
					<AdvancedImage cldImg={fullImage} plugins={[placeholder({ mode: 'blur' })]} className='relative z-20 aspect-square w-[65vw] max-w-[270px] overflow-clip rounded-full border-2 border-neutral-600 xs:max-w-[280px] md:aspect-auto md:w-[250px] md:max-w-[250px] md:rounded-xl' />
				</MovingDiv>
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
