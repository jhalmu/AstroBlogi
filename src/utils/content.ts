import type { CollectionEntry } from 'astro:content'
import type { Page } from '../types/content'

export function sortBlogPosts(posts: CollectionEntry<'blog'>[]): CollectionEntry<'blog'>[] {
	return posts.sort((a, b) => {
		// Primary: Compare frontmatter dates
		const dateA = new Date(a.data.pubDate || new Date())
		const dateB = new Date(b.data.pubDate || new Date())
		const dateComparison = dateB.getTime() - dateA.getTime()

		if (dateComparison === 0) {
			// Extract dates from filenames (format: YYYY-MM-DD or YYYYMMDD)
			const fileDateA = a.id.match(/\d{4}[-]?\d{2}[-]?\d{2}/)?.[0]
			const fileDateB = b.id.match(/\d{4}[-]?\d{2}[-]?\d{2}/)?.[0]

			if (fileDateA && fileDateB) {
				const fileDateCompare = new Date(fileDateB).getTime() - new Date(fileDateA).getTime()
				if (fileDateCompare !== 0) return fileDateCompare
			}

			// If dates equal or no dates in filename, compare filename numbers
			const numA = parseInt(a.id.match(/^\d+/)?.[0] || '0')
			const numB = parseInt(b.id.match(/^\d+/)?.[0] || '0')
			return numB - numA
		}

		return dateComparison
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
