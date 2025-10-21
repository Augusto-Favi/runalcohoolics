/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'vintage-cream': '#f5e6d3',
        'vintage-red': '#d32f2f',
        'vintage-dark-red': '#b71c1c',
        'vintage-brown': '#8b4513',
        'vintage-gold': '#ffd700',
        'vintage-black': '#000000',
        'vintage-white': '#ffffff',
      },
      fontFamily: {
        'bangers': ['Bangers', 'cursive'],
        'luckiest': ['Luckiest Guy', 'cursive'],
        'marker': ['Permanent Marker', 'cursive'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 0.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        }
      },
      boxShadow: {
        'vintage': '8px 8px 0 rgba(0,0,0,0.3)',
        'vintage-sm': '4px 4px 0 rgba(0,0,0,0.3)',
        'vintage-btn': '6px 6px 0 #000',
      },
    },
  },
  plugins: [],
}
