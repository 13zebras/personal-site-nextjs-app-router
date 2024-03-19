'use client'

import { WorkData } from "@/types/projectTypes";
import { motion } from "framer-motion"

export default function WorkCard({ index, ...props }: WorkData) {

  if (index === undefined) return
  let xSign = 1
  if (index % 2 === 0) {
    xSign = -1
  }
  const iX = Math.trunc(xSign * 1000)
  const delayFactor = Math.trunc(index / 2)
  console.log('>>> index, iX, delayFactor', index, iX, delayFactor)

  return (
    <motion.div
      initial={{ x: iX }}
      animate={{ x: 0 }}
      transition={{ duration: 1.3, delay: 0.5 * delayFactor }}
      className="w-workCard-500 md:w-workCard-400 px-8 py-6 rounded-xl flex flex-col justify-start items-start flex-shrink-0 text-gray-300 bg-gray-850 cursor-pointer overflow-hidden">

      <h4 className="text-xl font-bold">{props.title}</h4>
      <p className="text-base font-bold mt-1">{props.employer}</p>
      <p className="text-sm uppercase py-2 text-gray-300">{props.dates}</p>
      <ul className="list-disc space-y-2 ml-5 text-sm w-[90%]">
        <li>{props.stack}</li>
        <li>{props.summary1}</li>
        <li>{props.summary2}</li>
        {/* <li>{props.summary3}</li> */}
      </ul>
    </motion.div>
  );
}

