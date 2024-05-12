import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
// import Keyframe from '@/components/Keyframe'

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

export default function Home() {
  return (
    <div className='bg-zinc-950 w-full'>
      <style>{keyframeCss}</style>
      {/* <Keyframe
        name='movingDiv'
        animationProps={{
          '0%': { opacity: 0, transform: 'translateY(100px)', scale: 0.8 },
          '90%': { opacity: 1, scale: 1 },
          '100%': { opacity: 1, transform: 'translateY(0)', scale: 1 },
        }}
      /> */}
      <Hero />
      <Footer />
    </div>
  )
}


