/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'jet': '#2a2a2b',
                'onyx': '#202022',
                'eerie-black': '#1a1a1c',
                'smoky-black': '#121212',
                'gold-crayola': '#ffdb70',
                'vegas-gold': '#c2b280',
                'light-gray': '#d6d6d6',
                'light-gray-70': 'rgba(214, 214, 214, 0.7)',
                'glass-border': 'rgba(255, 255, 255, 0.08)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'sidebar': '40px 0 0 0 rgba(0,0,0,0.5)',
                '3xl': '0 30px 60px -10px rgba(0, 0, 0, 0.5)',
                'glow': '0 0 20px rgba(255, 219, 112, 0.15)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
