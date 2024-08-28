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
