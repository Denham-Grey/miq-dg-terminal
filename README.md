# Market IQ Limited

Single-page company website for Market IQ Limited, built with Next.js (App Router), TypeScript, and plain CSS. The site is fully static: there is no backend, database, forms, or client-side persistence.

## Terminal access URL

The D+G Terminal link is driven by `NEXT_PUBLIC_TERMINAL_URL`. Set it before building:

```bash
NEXT_PUBLIC_TERMINAL_URL=https://your-terminal-url.example npm run build
```

- When the variable is present, the CTA renders as an anchor labelled "Click to Access Terminal ↗".
- When it is absent or empty, the CTA renders as a disabled button.
- The value is inlined into the static export at build time; no URL is bundled by default.

## Commands

```bash
npm install
npm run dev        # local development at http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run build      # static export to out/
npx serve out      # preview the exported site
```

## Assets

Brand artwork lives in `public/` (`mark.svg`, `mark-motion.gif`, `wordmark.png`, `logo-poster.webp`). Section copy and contact details live in `content/site.ts`.
