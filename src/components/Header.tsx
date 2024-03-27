'use client'

import { Icon } from '@iconify/react';
import Link from 'next/link';
import { getDesktopHeaderPaths, getMobileHeaderPaths } from '@/utils/header-paths';
import { motion } from "framer-motion"
import { usePathname } from 'next/navigation';
import { useState } from 'react'
import { HeaderPaths } from "@/types/allTypes";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const routePath = usePathname()
  // const allPaths = ["home", "portfolio", "experience", "about tom", "contact"]

  const desktopHeaderPaths: HeaderPaths[] = getDesktopHeaderPaths()
  const mobileHeaderPaths: HeaderPaths[] = getMobileHeaderPaths()
  // const openStyles = { display: 'flex' }
  // const closedStyles = { display: 'none' }

  return (
    <header className="fixed top-0 flex justify-center cursor-pointer z-30 w-full bg-zinc-950">

      {/*** MOBILE HEADER **********************************/}
      <section className="MOBILE md:hidden flex flex-row justify-start items-center w-full text-zinc-400 relative px-5 h-14 uppercase">
        <Icon icon="mdi:hamburger-menu" className="hover:text-zinc-200 active:text-sky-500 text-2xl" onClick={() => setIsNavOpen((prev) => !prev)} />
        <motion.div
          animate={isNavOpen ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.25 }}
          className="opacity-0 absolute top-0 left-0 w-full h-screen pb-[8vh] pt-[4vh] flex flex-col justify-evenly items-center text-lg bg-black/95 backdrop-blur-sm z-50 font-bold tracking-wide2"
        >
          <div className="absolute top-0 right-0 p-7" onClick={() => setIsNavOpen(false)}>
            <Icon icon="mdi:close-thick" className="text-2xl text-zinc-400 hover:text-zinc-200 active:text-sky-500" />
          </div>
          {mobileHeaderPaths.map(({ name, path }) => {
            if (path !== routePath) {
              return (
                <Link href={path} key={name} className="hover:text-zinc-200 active:text-sky-500">{name}</Link>
              )
            } else {
              return (
                <span key={name} className="text-zinc-500 underline">{name}</span>
              )
            }
          })}
          <Link href="/contact" className="hover:text-zinc-200 active:text-sky-500" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:envelope-outline" className="mr-3 mb-1 text-3xl inline" />Contact
          </Link>
          <Link href="https://github.com/13zebras" className="hover:text-zinc-200 active:text-sky-500" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:github" className="mr-3 mb-1 text-3xl inline" />Github
          </Link>
          <Link href="https://www.linkedin.com/in/tom-stine-13-zebras/" className="hover:text-zinc-200 active:text-sky-500" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:linkedin" className="mr-3 mb-1 text-3xl inline" />LinkedIn
          </Link>
        </motion.div>
      </section>

      {/*** DESKTOP HEADER **********************************/}
      <section className="DESKTOP animate-fade-in-05 hidden md:flex flex-row justify-between items-center h-[80px] w-full max-w-3xl px-10 text-zinc-400">
        {desktopHeaderPaths.map(({ name, path }) => {
          if (name !== routePath) {
            return (
              <Link href={path} key={name} className="hover:text-zinc-200 active:text-sky-500 uppercase text-sm tracking-wide0">{name}</Link>
            )
          } else {
            return (
              <span key={name} className="uppercase tracking-wide0 text-sm text-zinc-450 hover:text-zinc-600 underline">{name}</span>
            )
          }
        })}
        <div className="flex flex-row justify-center items-center gap-x-6 text-2xl w-[120px]">
          <Link href="/contact" >
            <Icon icon="mdi:envelope-outline" className="hover:text-zinc-200 active:text-sky-500" />
          </Link>
          <Link href="https://github.com/13zebras" className="" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:github" className="hover:text-zinc-200 active:text-sky-500" />
          </Link>
          <Link href="https://www.linkedin.com/in/tom-stine-13-zebras/" className="hidden xs:block" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:linkedin" className="hover:text-zinc-200 active:text-sky-500" />
          </Link>
        </div>
      </section>
    </header>
  );
}
