'use client'

import { LinkedinIcon, GithubIcon, EnvelopeIcon, HamburgerIcon, CloseThickIcon, HomeIcon, BlueskyIcon } from '@/utils/svgs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { getHeaderPaths } from '@/utils/header-paths'
import type { HeaderPaths } from '@/types/allTypes'
import MobileTextLink from './MobileTextLink'

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
			{/*************************************************
			 *****  MOBILE HEADER  ****************************
			 *************************************************/}

			<section className='md:hidden flex flex-row justify-start items-center w-full h-14 relative px-5 pt-1'>
				<span onClick={() => setIsNavOpen((prev) => !prev)} onKeyDown={() => setIsNavOpen((prev) => !prev)}>
					<HamburgerIcon className='inline text-3xl text-zinc-400 hover:text-zinc-200 active:text-sky-400' />
				</span>
				<div style={isNavOpen ? openStyle : closeStyle} className='absolute top-0 left-0 w-full h-screen pb-[10vh] pt-[6vh] flex flex-col justify-evenly items-center bg-black/95 backdrop-blur-sm tracking-wide2 transition-all duration-[350ms]'>
					<div className='absolute top-0 left-0 p-5' onClick={() => setIsNavOpen(false)} onKeyUp={() => setIsNavOpen(false)}>
						<CloseThickIcon className='inline text-3xl text-zinc-400 hover:text-zinc-200 active:text-sky-400' />
					</div>
					{headerPaths.map(({ name, path }) => {
						if (path !== routePath) {
							return (
								<MobileTextLink href={path} key={name}>
									{name}
								</MobileTextLink>
							)
						}
						return (
							<span key={name} className='text-zinc-500 text-lg font-bold uppercase'>
								{name}
							</span>
						)
					})}

					<MobileTextLink href='https://bsky.app/profile/tomstine.dev' target='_blank' rel='noopener noreferrer'>
						<BlueskyIcon className='mr-3 mb-1 inline text-[1.7rem] text-zinc-400 hover:text-zinc-200 active:text-sky-400' />
						Bluesky
					</MobileTextLink>
					<MobileTextLink href='https://github.com/13zebras' target='_blank' rel='noopener noreferrer'>
						<GithubIcon className='mr-3 mb-1 inline text-3xl text-zinc-400 hover:text-zinc-200 active:text-sky-400' />
						Github
					</MobileTextLink>
					<MobileTextLink href='https://www.linkedin.com/in/tom-stine-13-zebras/' target='_blank' rel='noopener noreferrer'>
						<LinkedinIcon className='mr-3 mb-1 inline text-3xl text-zinc-400 hover:text-zinc-200 active:text-sky-400' />
						LinkedIn
					</MobileTextLink>
					<MobileTextLink href={'/contact'}>
						<EnvelopeIcon className='mr-3 mb-1 inline text-3xl text-zinc-400 hover:text-zinc-200 active:text-sky-400' />
						Contact
					</MobileTextLink>
				</div>
			</section>

			{/*************************************************
			 *****  DESKTOP HEADER  ***************************
			 *************************************************/}

			<section className='animate-fade-in-050 hidden md:flex flex-row justify-between items-center h-[70px] w-full max-w-3xl lg:max-w-[52rem] px-10'>
				<Link href='/'>
					<HomeIcon className='inline text-[22px] text-zinc-400 hover:text-zinc-200 active:text-sky-400' />
				</Link>
				{headerPaths.map(({ name, path }) => {
					if (path === '/') return
					if (path !== routePath) {
						return (
							<Link href={path} key={name} className='text-zinc-400 hover:text-zinc-200 active:text-sky-400 uppercase text-sm font-semibold tracking-wide0'>
								{name}
							</Link>
						)
					}
					return (
						<span key={name} className='text-zinc-350 hover:text-zinc-450 border-b border-sky-300/80 uppercase text-sm font-semibold tracking-wide0'>
							{name}
						</span>
					)
				})}
				<div className='flex flex-row justify-center items-center gap-x-5 w-[120px]'>
					<Link href='https://bsky.app/profile/tomstine.dev/' className='' target='_blank' rel='noopener noreferrer'>
						<BlueskyIcon className='inline text-[1.4rem] text-zinc-400 hover:text-zinc-200 active:text-sky-400' />
					</Link>
					<Link href='https://github.com/13zebras' className='' target='_blank' rel='noopener noreferrer'>
						<GithubIcon className='inline text-2xl text-zinc-400 hover:text-zinc-200 active:text-sky-400' />
					</Link>
					<Link href='https://www.linkedin.com/in/tom-stine-13-zebras/' className='hidden xs:block' target='_blank' rel='noopener noreferrer'>
						<LinkedinIcon className='inline text-2xl text-zinc-400 hover:text-zinc-200 active:text-sky-400' />
					</Link>
					<Link href='/contact'>
						<EnvelopeIcon className='inline text-2xl text-zinc-400 hover:text-zinc-200 active:text-sky-400' />
					</Link>
				</div>
			</section>
		</header>
	)
}
