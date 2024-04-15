'use client'

// import BounceButton from './BounceButton'
import FlipCard from './FlipCard'
import type { Project } from '@/types/allTypes'

interface ProjectProps {
	allProjects: Project[]
}

const Portfolio: React.FC<ProjectProps> = ({ allProjects }) => {
	return (
		<main className='flex h-screen w-full flex-col items-center justify-start overflow-hidden px-0 pt-14 md:pt-24 lg:pt-[max(6rem,10vh)]'>
			<h1 className='animate-fade-in-075 pb-2 uppercase text-zinc-400 font-mono text-[1.35rem] xs:text-2xl tracking-wide2 xs:tracking-wide4 sm:tracking-wide6 z-10'>tom's portfolio</h1>
			<div className='w-full h-fit overflow-x-hidden overflow-y-auto pt-4 sm:pt-8 md:pt-10 pb-14 flex justify-center'>
				<div className='w-full h-fit max-w-[1320px] flex justify-center items-start flex-wrap gap-6 z-20 px-4 xsP:px-6 md:px-[min(40px,3.4%)]'>
					{allProjects.map((project: Project, index) => (
						<FlipCard key={project.name} index={index} {...project} />
					))}
				</div>
			</div>
		</main>
	)
}

export default Portfolio
