// 'use client'

import WorkCard from './WorkCard'
import type { WorkData } from '@/types/allTypes'

interface WorkProps {
  allWork: WorkData[]
}

const WorkExperience: React.FC<WorkProps> = ({ allWork }) => {
  return (
    <main className='w-full h-screen flex flex-col justify-start items-center px-0 pt-14 md:pt-24 lg:pt-[max(6rem,9vh)] pb-12'>
      <h1 className='animate-fade-in-075 pb-4 uppercase text-zinc-400 font-mono text-[1.35rem] xs:text-2xl tracking-wide2 xs:tracking-wide4 sm:tracking-wide6 z-10'>experience</h1>
      <div className='w-full h-fit overflow-x-hidden overflow-y-auto pt-2 sm:pt-6 pb-14 flex justify-center'>
        <div className='w-full h-fit flex flex-col justify-start items-center gap-y-4 px-4 xs:px-8 sm:px-10'>
          {allWork.map((work: WorkData, index: number) => {
            return <WorkCard key={`${work.employer}-${work.dates}`} {...work} index={index} />
          })}
        </div>
      </div>
    </main>
  )
}

export default WorkExperience
