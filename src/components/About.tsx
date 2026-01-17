'use client'

import { AdvancedImage, placeholder } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { quality } from '@cloudinary/url-gen/actions/delivery'
import { fill, scale } from '@cloudinary/url-gen/actions/resize'
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity'

// import { useEffect, useState } from 'react'
import MovingDiv from './MovingDiv'

export default function About() {
  const publicIdTom = 'portfolio/tom-chill-center' // publicIdCld
  const cld = new Cloudinary({
    cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY },
  })
  const fullImage = cld.image(publicIdTom)
  fullImage.resize(scale().width(300)).delivery(quality(80))

  const mdDuration = 800
  const mdDelay = 500

  return (
    <main
      id='about'
      className='flex h-full w-screen flex-col items-center justify-start overflow-y-auto pb-12 pt-14 md:pt-24 lg:pt-[max(6rem,9vh)]'
    >
      <h1 className='z-10 animate-fade-in-075 pb-6 font-mono text-[1.35rem] uppercase tracking-wide2 text-zinc-400 xs:text-2xl xs:tracking-wide4 sm:pb-10 sm:tracking-wide6 md:pb-12'>
        about tom stine
      </h1>
      <div
        id='about'
        className='flex h-full w-full flex-col items-center justify-start gap-6 overflow-x-hidden overflow-y-hidden px-8 xxs:px-10 xs:px-12 md:flex-wrap lg:max-w-[920px] lg:px-0'
      >
        <div className='lg:order-2'>
          <MovingDiv duration={mdDuration} delay={1 * mdDelay}>
            <AdvancedImage
              cldImg={fullImage}
              plugins={[placeholder({ mode: 'blur' })]}
              className='relative z-20 max-w-[260px] overflow-clip rounded-full border-2 border-neutral-600 xs:max-w-[280px] sm:max-w-[300px] lg:rounded-xl'
              alt='Tom Stine'
            />
          </MovingDiv>
        </div>
        <div className='w-full max-w-[550px] text-left text-base text-zinc-300 lg:order-1 lg:basis-full'>
          <MovingDiv classname='pb-4' duration={mdDuration} delay={1 * mdDelay}>
            As a frontend engineer specializing in React, Next.js, TypeScript, React Query, and React Testing Library, I
            bring a diverse range of experiences to the table. While I had dabbled in web development since the late
            1990s, it wasn't until 2021, after leaving my teaching career, that I decided to pursue coding full-time. I
            kicked off 2022 by joining a small web3 development studio, where I built frontends for various NFT
            projects. When the NFT market took a downturn later that year, I transitioned to Bass Pro Shops as a
            frontend developer, where I worked on a React/Next.js based frontend for the existing eCommerce website. I
            am currently a frontend engineer with Remote.
          </MovingDiv>
          <MovingDiv classname='pb-4' duration={mdDuration} delay={2 * mdDelay}>
            Beyond web development, I have extensive experience teaching a wide variety of subjects to learners of all
            ages. Teaching has always been a passion of mine, and I firmly believe in the possibility of helping
            everyone to learn. Effective teaching, contrary to popular belief, is less about the teacher thoroughly
            knowing their subject matter. Instead, it is far more about understanding each student's needs and helping
            him or her take the next step towards acquiring the knowledge or understanding they require.
          </MovingDiv>
          <MovingDiv classname='pb-4' duration={mdDuration} delay={3 * mdDelay}>
            In addition to teaching and coding, I spent two decades trading various financial assets, including precious
            metals, bonds, futures, and forex, for my personal accounts.
          </MovingDiv>
          <MovingDiv classname='pb-4' duration={mdDuration} delay={4 * mdDelay}>
            I have an insatiable thirst for learning, with a particular fascination for technology, history, politics,
            international affairs, psychology, and geography. Maps have always held a special appeal for me, leading my
            daughter to joke that I seem to have "a map in my head" due to the countless hours spent studying them as a
            child.
          </MovingDiv>
          <MovingDiv classname='pb-4' duration={mdDuration} delay={5 * mdDelay}>
            Needless to say, I have been a true lifelong learner, eager to tackle any subject that comes my way.
          </MovingDiv>
          <MovingDiv classname='pb-0' duration={mdDuration} delay={6 * mdDelay}>
            Finally, it's worth mentioning that I grew up on a dairy farm in rural Missouri, coming from a long line of
            farmers. While I can fix almost anything with a hammer, duct tape, WD-40, and wire or twine, milking cows
            never appealed to me. Instead, I pursued more intellectually stimulating and challenging endeavors. My
            varied background has imbued me with a cosmopolitan and global perspective, one that values and appreciates
            the inherent worth of all people, regardless of their country, background, orientation, age, or any other
            factor that contributes to the rich diversity of humanity.
          </MovingDiv>
        </div>
        <div className='mt-1 w-full max-w-[550px] lg:order-3 lg:max-w-[290px]'>
          <MovingDiv duration={mdDuration} delay={2 * mdDelay}>
            <h3 className='pb-4 text-lg font-bold tracking-wide1 text-zinc-400'>Blog Posts & Essays:</h3>
            <div className='flex flex-col items-start justify-start gap-y-3 px-8 text-base leading-snug text-sky-350 lg:px-0 lg:text-[0.96rem] lg:leading-tight'>
              <a
                className='block hover:text-sky-300 hover:underline active:text-sky-200'
                href='https://blog.13z.dev/mastering-the-ternary-operator-lessons-from-a-job-interview'
                target='_blank'
                rel='noreferrer'
              >
                Mastering the Ternary Operator: Lessons from a Job Interview
              </a>
            </div>
          </MovingDiv>
        </div>
      </div>
    </main>
  )
}
