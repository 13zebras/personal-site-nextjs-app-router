'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  href: string
  className?: string
  target?: string
  rel?: string
}

const MobileTextLink = ({ children, href, className, target, rel }: Props) => {
  return (
    <Link
      href={href}
      className={`text-lg font-bold uppercase text-zinc-400 underline hover:text-zinc-200 active:text-sky-400 ${className || ''}`}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  )
}

export default MobileTextLink
