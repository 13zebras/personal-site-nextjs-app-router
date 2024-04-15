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
		<main id='mainHero' className='w-screen h-screen flex flex-col justify-start h700:justify-center items-center px-8 pb-[4vh] pt-9 h600:pt-[6vh] h700:pt-[4vh] text-center overflow-x-hidden overflow-y-auto h600:overflow-y-hidden'>
			{/** * HERO IMAGE SECTION */}
			<MovingDiv duration={1200} delay={200} classVar={'heroMovingDiv'}>
				<section className='relative w-full flex flex-col items-center justify-center aspect-square max-h-[320px]'>
					<BackgroundCircles />
					<div id='heroImage' className='w-ImageCircles relative border-2 border-neutral-600 rounded-full overflow-hidden aspect-square'>
						<AdvancedImage cldImg={fullImage} plugins={[placeholder({ mode: 'blur' })]} />
					</div>
				</section>
			</MovingDiv>

			{/** * HERO TEXT SECTION */}
			<section id='heroMainText' className='w-full flex flex-col justify-center items-center h800:pt-[2vh] mb-[5vh] font-mono'>
				<MovingDiv duration={1200} delay={700} classVar={'heroMovingDiv'}>
					<h1 className='mb-[calc(2vh-6px)] font-bold tracking-wide4 uppercase text-zinc-200 text-[28px] h700:xxs:text-[32px] h800:md:text-[40px]'>Tom Stine</h1>
					<h2 className='mb-[2.5vh] text-zinc-400 uppercase  tracking-wide0 xxs:tracking-wide1 h800:md:tracking-wide15 text-[18px] h700:xxs:text-[20px] h800:md:text-[22px]'>Full Stack Developer</h2>
					<h3 className='h-auto text-zinc-350 flex justify-center items-center tracking-wide0 h700:xxs:tracking-wide1 text-[16px] xxs:h700:text-[21px] h800:md:text-[24px]'>
						<Typewriter words={typeWriterWords} loop={false} cursor cursorStyle='_' cursorBlinking={true} typeSpeed={140} deleteSpeed={55} delaySpeed={1500} />
					</h3>
				</MovingDiv>
			</section>

			{/** * HERO LINKS SECTION */}
			<section id='heroLinks' className='flex flex-col justify-center items-center text-[18px] xxs:text-[20px] tracking-wide15'>
				<MovingDiv duration={1200} delay={1200} classVar={'heroMovingDiv'}>
					<div id='textLinks' className='mb-[3vh] flex flex-row justify-center items-center flex-wrap xs:flex-nowrap gap-x-16 xs:gap-x-14 gap-y-1'>
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
					<div id='iconLinks' className='flex justify-center gap-x-14'>
						<Link href='https://www.linkedin.com/in/tom-stine-13-zebras/' target='_blank' rel='noopener noreferrer' className='text-[36px] text-zinc-400 hover:text-zinc-300 active:text-sky-400 pt-[2px]'>
							<LinkedinIcon />
						</Link>
						<Link href='https://github.com/13zebras' target='_blank' rel='noopener noreferrer' className='text-[36px] text-zinc-400 hover:text-zinc-300 active:text-sky-400 pt-[2px]'>
							<GithubIcon />
						</Link>
						<Link href='/contact' className='text-[36px] text-zinc-400 hover:text-zinc-300 active:text-sky-400'>
							<EnvelopeIcon />
						</Link>
					</div>
				</MovingDiv>
			</section>
		</main>
	)
}
