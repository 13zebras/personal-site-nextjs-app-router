'use client'

import { usePathname, useRouter } from 'next/navigation';

import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Header() {

  let routePath = usePathname();

  console.log(routePath);
  const allPaths = ["home", "projects", "experience", "about"]

  return (
    <header className="AllMaxWidth fixed top-0 px-5 pt-4 flex flex-row items-start justify-between mx-auto z-50 bg-zinc-950">
      <div className="flex flex-row justify-start items-center w-48">
        {/* <SocialIcon url="https://github.com/13zebras" fgColor="gray" bgColor="transparent" style={{ width: 40 }} />
        <SocialIcon url="https://www.linkedin.com/in/tom-stine-13-zebras/" fgColor="gray" bgColor="transparent" style={{ width: 40 }} /> */}
        <Link href="https://github.com/13zebras" className="ml-4" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:github" height={40} className="text-zinc-400 hover:text-zinc-200" />
        </Link>
        <Link href="https://www.linkedin.com/in/tom-stine-13-zebras/" className="ml-4" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:linkedin" height={40} className="text-zinc-400 hover:text-zinc-200" />
        </Link>

      </div>
      <div className="flex flex-row justify-center items-center gap-x-16 pt-2">
        {allPaths.map((pathName: string) => {
          let path = ""
          if (pathName !== "home") {
            path = `/${pathName}`
          } else {
            path = "/"
          }
          console.log('>>>> path', path)
          if (path !== routePath) {
            return (
              <Link href={path} key={pathName} className="uppercase text-md tracking-wider transition-all text-zinc-400 hover:text-zinc-200 hover:underline">{pathName}</Link>
            )
          } else {
            return (
              <span key={pathName} className="uppercase text-md tracking-wider transition-all text-zinc-400 underline">{pathName}</span>
            )
          }

        })}
      </div>
      <Link href="/contact" className="flex flex-row justify-end items-center cursor-pointer w-48 text-zinc-400 hover:text-zinc-200" target="_blank" rel="noopener noreferrer">
        <Icon icon="mdi:email-outline" height={30} className="mt-1 mr-2 hover:text-zinc-200" />
        <span className="pt-2 text-md uppercase tracking-wider hover:underline">Get in touch!</span>
      </Link>

    </header>
  );
}
