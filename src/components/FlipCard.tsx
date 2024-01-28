'use client'

import '@/styles/flipCard.css'

import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { IProject } from './Portfolio';
import Modal from "./Modal";
import { compass } from "@cloudinary/url-gen/qualifiers/gravity";
import { createPortal } from 'react-dom';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { useState } from "react";

export default function FlipCard(props: IProject) {
  // console.log('props', props)
  const [showModal, setShowModal] = useState(false);

  const portfolioDiv = document.getElementById('portfolio')

  const handleOpenClick = () => {
    // console.log('Openclicked')
    setShowModal(true)
    document.body.style.overflow = 'hidden';
  }

  const cld = new Cloudinary({ cloud: { cloudName: 'do82ekomg' } });
  const frontImage = cld.image(props.cldPublicId)
  frontImage.resize(
    fill()
      .width(350)
      .height(210).
      gravity(compass('north'))
  )
  // const project = props.project
  // console.log('props.name', props.name)
  return (
    <div className="flip w-[350px] h-[300px]">
      <div className="flip-content w-full h-full">
        <div className="flip-front absolute w-full h-full bg-neutral-950/50 border border-stone-600 rounded-md p-[20px] flex flex-col items-center justify-start gap-6">
          <div className="w-full relative">
            <AdvancedImage cldImg={frontImage} />
          </div>

          <h4 className="text-lg font-semibold text-center px-2">
            {props.name}
          </h4>
        </div>
        <div className="flip-back absolute w-full h-full bg-slate-900 border border-slate-600 rounded-md p-8 flex flex-col items-center justify-start gap-6 text-left">
          {props.summary}
          <button onClick={handleOpenClick} className='w-24 h-8 bg-slate-800 text-white'>More...</button>
          {showModal && portfolioDiv !== null && createPortal(
            <Modal description={props.description} image={props.cldPublicId} onClose={() => setShowModal(false)} />, portfolioDiv

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