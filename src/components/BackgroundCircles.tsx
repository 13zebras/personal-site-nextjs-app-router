export default function BackgroundCircles() {
	return (
		<>
			<div className='absolute border rounded-full border-pulse-red animate-ping-0 aspect-square w-PingCircle' />
			<div className='absolute border rounded-full border-pulse-cyan animate-pulse-2 overflow-visible aspect-square scale-[1.2] w-ImageCircles' />
			<div className='absolute border rounded-full border-pulse-lime animate-pulse-1 overflow-visible aspect-square scale-[1.4] w-ImageCircles' />
		</>
	)
}
