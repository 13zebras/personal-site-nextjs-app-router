'use client'

import WorkCard from "./WorkCard"
import EducationCard from "./EducationCard";
// import { getAllWork } from "@/utils/work";
import { motion } from "framer-motion"
import { WorkData } from "@/types/allTypes";

interface WorkProps {
  allWork: WorkData[];
}

const WorkExperience: React.FC<WorkProps> = ({ allWork }) => {
  // console.log('>>> allWork', allWork)

  return (
    <motion.main
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center items-center px-0 p-main-s md:p-main-m"
    >

      <h1 className="pb-6 sm:pb-12 md:pb-14 uppercase text-zinc-400 font-mono text-2xl tracking-wide2 xs:tracking-wide4 sm:tracking-wide6 z-10">experience</h1>

      <div className="w-full max-w-5xl flex flex-wrap justify-center gap-6 px-4 xs:px-6 md:px-8">
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
      {/* <EducationCard /> */}
    </motion.main>
  );
}

export default WorkExperience