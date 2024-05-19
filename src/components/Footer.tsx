'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Footer() {
	const [viewportWidth, setViewportWidth] = useState(0)
	const [viewportHeight, setViewportHeight] = useState(0)

	// change to show or hide the footer text
	const development = false

	const routePath = usePathname()

	let bgClear = {}
	if (routePath === '/') {
		bgClear = { backgroundColor: 'transparent' }
	} else if (development) {
		bgClear = { opacity: '0.85' }
	}

	useEffect(() => {
		const updateViewportWH = () => {
			setViewportWidth(window.innerWidth)
			setViewportHeight(window.innerHeight)
		}
		updateViewportWH()
		window.addEventListener('resize', updateViewportWH)
		return () => window.removeEventListener('resize', updateViewportWH)
	})

	let breakPoint = ''
	if (viewportWidth >= 1536) breakPoint = '2xl'
	else if (viewportWidth >= 1280) breakPoint = 'xl'
	else if (viewportWidth >= 1024) breakPoint = 'lg'
	else if (viewportWidth >= 768) breakPoint = 'md'
	else if (viewportWidth >= 640) breakPoint = 'sm'
	else if (viewportWidth >= 480) breakPoint = 'xs'
	else breakPoint = 'xxs'

	return (
		<footer id='footer' style={bgClear} className='fixed bottom-0 w-full h-8 z-20 bg-zinc-950'>
			{development && (
				<div className='text-pink-600 text-md font-mono font-bold flex justify-start items-center h-full px-3 border-t border-sky-900'>
					<span className='pt-1'>{`${viewportWidth}w x ${viewportHeight}h`}</span>
					<span className='ml-2 text-lg'>{`${breakPoint}`}</span>
				</div>
			)}
		</footer>
	)
}
