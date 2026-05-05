/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#eef8f4',
          100: '#d6eee6',
          200: '#b0ddcf',
          300: '#7fc4b0',
          400: '#4fa98f',
          500: '#2f8f78',
          600: '#207765',
          700: '#1d6154',
          800: '#1b4e45',
          900: '#153f39',
        },
        orange: {
          50: '#f3fbe8',
          100: '#e2f5c7',
          200: '#c8eb92',
          300: '#a8dc58',
          400: '#8ccc2f',
          500: '#6fb20e',
          600: '#568d09',
          700: '#426b0b',
          800: '#37550e',
          900: '#2f4810',
        },
      },
    },
  },
  plugins: [],
}; 
