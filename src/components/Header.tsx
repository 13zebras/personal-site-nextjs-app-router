'use client'

import { Icon } from '@iconify/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  let routePath = usePathname()
  const allPaths = ["home", "portfolio", "experience", "about"]
  const isContact = routePath === "/contact"
  const isHome = routePath === "/"
  const bgHeader = isHome ? "" : "bg-zinc-950"

  console.log(">>> routePath", routePath)
  console.log(">>> isContact", isContact)
  console.log(">>> isHome", isHome)
  console.log(">>> bgHeader", bgHeader)

  return (
    <header className={`${bgHeader} animate-fade-in h-[60px] w-full max-w-7xl px-4 sm:px-8 md:px-12 fixed top-0 flex flex-row justify-between sm:justify-center items-center sm:gap-x-12 md:gap-x-16 lg:gap-x-20 cursor-pointer z-50`}>
      <div className="w-[26px] xs:w-[60px] flex flex-row justify-center items-center gap-x-[8px] sm:gap-x-[12px] text-[1.3rem] md:text-[1.5rem]">
        <Link href="https://github.com/13zebras" className="hidden xs:block" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:github" className="text-zinc-400 hover:text-zinc-200" />
        </Link>
        <Link href="https://www.linkedin.com/in/tom-stine-13-zebras/" className="hidden xs:block" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:linkedin" className="text-zinc-400 hover:text-zinc-200" />
        </Link>
        <Icon icon="mdi:hamburger-menu" className="block xs:hidden text-zinc-400 hover:text-zinc-200 text-[1.4rem]" />
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
            <Link href={path} key={pathName} className="hidden xs:block uppercase text-sm md:text-base sm:tracking-wide1 transition-all text-zinc-400 hover:text-zinc-200 hover:underline">{pathName}</Link>
          )
          // } else {
          //   return (
          //     <span key={pathName} className="uppercase text-sm lg:text-base tracking-wide1 transition-all text-zinc-400 underline">{pathName}</span>
          //   )
          // }
        }
      })}
      {!isContact && (
        <Link href="/contact" key="contact" className="hidden xs:block uppercase text-sm md:text-base sm:tracking-wide1 transition-all text-zinc-400 hover:text-zinc-200 hover:underline">contact</Link>
      )}

    </header>
  );
}
