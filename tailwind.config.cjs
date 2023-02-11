/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'razzmatazz': { DEFAULT: '#E50A7F', 50: '#FBABD6', 100: '#FA98CC', 200: '#F971B9', 300: '#F74AA6', 400: '#F52293', 500: '#E50A7F', 600: '#AF0861', 700: '#790543', 800: '#440326', 900: '#0E0108' },
				'cerulean': { DEFAULT: '#00A0E3', 50: '#9CE2FF', 100: '#87DCFF', 200: '#5ED0FF', 300: '#36C4FF', 400: '#0DB8FF', 500: '#00A0E3', 600: '#0078AB', 700: '#005173', 800: '#00293B', 900: '#000203' },
				'navy-blue': { DEFAULT: '#000671', 50: '#2A35FF', 100: '#1522FF', 200: '#000CEB', 300: '#000AC3', 400: '#00089A', 500: '#000671', 600: '#000339', 700: '#000001', 800: '#000000', 900: '#000000' },
			}
		},
	},
	plugins: [],
}
