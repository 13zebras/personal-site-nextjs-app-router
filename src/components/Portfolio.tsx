'use client'

import FlipCard from "./FlipCard";
import Link from "next/link";
import { Project } from '@/types/projects-types';
import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  projects: Project[]
}
export default function Portfolio({ projects }: Props) {
  // console.log('>>> props in portfolio', projects)
  // console.log('>>> props is Array', Array.isArray(projects))
  const handleOnClick = () => {
    console.log('>>>> projects button clicked')
  }
  return (
    <>
      <div className="w-screen absolute top-[calc(50vh-calc(min(500px,40vh)/2))] bg-[hsla(260,100%,50%,0.15)] left-0 h-[min(500px,40vh)] -skew-y-[8deg] z-0" />
      <motion.div
        initial={{
          // y: 100,
          // rotateX: -90,
          scale: 0.9,
          opacity: 0.5,
        }}
        transition={{
          duration: 1.0,
        }}
        whileInView={{
          // y: 0,
          // rotateX: 0,
          scale: 1,
          opacity: 1,
        }}
        className="allMaxWidth flex flex-col justify-center mx-auto items-center w-full px-0 gap-x-12"
      >

        <h3 className="pb-16 uppercase text-zinc-500 font-mono text-2xl tracking-widexl z-30">portfolio & projects</h3>
        <div className=" w-[90%] flex justify-center flex-wrap gap-10 z-30">
          {projects.map((project: Project) => (
            <FlipCard key={project.name} {...project} />
          ))}
        </div>
        <Link href="/allprojects" className="mt-16 w-[320px] h-12 bg-slate-900 text-xl text-slate-100 rounded-2xl border-2 border-slate-600 hover:bg-slate-800 active:bg-slate-700 flex justify-center items-center">See All Projects...</Link>
      </motion.div>
    </>

  );
}
