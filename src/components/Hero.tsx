'use client'

import '@/styles/hero.css'
import MovingDiv from './MovingDiv'
import { AdvancedImage, placeholder } from '@cloudinary/react'

import { LinkedinIcon, GithubIcon, EnvelopeIcon } from '@/utils/svgs'
import { Cloudinary } from '@cloudinary/url-gen'

import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

export default function Hero() {
	const typeWriterWords = ['<React, Next.js />', '{TypeScript, Node.js}', 'style: exceptional;']

	const publicIdTom = 'portfolio/tom-chill-center'
	const cld = new Cloudinary({ cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY } })
	const fullImage = cld.image(publicIdTom)

	return (
		<main id='mainHero'>
			{/** * HERO IMAGE SECTION */}
			<section className='animate-fade-in-scale-350 relative w-full flex flex-col items-center justify-center aspect-square max-h-[320px]'>
				<BackgroundCircles />
				<div id='heroImage' className='border-neutral-600'>
					<AdvancedImage cldImg={fullImage} plugins={[placeholder({ mode: 'blur' })]} />
				</div>
			</section>

			{/** * HERO TEXT SECTION */}
			<section id='heroMainText'>
				<MovingDiv duration={2000} delay={500}>
					<h1 className='text-zinc-300'>Tom Stine</h1>
					<h2 className='text-zinc-450'>Full Stack Developer</h2>
					<h3 className='text-zinc-350'>
						<Typewriter words={typeWriterWords} loop={false} cursor cursorStyle='_' cursorBlinking={true} typeSpeed={120} deleteSpeed={35} delaySpeed={1500} />
					</h3>
				</MovingDiv>
			</section>

			{/** * HERO LINKS SECTION */}
			<section id='heroLinks'>
				<MovingDiv duration={1500} delay={1800}>
					<div id='textLinks' className='mb-[3vh] xs:flex-nowrap xs:gap-x-14 '>
						<Link href='/portfolio' className='textLink'>
							portfolio
						</Link>
						<Link href='/about' className='textLink'>
							about
						</Link>
						<Link href='/experience' className='textLink'>
							experience
						</Link>
					</div>
					<div id='iconLinks' className='flex justify-center gap-x-14'>
						<Link href='https://www.linkedin.com/in/tom-stine-13-zebras/' target='_blank' rel='noopener noreferrer' className='iconLink pt-[2px]'>
							<LinkedinIcon />
						</Link>
						<Link href='https://github.com/13zebras' target='_blank' rel='noopener noreferrer' className='iconLink pt-[2px]'>
							<GithubIcon />
						</Link>
						<Link href='/contact' className='iconLink'>
							<EnvelopeIcon />
						</Link>
					</div>
				</MovingDiv>
			</section>
		</main>
	)
}
