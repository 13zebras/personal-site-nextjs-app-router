'use client'

import '@/styles/flipCard.css'

import { IProject } from './Portfolio';
import Image from "next/image";

export default function FlipCard(props: IProject) {
  console.log('props', props)
  // const project = props.project
  console.log('props.name', props.name)
  return (
    <div className="flip w-[280px] h-[350px]">
      <div className="flip-content w-full h-full">
        <div className="flip-front absolute w-full h-full bg-neutral-950/50 border border-stone-600 rounded-md p-[20px] flex flex-col items-center justify-start gap-6">
          <div className="w-full relative">
            <Image
              src={`https://placehold.co/300x300/003300/003300/png`}
              width={240}
              height={240}
              // fill
              alt="placeholder image"
              style={{ objectFit: "contain" }}
            // className="rounded-full"
            />
          </div>

          <h4 className="text-lg font-semibold text-center px-2">
            {props.name}
          </h4>
        </div>
        <div className="flip-back absolute w-full h-full bg-slate-900 border border-slate-600 rounded-md p-8 flex flex-col items-center justify-start gap-6 text-left">
          {props.description}
        </div>
      </div>
    </div>
  )



}


{/* <div class="flip">
  <div class="flip-content">
    <div class="flip-front">
      <img src="https://www.fillmurray.com/150/150" />
    </div>
    <div class="flip-back">
      <strong>BILL MURRAY</strong>
    </div>
  </div>
</div> */}