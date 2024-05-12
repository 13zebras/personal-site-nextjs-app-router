// 'use client'

import type { WorkData } from '@/types/allTypes'

export default function WorkCard({ index, ...props }: WorkData) {
  if (index === undefined) index = 1

  const delayTime = `${index * 500 + 300}ms`

  const workMovingStyle = {
    animationName: 'movingDiv',
    animationDuration: '1s',
    animationFillMode: 'both',
    animationTimingFunction: 'ease-out',
    animationDelay: delayTime,
  }

  return (
    <div id={`workCard-${index}`} style={workMovingStyle} className='w-full max-w-[600px] px-6 sm:px-8 py-6 rounded-lg flex flex-col justify-start items-start flex-shrink-0 text-gray-300 bg-gray-850 cursor-pointer overflow-hidden'>
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
    </div>
  )
}
