'use client'

import FlipCard from './FlipCard'
import type { Project } from '@/types/allTypes'

interface ProjectProps {
  allProjects: Project[]
}

function createRandomArray(arrayLength: number): number[] {
  if (arrayLength < 3) return []
  let integerArray: number[] = Array.from({ length: arrayLength }, (_, i) => i + 1);

  for (let i = arrayLength - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [integerArray[i], integerArray[j]] = [integerArray[j]!, integerArray[i]!]
  }

  return integerArray;
}

const Portfolio: React.FC<ProjectProps> = ({ allProjects }) => {
  const allProjectsLength = allProjects.length
  const projectSequence = createRandomArray(allProjectsLength)

  return (
    <main className='flex h-screen w-full flex-col items-center justify-start overflow-hidden px-0 pt-14 md:pt-24 lg:pt-[max(6rem,9vh)]'>

      <h1 className='animate-fade-in-075 pb-4 uppercase text-zinc-400 font-mono text-[1.4rem] xs:text-2xl tracking-wide2 xs:tracking-wide4 sm:tracking-wide6 z-10'>tom's portfolio</h1>
      <div className='w-full h-fit overflow-x-hidden overflow-y-auto pt-2 xs:pt-4 sm:pt-6 pb-14 flex justify-center'>
        <div className='w-full h-fit max-w-[1250px] flex justify-center items-start flex-wrap gap-5 z-20 px-4 xs:px-6 md:px-8 lg:px-12'>
          {allProjects.map((project: Project, index) => (
            <FlipCard key={project.name} index={index} sequence={projectSequence[index]} {...project} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Portfolio
