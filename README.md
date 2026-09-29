# Mahammad Rashik — Portfolio

Personal portfolio for a Frontend Web Developer, built with **React + Vite + Tailwind CSS v4** and
**Motion** for scroll animations.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Where to edit content

Everything editable lives in one file: **`src/data/portfolio.js`**

| Key       | Drives                                                |
| --------- | ----------------------------------------------------- |
| `profile` | Name, role, location, email, social links, bio, stats |
| `skills`  | Toolkit cards + animated proficiency bars              |
| `projects`| Project grid, filter chips, live/code links            |
| `timeline`| Journey timeline (education & experience)              |
| `services`| "What I do" cards in the About section                 |

## Things to replace

1. **Projects** — `src/data/portfolio.js` ships with six sample projects. Swap in your real ones and
   set `link` / `code` URLs (leave `''` to hide those buttons).
2. **Social links** — the GitHub/LinkedIn URLs in `profile.links` currently point to generic homepages.
3. **Résumé** — drop a PDF in `public/` and set `profile.links.resume` to `/your-file.pdf`.
4. **Meta tags** — `index.html` has the title, description and Open Graph tags.
5. **Favicon** — `public/favicon.svg` (already branded with your initials).

## Structure

```
src/
  components/   Navbar, Hero, Marquee, About, Skills, Work, Journey, Contact, Footer
  data/         portfolio.js  ← all content
  hooks/        useTheme (dark/light), useScroll (scroll spy + progress)
  index.css     Tailwind theme tokens, design system, custom utilities
```

## Design system

- **Fonts** — Space Grotesk (display), Inter (body), JetBrains Mono (code accents)
- **Colours** — `ink` (neutrals), `brand` (indigo), `aqua`, `flare` (warm accent)
- **Themes** — dark by default, light mode available, saved in `localStorage` (`mr-theme`)
- **Motion** — all animations respect `prefers-reduced-motion`
