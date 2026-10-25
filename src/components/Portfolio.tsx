import { useEffect, useState } from 'react'

import type { Project } from '@/types/allTypes'

import FlipCard from './FlipCard'

interface ProjectProps {
  allProjects: Project[]
}

function createRandomArray(arrayLength: number): number[] {
  const integerArray: number[] = Array.from({ length: arrayLength }, (_, i) => i + 1)

  for (let i = arrayLength - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp: number = integerArray[i] ?? 0
    integerArray[i] = integerArray[j] ?? 0
    integerArray[j] = temp
  }

  return integerArray
}

const Portfolio: React.FC<ProjectProps> = ({ allProjects }) => {
  // Each card's animation delay in ms, or null until the page runs in the browser. The cards stay paused (hidden)
  // until then, because a random order computed while prerendering would not match the one the browser computes.
  const [delays, setDelays] = useState<number[] | null>(null)
  const projectCount = allProjects.length

  useEffect(() => {
    // Start the reveal on the next frame, once the page has hydrated.
    // Wide screens reveal the cards in a random order; narrow (single-column) screens go top to bottom.
    const frame = requestAnimationFrame(() => {
      const order =
        window.innerWidth >= 884 ? createRandomArray(projectCount) : Array.from({ length: projectCount }, (_, i) => i)
      setDelays(order.map((position) => position * 250))
    })
    return () => cancelAnimationFrame(frame)
  }, [projectCount])

  return (
    <main className='flex h-screen w-full flex-col items-center justify-start overflow-hidden px-0 pt-14 md:pt-24 lg:pt-[max(6rem,9vh)]'>
      <h1 className='z-10 animate-fade-in-075 pb-4 font-mono text-[1.4rem] tracking-wide2 text-zinc-400 uppercase xs:text-2xl xs:tracking-wide4 sm:tracking-wide6'>
        tom's portfolio
      </h1>
      <div className='flex h-fit w-full justify-center overflow-x-hidden overflow-y-auto pt-2 pb-14 xs:pt-4 sm:pt-10'>
        <div className='z-20 flex h-fit w-full max-w-7xl flex-wrap items-start justify-center gap-5 px-4 xs:px-6 md:px-8 lg:px-12'>
          {allProjects.map((project: Project, index) => (
            <FlipCard key={project.name} index={index} animationDelay={delays?.[index]} {...project} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Portfolio
