'use client'

// import BounceButton from './BounceButton'
import FlipCardMotion from './FlipCardMotion'
import type { Project } from '@/types/allTypes'

interface ProjectProps {
	allProjects: Project[]
}

const Portfolio: React.FC<ProjectProps> = ({ allProjects }) => {
	return (
		<main className='animate-fade-in-100 flex flex-col justify-start items-center px-0 p-main-s md:p-main-l overflow-x-hidden lg:overflow-x-visible max-w-7xl h-full'>
			<h1 className='pb-6 sm:pb-10 md:pb-12 uppercase text-zinc-400 font-mono text-[1.35rem] xs:text-2xl tracking-wide2 xs:tracking-wide4 sm:tracking-wide6 z-10'>tom's portfolio</h1>
			<div className='w-full flex justify-center flex-wrap gap-8 z-20 px-4 xs:px-6 md:px-12 lg:px-14'>
				{allProjects.map((project: Project, index) => (
					<FlipCardMotion key={project.name} index={index} {...project} />
				))}
			</div>
		</main>
	)
}

export default Portfolio
