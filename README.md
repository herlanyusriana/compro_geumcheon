# Geum Cheon Indo Company Profile

A modern single-page experience for showcasing Geum Cheon Indo's industrial capabilities. Built with React 19, Vite, and Tailwind CSS, the site highlights precision metal manufacturing services, flagship projects, and partner network in three languages (Bahasa Indonesia, English, and Korean).

## Highlights

- 🌐 **Multilingual content** driven by a shared language context (id, en, ko).
- 🧭 **Smooth navigation** with React Router (/, /work, /work/:slug, /partners, /contact).
- 🧩 **Reusable sections** for hero, services, industries, projects, insights, certifications, and more.
- 🪄 **Motion & polish** using Framer Motion, Swiper carousels, Lucide icons, and glassmorphism accents.
- 🤝 **Lead capture & outreach** via contact form section plus floating WhatsApp shortcut.
- 📱 **Fully responsive** layouts powered by Tailwind utility classes.

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | React 19 + Vite |
| Styling | Tailwind CSS 3, custom gradients, CSS Modules |
| State | React Context (language switcher) |
| Animations | Framer Motion, Swiper |
| Icons | lucide-react |

## Project Structure

`
compro/
├── public/              # Static assets served as-is
├── src/
│   ├── assets/          # Images, logos, illustration files
│   ├── components/      # Section-level components (Hero, Services, etc.)
│   ├── context/         # LanguageContext with provider & hook
│   ├── pages/           # Route views (Home, Work, Partners, Contact)
│   ├── App.jsx          # Router + layout shell
│   ├── main.jsx         # App entrypoint
│   └── index.css        # Tailwind layer & base styles
├── tailwind.config.js   # Tailwind theme tokens & extensions
├── vite.config.js       # Vite build configuration
└── package.json         # Scripts & dependencies
`

## Getting Started

`ash
# install dependencies
npm install

# start dev server (http://localhost:5173 by default)
npm run dev

# run ESLint
npm run lint

# create production build (outputs to /dist)
npm run build

# preview production build
npm run preview
`

## Customising Content

- Change hero/tagline language data in src/components/Hero.jsx.
- Update service/project/partner entries inside their respective section components under src/components/ and src/pages/.
- Adjust navigation routes or copy in src/components/Navbar.jsx.
- Edit contact CTA and phone numbers/links in WhatsAppButton.jsx and ContactSection.jsx.

## Deployment

The Vite build generates a static site in the dist/ folder. Deploy to any static host:

- Copy dist/ to Netlify, Vercel, GitHub Pages, Cloudflare Pages, or your own Nginx/Apache.
- Ensure server rewrites all routes (/work/:slug, etc.) to index.html (single-page app behaviour).

## License

The repository ships with the MIT license (see LICENSE). Review branding requirements before reuse.
