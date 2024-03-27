import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

// todo - need mobile styling and breakpoints

export default function AboutPage() {
  return (
    <div className="bg-zinc-950 w-full max-w-7xl flex flex-col justify-center items-center">
      <Header />
      <About />
      <Footer />
    </div>
  )
}
