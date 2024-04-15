'use client'

import { LinkedinIcon, GithubIcon, EnvelopeIcon, HamburgerIcon, CloseThickIcon } from '@/utils/svgs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { getHeaderPaths } from '@/utils/header-paths'
import type { HeaderPaths } from '@/types/allTypes'

export default function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false)
	const routePath = usePathname()

	const headerPaths: HeaderPaths[] = getHeaderPaths()

	const openStyle = {
		opacity: 1,
		transform: 'translateX(0%)',
		zIndex: 50,
	}

	const closeStyle = {
		opacity: 0,
		transform: 'translateX(-100%)',
		zIndex: -1,
	}

	return (
		<header className='fixed top-0 flex justify-center cursor-pointer z-30 w-full bg-zinc-950'>
			{/*********************************
			 *****  MOBILE HEADER  ************
			 **********************************/}
			<section className='md:hidden flex flex-row justify-start items-center w-full h-14 relative px-5 pt-1'>
				<span onClick={() => setIsNavOpen((prev) => !prev)} onKeyDown={() => setIsNavOpen((prev) => !prev)}>
					<HamburgerIcon className='mobileIconLink' />
				</span>
				<div style={isNavOpen ? openStyle : closeStyle} className='absolute top-0 left-0 w-full h-screen pb-[10vh] pt-[6vh] flex flex-col justify-evenly items-center bg-black/95 backdrop-blur-sm tracking-wide2 transition-all duration-[350ms]'>
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
				</div>
			</section>

			{/*********************************
			 *****  DESKTOP HEADER  ***********
			 **********************************/}
			<section className='animate-fade-in-050 hidden md:flex flex-row justify-between items-center h-[80px] w-full max-w-3xl px-10'>
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
