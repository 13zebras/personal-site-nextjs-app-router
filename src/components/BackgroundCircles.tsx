const BackgroundCircles = () => {
  return (
    <>
      <div className='w-imageCircles max-w-imageCircles absolute aspect-square animate-ping-md rounded-full border border-pulse-red h900:md:animate-ping-lg' />
      <div className='w-imageCircles max-w-imageCircles absolute aspect-square scale-[1.2] animate-pulse-cyan overflow-visible rounded-full border border-pulse-cyan h900:md:scale-[1.25]' />
      <div className='w-imageCircles max-w-imageCircles absolute aspect-square scale-[1.4] animate-pulse-lime overflow-visible rounded-full border border-pulse-lime h900:md:scale-[1.5]' />
    </>
  )
}

export default BackgroundCircles
