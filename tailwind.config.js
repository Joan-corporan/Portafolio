/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      bgfimages:{
        bgimage: "https://res.cloudinary.com/dfxpgwzls/image/upload/v1695525825/fondo-portaF_dzylha.webp"
      },
      container: {
        padding: {
          DEFAULT: '15px',
        },
      },
     /*  backgroundImage: {
        
        circleStar: 'url("/image-bg/circle-star.svg")',
        
      }, */
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
