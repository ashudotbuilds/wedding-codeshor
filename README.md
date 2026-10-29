# Codeshor Wedding Showcase

A responsive single-page landing page for the Bandhan, Milan and Vivah designs. Uses actual screenshots of the supplied live sites. All new code lives in this project; the Bandhan and Milan repositories are untouched.

## Run

Run `npm run dev`, then open http://127.0.0.1:4185. No installation or build is required. `npm run check` checks JavaScript syntax. Deploy `dist/` as a static website. On Vercel, use Other as the framework, no build command and `dist` as the output directory.

## Contact configuration

Edit `dist/config.js`: set the real WhatsApp number in international digits (no plus sign), set `displayNumber`, and set `isDemoContact: false`. Until then, the clearly marked demo contact opens a preview notice with a copyable enquiry, rather than messaging a made-up number. The selected design is included in each enquiry.

Support hours and turnaround guarantees are deliberately not promised until confirmed. Feature availability varies by design. Enquiries go through WhatsApp; no form submissions or guest information are stored by this site.

## Files

- `dist/index.html`: page content, links and accessible dialog.
- `dist/styles.css`: responsive ivory and burgundy visual system.
- `dist/app.js`: design selection, WhatsApp enquiry and demo contact handling.
- `dist/assets/`: captured site previews and favicon.
- `scripts/serve.mjs`: dependency-free local preview server.

