'use client'

import { useEffect, useState } from 'react';

export default function Footer() {
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

  let breakPoint = ""
  if (viewportWidth >= 1536) {
    breakPoint = '2xl'
  } else if (viewportWidth >= 1280) {
    breakPoint = 'xl'
  } else if (viewportWidth >= 1024) {
    breakPoint = 'lg'
  } else if (viewportWidth >= 768) {
    breakPoint = 'md'
  } else if (viewportWidth >= 640) {
    breakPoint = 'sm'
  } else if (viewportWidth >= 480) {
    breakPoint = 'xs'
  } else {
    breakPoint = 'xxs'
  }

  return (
    <footer id="footer" className="fixed bottom-0 w-full z-30 bg-zinc-900/40">
      <div className="flex justify-start items-center h-[40px] px-6">
        <span className="text-sm text-gray-500 font-mono">
          {`${viewportWidth}vw  ${viewportHeight}vh`}
        </span>
        <span className="text-md text-[#c04] font-mono ml-4">{`${breakPoint}`}</span>
      </div>
    </footer>
  );
}
