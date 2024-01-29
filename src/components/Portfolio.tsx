'use client'

import FlipCard from "./FlipCard";
import { Project } from '@/types/projects-types';
import { ReactNode } from "react";
// import { ProjectsContext } from '@/state/ProjectsContext';
// import { getAllProjects } from "@/utils/projects";
import { motion } from "framer-motion";
import { useContext } from 'react';

// export type Project = {
//   name: string,
//   url: string,
//   summary: string,
//   cldPublicId: string,
//   description: string,
//   stack: string,
// }

type Props = {
  projects: Project[]
}
export default function Portfolio({ projects }: Props) {
  // const projects: Project[] = useContext(ProjectsContext)
  console.log('>>> props in portfolio', projects)
  // const projects: Project[] = getAllProjects()
  // const allProjects = [...props]
  console.log('>>> props is Array', Array.isArray(projects))
  return (
    <>
      <div className="w-full absolute top-[calc(50vh-calc(min(500px,40vh)/2))] bg-[hsla(260,100%,50%,0.15)] left-0 h-[min(500px,40vh)] -skew-y-12 z-0" />
      <motion.div
        initial={{
          // y: 100,
          // rotateX: -90,
          scale: 0.5,
          opacity: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        whileInView={{
          // y: 0,
          // rotateX: 0,
          scale: 1,
          opacity: 1,
        }}
        className="flex flex-col justify-center mx-auto items-center w-full px-0 gap-x-12"
      >

        <h3 className="pb-16 uppercase text-zinc-500 font-mono text-2xl tracking-widexl z-30">portfolio & projects</h3>
        <div className=" w-[90%] flex justify-center flex-wrap gap-10 z-30">
          {projects.map((project: Project) => (
            <FlipCard key={project.name} {...project} />
          ))}
        </div>
      </motion.div>
    </>

  );
}
