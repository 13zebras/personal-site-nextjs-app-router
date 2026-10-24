import { createFileRoute } from '@tanstack/react-router'

import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className='flex w-full flex-col items-center justify-center overflow-hidden bg-zinc-950'>
      <Header />
      <About />
      <Footer />
    </div>
  )
}
