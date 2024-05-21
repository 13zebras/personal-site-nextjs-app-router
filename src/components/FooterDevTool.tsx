'use client'

import { useEffect, useState } from 'react'

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

	function getBreakPoint(viewportWidth: number) {
		if (viewportWidth >= 1536) return '2xl'
		if (viewportWidth >= 1280) return 'xl'
		if (viewportWidth >= 1024) return 'lg'
		if (viewportWidth >= 768) return 'md'
		if (viewportWidth >= 640) return 'sm'
		if (viewportWidth >= 480) return 'xs'
		return 'xxs'
	}

	const breakPoint = getBreakPoint(viewportWidth)

	return (
		<div className='text-rose-550 text-md font-mono font-bold flex justify-start items-center h-full px-3 border-t border-sky-900'>
			<span className='pt-1'>{`${viewportWidth}w x ${viewportHeight}h`}</span>
			<span className='ml-2 text-lg'>{`${breakPoint}`}</span>
		</div>
	)
}
