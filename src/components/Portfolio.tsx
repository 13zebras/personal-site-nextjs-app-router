'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import FlipCard from '@/components/FlipCard'
import type { Project } from '@/types/allTypes'

interface ProjectProps {
  allProjects: Project[]
}

const Portfolio: React.FC<ProjectProps> = ({ allProjects }) => {
  // console.log('>>> allProjects', allProjects)

  return (
    <main className="animate-fade-in-10 flex flex-col justify-center items-center px-0 p-main-s md:p-main-m overflow-x-hidden">
      <h1 className="pb-6 sm:pb-12 md:pb-14 uppercase text-zinc-400 font-mono text-2xl tracking-wide2 xs:tracking-wide4 sm:tracking-wide6 z-10">portfolio</h1>
      <div className="w-full flex justify-center flex-wrap gap-8 z-20 px-4 xs:px-6 md:px-12 lg:px-14">
        {allProjects.map((project: Project, index) => (
          <FlipCard key={project.name} index={index} {...project} />
        ))}
      </div>
      <motion.button
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ delay: 4, type: 'spring', stiffness: 100 }}
        className="mt-10 sm:mt-12 mb-4 sm:mb-0 py-[5px] w-[220px] buttonMain text-base"
      >
        <Link href="https://github.com/13zebras?tab=repositories">
          <Icon icon="mdi:github" className="mr-2 text-xl inline mb-[2px]" />
          Github
          <Icon icon="heroicons-outline:external-link" className="ml-1 text-sm inline mb-[2px] opacity-70" />
        </Link>
      </motion.button>
    </main>
  )
}

export default Portfolio
