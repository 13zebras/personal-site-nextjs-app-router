'use client'

import { useEffect, useState } from 'react'

function getBreakPoint(width: number) {
  if (width >= 1536) return '2xl'
  if (width >= 1280) return 'xl'
  if (width >= 1024) return 'lg'
  if (width >= 768) return 'md'
  if (width >= 640) return 'sm'
  if (width >= 480) return 'xs'
  return 'xxs'
}

export default function FooterDevTool() {
  const [viewportWidth, setViewportWidth] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)

  useEffect(() => {
    const updateViewportWH = () => {
      setViewportWidth(window.innerWidth)
      setViewportHeight(window.innerHeight)
    }
    updateViewportWH()
    window.addEventListener('resize', updateViewportWH)
    return () => window.removeEventListener('resize', updateViewportWH)
  })

  const breakPoint = getBreakPoint(viewportWidth)

  return (
    <div className='flex h-full items-center justify-start border-t border-sky-900 px-3 font-mono text-md font-bold text-rose-550'>
      <span className='pt-1'>{`${viewportWidth}w x ${viewportHeight}h`}</span>
      <span className='ml-2 text-lg'>{`${breakPoint}`}</span>
    </div>
  )
}
