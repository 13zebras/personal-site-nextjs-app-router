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
      fontSize: {
        'xxs': '0.65rem',
        'md': '0.94rem',
      },
      colors: {
        slate: {
          800: '#1e293b',
          850: '#151c32',
          900: '#0f172a',
          920: '#0a1224',
        },
        gray: {
          800: '#1f2937',
          850: '#19222e',
          900: '#111827',
          920: '#080b18',
        },
        zinc: {
          300: "#d4d4d8",
          350: "#b7b7bb",
          370: "#b1b1b8",
          400: "#a1a1aa",
          450: '#8a8a93',
          850: '#202024',
          910: '#131316',
          920: '#0e0e13',
          950: '#070709',
          959: '#070709/95',
        },
        neutral: {
          920: '#101010',
        },
        red: {
          550: '#ff0022',
        },
        pulse: {
          cyan: '#00aacc',
          lime: '#44bb00',
          red: '#bb0028',
          gray: '#111c26',
        }
      },
      animation: {
        'ping-0': 'ping-0 5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-1': 'pulse-1 2.9s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-2': 'pulse-2 4.3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-10': 'fade-in 1s ease-in 0s',
        'fade-in-05': 'fade-in 0.5s ease-in 0s',
        'fade-in-025': 'fade-in 0.25s ease-in 0s',
      },
      keyframes: {
        'ping-0': {
          '0%': {
            transform: 'scale(1)',
            opacity: '0.4',
          },
          '90%, 100%': {
            transform: 'scale(4.2)',
            opacity: '0',
          },
        },
        'pulse-1': {
          '0%, 100%': {
            opacity: '0.4',
          },
          '50%': {
            opacity: '0.1',
          },
        },
        'pulse-2': {
          '0%, 100%': {
            opacity: '0.4',
          },
          '50%': {
            opacity: '0.1',
          },
        },
        'fade-in': {
          'from': {
            opacity: '0',
          },
          'to': {
            opacity: '1',
          },
        }
      },
    },
  },
  plugins: [],
}
export default config
