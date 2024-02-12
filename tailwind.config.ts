import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide0: '0.05em',
      wide1: '0.1em',
      wide15: '0.15em',
      wide2: '0.2em',
      wide3: '0.35em',
      wide4: '0.4em',
      wide6: '0.60em',
    },
    extend: {
      colors: {
        slate: {
          920: '#0a1224',
        },
        gray: {
          920: '#080b18',
        },
        zinc: {
          850: '#202024',
          910: '#131316',
          920: '#0e0e13',
          950: '#070709',
        },
        neutral: {
          920: '#0d0d0d',
        },
        red: {
          550: '#ff0022',
        },
        pulse: {
          cyan: '#00576d',
          cyan2: '#00a0b0',
          lime: '#234b00',
          lime2: '#60aa00',
          red: '#560015',
          red2: '#b60032',
          gray: '#111c26',
          gray2: '#283544',
        }
      },
      animation: {
        'ping-0': 'ping-0 6s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-25': 'ping-25 6s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-35': 'ping-35 5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-40': 'ping-40 5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-45': 'ping-45 4s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-4is': 'ping-4is 4s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-4isR': 'ping-4isR 4.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-25': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-31': 'pulse 3.1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-37': 'pulse 3.7s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'ping-0': {
          '85%, 100%': {
            transform: 'scale(4.5)',
            opacity: '0',
          },
        },
        'ping-25': {
          '75%, 100%': {
            transform: 'scale(1.9)',
            opacity: '0',
          },
        },
        'ping-35': {
          '85%, 100%': {
            transform: 'scale(3.5)',
            opacity: '0',
          },
        },
        'ping-40': {
          '85%, 100%': {
            transform: 'scale(4.5)',
            opacity: '0',
          },
        },
        'ping-45': {
          '85%, 100%': {
            transform: 'scale(4.5)',
            opacity: '0.3',
          },
        },
        'ping-4is': {
          '85%, 100%': {
            transform: 'scale(2.5)',
            opacity: '0.3',
          },
        },
        'ping-4isR': {
          '0%': {
            transform: 'scale(0.3)',
            opacity: '0.8',
          },
          '40%': {
            opacity: '1.0',
          },
          '60%': {
            opacity: '0.6',
          },
          '85%': {
            transform: 'scale(1)',
            opacity: '0.1',
          },
          '100% ': {
            transform: 'scale(1)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
