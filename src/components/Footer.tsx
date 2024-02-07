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

  return (
    <footer id="footer" className="fixed bottom-0 w-full py-2 bg-zinc-950 z-20">
      <div className="flex justify-center">
        <span className="text-base text-zinc-500 font-mono">
          {`vWidth: ${viewportWidth} | vHeight: ${viewportHeight}`}
        </span>
      </div>
    </footer>
  );
}
