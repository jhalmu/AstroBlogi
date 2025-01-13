import { defineCollection, z, reference } from 'astro:content'
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
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
		draft: z.boolean().default(false),
		relatedPosts: z.array(reference('blog')).optional()	
	})
})

export const collections = { blog }