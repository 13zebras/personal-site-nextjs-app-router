interface Props {
  ringTops: Array<number>
  ringSizes: Array<number>
}

// function BackgroundCircles({ imageSize, viewportWidth, viewportHeight }: Props) {
export default function BackgroundCircles({ ringTops, ringSizes }: Props) {
  return (
    <>
      <div style={{ top: ringTops[0], width: ringSizes[0], height: ringSizes[0] }} className="absolute border rounded-full border-pulse-cyan animate-ping-0" />
      <div style={{ top: ringTops[1], width: ringSizes[1], height: ringSizes[1] }} className="absolute border rounded-full border-pulse-red animate-pulse-2" />
      <div style={{ top: ringTops[2], width: ringSizes[2], height: ringSizes[2] }} className="absolute border rounded-full border-pulse-lime animate-pulse-1" />

    </>
  )
}
