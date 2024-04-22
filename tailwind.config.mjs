import defaultTheme from 'tailwindcss/defaultTheme'
const { nextui } = require("@nextui-org/react");


/** @type {import('tailwindcss').Config} */
export default {
	content: [
				'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
				"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
				"./node_modules/flowbite/**/*.js"
			],
	
	theme: {
		extend: {
			fontFamily: {
				sans : ['Inder', ...defaultTheme.fontFamily.sans]
			},
		},
	},
	darkMode: "class",
	plugins: [nextui()]
}
