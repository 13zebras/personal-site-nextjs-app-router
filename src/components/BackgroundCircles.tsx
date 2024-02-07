// 'use client'

function BackgroundCircles({ imageSize }: { imageSize: number }) {

  const maxRings = [200, 440, 560, 680]
  const maxImage = 320
  // if (imageSize <= 280) {
  //   ringSizes = [200, 440, 560, 680]
  // }

  const ringSizes = maxRings.map((x) => {
    return x * (imageSize / maxImage)
  })
  const ringTop = ringSizes.map((y) => {
    return (imageSize - y) / 2
  })
  return (
    <>
      <div style={{ top: ringTop[0], width: ringSizes[0], height: ringSizes[0] }} className="absolute border border-gray-700/70 rounded-full animate-ping-45 z-0" />
      <div style={{ top: ringTop[1], width: ringSizes[1], height: ringSizes[1] }} className="absolute border border-cyan-900/60 rounded-full animate-pulse-25" />
      <div style={{ top: ringTop[2], width: ringSizes[2], height: ringSizes[2] }} className="absolute border border-lime-900/50 rounded-full animate-pulse-35" />
      <div style={{ top: ringTop[3], width: ringSizes[3], height: ringSizes[3] }} className="absolute border border-red-900/50 rounded-full animate-pulse-30" />
    </>
    // </div>
  );
}

export default BackgroundCircles;
