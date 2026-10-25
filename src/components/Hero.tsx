import { Link } from '@tanstack/react-router'
import { Typewriter } from 'react-simple-typewriter'

import { blurPlaceholder, imageSrc } from '@/utils/images'
import { BlueskyIcon, EnvelopeIcon, GithubIcon, LinkedinIcon } from '@/utils/svgs'

import BackgroundCircles from './BackgroundCircles'
import MovingDiv from './MovingDiv'

export default function Hero() {
  const typeWriterWords = ['<React, Next.js />', '{TypeScript, Node.js}', 'style: exceptional;']

  return (
    <main
      id='mainHero'
      className='flex h-screen w-screen flex-col items-center justify-start overflow-x-hidden overflow-y-auto px-8 pt-[max(50px,10vh)] pb-[4vh] text-center h600:justify-center h600:overflow-y-hidden h600:py-[4vh] h800:py-0'
    >
      {/** * HERO IMAGE SECTION */}
      <MovingDiv duration={800} delay={200} classname={'heroMovingDiv'}>
        <section className='relative flex aspect-square max-h-[320px] w-full flex-col items-center justify-center'>
          <div className='relative flex animate-fade-in-200 justify-center'>
            <BackgroundCircles />
          </div>
          <div
            id='heroImage'
            className='w-imageCircles max-w-imageCircles relative aspect-square overflow-hidden rounded-full border-2 border-neutral-600'
          >
            <img
              src={imageSrc('tom-chill-center')}
              width={400}
              height={400}
              style={blurPlaceholder('tom-chill-center')}
              alt='Tom Stine'
            />
          </div>
        </section>
      </MovingDiv>

      {/** * HERO TEXT SECTION */}
      <section
        id='heroMainText'
        className='mb-[3.5vh] flex w-full flex-col items-center justify-center pt-2 font-mono h600:mb-[min(5vh,40px)] h600:pt-3 h700:pt-4'
      >
        <MovingDiv duration={800} delay={600} classname={'heroMovingDiv'}>
          <h1 className='mb-[calc(2vh-6px)] text-[1.62rem] font-bold tracking-wide4 text-zinc-200 uppercase h700:xxs:text-[2rem] h800:md:text-[2.5rem]'>
            Tom Stine
          </h1>
          <h2 className='mb-[min(2.5vh,20px)] text-[1.05rem] tracking-wide0 text-zinc-400 uppercase h700:xxs:text-[1.25rem] h700:xxs:tracking-wide1 h800:md:text-[1.37rem] h800:md:tracking-wide15'>
            Frontend Engineer
          </h2>
          <h3 className='flex h-auto items-center justify-center text-[1rem] tracking-wide0 text-zinc-350 xxs:h700:text-[1.3rem] h700:xxs:tracking-wide1 h800:md:text-[1.4]'>
            <Typewriter
              words={typeWriterWords}
              loop={false}
              cursor
              cursorStyle='_'
              cursorBlinking={true}
              typeSpeed={140}
              deleteSpeed={55}
              delaySpeed={1500}
            />
          </h3>
        </MovingDiv>
      </section>

      {/** * HERO LINKS SECTION */}
      <section id='heroLinks' className='flex flex-col items-center justify-center'>
        <MovingDiv duration={800} delay={1000} classname={'heroMovingDiv'}>
          <div
            id='textLinks'
            className='mb-6 flex flex-row flex-wrap items-center justify-center gap-x-14 gap-y-[12px] px-3 text-[1.18rem] tracking-wide15 xs:flex-nowrap sm:text-[1.25rem] h800:mb-6'
          >
            <Link to='/portfolio' className='text-zinc-400 hover:text-zinc-300 hover:underline active:text-sky-400'>
              portfolio
            </Link>
            <Link to='/about' className='text-zinc-400 hover:text-zinc-300 hover:underline active:text-sky-400'>
              about
            </Link>
            <Link to='/experience' className='text-zinc-400 hover:text-zinc-300 hover:underline active:text-sky-400'>
              experience
            </Link>
          </div>
          <div id='iconLinks' className='flex justify-center gap-x-10 text-[2.12rem] text-zinc-400 xs:gap-x-14'>
            <a
              href='https://bsky.app/profile/tomstine.dev/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-zinc-300 active:text-sky-400'
            >
              <BlueskyIcon />
            </a>
            <a
              href='https://www.linkedin.com/in/tom13z/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[2.25rem] text-zinc-400 hover:text-zinc-300 active:text-sky-400'
            >
              <LinkedinIcon />
            </a>
            <a
              href='https://github.com/13zebras'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-zinc-300 active:text-sky-400'
            >
              <GithubIcon />
            </a>
            <Link to='/contact' className='hover:text-zinc-300 active:text-sky-400'>
              <EnvelopeIcon />
            </Link>
          </div>
        </MovingDiv>
      </section>
    </main>
  )
}
