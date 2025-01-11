// import { glob } from 'astro/loaders'
// import { defineCollection, z } from 'astro:content'
// //import { rssSchema } from '@astrojs/rss';

// const blog = defineCollection({
// 	// Load Markdown and MDX files in the `src/content/blog/` directory.
// 	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
// 	// Type-check frontmatter using a schema
// 	schema: z.object({
// 		title: z.string(),
// 		description: z.string(),
// 		// Transform string to Date object
// 		pubDate: z.coerce.date(),
// 		updatedDate: z.coerce.date().optional(),
// 		heroImage: z.string().optional()
// 	})
// })

// // const blog = defineCollection({
// // 	schema: rssSchema,
// // });

// export const collections = { blog }
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		author: z.string().optional(),
		image: z.object({
			src: z.string(),
			alt: z.string()
		}).optional(),
		tags: z.array(z.string()).default([]),
		lang: z.string().default('fi'),
		draft: z.boolean().default(false)
	})
})

export const collections = { blog }