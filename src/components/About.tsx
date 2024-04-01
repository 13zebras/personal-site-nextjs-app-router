'use client'

import { AdvancedImage, placeholder } from '@cloudinary/react'

import { Cloudinary } from '@cloudinary/url-gen'

export default function About() {
	const publicIdTom = 'portfolio/tom-chill-center' // publicIdCld
	const cld = new Cloudinary({ cloud: { cloudName: 'do82ekomg' } })
	const fullImage = cld.image(publicIdTom)

	return (
		<main className='max-w-[832px] flex flex-col justify-start items-center p-main-s md:p-main-l'>
			<h1 className='animate-fade-in-075 pb-6 sm:pb-10 md:pb-14 uppercase text-zinc-400 font-mono text-2xl tracking-wide1 xs:tracking-wide3 sm:tracking-wide6 z-10'>who is tom stine?</h1>
			<div id='about' className='px-8 2xs:px-10 sm:px-12 md:px-14 flex flex-col md:block justify-start lg:justify-center items-center overflow-x-hidden overflow-y-auto'>
				<div
					// initial={{ scale: 0.9, opacity: 0 }}
					// animate={{ scale: 1, opacity: 1 }}
					// transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
					className='animate-fade-in-scale-250 w-[75vw] max-w-[320px] xs:w-[320px] md:w-[35vw] md:max-w-[300px] lg:w-[300px] aspect-square border-2 md:border  border-neutral-400 rounded-full md:rounded-lg overflow-hidden mb-6 md:float-right md:ml-8 md:mb-4 md:mr-2'
				>
					<AdvancedImage cldImg={fullImage} plugins={[placeholder({ mode: 'blur' })]} className='w-[100%] h-[100%]' />
				</div>

				<div className='animate-fade-in-075 text-left text-base sm:text-base text-zinc-200'>
					<p className='pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<p className='pb-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<p className='pb-4'>Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. His an amet petentium voluptatibus, modo malis error nec no. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te.</p>
					<p className='pb-4'>Lacus vestibulum sed arcu non odio. Enim sed faucibus turpis in. Consequat id porta nibh venenatis cras. Orci ac auctor augue mauris augue neque gravida in. Turpis massa tincidunt dui ut ornare lectus sit. Scelerisque mauris pellentesque pulvinar pellentesque habitant.</p>
					<p className='pb-4'>Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Nisi porta lorem mollis aliquam. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus.</p>
				</div>
			</div>
		</main>
	)
}
