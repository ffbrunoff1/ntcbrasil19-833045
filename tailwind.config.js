/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5CADDC', // Blue from logo
        secondary: '#3a8bb8', // Darker blue for contrast
        accent: '#F7FAFC', // Very light gray for backgrounds
        'dark-text': '#1a202c', // Dark gray for text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 15px rgba(92, 173, 220, 0.4)',
      },
      animation: {
        'gradient-text': 'gradient-text 5s ease infinite',
      },
      keyframes: {
        'gradient-text': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};
