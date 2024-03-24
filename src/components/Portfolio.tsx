'use client'

import FlipCard from "@/components/FlipCard";
import { motion } from "framer-motion"
import Link from "next/link";
import { Icon } from '@iconify/react';
// import { MdiGithub } from "@/utils/icons";
import { Project } from "@/types/allTypes";

interface ProjectProps {
  allProjects: Project[];
}

const Portfolio: React.FC<ProjectProps> = ({ allProjects }) => {
  // console.log('>>> allProjects', allProjects)

  return (
    <main className="animate-fade-in-10 flex flex-col justify-center items-center px-0 p-main-s md:p-main-m overflow-x-hidden">
      <h1 className="pb-6 sm:pb-12 md:pb-14 uppercase text-zinc-400 font-mono text-2xl tracking-wide2 xs:tracking-wide4 sm:tracking-wide6 z-10">portfolio</h1>
      <div className="w-full flex justify-center flex-wrap gap-8 z-20 px-4 xs:px-6 md:px-10">
        {allProjects.map((project: Project, index) => (
          <FlipCard key={project.name} index={index} {...project} />
        ))}
      </div>
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 5.5, type: "spring", stiffness: 100 }}
      >
        <Link href="https://github.com/13zebras?tab=repositories" className="mt-10 mb-6 sm:mb-0 sm:mt-16 py-[4px] w-[150px] buttonMain" >
          <Icon icon="mdi:github" className="mr-0 text-xl inline" />
          Github
        </Link>
      </motion.div>
    </main>
  )
}

export default Portfolio

{/* <Link href = "https://github.com/13zebras?tab=repositories" className = "mt-10 mb-6 sm:mb-0 sm:mt-16 py-[5px] w-[150px] flex justify-center items-center gap-x-2 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-800 text-zinc-300 hover:text-zinc-200 active:text-zinc-100 text-sm rounded-2xl border border-zinc-600 hover:border-zinc-500 active:border-sky-500" >
<Icon icon="mdi:github" className="mr-0 text-xl inline" />
Github
</Link> */}