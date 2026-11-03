# wedding-codeshor

A simple one-page collection built with Vite, React and Tailwind CSS. Showcases Bandhan, Milan and Vivah with real screenshots, live demos and a design-specific WhatsApp enquiry flow.

## Development

Use Node.js 22.12+ (Node.js 24 recommended).

```sh
npm install
npm run dev
```

Open the URL printed by Vite (default http://127.0.0.1:4185).

```sh
npm run build   # Production files in dist/
npm run preview # Preview the production build
```

## Structure

```text
src/
  assets/
    brand/           # Final brown Codeshor Weddings logo
    previews/        # Screenshots of the three live wedding designs
  components/        # Header, hero, design collection, features and contact
  config/contact.js  # Business contact details and demo mode
  data/              # Design and feature content
  utils/enquiry.js   # Enquiry text and WhatsApp URL helpers
  App.jsx            # Page composition and shared selection state
  main.jsx           # React entry point
  index.css          # Tailwind import, theme and shared button styles
index.html
vite.config.js
```

## Enable real enquiries

Copy `.env.example` to `.env.local` and set `VITE_WHATSAPP_NUMBER` (international digits only) and `VITE_CONTACT_EMAIL`. Restart Vite after changing environment variables. WhatsApp opens directly with the selected design in the message; the email link opens a prefilled email. Without a configured number, the contact preview is shown instead.

The `.env.local` file is ignored by Git. These `VITE_` values are public business contact information included in the browser bundle; never put secrets in them. Set the same environment variables in your hosting provider before building for production.

No backend, UI framework or animation library. Feature availability differs by design; support hours and turnaround guarantees need confirmation before being advertised.

## Deployment

For Vercel, select Vite, use `npm run build` and output directory `dist`. Build output is generated, not maintained as source. Run `npm ci` for a reproducible installation from the committed lockfile.

The repository contains only this showcase. Live demo links point to the separate Bandhan, Milan and Vivah websites.
