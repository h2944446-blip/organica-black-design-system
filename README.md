# Organica Black — Design System

> Nature & More

Design tokens, brand assets, and framework integrations for the Organica Black brand, generated from the official brand guidelines. Organica Black delivers high-grade products and services to everyone living in Dubai and nearby locations.

**Preview:** open [`docs/index.html`](docs/index.html) in a browser (or enable GitHub Pages on the `docs/` folder).

## What's inside

```
├── tokens/tokens.json      # Source of truth (W3C Design Tokens format)
├── css/variables.css       # CSS custom properties (--ob-*)
├── scss/_tokens.scss       # SCSS variables ($ob-*)
├── js/tokens.js            # ES module export
├── tailwind.preset.js      # Tailwind CSS preset
├── assets/logo/            # Logo files (transparent PNG)
└── docs/                   # Live style-guide page + logo usage rules
```

## Colors

| Token | Hex | RGB | HSL | Role |
|---|---|---|---|---|
| `purple.500` | `#7045af` | 112, 69, 175 | 264, 43%, 48% | **Primary** brand purple |
| `purple.400` | `#8b65c2` | 139, 101, 194 | 264, 43%, 58% | Light purple / subtle |
| `purple.600` | `#59378a` | 89, 55, 138 | 264, 43%, 38% | Dark purple / hover |
| `neutral.black` | `#111111` | 17, 17, 17 | 0, 0%, 7% | Brand black / text |
| `neutral.gray-900` | `#2a2a2a` | 42, 42, 42 | 0, 0%, 17% | Dark gray / secondary text |
| `neutral.white` | `#ffffff` | 255, 255, 255 | 0, 0%, 100% | Background / text on purple |

Any colors outside this palette must be used with discretion.

## Typography

| Role | Typeface | Source |
|---|---|---|
| Headings / display | **Alata** | [Google Fonts](https://fonts.google.com/specimen/Alata) |
| Body copy | **Roboto Slab** | [Google Fonts](https://fonts.google.com/specimen/Roboto+Slab) |

```html
<link href="https://fonts.googleapis.com/css2?family=Alata&family=Roboto+Slab:wght@400;500&display=swap" rel="stylesheet">
```

Both fonts are used at Regular (400) weight in the brand guidelines — hierarchy comes from size and color, not weight. Guideline headers are set in Alata, uppercase, in primary purple. The `NATURE & MORE` tagline style uses wide letter-spacing (`0.3em`).

## Logo

Files in [`assets/logo/`](assets/logo/), extracted from the brand guidelines with transparency preserved:

| File | Use on |
|---|---|
| `organica-logo-full-color.png` | **White backgrounds only** (primary colorway) |
| `organica-logo-white.png` | Photos and colored backgrounds |
| `organica-logo-black.png` | Light colored backgrounds |
| `organica-mark-purple.png` / `-white` / `-black` | Standalone tree mark (favicons, avatars, watermarks) |

**Rules** (see [`docs/logo-usage.md`](docs/logo-usage.md)):
- Use the full-color logo only on white backgrounds
- On a photo or colored background, use the white or black version
- Never rotate, distort, or partially cover the logo
- Never place the logo directly on a photo

> The PNGs are the raster exports embedded in the guideline PDF. For print or large-format work, replace them with vector (SVG/EPS) exports from the original design source when available.

## Usage

### Plain CSS

```html
<link rel="stylesheet" href="css/variables.css">
```
```css
.button {
  background: var(--ob-color-primary);
  color: var(--ob-color-text-on-primary);
  font-family: var(--ob-font-heading);
}
.button:hover { background: var(--ob-color-primary-hover); }
```

### SCSS

```scss
@use 'scss/tokens' as *;

.card { border: 1px solid $ob-color-primary-subtle; }
```

### JavaScript / React

```js
import tokens, { semantic } from './js/tokens.js';

const style = { backgroundColor: semantic.primary };
```

### Tailwind CSS

```js
// tailwind.config.js
module.exports = {
  presets: [require('./organica-black-design-system/tailwind.preset')],
  content: ['./src/**/*.{html,js,jsx,tsx}'],
};
```
```html
<h1 class="font-heading text-brand">Organica Black</h1>
<button class="bg-brand hover:bg-brand-dark text-white">Shop</button>
<span class="tracking-caps uppercase text-brand-gray">Nature &amp; More</span>
```

## Pushing to GitHub

```bash
cd organica-black-design-system
git init
git add .
git commit -m "Add Organica Black design system"
git branch -M main
git remote add origin https://github.com/<your-username>/organica-black-design-system.git
git push -u origin main
```

To publish the style guide, enable **GitHub Pages** → deploy from branch → `/docs` folder.

## Editing tokens

`tokens/tokens.json` is the single source of truth. If you change a value there, mirror it in `css/`, `scss/`, `js/`, and `tailwind.preset.js` — or wire up [Style Dictionary](https://styledictionary.com/) to generate those files automatically.
