# Project Specs — Andrea Mastretta personal website

## What it is, who it's for
A one-page personal website for Andrea Mastretta. Audience: VCs, founders, recruiters, and people Andrea meets professionally who want a quick read on who she is and what she's built.

## Tech stack
- TypeScript + Next.js 15 (App Router)
- Tailwind CSS 3
- GSAP for entrance / scroll animations
- No backend, no auth, no database — fully static
- Hosted on Vercel

## Pages and flow
- Single page at `/` (public, no auth)
- Sections (in order, top to bottom):
  - Hero — name, tagline, current role
  - Built (01) — project cards: YUCP, Matchatretta, Yodoc, Bici-Mix
  - Experience (02) — Centerview, McKinsey, Romulus, Yale
  - Reading (03) — three books, dark section
  - Contact (04) — email + LinkedIn
  - Footer
- Sticky black nav with anchor links (Built, Experience, Reading, Say hi)
- Bici-Mix card opens a modal with an animated SVG sketch (spin button)

## Data
All copy lives in [lib/data.ts](lib/data.ts) (`PROJECTS`, `EXPERIENCE`, `READING`). No DB.

## Third-party services
None. Google Fonts (Lora + Inter) over CDN. No Stripe / Supabase / analytics yet.

## "Done" looks like
- Page renders pixel-faithful to the Claude Design handoff (Hero / Built / Experience / Reading / Contact / Footer)
- Bici-Mix modal opens and the spin button animates the wheels
- `npm run build` succeeds with no errors
- `npm run dev` starts cleanly with no console errors
- Looks correct on desktop and on mobile (single column at < 600px)
