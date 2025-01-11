//import type { CollectionEntry } from 'astro:content';
import { defineCollection, z } from 'astro:content'

// Blog schema
export const blogSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.string().transform((str) => new Date(str)),
	updatedDate: z
		.string()
		.transform((str) => new Date(str))
		.optional(),
	author: z.string().default('Juha Halmu'),
	image: z.string(),
	excludeTags: z.array(z.string()).default([]),
	preferredColors: z.array(z.string()).default(['blue', 'indigo']),
	orientation: z.string().default('landscape'),
	minWidth: z.number().default(1200),
	minHeight: z.number().default(600),
	heroImage: z.string().optional(),
	//overlayOpacity: z.number().optional(),
	overlayOpacity: z.number().default(50),
	rounded: z.string().default('rounded-xl'),
	lang: z.enum(['en', 'fi']),
	draft: z.boolean().default(false)
})

// Pages schema
export const pagesSchema = z.object({
	title: z.string(),
	description: z.string(),
	image: z.object({
		src: z.string(),
		alt: z.string()
	}),
	lang: z.enum(['en', 'fi'])
})

// Documentation schema
export const docsSchema = z.object({
	title: z.string(),
	description: z.string(),
	lastUpdated: z.string().transform((str) => new Date(str))
})

// Template schema
export const templateSchema = z.object({
	title: z.string(),
	description: z.string(),
	type: z.string(),
	version: z.string()
})

// Infer types from schemas
export type BlogPost = z.infer<typeof blogSchema>
export type Page = z.infer<typeof pagesSchema>
export type Doc = z.infer<typeof docsSchema>
export type Template = z.infer<typeof templateSchema>

// Image type used across the site
export interface ImageMetadata {
	src: string
	alt: string
	width?: number
	height?: number
	format?: string
}

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		updatedDate: z.date().optional(),
		heroImage: z.string().optional(),
		author: z.string().optional(),
		lang: z.string().optional()
	})
})

const pages = defineCollection({
	schema: z.object({
		title: z.string(),
		excerpt: z.string(),
		image: z.string()
	})
})

export const collections = { blog, pages }
