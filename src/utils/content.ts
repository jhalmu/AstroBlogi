import type { CollectionEntry } from 'astro:content'
import type { Page } from '../types/content'

export function sortBlogPosts(posts: CollectionEntry<'blog'>[]): CollectionEntry<'blog'>[] {
	return posts.sort((a, b) => {
		const dateA = new Date(a.data.pubDate || new Date())
		const dateB = new Date(b.data.pubDate || new Date())
		return dateB.getTime() - dateA.getTime()
	})
}

export function getRelatedPosts(
	currentPost: CollectionEntry<'blog'>,
	allPosts: CollectionEntry<'blog'>[],
	limit = 3
): CollectionEntry<'blog'>[] {
	return allPosts.filter((post) => post.id !== currentPost.id).slice(0, limit)
}

export function validatePage(
	page: CollectionEntry<'blog'>
): page is CollectionEntry<'blog'> & { data: Page } {
	const { data } = page

	// Check required fields
	if (!data.title) {
		console.error(`Page validation failed for ${page.id}:`, { data })
		return false
	}

	return true
}
