'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import type { HeaderPaths } from '@/types/allTypes'
import { getHeaderPaths } from '@/utils/header-paths'
import {
  BlueskyIcon,
  CloseThickIcon,
  EnvelopeIcon,
  GithubIcon,
  HamburgerIcon,
  HomeIcon,
  LinkedinIcon,
} from '@/utils/svgs'

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
    <header className='fixed top-0 z-30 flex w-full cursor-pointer justify-center bg-zinc-950'>
      {/*************************************************
       *****  MOBILE HEADER  ****************************
       *************************************************/}

      <section className='relative flex h-14 w-full flex-row items-center justify-start px-5 pt-1 md:hidden'>
        <span onClick={() => setIsNavOpen((prev) => !prev)} onKeyDown={() => setIsNavOpen((prev) => !prev)}>
          <HamburgerIcon className='inline text-3xl text-zinc-400 hover:text-zinc-200 active:text-sky-400' />
        </span>
        <div
          style={isNavOpen ? openStyle : closeStyle}
          className='absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-evenly bg-black/95 pb-[10vh] pt-[6vh] tracking-wide2 backdrop-blur-sm transition-all duration-[350ms]'
        >
          <div
            className='absolute left-0 top-0 p-5'
            onClick={() => setIsNavOpen(false)}
            onKeyUp={() => setIsNavOpen(false)}
          >
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
              <span key={name} className='text-lg font-bold uppercase text-zinc-500'>
                {name}
              </span>
            )
          })}

          <MobileTextLink href='https://bsky.app/profile/tomstine.dev' target='_blank' rel='noopener noreferrer'>
            <BlueskyIcon className='mb-1 mr-3 inline text-[1.7rem] text-zinc-400 hover:text-zinc-200 active:text-sky-400' />
            Bluesky
          </MobileTextLink>
          <MobileTextLink href='https://github.com/13zebras' target='_blank' rel='noopener noreferrer'>
            <GithubIcon className='mb-1 mr-3 inline text-3xl text-zinc-400 hover:text-zinc-200 active:text-sky-400' />
            Github
          </MobileTextLink>
          <MobileTextLink
            href='https://www.linkedin.com/in/tom-stine-13-zebras/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedinIcon className='mb-1 mr-3 inline text-3xl text-zinc-400 hover:text-zinc-200 active:text-sky-400' />
            LinkedIn
          </MobileTextLink>
          <MobileTextLink href={'/contact'}>
            <EnvelopeIcon className='mb-1 mr-3 inline text-3xl text-zinc-400 hover:text-zinc-200 active:text-sky-400' />
            Contact
          </MobileTextLink>
        </div>
      </section>

      {/*************************************************
       *****  DESKTOP HEADER  ***************************
       *************************************************/}

      <section className='hidden h-[70px] w-full max-w-3xl animate-fade-in-050 flex-row items-center justify-between px-10 md:flex lg:max-w-[52rem]'>
        <Link href='/'>
          <HomeIcon className='inline text-[1.37rem] text-zinc-400 hover:text-zinc-200 active:text-sky-400' />
        </Link>
        {headerPaths.map(({ name, path }) => {
          if (path === '/') return
          if (path !== routePath) {
            return (
              <Link
                href={path}
                key={name}
                className='text-sm font-semibold uppercase tracking-wide0 text-zinc-400 hover:text-zinc-200 active:text-sky-400'
              >
                {name}
              </Link>
            )
          }
          return (
            <span
              key={name}
              className='border-b border-sky-300/80 text-sm font-semibold uppercase tracking-wide0 text-zinc-350 hover:text-zinc-450'
            >
              {name}
            </span>
          )
        })}
        <div className='flex w-[120px] flex-row items-center justify-center gap-x-5'>
          <Link href='https://bsky.app/profile/tomstine.dev/' className='' target='_blank' rel='noopener noreferrer'>
            <BlueskyIcon className='inline text-[1.4rem] text-zinc-400 hover:text-zinc-200 active:text-sky-400' />
          </Link>
          <Link href='https://github.com/13zebras' className='' target='_blank' rel='noopener noreferrer'>
            <GithubIcon className='inline text-2xl text-zinc-400 hover:text-zinc-200 active:text-sky-400' />
          </Link>
          <Link
            href='https://www.linkedin.com/in/tom-stine-13-zebras/'
            className='hidden xs:block'
            target='_blank'
            rel='noopener noreferrer'
          >
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
