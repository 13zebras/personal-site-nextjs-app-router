'use client'

import '@/styles/flipCard.css'

import { fill, fillPad } from "@cloudinary/url-gen/actions/resize";
import { useEffect, useState } from "react";

import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import Modal from "./Modal";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { color } from "@cloudinary/url-gen/qualifiers/background";
import { createPortal } from 'react-dom';
import { motion } from "framer-motion"

type FlipCardProps = {
  index: number,
  name: string,
  url: string,
  summary: string,
  cldPublicId: string,
  description: string,
  stack: string,
}

export default function FlipCardMotion({ index, ...project }: FlipCardProps) {
  const [showModal, setShowModal] = useState(false)

  const handleOpenClick = () => {
    console.log('>>>> Openclicked')
    setShowModal(true)

    document.body.style.overflow = 'hidden';
    document.body.ontouchstart = (e) => {
      e.preventDefault()
    }
  }

  const random1 = Math.random()
  const random2 = Math.random()
  let xSign = -1
  let ySign = -1
  if (random2 < 0.50) {
    xSign = 1
  }
  if (random1 < 0.50 && index > 3) {
    ySign = 1
  }
  const iX = Math.trunc(random1 * xSign * 600)
  const iY = Math.trunc(random2 * ySign * 500)
  const iScale = parseFloat((Math.random() * 0.4 + 0.1).toFixed(2))

  // console.log('>>> index, iX, iY, iScale', index, iX, iY, iScale)
  // console.log('>>>> motionValues', motionValues)

  const cld = new Cloudinary({ cloud: { cloudName: 'do82ekomg' } });
  const frontImage = cld.image(project.cldPublicId)
  frontImage.resize(
    fillPad()
      .width(300)
      .height(180)
      .gravity(autoGravity())
      // .gravity(compass('north'))
      .background(color('#0d0d0d'))
  )
  // const project = project.project
  // console.log('project.name', project.name)
  return (
    <motion.div
      initial={{
        x: iX,
        y: iY,
        scale: iScale,
        opacity: 0,
      }}
      animate={{
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 3.0,
        delay: 0.2,
      }}
      className="FlipContainer w-[280px] h-[300px]">
      <div className="FlipContent w-full h-full">
        <div className="FlipFront absolute w-full h-full bg-neutral-920 border border-neutral-700 rounded-md p-3 flex flex-col items-center justify-start gap-6">
          <div className="w-full relative">
            <AdvancedImage cldImg={frontImage} />
          </div>

          <h4 className="text-lg font-semibold text-center text-gray-200 px-2">
            {project.name}
          </h4>
        </div>
        <div className="FlipBack absolute w-full h-full bg-slate-920 border border-slate-600 rounded-md p-8 flex flex-col items-center justify-start gap-6 text-left">
          {project.summary}
          <button onClick={handleOpenClick} className='w-40 h-10 bg-slate-700 hover:bg-slate-600 text-neutral-100 rounded-lg border border-slate-500'>Learn More...</button>
          {showModal && createPortal(
            <Modal project={project} onClose={() => setShowModal(false)} />, document.body
          )}
        </div>
      </div>
    </motion.div >
  )
}


/************************************************************


HOW TO USE CSS ONLY FOR ANIMATIONS IN FLIPCARD:

To use a variable in CSS animations with a value set by JavaScript, you can take advantage of CSS custom properties (also known as CSS variables). Here's how you can achieve this:

1. Define a CSS custom property in your stylesheet:

:root {
  --distanceUp: 0;    // Default value
}

.animated-div {
  animation: moveUp 1s ease-in-out infinite alternate;
}

@keyframes moveUp {
  100% {
    transform: translateY(var(--distanceUp));
  }
}

2. In your JavaScript code, you can update the value of the `--distanceUp` custom property using the `style.setProperty()` method:

const animatedDiv=document.querySelector('.animated-div');
const distanceUp='-300px'; // or any other value you want
animatedDiv.style.setProperty('--distanceUp', distanceUp);

This code selects the element with the class `animated-div` and sets the value of the `--distanceUp` custom property to `-300px`. You can also use JavaScript to update the custom property value dynamically, allowing you to change the animation behavior on the fly. 

let distanceUp='-300px';

function updateAnimation() {
  const animatedDiv=document.querySelector('.animated-div');
  animatedDiv.style.setProperty('--distanceUp', distanceUp);
}

// Update the animation initially
updateAnimation();

// Change the distanceUp value after a certain time
setTimeout(()=> {
    distanceUp='-500px';
    updateAnimation();
  }, 2000); // Change the animation after 2 seconds

In this example, the animation will initially use the value `-300px` for the `--distanceUp` custom property. After 2 seconds, the value will be updated to `-500px`, changing the animation behavior. Custom properties provide a powerful way to control CSS values from JavaScript, enabling dynamic and responsive animations based on user interactions, data updates, or other conditions in your application.



************************************************************/