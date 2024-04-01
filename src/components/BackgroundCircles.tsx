// interface Props {
// ringTops: Array<number>
// ringSizes: Array<number>
// }

// function BackgroundCircles({ imageSize, viewportWidth, viewportHeight }: Props) {
// export default function BackgroundCircles({ ringSizes }: Props) {
export default function BackgroundCircles() {
	return (
		<>
			<div className='absolute border rounded-full border-pulse-cyan animate-ping-0 aspect-square bgCirclesPing' />
			<div className='absolute border rounded-full border-pulse-red animate-pulse-2 overflow-visible bgCircles aspect-square scale-[1.2]' />
			<div className='absolute border rounded-full border-pulse-lime animate-pulse-1 overflow-visible bgCircles aspect-square scale-[1.4]' />
		</>
	)
}

// {/* <div style={{ width: ringSizes[0], height: ringSizes[0] }} className='absolute border rounded-full border-pulse-cyan animate-ping-0' />
// 			{/* <div style={{ top: ringTops[0], width: ringSizes[0], height: ringSizes[0] }} className="absolute border rounded-full border-pulse-cyan animate-ping-0" /> */}
// 			<div style={{ width: ringSizes[1], height: ringSizes[1] }} className='absolute border rounded-full border-pulse-red animate-pulse-2 overflow-visible' />
// 			<div style={{ width: ringSizes[2], height: ringSizes[2] }} className='absolute border rounded-full border-pulse-lime animate-pulse-1 overflow-visible' /> */}
