'use client'

import Link from 'next/link'
import { GithubIcon } from '@/utils/svgs'

export default function BounceButton() {
	const bounceButtonStyle = {
		animationName: 'bounceButton',
		animationDuration: '1000ms',
		animationFillMode: 'both',
		animationTimingFunction: 'cubic-bezier(0, 0, 0.5, 1)',
		animationDelay: '6000ms',
	}

	return (
		<button style={bounceButtonStyle} type='button' className='mt-10 sm:mt-12 mb-4 sm:mb-0 py-[4px] w-[260px] xs:w-[290px] buttonMain text-[1rem]'>
			<Link href='https://github.com/13zebras?tab=repositories' target='_blank' rel='noopener noreferrer'>
				<GithubIcon className='mr-2 text-xl inline mb-[2px]' />
				Github
			</Link>
		</button>
	)
}
