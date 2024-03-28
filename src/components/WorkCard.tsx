'use client'

import { motion } from 'framer-motion'
import type { WorkData } from '@/types/allTypes'

export default function WorkCard({ index, ...props }: WorkData) {
	if (index === undefined) return

	const delayTime = Number.parseFloat((Math.random() * 2.0 + 0.1).toFixed(2))
	const durationTime = Number.parseFloat((Math.random() * 1.9 + 0.5).toFixed(2))
	// console.log('>>> index, durationTime, delayTime, rotateDeg', index, durationTime, delayTime, rotateDeg)

	return (
		<motion.div
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{ duration: durationTime, delay: delayTime }}
			className='w-workCard-500 md:w-workCard-400 px-8 py-6 rounded-xl flex flex-col justify-start items-start flex-shrink-0 text-gray-300 bg-gray-850 cursor-pointer overflow-hidden'
		>
			<h2 className='text-[1.05rem] font-bold'>{props.employer}</h2>
			<div className='w-full flex flex-row justify-between items-center text-md mt-1 mb-3'>
				<div className='font-semibold'>{props.title}</div>
				<div className='text-gray-300 font-medium italic text-sm'>{props.dates}</div>
			</div>
			<ul className='list-none list-outside space-y-2 text-sm'>
				<li>{props.summary1}</li>
				<li>{props.summary2}</li>
				<li>
					<span className='mr-2'>{props.detailsType}:</span>
					{props.details}
				</li>
			</ul>
			{/* <p className="text-sm mt-3"><span className="mr-2">{props.detailsType}:</span>{props.details}</p> */}
		</motion.div>
	)
}
