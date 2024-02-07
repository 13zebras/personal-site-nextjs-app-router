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

  return (

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col justify-start lg:justify-center items-center w-full"
    >

      <div className="w-full flex flex-wrap justify-center gap-10">
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
  );
}
