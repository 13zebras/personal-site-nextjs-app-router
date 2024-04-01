'use client'

import Link from 'next/link'
import { GithubIcon, ExternalLinkIcon } from '@/utils/svgs'
import FlipCardMotion from './FlipCardMotion'
import type { Project } from '@/types/allTypes'

interface ProjectProps {
	allProjects: Project[]
}

const Portfolio: React.FC<ProjectProps> = ({ allProjects }) => {
	// console.log('>>> allProjects', allProjects)

	const bounceButtonStyle = {
		animationName: 'bounceButton',
		animationDuration: '1000ms',
		animationFillMode: 'both',
		animationTimingFunction: 'cubic-bezier(0, 0, 0.5, 1)',
		animationDelay: '6.5s',
	}

	return (
		<main className='animate-fade-in-100 flex flex-col justify-start items-center px-0 p-main-s md:p-main-m overflow-x-hidden lg:overflow-x-visible max-w-7xl h-screen'>
			<h1 className='pb-6 sm:pb-12 md:pb-14 uppercase text-zinc-400 font-mono text-2xl tracking-wide2 xs:tracking-wide4 sm:tracking-wide6 z-10'>portfolio</h1>
			<div className='w-full flex justify-center flex-wrap gap-8 z-20 px-4 xs:px-6 md:px-12 lg:px-14'>
				{allProjects.map((project: Project, index) => (
					<FlipCardMotion key={project.name} index={index} {...project} />
				))}
			</div>
			<button style={bounceButtonStyle} type='button' className='mt-10 sm:mt-12 mb-4 sm:mb-0 py-[7px] w-[290px] buttonMain text-[1.1rem]'>
				<Link href='https://github.com/13zebras?tab=repositories' target='_blank' rel='noopener noreferrer'>
					<GithubIcon className='mr-2 text-2xl inline mb-[2px]' />
					My Github
					<ExternalLinkIcon className='ml-2 text-md inline mb-[2px] opacity-90' />
				</Link>
			</button>
		</main>
	)
}

export default Portfolio
