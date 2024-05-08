// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app:{
		head: {
			title: "Soraia Novaes Portfolio"
		},
	},
	devtools: { enabled: true },

	alias: {
		assets: "/<rootDir>/assets",
	},
	colorMode: {
		preference: 'light'
	  },

	css: ["~/assets/css/main.css"],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		},
	},

	modules: ["@nuxt/content", "nuxt-icon", "@nuxt/ui", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
});