/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
			50: '#F8FBFC',
			100: '#EAF1F6',
			200: '#CDDEEB',
			300: '#B0CCDF',
			400: '#93B9D3',
			500: '#76A6C7', //Base color
			600: '#4E8CB7',
			700: '#3B6E91',
			800: '#2B506A',
			900: '#1B3242',
        }
      },
		fontSize: {
			'xxs' : '.65rem',
			'2xs' : '.8rem',
			'3xs' : '.825rem',
			'4xs' : '.850rem'
		},
    },
	  screens: {
		  'sm': '640px',
		  'md': '768px',
		  'lg': '1024px',
		  'xl': '1441px',
		  '2xl': '1921px',
	  },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
  important: true,
}
