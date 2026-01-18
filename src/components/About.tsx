'use client'

import { AdvancedImage, placeholder } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { quality } from '@cloudinary/url-gen/actions/delivery'
import { fill, scale } from '@cloudinary/url-gen/actions/resize'
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity'

// import { useEffect, useState } from 'react'

export default function About() {
  const publicIdTom = 'portfolio/tom-chill-center' // publicIdCld
  const cld = new Cloudinary({
    cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY },
  })
  const fullImage = cld.image(publicIdTom)
  fullImage.resize(scale().width(300)).delivery(quality(80))

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
          <AdvancedImage
            cldImg={fullImage}
            plugins={[placeholder({ mode: 'blur' })]}
            className='relative z-20 max-w-[260px] overflow-clip rounded-full border-2 border-neutral-600 xs:max-w-[280px] sm:max-w-[300px] lg:rounded-xl'
            alt='Tom Stine'
          />
        </div>
        <div className='w-full max-w-[550px] text-left text-base text-zinc-300 lg:order-1 lg:basis-full'>
          <p className='pb-4'>
            As a frontend engineer specializing in React, Next.js, TypeScript, React Query, and React Testing Library, I
            bring a diverse range of experiences to my work. Though I first dabbled in web development during the late
            1990s, I didn't commit to coding entirely until 2021, when I left my teaching career.
          </p>
          <p className='pb-4'>
            I began 2022 by joining a small web3 development studio, building frontends for various NFT projects. When
            the NFT market declined later that year, I moved to Bass Pro Shops as a frontend developer, working on a
            React and Next.js frontend for their eCommerce site. I'm now a frontend engineer at Remote.
          </p>
          <p className='pb-4'>
            Beyond web development, I have extensive experience teaching a wide range of subjects to learners of all
            ages. Teaching has always been my passion, and I believe deeply in helping everyone learn.
          </p>
          <p className='pb-4'>
            Effective teaching, contrary to popular belief, isn't primarily about the teacher's mastery of subject
            matter. Rather, it's about understanding each student's individual needs and helping them take the next step
            toward acquiring the knowledge and understanding they seek.
          </p>
          <p className='pb-4'>
            In addition to teaching and coding, I spent two decades trading financial assets, including precious metals,
            bonds, futures, and forex, for my personal accounts.
          </p>
          <p className='pb-4'>
            I have an insatiable thirst for learning, drawn particularly to technology, history, politics, international
            affairs, psychology, and geography. Maps have always captivated me; my daughter jokes that I seem to have "a
            map in my head," reflecting the countless hours I spent studying them as a child.
          </p>
          <p className='pb-4'>
            Naturally, I'm a true lifelong learner, eager to engage with any subject that comes my way.
          </p>
          <p className='pb-0'>
            I grew up on a dairy farm in rural Missouri, part of a long line of farmers. While I can repair nearly
            anything with a hammer, duct tape, WD-40, wire, or twine, milking cows never appealed to me. Instead, I
            pursued more intellectually stimulating challenges. This varied background has given me a cosmopolitan
            global perspective, one that values and appreciates the inherent worth of all people, regardless of country,
            background, orientation, age, or any other factor that contributes to humanity's rich diversity.
          </p>
        </div>
        <div className='mt-1 w-full max-w-[550px] lg:order-3 lg:max-w-[290px]'>
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
        </div>
      </div>
    </main>
  )
}
