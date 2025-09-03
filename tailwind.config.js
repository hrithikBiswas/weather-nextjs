/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        screens: {
            sm: '576px',
            md: '868px',
            lg: '1024px',
            xl: '1200px',
            '2xl': '1400px',
            '3xl': '1500px',
        },
    },
    darkMode: 'class',
    plugins: [],
};
