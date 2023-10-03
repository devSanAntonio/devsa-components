/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                spursTurq: '#00b2a9',
                spursPink: '#ef426f',
                spursOrange: '#ff8200',
                centroGreen: '#ACDB6B',
                centroYellow: '#FACB11',
                centroBlue: '#1DB7BA',
                centroPink: '#F13F6D',
                centroOrange: '#F89225',
                cosaWhite: '#EEEEEE',
                cosaGrey: '#333333',
            },
        },
    },
    plugins: [],
};
