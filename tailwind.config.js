/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'mainPurple': '#413543',
				'accentPurple': '#8843E7',
				'accentGreen': '#E9E486',
				'black': '#000000',
				'white': '#ffffff',
				'neutral': '#F6F6F6',
				'body': '#2D2727',
				'link': '#8843E7',
			},
			fontFamily: {
				sans: ['nimbus-sans', 'sans-serif'],
				serif: ['larken', 'serif'],
				condensed: ['bebas-neue-pro', 'sans-serif'],
			},
			container: {
				center: true,
				padding: '5rem',
			},
		},
	},
	plugins: [],
}
