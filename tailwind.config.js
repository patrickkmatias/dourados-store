/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './node_modules/flowbite-react/**/*.js',
        './styles/*.css',
        './pages/**/*.{js,ts,jsx,tsx}',
        './pages/**.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        transitionDuration: {
            DEFAULT: '300ms',
        },
        extend: {
            fontFamily: {
                yellowtail: ['Yellowtail'],
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'dourados-golden': '#e8ae4a',
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};
