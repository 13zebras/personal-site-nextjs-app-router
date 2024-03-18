'use client'

import { Icon } from '@iconify/react';
import Link from 'next/link';
import getHeaderPaths from '@/utils/header-paths';
import { motion } from "framer-motion"
import { usePathname } from 'next/navigation';
import { useState } from 'react'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const routePath = usePathname()
  // const allPaths = ["home", "portfolio", "experience", "about tom", "contact"]

  const allHeaderPaths = getHeaderPaths()
  // const openStyles = { display: 'flex' }
  // const closedStyles = { display: 'none' }

  return (
    <header className="fixed top-0 flex justify-center cursor-pointer z-30 w-full bg-zinc-950">

      {/*** MOBILE HEADER **********************************/}
      <section className="MOBILE md:hidden flex flex-row justify-start items-center w-full text-zinc-400 relative px-5 py-3">
        <Icon icon="mdi:hamburger-menu" className="hover:text-zinc-200 active:text-zinc-100 text-2xl" onClick={() => setIsNavOpen((prev) => !prev)} />
        <motion.div
          animate={isNavOpen ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.25 }}
          className="absolute top-0 left-0 w-full h-screen pb-[8vh] pt-[4vh] flex flex-col justify-evenly items-center text-lg bg-zinc-950/95 backdrop-blur-sm z-50"
        >
          <div className="absolute top-0 right-0 p-7" onClick={() => setIsNavOpen(false)}>
            <Icon icon="mdi:close-thick" className="text-3xl text-zinc-400 hover:text-zinc-200 active:text-zinc-100" />
          </div>
          {allHeaderPaths.map(({ name, path }) => {
            if (path !== routePath) {
              return (
                <Link href={path} key={name} className="uppercase tracking-wide1 hover:text-zinc-200 active:text-zinc-100 active:underline">{name}</Link>
              )
            } else {
              return (
                <span key={name} className="uppercase tracking-wide1 text-zinc-500">{path}</span>
              )
            }
          })}
          {/* {allPaths.map((pathName: string) => {
            let path = `/${pathName}`
            if (pathName === "home") {
              path = "/"
            }
            if (pathName === "about tom") {
              path = "about"
            }
            if (path !== routePath) {
              return (
                <Link href={path} key={pathName} className="uppercase tracking-wide1 hover:text-zinc-200 active:text-zinc-100 active:underline">{pathName}</Link>
              )
            } else {
              return (
                <span key={pathName} className="uppercase tracking-wide1 text-zinc-500">{pathName}</span>
              )
            }
          })} */}

          <Link href="https://github.com/13zebras" className="hover:text-zinc-200 active:text-zinc-100 active:underline tracking-wide1 uppercase" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:github" className="mr-2 mb-1 text-xl inline" />Github
          </Link>
          <Link href="https://www.linkedin.com/in/tom-stine-13-zebras/" className="hover:text-zinc-200 active:text-zinc-100 active:underline tracking-wide1 uppercase" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:linkedin" className="mr-2 mb-1 text-xl inline" />LinkedIn
          </Link>
        </motion.div>
      </section>

      {/*** DESKTOP HEADER **********************************/}
      <section className="DESKTOP animate-fade-in-05 hidden md:flex flex-row justify-between items-center h-[80px] w-full max-w-3xl px-10 text-zinc-400">
        <div className="w-[60px] flex flex-row justify-center items-center gap-x-6 text-xl">
          <Link href="https://github.com/13zebras" className="" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:github" className="hover:text-zinc-200 active:text-zinc-100" />
          </Link>
          <Link href="https://www.linkedin.com/in/tom-stine-13-zebras/" className="hidden xs:block" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:linkedin" className="hover:text-zinc-200 active:text-zinc-100" />
          </Link>
        </div>

        {allHeaderPaths.map(({ name, path }) => {
          if (name !== routePath) {
            return (
              <Link href={path} key={name} className="uppercase text-sm tracking-wide0 hover:text-gray-200 active:text-zinc-100 active:underline">{name}</Link>
            )
          } else {
            return (
              <span key={name} className="uppercase tracking-wide0 text-sm text-zinc-450 hover:text-zinc-600 underline">{name}</span>
            )
          }
        })}
        {/* {allPaths.map((pathName: string) => {
          let path = `/${pathName}`
          if (pathName === "home") {
            path = "/"
          }
          if (pathName === "about tom") {
            path = "about"
          }
          if (path !== routePath) {
            return (
              <Link href={path} key={pathName} className="uppercase text-sm tracking-wide0 hover:text-gray-200 active:text-zinc-100 active:underline">{pathName}</Link>
            )
          } else {
            return (
              <span key={pathName} className="uppercase tracking-wide0 text-sm text-zinc-450 hover:text-zinc-600 underline">{pathName}</span>
            )
          }
        })} */}
      </section>
    </header>
  );
}
