'use client'

import { Icon } from '@iconify/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {

  let routePath = usePathname();

  // console.log(routePath);
  const allPaths = ["home", "projects", "experience", "about", "contact"]

  return (
    <header className="bg-zinc-950 h-[70px] w-full max-w-5xl px-6 md:px-12 fixed top-0 pt-2 pb-2 flex flex-row justify-between items-center gap-x-4 sm:gap-x-6 md:gap-x-10 lg:gap-x-12 cursor-pointer z-50">
      <div className="hidden md:flex flex-row justify-start items-center gap-x-[12px] text-[1.3rem] lg:text-[1.5rem]">
        <Link href="https://github.com/13zebras" className="" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:github" className="text-zinc-400 hover:text-zinc-200" />
        </Link>
        <Link href="https://www.linkedin.com/in/tom-stine-13-zebras/" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:linkedin" className="text-zinc-400 hover:text-zinc-200" />
        </Link>
      </div>

      {allPaths.map((pathName: string) => {
        let path = ""
        if (pathName !== "home") {
          path = `/${pathName}`
        } else {
          path = "/"
        }

        if (path !== routePath) {
          return (
            <Link href={path} key={pathName} className="uppercase text-sm lg:text-base tracking-wide1 transition-all text-zinc-400 hover:text-zinc-200 hover:underline">{pathName}</Link>
          )
        } else {
          return (
            <span key={pathName} className="uppercase text-sm lg:text-base tracking-wide1 transition-all text-zinc-400 underline">{pathName}</span>
          )
        }
      })}

      <Icon icon="mdi:hamburger-menu" className="text-zinc-400 hover:text-zinc-200 text-[1.5rem] md:hidden" />

    </header>
  );
}
