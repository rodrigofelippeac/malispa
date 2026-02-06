/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#311303',
          light: '#5a3825',
          dark: '#1a0a01',
        },
        secondary: {
          DEFAULT: '#e6efee',
          light: '#f5faf9',
          dark: '#d0e5e2',
        },
        // Cores da identidade Mali Spa
        gold: {
          DEFAULT: '#C9A050',
          light: '#D4B46A',
          dark: '#B08C3C',
        },
        brown: {
          DEFAULT: '#5C4033',
          light: '#8B7355',
          dark: '#3D2A22',
        },
        beige: {
          DEFAULT: '#F5F0E8',
          light: '#FAF7F2',
          dark: '#E8DFD3',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.3s ease-out',
        'fade-in': 'fade-in 0.4s ease-in',
        'scale-in': 'scale-in 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
