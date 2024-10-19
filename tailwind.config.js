/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sora: ['Sora', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
				publicSans: ['Public Sans', 'sans-serif'],
				Outfit: ['Outfit', 'sans-serif'],
				Kumbh: ['Kumbh Sans", sans-serif'],
			},
			colors: {
				mediumGray: '#5B7083',
				primaryBlue: '#0258FF',
				primaryGreen: '#11B833',
				bg: '#f5f7fa',
				textColor: '#0A0A0A',
			},
			content: {
				quote: '',
			},
		},
	},
	plugins: [],
};
