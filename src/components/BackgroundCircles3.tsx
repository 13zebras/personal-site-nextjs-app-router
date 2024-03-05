// 'use client'

// import { useEffect, useRef, useState } from 'react';

// type Props = {
//   imageSize: number
//   viewportWidth: number
//   viewportHeight: number
// }

type Props = {
  ringTops: Array<number>,
  ringSizes: Array<number>,
}

// function BackgroundCircles({ imageSize, viewportWidth, viewportHeight }: Props) {
function BackgroundCircles({ ringTops, ringSizes }: Props) {

  return (
    <>
      <div style={{ top: ringTops[0], width: ringSizes[0], height: ringSizes[0] }} className="absolute border rounded-full border-pulse-cyan2 animate-ping-0" />
      <div style={{ top: ringTops[1], width: ringSizes[1], height: ringSizes[1] }} className="absolute border rounded-full border-pulse-lime animate-pulse-37" />
      <div style={{ top: ringTops[2], width: ringSizes[2], height: ringSizes[2] }} className="absolute border rounded-full border-pulse-red animate-pulse-25" />

    </>
  );
}

export default BackgroundCircles;


// const smallestViewport = Math.min(viewportWidth, viewportHeight)

// let ringSidePadding = 0

// if (smallestViewport > 800) {
//   ringSidePadding = 30
// } else if (smallestViewport > 480) {
//   ringSidePadding = Math.round((smallestViewport - 480) / 10)
// }

// const maxRingGap = 120

// let ringGap = Math.round((smallestViewport - ringSidePadding - imageSize) / 3)

// if (ringGap > maxRingGap) {
//   ringGap = maxRingGap
// }

// let ringSizes: Array<number> = []

// const ringScale0 = 4.0
// const maxRing0 = (imageSize + ringGap * 3)

// if (smallestViewport - ringSidePadding > maxRing0) {
//   ringSizes[0] = Math.round(maxRing0 / ringScale0)
// } else {
//   ringSizes[0] = Math.round((smallestViewport - ringSidePadding) / ringScale0)
// }

// for (let i = 1; i < 3; i++) {
//   ringSizes[i] = Math.round(imageSize + ringGap * i)
// }

// const ringTop = ringSizes.map((y) => {
//   return (imageSize - y) / 2
// })

// console.log('>>>> ringGap', ringGap)
// console.log('>>>> ringSizes', ringSizes)
// console.log('>>>> ringSidePadding', ringSidePadding)
