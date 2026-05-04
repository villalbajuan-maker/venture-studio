# Red Ride Ticket

Red Ride Ticket is a venture execution studio built around a simple thesis: ventures do not fail because ideas are scarce; they fail when intention is not converted into structure.

This repository contains the public site for Red Ride Ticket and documents the venture as a product, brand system, and execution model. It is part of Juan Villalba's venture studio portfolio.

## What This Project Is

Red Ride Ticket is positioned as an execution studio for ventures that need structure, not generic advice. The site presents the company through an editorial, cinematic narrative: each section acts like a chapter in the operating philosophy of the studio.

The project is both:

- A live brand and company site for Red Ride Ticket.
- A portfolio case study showing brand strategy, product positioning, frontend execution, motion design, and deployment readiness.

## Product Thesis

Most ventures fail in the space between intention and structure. Red Ride Ticket exists for founders and teams who need disciplined execution architecture: clearer decisions, stronger operating systems, and a path from concept to something that can sustain pressure.

The site intentionally avoids a conventional SaaS or agency landing page. It behaves more like an institutional artifact: direct, selective, and high-conviction.

## Venture Model

Red Ride Ticket is designed around the idea of technical sovereignty. The studio targets founders and CEOs who are stuck in technical friction: teams spending months in stealth mode, paying for code without business outcomes, losing control of their own architecture, or hesitating before a major build because the system could be wrong from the beginning.

The entry offer is Structural Validation: a focused diagnostic that stress-tests the venture before deeper construction begins. It evaluates feasibility, economic logic, micro-frictions, high-pain gaps, and the minimum path to invoicing.

The commercial ladder documented in the source material is:

- Structural Validation: USD 2,500 entry diagnostic.
- Construction Sprint: execution phase for building the validated venture asset.
- Retainer + Equity: longer-term technical arm for ventures with exceptional alignment.

The project's language is intentionally selective: Red Ride Ticket is framed as an entry gate, not an open agency. It does not sell developer hours or generic technical auditing. It sells certainty, architectural logic, speed to invoicing, and reduced technical dependence.

## Built With

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- GSAP ScrollTrigger
- Lenis smooth scrolling
- Netlify deployment support

## Experience Design

The interface uses a sequential narrative structure instead of navigation-heavy browsing. Large masked-video typography, constrained color, ticket artifacts, and editorial copy create a visual identity around admission, pressure, selectivity, and construction.

Key experience decisions:

- Full-screen narrative sections to create momentum.
- Alternating black, bone, and signal-red chapters for rhythm.
- Masked video typography for motion without distracting from the message.
- Brand ticket artifacts as recurring proof of identity.
- A single final conversion path through email.

## Technical Notes

The application is intentionally compact:

- `app/page.tsx` defines the full narrative sequence as structured section data.
- `components/narrative-section.tsx` renders reusable editorial and masked-video sections.
- `components/masked-video-word.tsx` generates dynamic SVG masks for video-filled typography.
- `components/brand-ticket-artifact.tsx` renders reusable branded ticket assets.
- `components/lenis-provider.tsx` initializes smooth scrolling on the client.

This keeps the content system easy to evolve while preserving a distinctive visual language.

## Source Material

Strategic project documents are archived in [docs/source-material](/Users/juanvillalba/Documents/venture-studio/docs/source-material). The catalog lives in [docs/README.md](/Users/juanvillalba/Documents/venture-studio/docs/README.md).

Included material:

- Venture Execution Studio deck.
- Venture Structural Integrity deck.
- Price Integrity decks for venture execution and venture studio positioning.
- Internal sales playbook.
- Infrastructure optimization proposal.

These documents establish the venture's offer architecture, sales motion, pricing logic, brand vocabulary, and operational infrastructure thinking.

## Local Development

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

## Portfolio Framing

This project demonstrates:

- Brand positioning for a venture execution company.
- Offer design and go-to-market framing for a selective execution studio.
- ICP definition around founders experiencing technical friction.
- Pricing and value architecture for validation, construction, and long-term partnership.
- Narrative systems for high-conviction landing experiences.
- React component architecture for editorial sections.
- Motion and scroll interaction with GSAP and Lenis.
- Asset-led identity using custom ticket visuals and video loops.
- Deployment-oriented Next.js configuration.

## Open Questions

The next layer of documentation should clarify:

- What outcomes or case studies can be shown publicly?
- Should the GitHub portfolio frame this as a company, a case study, or both?
- What is the preferred canonical name: Red Ride Ticket or Red Ray Ticket?
- Which source documents should remain public in GitHub and which should become private/internal-only?
