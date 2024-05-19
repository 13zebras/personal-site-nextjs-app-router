const BackgroundCircles = () => {
	return (
		<>
			<div className='absolute border rounded-full border-pulse-red animate-ping-md h900:md:animate-ping-lg aspect-square w-imageCircles max-w-imageCircles' />
			<div className='absolute border rounded-full border-pulse-cyan animate-pulse-cyan overflow-visible aspect-square scale-[1.2] h900:md:scale-[1.25] w-imageCircles max-w-imageCircles' />
			<div className='absolute border rounded-full border-pulse-lime animate-pulse-lime overflow-visible aspect-square scale-[1.4] h900:md:scale-[1.5] w-imageCircles max-w-imageCircles' />
		</>
	)
}

export default BackgroundCircles
