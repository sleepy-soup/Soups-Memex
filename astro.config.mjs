import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];

export default defineConfig({
  site: 'https://sleepy-soup.github.io',
  // GitHub Actions supplies the repository name during deployment. Locally,
  // the site continues to run at the root of localhost.
  base: repository ? `/${repository}` : '/',
  integrations: [tailwind({ applyBaseStyles: false })],
});
