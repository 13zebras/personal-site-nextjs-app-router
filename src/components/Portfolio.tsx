'use client'

import FlipCard from "./FlipCard";
import { getAllProjects } from "@/utils/projects";
// import Image from "next/image";
import { motion } from "framer-motion"

export interface IProject {
  name: string,
  url: string,
  summary: string,
  thumbnail: string,
  cldPublicId: string,
  description: string,
  stack: string,
}

export default function Portfolio() {
  const projects: IProject[] = getAllProjects()

  return (
    // <section id="portfolio" className="flex items-center h-[100vh] w-full md:px-9 relative">
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
          {projects.map((project: IProject) => (
            <FlipCard key={project.name} {...project} />
          ))}
        </div>
      </motion.div>
    </>
    // </section>
  );
}

{
  /* <div className="w-full max-w-7xl">
  <div className="w-full flex justify-center space-x-10 overflow-x-auto pt-[clamp(24px,7vh,100px)] pb-6 snap-x snap-mandatory ">
    <p className="text-2xl mt-14 italic font-mono text-zinc-500">Cool Stuff Here</p>
  </div>
</div>; */
}

// pt-[clamp(86px,14vh,185px)]


// <div
//   key={project}
//   className="w-48 h-60 bg-neutral-950/50 border border-stone-600 rounded-md p-4 flex flex-col items-center justify-center space-y-5">
//   <div className="w-full h-full relative">
//     <Image
//       src={`https://placehold.co/300x300/${colors[i]}/FFDDCC/png?text=${project}`}
//       // width={300}
//       // height={300}
//       fill
//       alt="placeholder image"
//       style={{ objectFit: "contain" }}
//     // className="rounded-full"
//     />
//   </div>
//   <div className="space-y-10 px-0">
//     <h4 className="text-md font-semibold text-center px-2">
//       {i + 1} of {projects.length}
//     </h4>
//   </div>
// </div>