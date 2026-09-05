/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        paper: '#FFFFFF',
        editorial: {
          50: '#f7f7f7',
          100: '#ededed',
          200: '#d9d9d9',
          300: '#bfbfbf',
          400: '#999999',
          500: '#737373',
          600: '#525252',
          700: '#383838',
          800: '#1f1f1f',
          900: '#0a0a0a',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Libre Baskerville"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'editorial-wide': '0.15em',
        'editorial-wider': '0.25em',
      },
      maxWidth: {
        'editorial': '1200px',
        'article': '680px',
      },
      animation: {
        'ticker': 'ticker 40s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
