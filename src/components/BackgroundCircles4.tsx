// 'use client'

type Props = {
  imageSize: number
  viewportWidth: number
}

function BackgroundCircles({ imageSize, viewportWidth }: Props) {

  const ringBreak = 560

  let ringGap = 40
  if (viewportWidth > 850) {
    ringGap = 100
  } else if (viewportWidth >= ringBreak) {
    ringGap = 120 * (viewportWidth / 980)
  } else {
    ringGap = 120 * (viewportWidth / 920)
  }

  let ringSizes: Array<number> = []

  for (let i = 0; i <= 3; i++) {
    if (viewportWidth >= ringBreak) {
      ringSizes[i] = Math.round(imageSize + ringGap * (i + 1))
    } else {
      (i === 0) ? ringSizes[i] = 0 : ringSizes[i] = Math.round(imageSize + ringGap * i)
    }
  }

  console.log('>>>> ringSizes', ringSizes)

  const ringTop = ringSizes.map((y) => {
    return (imageSize - y) / 2
  })

  return (
    <>
      <div style={{ top: ringTop[0], width: ringSizes[0], height: ringSizes[0] }} className="absolute border border-pulse-cyan2 rounded-full animate-pulse-25 hidden xs:block" />
      <div style={{ top: ringTop[1], width: ringSizes[1], height: ringSizes[1] }} className="absolute border border-pulse-lime2 rounded-full animate-pulse-37" />
      <div style={{ top: ringTop[2], width: ringSizes[2], height: ringSizes[2] }} className="absolute border border-pulse-red2 rounded-full animate-pulse-31" />
      <div style={{ top: ringTop[3], width: ringSizes[3], height: ringSizes[3] }} className="absolute border-[4px] border-pulse-gray2 rounded-full animate-ping-4isR z-0" />
    </>
    // <>
    //   <div style={{ top: ringTop[0], width: ringSizes[0], height: ringSizes[0] }} className="absolute border border-pulse-cyan2 rounded-full animate-pulse-25" />
    //   <div style={{ top: ringTop[1], width: ringSizes[1], height: ringSizes[1] }} className="absolute border border-pulse-lime2 rounded-full animate-pulse-35" />
    //   <div style={{ top: ringTop[2], width: ringSizes[2], height: ringSizes[2] }} className="absolute border border-pulse-red2 rounded-full animate-pulse-30" />
    //   <div style={{ top: ringTop[3], width: ringSizes[3], height: ringSizes[3] }} className="absolute border-[4px] border-pulse-gray2 rounded-full animate-ping-4isR z-0" />
    // </>

  );
}

export default BackgroundCircles;
