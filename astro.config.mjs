// @ts-check
import { defineConfig, envField } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import svelte from '@astrojs/svelte'

import node from '@astrojs/node'

import sitemap from '@astrojs/sitemap'


// https://astro.build/config
export default defineConfig({
	site: 'https://juhahalmu.net',
	env: {
		schema: {
			GITHUB_TOKEN: envField.string({ context: "server", access: "secret" }),
		}
	},
	prefetch: {
		prefetchAll: true
	},
	integrations: [
		tailwind({
			nesting: true
		}),
		svelte(),
		sitemap()
	],

	adapter: node({
		mode: 'standalone'
	})
})