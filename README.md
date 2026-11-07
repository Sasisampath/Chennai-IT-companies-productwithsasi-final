# Chennai IT Companies Directory — Part 1 + Part 2 (productwithsasi)

Static, mobile-first directory: plain HTML/CSS/JS, no build step, no dependencies.

- `companies.js` — all companies (`part: 1` original, `part: 2` new). Unique `id` required. Count is computed dynamically.
- `index.html`, `style.css`, `script.js` — page, theme, search/filter/render logic.
- Role areas are discovery areas, not confirmed vacancies. Recruiter links are LinkedIn searches, not verified contacts.

## Run locally
```bash
python3 -m http.server 5600
```

## Deploy (new, separate Vercel project)
Import this repo in Vercel → Framework Preset **Other**, no build command, root directory `/`.

After the production URL is known, add `<link rel="canonical">` and absolute `og:url` / `og:image` / `twitter:image` URLs in `index.html` (omitted for now so no URL is guessed).
