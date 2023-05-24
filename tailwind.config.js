/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontFamily: {
      sans: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: {
        25: '#EEEEEE',
        50: '#DEDEDE',
        100: '#C7C7C7',
        200: '#9F9F9F',
        300: '#797979',
        400: '#585858',
        500: '#484848',
        600: '#353535',
        700: '#2C2C2C',
        800: '#202020',
        900: '#1B1B1B',
        1000: '#141414'
      },
      blue: {
        25: '#F7FAFF',
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
        1000: '#172D6A'
      }
    },
    letterSpacing: {
      tightest: '-0.05em',
      tighter: '-0.025em',
      tight: '-0.0125em',
      normal: '0em',
      wide: '0.0125em',
      wider: '0.025em',
      widest: '0.05em'
    },
    lineHeight: {
      none: '1',
      tightest: '1.05',
      tighter: '1.15',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem'
    },
    zIndex: {
      '-1': '-1',
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      100: 100,
      1000: 1000,
      10000: 10000
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px'
    },
    extend: {
      keyframes: {
        'scale-in': {
          '0%': { opacity: 0, transform: 'scale(0)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        },
        'slide-down': {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        'scale-in': 'scale-in 0.2s ease-in-out',
        'slide-down': 'slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
      }
    }
  },
  plugins: []
}
