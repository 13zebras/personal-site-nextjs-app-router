import type { HeaderPaths } from '@/types/allTypes'

export function getHeaderPaths(): HeaderPaths[] {
	// console.log('>>>> getHeaderPaths **********************************')
	return [
		{
			name: 'home',
			path: '/',
		},
		{
			name: 'portfolio',
			path: '/portfolio',
		},
		{
			name: 'experience',
			path: '/experience',
		},
		{
			name: 'about tom',
			path: '/about',
		},
	]
}
