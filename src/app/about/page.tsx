import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const keyframeCss = `
    @keyframes movingDiv {
        0% {
            opacity: 0;
            transform: translateY(100px);
            scale: 0.8;
        }
        90% {
            opacity: 1;
            scale: 1;
        }
        100% {
            opacity: 1;
            transform: translateY(0);
            scale: 1;
        }
    }
  `

export default function AboutPage() {
  return (
    <div className='bg-zinc-950 w-full flex flex-col justify-center items-center overflow-hidden'>
      <style>{keyframeCss}</style>
      <Header />
      <About />
      <Footer />
    </div>
  )
}
