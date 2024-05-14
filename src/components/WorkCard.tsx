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
    <div id={`workCard-${index}`} style={workMovingStyle} className='w-full max-w-[600px] px-6 sm:px-8 py-5 rounded-lg flex flex-col justify-start items-start flex-shrink-0 text-gray-300 bg-gray-900 border-2 border-gray-700 cursor-pointer overflow-hidden'>
      <h2 className='text-base xs:text-[1.05rem] font-bold pb-4 self-center text-center xs:self-auto xs:text-left'>{props.employer}</h2>
      <div className='w-full flex flex-row flex-wrap gap-x-4 justify-between items-center pb-4'>
        <div className='font-semibold text-sm xs:text-md'>{props.title}</div>
        <div className='text-gray-300 font-medium italic text-xs xs:text-sm'>{props.dates}</div>
      </div>
      <ul className='list-disc list-outside space-y-1 text-sm pl-4'>
        <li>{props.summary1}</li>
        <li>{props.summary2}</li>
        {props.detailsType && (
          <li>
            <span className='mr-2'>{props.detailsType}:</span>
            {props.details}
          </li>
        )}
      </ul>
    </div>
  )
}
