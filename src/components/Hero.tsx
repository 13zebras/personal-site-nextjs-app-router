'use client'

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
		<main id='mainHero' className='w-screen h-screen flex flex-col justify-start h600:justify-center items-center px-8 pb-[4vh] pt-[max(50px,10vh)] h600:py-[4vh] h800:py-0 text-center overflow-x-hidden overflow-y-auto h600:overflow-y-hidden'>
			{/** * HERO IMAGE SECTION */}
			<MovingDiv duration={800} delay={200} classname={'heroMovingDiv'}>
				<section className='relative w-full flex flex-col items-center justify-center aspect-square max-h-[320px]'>
					<div className='animate-fade-in-200 relative flex justify-center'>
						<BackgroundCircles />
					</div>
					<div id='heroImage' className='relative border-2 border-neutral-600 rounded-full overflow-hidden aspect-square w-imageCircles max-w-imageCircles'>
						<AdvancedImage cldImg={fullImage} plugins={[placeholder({ mode: 'blur' })]} />
					</div>
				</section>
			</MovingDiv>

			{/** * HERO TEXT SECTION */}
			<section id='heroMainText' className='w-full flex flex-col justify-center items-center pt-2 h600:pt-3 h700:pt-4 mb-[3.5vh] h600:mb-[min(5vh,40px)] font-mono'>
				<MovingDiv duration={800} delay={600} classname={'heroMovingDiv'}>
					<h1 className='mb-[calc(2vh-6px)] font-bold tracking-wide4 uppercase text-zinc-200 text-[26px] h700:xxs:text-[32px] h800:md:text-[40px]'>Tom Stine</h1>
					<h2 className='mb-[min(2.5vh,20px)] text-zinc-400 uppercase tracking-wide0 h700:xxs:tracking-wide1 h800:md:tracking-wide15 text-[17px] h700:xxs:text-[20px] h800:md:text-[22px]'>Frontend Developer</h2>
					<h3 className='h-auto text-zinc-350 flex justify-center items-center tracking-wide0 h700:xxs:tracking-wide1 text-[16px] xxs:h700:text-[21px] h800:md:text-[24px]'>
						<Typewriter words={typeWriterWords} loop={false} cursor cursorStyle='_' cursorBlinking={true} typeSpeed={140} deleteSpeed={55} delaySpeed={1500} />
					</h3>
				</MovingDiv>
			</section>

			{/** * HERO LINKS SECTION */}
			<section id='heroLinks' className='flex flex-col justify-center items-center'>
				<MovingDiv duration={800} delay={1000} classname={'heroMovingDiv'}>
					<div id='textLinks' className='mb-6 h800:mb-6 flex flex-row justify-center items-center flex-wrap xs:flex-nowrap gap-x-14 gap-y-[12px] px-3 text-[19px] sm:text-[20px] tracking-wide15'>
						<Link href='/portfolio' className='text-zinc-400 hover:text-zinc-300 hover:underline active:text-sky-400'>
							portfolio
						</Link>
						<Link href='/about' className='text-zinc-400 hover:text-zinc-300 hover:underline active:text-sky-400'>
							about
						</Link>
						<Link href='/experience' className='text-zinc-400 hover:text-zinc-300 hover:underline active:text-sky-400'>
							experience
						</Link>
					</div>
					<div id='iconLinks' className='flex justify-center gap-x-14 text-[36px] text-zinc-400'>
						<Link href='/contact' className='hover:text-zinc-300 active:text-sky-400'>
							<EnvelopeIcon />
						</Link>
						<Link href='https://www.linkedin.com/in/tom-stine-13-zebras/' target='_blank' rel='noopener noreferrer' className='text-[36px] text-zinc-400 hover:text-zinc-300 active:text-sky-400'>
							<LinkedinIcon />
						</Link>
						<Link href='https://github.com/13zebras' target='_blank' rel='noopener noreferrer' className='hover:text-zinc-300 active:text-sky-400'>
							<GithubIcon />
						</Link>
					</div>
				</MovingDiv>
			</section>
		</main>
	)
}
