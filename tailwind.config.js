/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#f0daa2',
          secondary: '#8956c8',
          accent: '#00BBB4',
          neutral: '#fefefe',
          'neutral-focus': '#54575f', // inbetween neutral and content (so gray)
          'neutral-content': '#000', // readable against neutral

          '.text-inactive': { color: '#54575F' },
          '.text-readable': { color: '#000' }, // looks good against darkest base bg (base-300)
          '.offwhite': { 'background-color': '#F9FAFA' },
          '.bg-accent2': { 'background-color': '#f0eefc' },
          '.bg-accent3': { 'background-color': '#E7F8C9' },

          'base-content': '#000', // default text color
          'base-100': '#f7faff',
          'base-200': '#d9dee3',
          'base-300': '#818c96',

          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
      {
        dark: {
          primary: '#f0daa2',
          secondary: '#a984d7',
          accent: '#00BBB4',
          neutral: '#ECECED',
          'neutral-focus': '#DADBDC', // inbetween neutral and neutral-content
          'neutral-content': '#000', // readable against neutral

          '.text-inactive': { color: '#434445' },
          '.text-readable': { color: '#fefefe' }, // looks good against darkest base bg (base-300)
          '.offwhite': { 'background-color': '#DDDEE1' },
          '.bg-accent2': { 'background-color': '#A9ACC7' },
          '.bg-accent3': { 'background-color': '#FEF0EB' },

          'base-content': '#000', // default text-color
          'base-100': '#133c55',
          'base-200': '#545d64',
          'base-300': '#818c96',

          info: '#4c7cdc',
          success: '#27dd73',
          warning: '#f7a94b',
          error: '#E4725E',
        },
      },
    ],
  },
  theme: {
    fontFamily: {
      nav: ['Inter', 'sans-serif'],
      header: ['Lato', 'sans-serif'],
      header2: ['Noto Sans', 'sans-serif'],
      sans: ['Roboto', 'serif'],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('daisyui')],
}
