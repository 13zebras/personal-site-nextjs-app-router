'use client'

// import Image from "next/image";
import Skill from "./Skill";
import { motion } from "framer-motion"

type Props = {};

export default function Skills({ }: Props) {
  return (
    <section id="skills" className="w-full snap-start md:px-9">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex flex-col justify-center items-center gap-12 text-center md:text-left max-w-[2000] xl:px-10 min-h-screen xl:space-y-0 mx-auto"
      >
        <h3 className="h-[32px] uppercase text-zinc-500 tracking-wide0font-mono text-2xl">s k i l l s</h3>
        {/* <h3 className="text-zinc-400" >Hover over a skill for current proficiency</h3> */}
        <h3 className="text-base uppercase text-zinc-500">Hover over a skill for proficiency</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </motion.div>
    </section>
  );
}
