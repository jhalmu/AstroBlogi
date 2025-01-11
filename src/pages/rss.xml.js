// import rss from '@astrojs/rss';
// import { getCollection } from 'astro:content';
// import sanitizeHtml from 'sanitize-html';
// import MarkdownIt from 'markdown-it';

// const parser = new MarkdownIt();

// export async function GET(context)
// {
// 	try
// 	{
// 		// Debug logging
// 		console.log('Starting RSS generation...');

// 		const posts = await getCollection('blog');
// 		console.log(`Found ${posts.length} posts`);

// 		if (!posts?.length)
// 		{
// 			throw new Error('No blog posts found');
// 		}

// 		if (!context.site)
// 		{
// 			throw new Error('Site URL not configured');
// 		}

// 		const siteURL = new URL(context.site);
// 		console.log('Site URL:', siteURL.toString());

// 		const feed = rss({
// 			title: 'Juhan Blogi',
// 			description: 'juhahalmu.net blogi',
// 			site: context.site,
// 			items: posts.map((post) =>
// 			{
// 				console.log('Processing post:', post.slug);
// 				return {
// 					title: post.data.title,
// 					description: post.data.description,
// 					pubDate: post.data.pubDate,
// 					link: `${siteURL.toString()}blog/${post.slug}/`,
// 					content: sanitizeHtml(parser.render(post.body || '')),
// 				};
// 			}),
// 			xmlns: {
// 				atom: 'http://www.w3.org/2005/Atom',
// 			},
// 			customData: `
//         <language>fi</language>
//         <atom:link href="${siteURL.toString()}rss.xml" rel="self" type="application/rss+xml"/>
//       `.trim()
// 		});

// 		console.log('Feed generated successfully');
// 		return feed;

// 	} catch (error)
// 	{
// 		console.error('RSS Error:', error);
// 		throw error;
// 	}
// }
import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import sanitizeHtml from 'sanitize-html'
import MarkdownIt from 'markdown-it'

const parser = new MarkdownIt()

// Removed TypeScript interface declaration

export function getPostSlug(slug)
{
	// If slug doesn't end with .md, add it
	return slug.endsWith('.md') ? slug : `${slug}.md`
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
			'http://localhost:4321':
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