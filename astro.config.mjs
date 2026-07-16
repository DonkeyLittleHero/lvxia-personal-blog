import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isUserSite = Boolean(owner && repository === `${owner}.github.io`);
const inferredBase = repository && !isUserSite ? `/${repository}` : '/';

export default defineConfig({
  site: process.env.SITE_URL || (owner ? `https://${owner}.github.io` : 'https://example.com'),
  base: process.env.BASE_PATH || inferredBase,
  output: 'static',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
      wrap: true,
    },
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
      chunkSizeWarningLimit: 700,
    },
  },
});
