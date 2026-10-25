import type { WorkData } from '@/types/allTypes'

import WorkCard from './WorkCard'

interface WorkProps {
  allWork: WorkData[]
}

const WorkExperience: React.FC<WorkProps> = ({ allWork }) => {
  return (
    <main className='flex h-screen w-full flex-col items-center justify-start px-0 pt-14 pb-8 md:pt-24 lg:pt-[max(6rem,9vh)]'>
      <h1 className='z-10 animate-fade-in-075 font-mono text-[1.35rem] tracking-wide2 text-zinc-400 uppercase xs:text-2xl xs:tracking-wide4 sm:tracking-wide6'>
        experience
      </h1>
      <div className='flex h-fit w-full justify-center pt-2 pb-14 focus:outline-hidden sm:pt-10'>
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
