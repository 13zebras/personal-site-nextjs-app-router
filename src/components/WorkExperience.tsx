// 'use client'

import type { WorkData } from '@/types/allTypes'

import WorkCard from './WorkCard'

interface WorkProps {
  allWork: WorkData[]
}

const WorkExperience: React.FC<WorkProps> = ({ allWork }) => {
  return (
    <main className='flex h-screen w-full flex-col items-center justify-start px-0 pb-8 pt-14 md:pt-24 lg:pt-[max(6rem,9vh)]'>
      <h1 className='z-10 animate-fade-in-075 font-mono text-[1.35rem] uppercase tracking-wide2 text-zinc-400 xs:text-2xl xs:tracking-wide4 sm:tracking-wide6'>
        experience
      </h1>
      <div className='flex h-fit w-full justify-center pb-14 pt-2 focus:outline-none sm:pt-10'>
        <div className='flex h-fit w-full flex-col items-center justify-start gap-y-4 px-4 xs:px-8 sm:px-10'>
          {allWork.map((work: WorkData, index: number) => {
            return <WorkCard key={`${work.employer}-${work.dates}`} {...work} index={index} />
          })}
        </div>
      </div>
    </main>
  )
}

export default WorkExperience
