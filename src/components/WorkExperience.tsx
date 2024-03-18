'use client'

import WorkCard from "./WorkCard";
import { getAllWork } from "@/utils/work";
import { motion } from "framer-motion"

export type WorkData = {
  title: string,
  employer: string,
  dates: string,
  stack: string,
  summary1: string,
  summary2: string,
  summary3: string,
  index?: number
};

export default function WorkExperience() {
  const allWork: WorkData[] = getAllWork();

  return (

    <motion.main
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center items-center px-0 gap-x-12 pt-16 md:pt-28 pb-20">

      <h1 className="pb-16 uppercase text-zinc-400 font-mono text-2xl tracking-wide6">experience</h1>

      <div className="w-full max-w-5xl flex flex-wrap justify-center gap-10 px-4 xs:px-6 md:px-8">
        {allWork.map((work: WorkData, index: number) => {
          return (
            <WorkCard
              key={`${work.employer}-${work.dates}`}
              {...work}
              index={index}
            />
          );
        })}
      </div>
    </motion.main>
  );
}
