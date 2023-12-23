/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                light: {
                    principal: '#F1F0E8',
                    primary: {
                        DEFAULT: '#EEE0C9',
                        50: '#FDFBF8',
                        100: '#F8F2E8',
                        200: '#EEE0C9',
                        300: '#E1C89E',
                        400: '#D3AF74',
                        500: '#C69749',
                        600: '#A37933',
                        700: '#795926',
                        800: '#4E3A19',
                        900: '#231A0B',
                        950: '#0E0A04'
                    },
                    secondary: {
                        DEFAULT: '#ADC4CE',
                        50: '#D3E0E5',
                        100: '#C7D6DD',
                        200: '#ADC4CE',//default
                        300: '#8AABB9',
                        400: '#6791A4',
                        500: '#4F7484',
                        600: '#3A5561',
                        700: '#25363E',
                        800: '#10171B',
                        900: '#000000',
                        950: '#000000'
                    },
                },
                dark: {
                    principal: '#121A2E',
                    primary: {
                        DEFAULT: '#577AAC',
                        50: '#D2DBE9',
                        100: '#C4D0E2',
                        200: '#A9BBD4',
                        300: '#8EA5C7',
                        400: '#7290B9',
                        500: '#577AAC',//default
                        600: '#435F88',
                        700: '#314562',
                        800: '#1E2B3D',
                        900: '#0B1017',
                        950: '#020304'
                    },
                    secondary: {
                        DEFAULT: '#8D578F',
                        50: '#DAC3DB',
                        100: '#D2B6D3',
                        200: '#C29DC3',
                        300: '#B284B4',
                        400: '#A26AA5',
                        500: '#8D578F',
                        600: '#6B426C',
                        700: '#482D49',
                        800: '#261726',
                        900: '#030203',
                        950: '#000000'
                    }
                },
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                serif: ['Poppins', 'serif'],
            },
            fontSize: {
                'xxs':
                    '.65rem',
                '2xs':
                    '.8rem',
                '3xs':
                    '.825rem',
                '4xs':
                    '.850rem'
            },
        },
        screens: {
            'sm':
                '640px',
            'md':
                '768px',
            'lg':
                '1024px',
            'xl':
                '1441px',
            '2xl':
                '1921px',
        },
    },
    variants:
        {
            extend: {
                backgroundColor: ['active'],
            }
        }
    ,
    plugins: [
        require('tailwind-scrollbar')({nocompatible: true})
    ],
    important:
        true,
}
