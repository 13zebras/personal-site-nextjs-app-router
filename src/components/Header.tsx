'use client'

import { Icon } from '@iconify/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {

  let routePath = usePathname();

  // console.log(routePath);
  const allPaths = ["home", "projects", "experience", "about"]

  return (
    <header className="w-full max-w-7xl px-6 lg:px-8 fixed top-0 pt-6 flex flex-row items-start justify-center md:justify-between mx-auto z-50 bg-zinc-950">

      <div className="flex md:hidden flex-row justify-start items-center w-16 text-2xl">
        <Icon icon="mdi:hamburger-menu" className="text-zinc-400 hover:text-zinc-200" />
      </div>
      <div className="hidden md:flex flex-row justify-start items-center w-32 text-2xl lg:text-3xl">
        <Link href="https://github.com/13zebras" className="" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:github" className="text-zinc-400 hover:text-zinc-200" />
        </Link>
        <Link href="https://www.linkedin.com/in/tom-stine-13-zebras/" className="ml-4" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:linkedin" className="text-zinc-400 hover:text-zinc-200" />
        </Link>
      </div>

      <div className="flex flex-row justify-center items-center md: gap-x-8 lg:gap-x-12">
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
      </div>

      <Link href="/contact" className="hidden md:flex flex-row justify-end items-center cursor-pointer w-32 text-zinc-400 hover:text-zinc-200" target="_blank" rel="noopener noreferrer">
        <Icon icon="mdi:email-outline" className="mr-2 hover:text-zinc-200 text-lg lg:text-xl" />
        <span className="text-sm lg:text-base uppercase tracking-wide1 hover:underline">Contact</span>
      </Link>

    </header>
  );
}
