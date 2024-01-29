import '@/styles/globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tom Stine Developer',
  description: 'The personal website and portfolio of Tom Stine, full stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body id="body" className="bg-zinc-950 ">{children}</body>
    </html>
  )
}
