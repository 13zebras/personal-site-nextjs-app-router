'use client'

import WorkDisplay from "./WorkDisplay";
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
};

export default function WorkExperience() {
  const allWork: WorkData[] = getAllWork();
  // let allWork = []
  // allWork.push(
  //   {
  //     title: "Frontend Dev",
  //     employer: "Lucky Dog Studios",
  //     dates: "April 2022 - Present",
  //     stack: "React, Redux, Chakra-UI, Tailwind, Solana",
  //     summary1: "summary line 1",
  //     summary2: "summary line 2",
  //   }
  // )
  return (
    // <section id="workExperience" className="flex items-center h-full w-full md:px-9 mt-20">

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col justify-start lg:justify-center items-center w-full max-w-7xl"
    >
      <h3 className="pb-10 uppercase text-zinc-500 font-mono text-xl sm:text-2xl tracking-widexl">experience</h3>

      <div className="w-full flex flex-wrap justify-center gap-10 max-w-7xl">
        {allWork.map((work: WorkData) => {
          return (
            <WorkDisplay
              key={`${work.employer}-${work.dates}`}
              {...work}
            />
          );
        })}
      </div>
    </motion.div>
    // </section>
  );
}
