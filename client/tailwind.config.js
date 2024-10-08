/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontSize: {
                '1.4rem': '1.4rem',
            },
            borderColor: {
                custom: '#d9b89efc',
            },
            width: {
                1200: '1200px',
            },
            backgroundColor: {
                primary: '#F5F5F5',
                secondary1: '#1266dd',
                secondary2: '#f73859',
                'overlay-30': 'rgba(0,0,0,0.3)',
                'overlay-70': 'rgba(0,0,0,0.7)',
            },
            animation: {
                'slide-right': 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
            },
            keyframes: {
                ' slide-right ': {
                    '0%': {
                        '-webkit-transform': 'translateX(0)',
                        transform: 'translateX(0)',
                    },
                    '100%': {
                        '-webkit-transform': 'translateX(100px)',
                        transform: 'translateX(100px)',
                    },
                },
            },
        },
    },
    variants: {
        extend: {
            lineClamp: ['responsive', 'hover'],
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.line-clamp-1': {
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: '1',
                },
                '.line-clamp-2': {
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: '2',
                },
            };

            addUtilities(newUtilities, ['responsive', 'hover']);
        },
    ],
};
