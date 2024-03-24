'use client'

import { WorkData } from "@/types/allTypes";
import { motion } from "framer-motion"

export default function WorkCard({ index, ...props }: WorkData) {

  if (index === undefined) return
  let xSign = 1
  if (index % 2 === 0) {
    xSign = -1
  }
  const iX = Math.trunc(xSign * 1000)
  const delayFactor = Math.trunc(index / 2)
  // console.log('>>> index, iX, delayFactor', index, iX, delayFactor)

  return (
    <motion.div
      initial={{ x: iX }}
      animate={{ x: 0 }}
      transition={{ duration: 1.3, delay: 0.5 * delayFactor }}
      className="w-workCard-500 md:w-workCard-400 px-8 py-6 rounded-xl flex flex-col justify-start items-start flex-shrink-0 text-gray-300 bg-gray-850 cursor-pointer overflow-hidden">

      <h2 className="text-[1.05rem] font-bold">{props.employer}</h2>
      <div className="w-full flex flex-row justify-between items-center text-md mt-1 mb-3">
        <div className="font-semibold">{props.title}</div>
        <div className="text-gray-300 font-medium italic text-sm">{props.dates}</div>
      </div>
      <ul className="list-none list-outside space-y-2 text-sm">
        <li>{props.summary1}</li>
        <li>{props.summary2}</li>
        <li><span className="mr-2">{props.detailsType}:</span>{props.details}</li>
      </ul>
      {/* <p className="text-sm mt-3"><span className="mr-2">{props.detailsType}:</span>{props.details}</p> */}
    </motion.div>
  );
}

