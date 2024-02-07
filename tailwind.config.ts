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
      wide0: '0.05em',
      wide1: '0.1em',
      wide2: '0.25em',
      wide3: '0.35em',
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
        }
      },
      animation: {
        'ping-25': 'ping-25 6s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-35': 'ping-35 3.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-40': 'ping-40 4s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-45': 'ping-45 4s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-25': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-30': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-35': 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'ping-25': {
          '75%, 100%': {
            transform: 'scale(1.9)',
            opacity: '0',
          },
        },
        'ping-35': {
          '75%, 100%': {
            transform: 'scale(3.5)',
            opacity: '0',
          },
        },
        'ping-40': {
          '75%, 100%': {
            transform: 'scale(4.0)',
            opacity: '0',
          },
        },
        'ping-45': {
          '85%, 100%': {
            transform: 'scale(4.5)',
            opacity: '0.3',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
