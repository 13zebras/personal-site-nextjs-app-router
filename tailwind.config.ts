import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		screens: {
			xxs: '370px',
			xs: '480px',
			xsP: '520px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			h600: { raw: '(min-height: 600px)' },
			h700: { raw: '(min-height: 700px)' },
			h800: { raw: '(min-height: 800px)' },
			h900: { raw: '(min-height: 900px)' },
		},
		letterSpacing: {
			normal: '0',
			wide0: '0.05em',
			wide1: '0.1em',
			wide15: '0.15em',
			wide2: '0.2em',
			wide3: '0.3em',
			wide4: '0.4em',
			wide6: '0.6em',
		},
		extend: {
			fontSize: {
				xxs: '0.65rem',
				md: '0.94rem',
			},
			colors: {
				slate: {
					800: '#1e293b',
					850: '#151c32',
					900: '#0f172a',
					920: '#0a1224',
				},
				gray: {
					700: '#374151',
					750: '#303849',
					800: '#1f2937',
					850: '#19222e',
					900: '#111827',
					920: '#080b18',
				},
				zinc: {
					300: '#d4d4d8',
					350: '#bfbfc4',
					370: '#b1b1b8',
					400: '#a1a1aa',
					450: '#8a8a93',
					500: '#71717a',
					800: '#27272a',
					850: '#202024',
					910: '#131316',
					920: '#0e0e13',
					930: '#0b0b10',
					950: '#070709',
					959: '#070709/95',
				},
				neutral: {
					920: '#101010',
				},
				red: {
					550: '#ff0022',
				},
				sky: {
					200: '#bae6fd',
					300: '#7dd3fc',
				},
				pulse: {
					cyan: '#00ddff',
					lime: '#55cc00',
					red: '#cf0028',
					gray: '#111c26',
				},
			},
			animation: {
				// 'ping-0': 'ping-0 5.5s linear infinite',
				'ping-0': 'ping-0 5.5s cubic-bezier(0, 0, 0.7, 1) infinite',
				'pulse-1': 'pulse-1 4.3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'pulse-2': 'pulse-2 6.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'pulse-skel': 'pulse-skel 2s ease 0s infinite',
				'pulse-out': 'pulse-out 10s ease 0s 1 both',
				'fade-in-1000': 'fade-in 10s ease-out 0s 1 both',
				'fade-in-100': 'fade-in 1s ease-out 0s 1 both',
				'fade-in-075': 'fade-in 750ms ease-out 0s 1 both',
				'fade-in-050': 'fade-in 500ms ease-out 0s both',
				'fade-scale-slide': 'fade-in-scale-slide 700ms cubic-bezier(0.5, 0, 0.7, 1) 0ms 1 both',
			},
			keyframes: {
				'ping-0': {
					'0%': {
						transform: 'scale(1)',
						opacity: '0.5',
						// opacity: '0.8',
					},
					'70%': {
						transform: 'scale(1.7)',
						// opacity: '0.2',
					},
					'100%': {
						transform: 'scale(1.7)',
						opacity: '0',
					},
				},
				'pulse-1': {
					'0%, 100%': {
						opacity: '0.3',
						// opacity: '0.6',
					},
					'50%': {
						opacity: '0.05',
						// opacity: '0.2',
					},
				},
				'pulse-2': {
					'0%, 100%': {
						opacity: '0.3',
						// opacity: '0.6',
					},
					'50%': {
						opacity: '0.05',
						// opacity: '0.2',
					},
				},
				'pulse-skel': {
					'0%, 100%': {
						opacity: '1',
						// opacity: '0.6',
					},
					'50%': {
						opacity: '0.6',
						// opacity: '0.2',
					},
				},
				'pulse-out': {
					'0%, 20%, 40%, 60%, 80%': {
						opacity: '1',
					},
					'10%, 30%, 50%, 70%, 90%': {
						opacity: '0.4',
					},
					'100%': {
						opacity: '0',
					},
				},
				'fade-in': {
					from: {
						opacity: '0',
					},
					to: {
						opacity: '1',
					},
				},
				'fade-in-scale': {
					'0%': {
						transform: 'scale(0.7)',
						opacity: '0',
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1',
					},
				},
				'fade-in-scale-slide': {
					'0%': {
						transform: 'translateY(100px)',
						scale: '0.5',
						opacity: '0',
					},
					'100%': {
						transform: 'translateY(0px)',
						scale: '1',
						opacity: '1',
					},
				},
			},
		},
	},
	plugins: [],
}
export default config
