# Memex Terminal

A static Astro personal knowledge terminal designed for GitHub Pages.

## Development

Install Node.js 20+ and run:

```sh
npm install
npm run dev
```

Resources live in `src/data/library.json`; project cards live in `src/data/projects.json`. Add a resume PDF at `public/resume.pdf`.

## Deployment

Run `npm run build` and publish the generated `dist/` directory to GitHub Pages. Set Astro's `site` and `base` options in `astro.config.mjs` if deploying under a repository subpath.
