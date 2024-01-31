'use client'

import { AdvancedImage, placeholder, responsive } from '@cloudinary/react';

import { Cloudinary } from "@cloudinary/url-gen";
import Link from "next/link"
import { motion } from 'framer-motion'

type Props = {};

export default function About({ }: Props) {
  const publicIdTom = 'portfolio/tom-chill-center' //publicIdCld
  const cld = new Cloudinary({ cloud: { cloudName: 'do82ekomg' } });
  const fullImage = cld.image(publicIdTom)
  return (
    // <section id="about" className="w-full md:px-9">
    <div className="h-[100vh] relative flex flex-col justify-start lg:justify-center mx-auto items-center max-w-7xl pt-[86px] lg:pt-8 px-0 gap-x-16 gap-y-4 lg:gap-y-24">
      <h3 className="h-[32px] uppercase text-zinc-500 font-mono text-2xl tracking-widexl">who is tom stine?</h3>
      <div className="w-[80%] sm:w-[70%] lg:w-[85%] flex flex-col lg:flex-row justify-start lg:justify-center mx-auto items-center lg:items-start gap-x-10 gap-y-6 lg:gap-y-0">
        <motion.div
          initial={{
            x: -400,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: false }}
          className="w-40 h-40 xs:w-52 xs:h-52 sm:w-60 sm:h-60 lg:w-[320px] lg:h-[400px] xl:w-[400px] xl:h-[400px] p-0 border-zinc-800 rounded-full lg:rounded-lg relative display:block "
        >
          <AdvancedImage cldImg={fullImage} plugins={[placeholder({ mode: 'blur' })]} />

        </motion.div>

        <div className="mb-0 px-0 text-center lg:text-left max-w-[560px] lg:max-w-[clamp(510px,58%,600px)]">
          {/* <div className="-mb-32 xs:-mb-20 sm:mb-0 px-0 md:px-4 "> */}
          <h4 className="text-2xl xs:text-3xl font-semibold pb-4">
            <span className="underline decoration-[#fa0]/60">More</span> about Tom...
          </h4>
          <p className="text-left text-md md:text-lg max-h-[calc((25vh-112px)*4)] overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Te quo atqui libris, dicta aeque usu an. An dicant apeirian qui, at vide indoctum pro. Harum repudiandae sea at. Elitr iudico dignissim ea sed, duis moderatius definitiones no cum. Sit fugit nostrum et. <Link href="" className="text-blue-500 hover:text-sky-500 hover:underline decoration-sky-500 pt-0 mt-0 font-bold text-md lg:text-lg text-right px-4">Read More --&gt;</Link>
          </p>


        </div>
      </div>
    </div>
    // </section>
  );
}
