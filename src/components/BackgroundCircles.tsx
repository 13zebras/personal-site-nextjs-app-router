export default function BackgroundCircles() {
	return (
		<>
			<div className='absolute border rounded-full border-pulse-red animate-ping-0 aspect-square bgCirclesPing' />
			<div className='absolute border rounded-full border-pulse-cyan animate-pulse-2 overflow-visible bgCircles aspect-square scale-[1.2]' />
			<div className='absolute border rounded-full border-pulse-lime animate-pulse-1 overflow-visible bgCircles aspect-square scale-[1.4]' />
		</>
	)
}
