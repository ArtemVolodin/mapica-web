# Mapica — Marketing Website

Premium AI startup marketing site for **Mapica**, an AI-native mobile product studio.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion
- Lucide Icons

## Getting started

```bash
npm install
cp .env.example .env.local
# Add your OPENAI_API_KEY to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Mapica AI Assistant

Click the **Mapica AI** card in the hero (or the floating button on mobile) to open the chat panel.

- **With `OPENAI_API_KEY`:** real-time GPT responses via `/api/chat`
- **Without API key:** intelligent fallback answers from the built-in knowledge base

Optional env vars:

```
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o-mini   # or gpt-4o
```

## Build

```bash
npm run build
npm start
```

## Project structure

```
src/
├── app/              # Layout, page, global styles
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Page sections (Hero, Products, Booking, etc.)
│   ├── ui/           # Reusable UI primitives
│   └── visuals/      # Phone mockups, orbs, particles
└── lib/              # Data & utilities
```

## Sections

1. Navbar — sticky glass navigation
2. Hero — cinematic intro with phone mockups
3. Stats — believable capability metrics
4. Products — 6 AI product showcase cards
5. Services — 6 solution cards
6. Process — 4-step timeline
7. Stack — tech ecosystem grid
8. Vision — founder quote with particles
9. Booking — calendar + contact form
10. Journal — build-in-public cards
11. CTA — final conversion block
12. Footer — multi-column links
