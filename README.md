# Geum Cheon Indo Company Profile

Geum Cheon Indo's marketing site highlights fabrication capabilities, flagship projects, certifications, and contact channels in Bahasa Indonesia, English, and Korean. The experience is powered by Vite + React 19 and styled with Tailwind CSS for fast iteration and polished visuals.

## Key Features

- **Multilingual UX** backed by a language context with browser persistence (ID, EN, KR).
- **Modern landing flow** covering hero messaging, value pillars, primary services, and company story.
- **Project storytelling** through `/work` listings, `/work/:slug` detail pages, and a rich photo showcase grid.
- **Trust signals** including certifications carousel, client logo wall, and partner case studies.
- **Lead capture** via WhatsApp quick actions, contact section, and a dedicated project quote CTA.
- **Responsive design** built with Tailwind utilities, motion hooks, and glassmorphism accents.

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | React 19 + Vite |
| Styling | Tailwind CSS 3 with custom theme tokens |
| State | React Context (LanguageProvider) |
| Animations & UI | Framer Motion, Swiper, Lucide icons |
| Tooling | ESLint, PostCSS, Vite build pipeline |

## Project Structure

```
compro_geumcheon/
├─ public/                    # Static assets served as-is
├─ src/
│  ├─ assets/                 # Optimised images, logos, galleries
│  ├─ components/             # Section components (Hero, PrimaryServicesSection, PhotoShowcase, etc.)
│  ├─ context/                # LanguageProvider and useLanguage hook
│  ├─ pages/                  # Routed views (Home, Work, ProjectQuote, service details)
│  ├─ utils/                  # Shared helpers (e.g. WhatsApp link builder)
│  ├─ App.jsx                 # Router configuration and page layout shell
│  └─ main.jsx                # Application entry point
├─ tailwind.config.js         # Theme extensions and design tokens
├─ vite.config.js             # Vite configuration
└─ package.json               # Scripts and dependencies
```

## Getting Started

```bash
# install dependencies
npm install

# run the dev server (http://localhost:5173)
npm run dev

# lint the codebase
npm run lint

# build for production (outputs to dist/)
npm run build

# preview the built assets locally
npm run preview
```

## Customising Content

- Update hero messaging, values, and service copy inside `src/components/*.jsx` (Hero, ValuePillars, PrimaryServicesSection, etc.).
- Curate project galleries and captions in `src/components/PhotoShowcase.jsx` and the `src/assets/web/Project/` directory.
- Manage certifications and client logos within their respective section components.
- Configure WhatsApp links via `src/utils/whatsapp.js` and `src/components/WhatsAppButton.jsx`.
- Adjust available languages or navigation labels in `src/context/LanguageContext.jsx` and `src/components/Navbar.jsx`.

## Deployment

Running `npm run build` creates a static bundle in `dist/`. Deploy the folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, or self-hosted Nginx/Apache). For client-side routing support, configure rewrites so every route (including `/work/:slug`) resolves to `index.html`.

## License

Distributed under the MIT License. Refer to `LICENSE` for full terms and respect Geum Cheon Indo branding assets when reusing the codebase.
