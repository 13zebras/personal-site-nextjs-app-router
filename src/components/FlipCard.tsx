'use client'

import '@/styles/flipCard.css'

import { auto, color } from "@cloudinary/url-gen/qualifiers/background";
import { autoGravity, compass } from "@cloudinary/url-gen/qualifiers/gravity";

import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import Modal from "./Modal";
import { Project } from '@/types/projects-types';
import { createPortal } from 'react-dom';
import { fillPad } from "@cloudinary/url-gen/actions/resize";
import { useState } from "react";

export default function FlipCard(props: Project) {
  // console.log('props', props)
  const [showModal, setShowModal] = useState(false);

  const portfolioDiv = document.getElementById('portfolio')

  const handleOpenClick = () => {
    // console.log('Openclicked')
    setShowModal(true)
    document.body.style.overflow = 'hidden';
    document.body.ontouchstart = (e) => {
      e.preventDefault();
    }
  }

  const cld = new Cloudinary({ cloud: { cloudName: 'do82ekomg' } });
  const frontImage = cld.image(props.cldPublicId)
  frontImage.resize(
    fillPad()
      .width(350)
      .height(210)
      .gravity(autoGravity())
      // .gravity(compass('north'))
      .background(color('#0d0d0d'))
  )
  // const project = props.project
  // console.log('props.name', props.name)
  return (
    <div className="flip w-[350px] h-[300px]">
      <div className="flip-content w-full h-full">
        <div className="flip-front absolute w-full h-full bg-neutral-920 border border-stone-600 rounded-md p-[20px] flex flex-col items-center justify-start gap-6">
          <div className="w-full relative">
            <AdvancedImage cldImg={frontImage} />
          </div>

          <h4 className="text-lg font-semibold text-center px-2">
            {props.name}
          </h4>
        </div>
        <div className="flip-back absolute w-full h-full bg-slate-900 border border-slate-600 rounded-md p-8 flex flex-col items-center justify-start gap-6 text-left">
          {props.summary}
          <button onClick={handleOpenClick} className='w-40 h-10 bg-slate-700 hover:bg-slate-600 text-neutral-100 rounded-lg border border-slate-500'>Learn More...</button>
          {showModal && portfolioDiv !== null && createPortal(
            <Modal project={props} onClose={() => setShowModal(false)} />, portfolioDiv
          )}
        </div>
      </div>
    </div >
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