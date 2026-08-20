/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070B14',
        panel: '#0D1424',
        sky: '#3EB8F0',
        skysoft: '#6ED0FF',
        paper: '#F3F5F8',
        muted: '#8B94A7',
      },
      fontFamily: {
        display: ['Archivo', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
}
