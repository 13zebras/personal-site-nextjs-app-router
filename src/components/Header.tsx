'use client'

import '@/styles/header.css'
import { LinkedinIcon, GithubIcon, EnvelopeIcon, HamburgerIcon, CloseThickIcon } from '@/utils/svgs'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { getHeaderPaths } from '@/utils/header-paths'
import type { HeaderPaths } from '@/types/allTypes'

const variants = {
	open: { opacity: 1, x: 0 },
	closed: { opacity: 0, x: '-100%' },
}

export default function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false)
	const routePath = usePathname()
	// console.log('>>>> routePath', routePath)

	const headerPaths: HeaderPaths[] = getHeaderPaths()
	// const mobileHeaderPaths: HeaderPaths[] = getMobileHeaderPaths()
	// const openStyles = { display: 'flex' }
	// const closedStyles = { display: 'none' }

	return (
		<header className='fixed top-0 flex justify-center cursor-pointer z-30 w-full bg-zinc-950'>
			{/** * MOBILE HEADER */}
			<section className='mobileSection'>
				<span onClick={() => setIsNavOpen((prev) => !prev)} onKeyDown={() => setIsNavOpen((prev) => !prev)}>
					<HamburgerIcon className='mobileIconLink' />
				</span>

				<motion.div animate={isNavOpen ? 'open' : 'closed'} variants={variants} transition={{ duration: 0.25 }} className='mobileModal'>
					<div className='absolute top-0 left-0 p-5' onClick={() => setIsNavOpen(false)} onKeyUp={() => setIsNavOpen(false)}>
						<CloseThickIcon className='mobileIconLink' />
					</div>
					{headerPaths.map(({ name, path }) => {
						if (path !== routePath) {
							return (
								<Link href={path} key={name} className='mobileTextLink'>
									{name}
								</Link>
							)
						}
						return (
							<span key={name} className='text-zinc-500 text-lg font-bold uppercase'>
								{name}
							</span>
						)
					})}
					<Link href='/contact' className='mobileTextLink'>
						<EnvelopeIcon className='mr-3 mb-1 mobileIconLink' />
						Contact
					</Link>
					<Link href='https://github.com/13zebras' className='mobileTextLink' target='_blank' rel='noopener noreferrer'>
						<GithubIcon className='mr-3 mb-1 mobileIconLink' />
						Github
					</Link>
					<Link href='https://www.linkedin.com/in/tom-stine-13-zebras/' className='mobileTextLink' target='_blank' rel='noopener noreferrer'>
						<LinkedinIcon className='mr-3 mb-1 mobileIconLink' />
						LinkedIn
					</Link>
				</motion.div>
			</section>

			{/** * DESKTOP HEADER */}
			<section className='desktopSection'>
				{headerPaths.map(({ name, path }) => {
					if (path !== routePath) {
						return (
							<Link href={path} key={name} className='desktopTextLink'>
								{name}
							</Link>
						)
					}
					return (
						<span key={name} className='desktopTextLink active'>
							{name}
						</span>
					)
				})}
				<div className='flex flex-row justify-center items-center gap-x-6 w-[120px]'>
					<Link href='/contact'>
						<EnvelopeIcon className='desktopIconLink' />
					</Link>
					<Link href='https://github.com/13zebras' className='' target='_blank' rel='noopener noreferrer'>
						<GithubIcon className='desktopIconLink' />
					</Link>
					<Link href='https://www.linkedin.com/in/tom-stine-13-zebras/' className='hidden xs:block' target='_blank' rel='noopener noreferrer'>
						<LinkedinIcon className='desktopIconLink' />
					</Link>
				</div>
			</section>
		</header>
	)
}
