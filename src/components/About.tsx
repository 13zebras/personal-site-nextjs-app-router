'use client'

import { Cloudinary } from '@cloudinary/url-gen'
import { fill, scale } from '@cloudinary/url-gen/actions/resize'
import { quality } from '@cloudinary/url-gen/actions/delivery'
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity'
import { AdvancedImage, placeholder } from '@cloudinary/react'
// import { useEffect, useState } from 'react'
import MovingDiv from './MovingDiv'

export default function About() {
	const publicIdTom = 'portfolio/tom-chill-center' // publicIdCld
	const cld = new Cloudinary({ cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY } })
	const fullImage = cld.image(publicIdTom)
	fullImage.resize(scale().width(300)).delivery(quality(80))

	const mdDuration = 1000
	const mdDelay = 500

	return (
		<main id='about' className='flex h-full w-screen flex-col items-center justify-start overflow-y-auto pb-12 pt-14 md:pt-24 lg:pt-[max(6rem,9vh)]'>
			<h1 className='animate-fade-in-075 pb-6 sm:pb-10 md:pb-12 uppercase text-zinc-400 font-mono text-[1.35rem] xs:text-2xl tracking-wide2 xs:tracking-wide4 sm:tracking-wide6 z-10'>about tom stine</h1>
			<div id='about' className='flex h-full w-full flex-col items-center justify-start gap-6 md:flex-wrap lg:max-w-[920px] overflow-x-hidden overflow-y-hidden px-8 xxs:px-10 xs:px-12 lg:px-0'>
				<div className='lg:order-2'>
					<MovingDiv duration={mdDuration} delay={1 * mdDelay}>
						<AdvancedImage cldImg={fullImage} plugins={[placeholder({ mode: 'blur' })]} className='relative z-20 overflow-clip rounded-full border-2 border-neutral-600 max-w-[260px] xs:max-w-[280px] sm:max-w-[300px] lg:rounded-xl' />
					</MovingDiv>
				</div>
				<div className='lg:basis-full lg:order-1 max-w-[550px] w-full text-left text-base text-zinc-300'>
					<MovingDiv classname='pb-4' duration={mdDuration} delay={1 * mdDelay}>
						As a full-stack web developer specializing in React, Next.js, TypeScript, and Node.js, I bring a diverse range of experiences to the table. While I had dabbled in web development since the late 1990s, it wasn't until 2021, after leaving my teaching career, that I decided to pursue coding full-time. I kicked
						off 2022 by joining a small web3 development studio, where I built frontends for various NFT projects. When the NFT market took a downturn later that year, I transitioned to Bass Pro Shops as a full-stack developer, where I am currently working on a React/Next.js-based frontend for the existing eCommerce
						website.
					</MovingDiv>
					<MovingDiv classname='pb-4' duration={mdDuration} delay={2 * mdDelay}>
						Beyond web development, I have extensive experience teaching a wide variety of subjects to learners of all ages. Teaching has always been a passion of mine, and I firmly believe in the possibility of helping everyone to learn. Effective teaching, contrary to popular belief, is less about the teacher
						thoroughly knowing their subject matter. Instead, it is far more about understanding each student's needs and helping him or her take the next step towards acquiring the knowledge or understanding they require.
					</MovingDiv>
					<MovingDiv classname='pb-4' duration={mdDuration} delay={3 * mdDelay}>
						In addition to teaching and coding, I spent two decades trading various financial assets, including precious metals, bonds, futures, and forex, for my personal accounts. This experience provided me with a deep understanding of central banking and financial markets, fueling my interest in cryptocurrencies
						and decentralized finance (DeFi).
					</MovingDiv>
					<MovingDiv classname='pb-4' duration={mdDuration} delay={4 * mdDelay}>
						I have an insatiable thirst for learning, with a particular fascination for technology, history, politics, international affairs, psychology, and geography. Maps have always held a special appeal for me, leading my daughter to joke that I seem to have "a map in my head" due to the countless hours spent
						studying them as a child.
					</MovingDiv>
					<MovingDiv classname='pb-4' duration={mdDuration} delay={5 * mdDelay}>
						Needless to say, I have been a true lifelong learner, eager to tackle any subject that comes my way.
					</MovingDiv>
					<MovingDiv classname='pb-0' duration={mdDuration} delay={6 * mdDelay}>
						Finally, it's worth mentioning that I grew up on a dairy farm in rural Missouri, coming from a long line of farmers. While I can fix almost anything with a hammer, duct tape, WD-40, and wire or twine, milking cows never appealed to me. Instead, I pursued more intellectually stimulating and challenging
						endeavors. My varied background has imbued me with a cosmopolitan and global perspective, one that values and appreciates the inherent worth of all people, regardless of their country, background, orientation, age, or any other factor that contributes to the rich diversity of humanity.
					</MovingDiv>
				</div>
				<div className='lg:order-3 w-full max-w-[550px] lg:max-w-[290px] mt-1'>
					<MovingDiv duration={mdDuration} delay={2 * mdDelay}>
						<h3 className='text-zinc-400 font-bold text-lg tracking-wide1 pb-4'>Blog Posts & Essays:</h3>
						<div className='flex flex-col justify-start items-start gap-y-3 px-8 lg:px-0 text-base leading-snug lg:leading-tight lg:text-[0.96rem] text-sky-350'>
							<a className='block hover:underline hover:text-sky-300 active:text-sky-200' href='https://blog.13z.dev/mastering-the-ternary-operator-lessons-from-a-job-interview' target='_blank' rel='noreferrer'>
								Mastering the Ternary Operator: Lessons from a Job Interview
							</a>

							<a className='block hover:underline hover:text-sky-300 active:text-sky-200' href='https://13zebras.medium.com/web3-foundations-must-create-true-educational-programs-courses-in-order-to-train-the-next-80-000-33c36331ddd5' target='_blank' rel='noreferrer'>
								Web3 Ecosystems Need Real Educational Courses and Programs in Order to Thrive and Flourish
							</a>

							<a className='block hover:underline hover:text-sky-300 active:text-sky-200' href='https://13zebras.medium.com/the-money-ization-of-cryptocurrencies-7293f2914455' target='_blank' rel='noreferrer'>
								The "Money-ization" of Cryptocurrencies
							</a>
						</div>
					</MovingDiv>
				</div>
			</div>
		</main>
	)
}
