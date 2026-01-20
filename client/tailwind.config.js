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
                    50: '#fdf8ec',
                    100: '#f9edd0',
                    200: '#f2da9d',
                    300: '#ebc063',
                    400: '#e4a535',
                    500: '#d08620',
                    600: '#b4661a',
                    700: '#944b19',
                    800: '#7a3d1b',
                    900: '#66341a',
                    950: '#3b1a0b',
                },
                secondary: {
                    50: '#f2f9f2',
                    100: '#deefdf',
                    200: '#bedeba',
                    300: '#92c589',
                    400: '#64a754',
                    500: '#458b38',
                    600: '#347129',
                    700: '#2c5923',
                    800: '#264720',
                    900: '#213c1d',
                    950: '#0e200c',
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
