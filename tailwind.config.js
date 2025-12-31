/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Light Mode (Beach/Earthy)
                'cream': '#FDFBF7',
                'charcoal': '#1A1A1A',
                'beige': '#D4C4B7',
                'brown': '#4A3B32',
                'light-brown': '#8C7B70',

                // Dark Mode (Neon/Black)
                'neon-green': '#00ff88',
                'dark-bg': '#0a0a0a',
                'card-dark': '#171717',
                'gray-text': '#a3a3a3',
            },
            animation: {
                scroll: 'scroll 20s linear infinite',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            }
        },
    },
    plugins: [],
}
