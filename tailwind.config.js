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
                // Light Mode (White/Black/Coffee/Brown)
                'l-bg': '#FFFFFF',
                'l-card': '#F9F6F2',
                'l-text-primary': '#000000',
                'l-text-secondary': '#2C1B0E', // Dark Coffee
                'l-accent': '#6F4E37',        // Coffee Brown
                'l-accent-hover': '#4E342E',
                'l-border': '#D2B48C',        // Light Brown
                'brown': '#6F4E37',           // Alias for compatibility

                // Dark Mode (Neon Blue)
                'primary-cyan': '#00F0FF',
                'dark-bg': '#0a0a0a',
                'card-dark': '#171717',
                'gray-text': '#a3a3a3',
            },
            animation: {
                scroll: 'scroll 20s linear infinite',
                'bounce-x': 'bounce-x 1s infinite',
                'blink-green': 'blink-green 4s infinite ease-in-out',
                'blink': 'blink 4s infinite ease-in-out',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'bounce-x': {
                    '0%, 100%': {
                        transform: 'translateX(0)',
                        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
                    },
                    '50%': {
                        transform: 'translateX(25%)',
                        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
                    },
                },
                'blink-green': {
                    '0%, 100%': { opacity: '0.2', color: '#00F0FF' },
                    '50%': { opacity: '1', color: '#00F0FF' }
                },
                'blink': {
                    '0%, 100%': { opacity: '0.2' },
                    '50%': { opacity: '1' }
                }
            }
        },
    },
    plugins: [],
}
