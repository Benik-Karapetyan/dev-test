/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'progress-circular-rotate': {
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        'progress-circular-dash': {
          '0%': {
            strokeDasharray: '1, 200',
            strokeDashoffset: 0,
          },
          '50%': {
            strokeDasharray: '100, 200',
            strokeDashoffset: '-15px',
          },
          '100%': {
            strokeDasharray: '100, 200',
            strokeDashoffset: '-124px',
          },
        },
      },
      animation: {
        'progress-circular-rotate':
          'progress-circular-rotate 1.4s linear infinite',
        'progress-circular-dash':
          'progress-circular-dash 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
