import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import sanitizeHtml from 'sanitize-html'
import MarkdownIt from 'markdown-it'

const parser = new MarkdownIt()

export function getPostSlug(slug)
{
	if (!slug) return '';
	// Remove .md extension if it exists
	return slug.replace(/\.md$/, '');
}

export async function GET()
{
	try
	{
		const posts = await getCollection('blog')

		if (!posts?.length)
		{
			throw new Error('No blog posts found')
		}

		const baseUrl = import.meta.env.DEV ?
			'http://localhost:4321' :
			'https://juhahalmu.net';

		return rss({
			stylesheet: `${baseUrl}/rss.xsl`,
			title: 'Juhan Blogi',
			description: 'juhahalmu.net blogi',
			site: baseUrl,
			items: posts.map((post) => ({
				title: post.data.title,
				description: post.data.description,
				pubDate: post.data.pubDate,
				link: `${baseUrl}/blog/${getPostSlug(post.slug)}`,
				content: sanitizeHtml(parser.render(post.body || '')),
			})),
			xmlns: {
				atom: 'http://www.w3.org/2005/Atom',
				content: 'http://purl.org/rss/1.0/modules/content/'
			},
			customData: `
        <language>fi</language>
        <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
      `.trim()
		})
	} catch (error)
	{
		console.error('RSS Error:', error)
		return new Response('Feed generation failed', { status: 500 })
	}
}