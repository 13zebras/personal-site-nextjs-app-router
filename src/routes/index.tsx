import { createFileRoute } from '@tanstack/react-router'

import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

import homeCss from '@/styles/home.css?url'

export const Route = createFileRoute('/')({
  head: () => ({ links: [{ rel: 'stylesheet', href: homeCss }] }),
  component: Home,
})

function Home() {
  return (
    <div className='w-full bg-zinc-950'>
      <Hero />
      <Footer />
    </div>
  )
}
