import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig, withBase } from '../config';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());

  return rss({
    title: siteConfig.fullTitle,
    description: siteConfig.description,
    site: new URL(import.meta.env.BASE_URL, context.site).toString(),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: withBase(`/blog/${post.id}/`),
      categories: [post.data.category, ...post.data.tags],
    })),
  });
}
