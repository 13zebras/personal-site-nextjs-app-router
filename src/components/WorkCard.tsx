// 'use client'

import type { WorkData } from '@/types/allTypes'

export default function WorkCard({ index, ...props }: WorkData) {
  if (index === undefined) index = 1

  const delayTime = `${index * 400 + 200}ms`

  const workMovingStyle = {
    animationName: 'movingDiv',
    animationDuration: '800ms',
    animationFillMode: 'both',
    animationTimingFunction: 'ease-out',
    animationDelay: delayTime,
  }

  return (
    <div
      id={`workCard-${index}`}
      style={workMovingStyle}
      className='flex w-full max-w-[600px] flex-shrink-0 cursor-pointer flex-col items-start justify-start overflow-hidden rounded-lg border-2 border-gray-700 bg-gray-900 px-6 py-5 text-gray-300 sm:px-8'
    >
      <h2 className='self-center pb-4 text-center text-base font-bold xs:self-auto xs:text-left xs:text-[1.05rem]'>
        {props.employer}
      </h2>
      <div className='flex w-full flex-row flex-wrap items-center justify-between gap-x-4 pb-4'>
        <div className='text-sm font-semibold xs:text-md'>{props.title}</div>
        <div className='text-xs font-medium italic text-gray-300 xs:text-sm'>{props.dates}</div>
      </div>
      <ul className='list-outside list-disc space-y-1 pl-4 text-sm'>
        <li>{props.summary1}</li>
        {props.summary2.length > 0 && <li>{props.summary2}</li>}
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
