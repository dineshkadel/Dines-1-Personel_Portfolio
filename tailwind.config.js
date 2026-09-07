/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        bg2: 'rgb(var(--bg2) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        sky: 'rgb(var(--sky) / <alpha-value>)',
        'sky-light': '#7dd3fc',
        'sky-dark': '#0ea5e9',
        green: 'rgb(var(--green) / <alpha-value>)',
        'green-light': '#6ee7b7',
        'green-dark': '#10b981',
        text: 'rgb(var(--text) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        blink: 'blink 2s infinite',
      },
      keyframes: {
        blink: {
          '0%,100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(0.75)' },
        }
      }
    },
  },
  plugins: [],
}