'use client'

import { usePathname } from 'next/navigation'
import FooterDevTool from './FooterDevTool'

export default function Footer() {
	const development = false

	const routePath = usePathname()

	let bgClear = {}
	if (routePath === '/') {
		bgClear = { backgroundColor: 'transparent' }
	} else if (development) {
		bgClear = { opacity: '0.80' }
	}

	return (
		<footer id='footer' style={bgClear} className='fixed bottom-0 w-full h-8 z-20 bg-zinc-950'>
			{development && <FooterDevTool />}
		</footer>
	)
}
