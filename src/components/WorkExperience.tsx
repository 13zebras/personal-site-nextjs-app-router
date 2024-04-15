// 'use client'

import WorkCard from './WorkCard'
import type { WorkData } from '@/types/allTypes'

interface WorkProps {
	allWork: WorkData[]
}

const WorkExperience: React.FC<WorkProps> = ({ allWork }) => {
	return (
		<main className='animate-fade-in-100 flex flex-col justify-center items-center px-0 pt-14 md:pt-24 lg:pt-[max(6rem,10vh)] pb-12'>
			<h1 className='pb-6 sm:pb-10 md:pb-12 uppercase text-zinc-400 font-mono text-[1.35rem] xs:text-2xl tracking-wide2 xs:tracking-wide4 sm:tracking-wide6 z-10'>experience</h1>

			<div className='w-full flex flex-wrap justify-center gap-4 px-4 xxs:px-6 xs:px-8 sm:px-10'>
				{allWork.map((work: WorkData, index: number) => {
					return <WorkCard key={`${work.employer}-${work.dates}`} {...work} index={index} />
				})}
			</div>
		</main>
	)
}

export default WorkExperience
