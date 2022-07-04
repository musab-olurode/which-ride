const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				CeraPro: ['Cera-Pro-Black', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				text: '#232C35',
				primary: '#5C1A8D',
			},
			animation: {
				'slide-from-right': 'slideFromRight 1s',
				'slide-from-right-2': 'slideFromRight 2s',
				'slide-from-right-3': 'slideFromRight 3s',
				'slide-from-left': 'slideFromLeft 1s',
				'slide-from-left-2': 'slideFromLeft 2s',
				'pulse-once': 'pulse 1s',
			},
			keyframes: {
				slideFromRight: {
					'0%': {
						transform: 'translateX(18rem)',
					},
					'100%': {
						transform: 'translateX(0)',
					},
				},
				slideFromLeft: {
					'0%': {
						transform: 'translateX(-18rem)',
					},
					'100%': {
						transform: 'translateX(0)',
					},
				},
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light'],
	},
};
