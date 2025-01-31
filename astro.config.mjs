// @ts-check
import { defineConfig, envField } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
import node from '@astrojs/node'
import sitemap from '@astrojs/sitemap'
import remarkToc from 'remark-toc'

const tocOptions = {
  tight: true,
  heading: 'Sisällysluettelo'
};

export default defineConfig({
	output: 'static',
	markdown: {
		shikiConfig: {
			theme: 'github-dark-dimmed',
			wrap: true,
		},
    remarkPlugins: [[remarkToc, tocOptions]]
  },
	site: 'https://juhahalmu.net',
	env: {
		schema: {
			API_TOKEN: envField.string({ context: "server", access: "secret" })
		}
	},
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'load',
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