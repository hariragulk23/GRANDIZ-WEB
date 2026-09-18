# GRANDIZ

Purely teak. Timeless luxury.

An enquiry-led website for Grandiz Timbers and Lumbers Private Limited. Green, gold and ivory art direction, scroll-driven storytelling, a woodworking film, eleven product pages, business and personal enquiries, and delivery across India. No checkout.

## Run locally

Requires Node.js 22 or newer. No package installation or API keys are needed.

```sh
node scripts/build.mjs
node scripts/check.mjs
node scripts/serve.mjs
```

Open http://127.0.0.1:4173. The local server intentionally cannot submit enquiries.

## Deploy to Netlify when approved

1. Import `hariragulk23/GRANDIZ-WEB` from GitHub, using branch `main`.
2. Use the build command `node scripts/build.mjs` and publish directory `dist`. These are already set in `netlify.toml`.
3. Enable **Forms → Enable form detection**, then deploy/redeploy. Confirm that `grandiz-enquiry` appears in the Forms dashboard.
4. Send an approved test enquiry on the deployed site. Verify its arrival in Forms, the thank-you page, and any configured notification email. Configure the business recipient in Netlify; no recipient address has been supplied yet.
5. Review the site before connecting `grandiztimbers.com`. Keep the domain at GoDaddy if preferred. Make domain/DNS changes only with the owner's approval and preserve existing mail records.

Netlify Forms must be enabled and verified before promoting the site. The static form has a honeypot, required fields and an AJAX submission with visible errors. There is no external form credential in this repository.

Official references: [Forms setup](https://docs.netlify.com/manage/forms/setup/) and [form submissions](https://docs.netlify.com/manage/forms/submissions/).

Set `SITE_URL` to the final HTTPS origin when the domain is decided. Otherwise the build uses Netlify's `URL` variable. A sitemap and canonical tags are generated when an origin is available. Local builds intentionally omit them.

## Editing

- `src/data.mjs`: business information, locations, products and credited media sources.
- `scripts/build.mjs`: page templates, metadata, enquiry form and sitemap.
- `public/assets/site.css`: responsive visual design and animations.
- `public/assets/site.js`: scroll scenes, navigation, motion controls, lazy video and form handling.

The site is built as static HTML, CSS and JavaScript. It uses no database or runtime framework. Scroll scenes use native browser APIs. Reduced-motion settings, a motion toggle, keyboard navigation, video pause controls and mobile layouts are included.

## Content and media

The logo is an optimized copy of the image supplied by Grandiz. Business name, GSTIN and business addresses were transcribed from its supplied GST certificate. The certificate and personal details are not included in this repository. Address listings do not assert that any particular location is a factory or showroom.

Photographs and the woodworking film are served from Pexels, under its [licence](https://www.pexels.com/license/). Credit and source links are recorded in `src/data.mjs` and shown at `/imagery/`. They are illustrative stock material, not Grandiz facilities or a confirmed product catalogue. Google Fonts supplies Cormorant Garamond and Manrope. External media needs an internet connection; the film has a still-image fallback and manual controls.

No unsupported rankings, certification or warranty claims are published. Add such claims only after the owner supplies supporting details. Public phone, email and actual factory/product photography can be added when supplied.

## Validation

`node scripts/check.mjs` checks generated routes/assets, page headings, product options, business identity and form detection markup. Browser checks cover desktop/mobile layout, imagery and film playback, enquiry preselection, local form validation, navigation and reduced motion. Live submission delivery still requires an approved Netlify deployment.
