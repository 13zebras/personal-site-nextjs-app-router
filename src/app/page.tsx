import '@/styles/home.css'

import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className='w-full bg-zinc-950'>
      <Hero />
      <Footer />
    </div>
  )
}
