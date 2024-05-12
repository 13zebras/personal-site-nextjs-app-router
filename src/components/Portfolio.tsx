'use client'

import FlipCard from './FlipCard'
import type { Project } from '@/types/allTypes'
// import Keyframe from './Keyframe'

interface ProjectProps {
  allProjects: Project[]
}

const Portfolio: React.FC<ProjectProps> = ({ allProjects }) => {
  return (
    <main className='flex h-screen w-full flex-col items-center justify-start overflow-hidden px-0 pt-14 md:pt-24 lg:pt-[max(6rem,9vh)]'>
      {/* <Keyframe
        name='movingDiv'
        animationProps={{ '0%': { opacity: 0, transform: 'translateY(150px)', scale: 0.7 }, '90%': { opacity: 1, scale: 1 }, '100%': { opacity: 1, transform: 'translateY(0)', scale: 1 }, }}
      /> */}
      <h1 className='animate-fade-in-075 pb-4 uppercase text-zinc-400 font-mono text-[1.35rem] xs:text-2xl tracking-wide2 xs:tracking-wide4 sm:tracking-wide6 z-10'>tom's portfolio</h1>
      <div className='w-full h-fit overflow-x-hidden overflow-y-auto pt-2 sm:pt-6 pb-14 flex justify-center'>
        <div className='w-full h-fit max-w-[1400px] flex justify-center items-start flex-wrap gap-6 z-20 px-4 xs:px-6 md:px-10'>
          {allProjects.map((project: Project, index) => (
            <FlipCard key={project.name} index={index} {...project} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Portfolio
