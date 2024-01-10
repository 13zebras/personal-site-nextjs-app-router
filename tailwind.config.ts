import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xxs': '360px',
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
      wide: '0.05em',
      wider: '0.1em',
      widest: '0.25em',
      widexl: '0.60em',
    },
    extend: {
      colors: {
        zinc: {
          845: '#202027',
          850: '#202023',
          910: '#131316',
          920: '#0e0e10',
          930: '#070708',
        },
        neutral: {
          910: '#121212',
          920: '#0e0e0e',
        },
        stone: {
          910: '#161412',
          920: '#110f0e',
          930: '#080807',
        },
      },
      animation: {
        'ping-15': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-30': 'ping-30 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-40': 'ping-40 4s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        'ping-20': {
          '75%, 100%': {
            transform: 'scale(4)',
            opacity: '0',
          },
        },
        'ping-40': {
          '75%, 100%': {
            transform: 'scale(4.5)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
