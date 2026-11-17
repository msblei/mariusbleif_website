/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		// Dark is the stock daisyUI theme; light is the cream palette of
		// teaching.mariusbleif.com.
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes")["light"],
					"base-100": "#f6f0e4",
					"base-200": "#ebe2d1",
					"base-300": "#ded3bf",
					"base-content": "#4a443a",
				},
			},
			"dark",
		],
		darkTheme: "dark", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}
