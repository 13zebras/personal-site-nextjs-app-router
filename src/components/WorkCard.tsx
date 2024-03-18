'use client'

import { WorkData } from "./WorkExperience";
import { motion } from "framer-motion"

export default function WorkCard({ index, ...props }: WorkData) {

  if (index === undefined) return
  let xSign = 1
  if (index % 2 === 0) {
    xSign = -1
  }
  const iX = Math.trunc(xSign * 1000)

  return (
    <motion.div
      initial={{ x: iX }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="w-workCard-500 lg:w-workCard-400 p-8 rounded-xl flex flex-col justify-start items-start flex-shrink-0 text-gray-200 bg-slate-850 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-400 overflow-hidden">

      <h4 className="text-xl font-bold">{props.title}</h4>
      <p className="text-lg font-bold mt-1">{props.employer}</p>
      <p className="text-base uppercase py-2 text-gray-300">{props.dates}</p>
      <ul className="list-disc space-y-2 ml-5 text-base w-[90%]">
        <li>{props.stack}</li>
        <li>{props.summary1}</li>
        <li>{props.summary2}</li>
        <li>{props.summary3}</li>
      </ul>
    </motion.div>
  );
}

