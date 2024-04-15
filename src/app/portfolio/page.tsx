// PORTFOLIO PAGE

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Project } from '@/types/allTypes'
import { getAllProjects } from '@/utils/projects'
import Portfolio from '@/components/Portfolio'

export default function PortfolioPage() {
	const allProjects: Project[] = getAllProjects()

	return (
		<div id='portfolio' className='bg-zinc-950 w-full h-full flex flex-col justify-center items-center'>
			<Header />
			<Portfolio allProjects={allProjects} />
			<Footer />
		</div>
	)
}

//
//
//
// Code From FlipCard.tsx for random card animation using framer-motion
//
// const random1 = Math.random()
// const random2 = Math.random()
// const random3 = Math.random()

// const iX = Math.trunc(random1 * 800 + 1000) * (random2 < 0.5 ? -1 : 1)
// const iY = Math.trunc(random2 * 800 + 900) * (random3 < 0.5 ? -1 : 1)

// const deg1 = random3 < 0.2 ? 6 * 270 : 1 * 270
// const deg2 = random1 < 0.7 ? 7 * 270 : 2 * 270
// const deg3 = random2 < 0.2 ? 4 * 270 : 1 * 270
// const rX = Math.trunc(random1 * deg1 + 180) * (random2 < 0.5 ? -1 : 1)
// const rY = Math.trunc(random2 * deg2 + 180) * (random3 < 0.5 ? -1 : 1)
// const rZ = Math.trunc(random3 * deg3 + 180) * (random1 < 0.5 ? -1 : 1)

// const delayTime = Number.parseFloat(Math.random().toFixed(3))
// const iTime = Math.trunc(Math.random() * 2 + 3)
