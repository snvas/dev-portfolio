// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
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

	css: ["~/assets/css/main.css"],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		},
	},

	modules: ["@nuxt/content", "nuxt-icon"],
});