// 'use client'

import type { WorkData } from '@/types/allTypes'

export default function WorkCard({ index, ...props }: WorkData) {
	if (index === undefined) index = 1

	const delayTime = `${index * 500}ms`

	const fadeDelayStyle = {
		animationName: 'fadeInDelay',
		animationDuration: '1.25s',
		animationFillMode: 'both',
		animationTimingFunction: 'ease-out',
		animationDelay: delayTime,
	}

	return (
		<div
			// initial={{ opacity: 0 }}
			// animate={{ opacity: 1 }}
			// transition={{ duration: durationTime, delay: delayTime }}
			style={fadeDelayStyle}
			className='w-workCard-500 md:w-workCard-400 px-6 xs:px-8 py-6 rounded-xl flex flex-col justify-start items-start flex-shrink-0 text-gray-300 bg-gray-850 cursor-pointer overflow-hidden'
		>
			<h2 className='text-[1.05rem] font-bold'>{props.employer}</h2>
			<div className='w-full flex flex-row flex-wrap gap-x-2 justify-between items-center text-md mt-1 mb-3'>
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
		</div>
	)
}
