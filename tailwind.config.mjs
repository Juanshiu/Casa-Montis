const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
                'primary': '#ff7b00',
                'text-light': '#EFE7D2', // Color claro para textos
                'bg-main': '#0A0B0A',  // Color oscuro para textos
            },
			fontFamily: {
				'titulo': ["Forum", "sans-serif"],
				'texto': ["Satoshi", "sans-serif"],
			},
		},
		animation: {
			"text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
		},
		keyframes: {
			"text-reveal": {
				"0%": {
					transform: "translate(0, 100%)",
				},
				"100%": {
					transform: "translate(0, 0)",
				},
			},
		},
	},
	plugins: [
		require('tailwindcss-animated'),
		addVariablesForColors
	],
}