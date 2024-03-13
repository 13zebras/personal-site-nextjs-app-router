'use client'

import { Icon } from '@iconify/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false) // initiate isNavOpen state with false
  const routePath = usePathname()
  const allPaths = ["home", "portfolio", "experience", "about", "contact"]
  // const isHome = routePath === "/"

  return (
    <header className="fixed top-0 flex justify-center cursor-pointer z-30 w-full md:bg-zinc-950/100">

      {/*** MOBILE HEADER **********************************/}
      <section className="MOBILE md:hidden flex flex-row justify-start items-center w-full text-zinc-400 relative px-6 py-2">
        <Icon icon="mdi:hamburger-menu" className="hover:text-zinc-200 text-[1.4rem]" onClick={() => setIsNavOpen((prev) => !prev)} />
        <div style={{ display: isNavOpen ? 'flex' : 'none' }} className="absolute top-0 left-0 w-full h-screen pb-16 pt-4 flex flex-col justify-evenly items-center text-base bg-zinc-950/95 backdrop-blur-sm z-50">
          <div className="absolute top-0 right-0 p-8" onClick={() => setIsNavOpen(false)}>
            <Icon icon="mdi:close-thick" className="text-2xl" />
          </div>
          {allPaths.map((pathName: string) => {
            // console.log(">>> pathName", pathName);
            // const path = isHome ? "/" : `/${pathName}`
            let path = `/${pathName}`
            if (pathName === "home") {
              path = "/"
            }
            // console.log(">>> path", path);
            if (path !== routePath) {
              return (
                <Link href={path} key={pathName} className="uppercase tracking-wide1 transition-all hover:text-zinc-200">{pathName}</Link>
              )
            } else {
              return (
                <span key={pathName} className="uppercase tracking-wide1 text-zinc-450 underline">{pathName}</span>
              )
            }
          })}

          <Link href="https://github.com/13zebras" className="hover:text-zinc-200 tracking-wide1 uppercase transition-all" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:github" className="mr-2 mb-1 text-xl inline" />Github
          </Link>
          <Link href="https://www.linkedin.com/in/tom-stine-13-zebras/" className="hover:text-zinc-200 tracking-wide1 uppercase transition-all" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:linkedin" className="mr-2 mb-1 text-xl inline" />LinkedIn
          </Link>
        </div>
      </section>

      {/*** DESKTOP HEADER **********************************/}
      <section className="DESKTOP animate-fade-in hidden md:flex flex-row justify-between items-center h-[60px] w-full max-w-3xl px-6 text-zinc-400">
        <div className="w-[60px] flex flex-row justify-center items-center gap-x-4 text-[1.3rem]">
          <Link href="https://github.com/13zebras" className="" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:github" className="hover:text-gray-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/tom-stine-13-zebras/" className="hidden xs:block" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:linkedin" className="hover:text-gray-300" />
          </Link>
        </div>

        {allPaths.map((pathName: string) => {
          // console.log(">>> pathName", pathName);
          // const path = isHome ? "/" : `/${pathName}`
          let path = `/${pathName}`
          if (pathName === "home") {
            path = "/"
          }
          console.log(">>> path", path);
          if (path !== routePath) {
            return (
              <Link href={path} key={pathName} className="uppercase text-sm tracking-wide0 transition-all hover:text-gray-300 hover:underline">{pathName}</Link>
            )
          } else {
            return (
              <span key={pathName} className="uppercase tracking-wide0 text-sm text-zinc-450 hover:text-zinc-600 underline">{pathName}</span>
            )
          }
        })}
      </section>
    </header>
  );
}
