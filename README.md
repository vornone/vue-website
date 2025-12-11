# GRS Enterprise Vue Website

Production-ready Vue 3 + Vite project configured for deployment to GitHub Pages under the project path `vue-website`.

## Prerequisites
- Node.js 18+ (recommended)
- npm 9+

## Install
- `npm install`

## Develop
- `npm run dev`
- Open the URL printed by the dev server. With the configured base, you can also open `http://localhost:5173/vue-website/`.

## Type Check & Lint
- `npm run type-check`
- `npm run lint`

## Build
- `npm run build`

## Preview (production-like)
- `npm run preview`
- Open the URL printed (typically `http://localhost:4173/vue-website/`).

## Deploy to GitHub Pages
This repo is configured for project pages at `https://<username>.github.io/<repo>/`.

1. Ensure the base in `vite.config.ts` matches your repository name:
   - `base: '/vue-website/'`
2. Build the site:
   - `npm run build`
3. Publish the `dist` folder to the `gh-pages` branch:
   - `npm run deploy`
4. In GitHub → Settings → Pages, set:
   - Source: `gh-pages` branch, `/` (root)
5. Visit your site:
   - `https://<username>.github.io/vue-website/#/`

## URL Examples (Hash History)
- Home: `https://<username>.github.io/vue-website/#/`
- Services: `https://<username>.github.io/vue-website/#/services`
- Our Company: `https://<username>.github.io/vue-website/#/our-company`
- Partners: `https://<username>.github.io/vue-website/#/partners`
- Contact: `https://<username>.github.io/vue-website/#/contact`

## Troubleshooting
- 404 on GitHub Pages:
  - Use hash history URLs (`#/...`) which do not require server rewrites.
  - Confirm `vite.config.ts` `base` matches your repo name.
  - Rebuild and redeploy; Pages may serve cached assets briefly.
- 404 with `npx serve dist`:
  - This static server does not mount under the configured base. Use `npm run preview` instead.

## Notes
- Router uses hash history and `importMode: 'sync'` for reliable static hosting.
- Favicon is served from `public/grs-logo.png` and referenced in `index.html` as `/grs-logo.png`.

